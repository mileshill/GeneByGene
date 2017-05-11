using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Threading.Tasks;
using Gene.Models;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;




namespace Gene.Controllers
{
    //[EnableCors("AllowSpecificOrigin")]
    [Route("api/[controller]")]
    public class ValuesController : Controller
    {

        private ApplicationDBContext _ctx = new ApplicationDBContext();

        [HttpGet]
        [Route("[Action]")]
        public IEnumerable<User> Users()
        {
            var result =from u in _ctx.Users
                select new User {
                    UserId = u.UserId,
                    FirstName = u.FirstName,
                    LastName = u.LastName
                };

            return result;
        }

        [HttpGet]
        [Route("[Action]")]
        public IEnumerable<StatusItem> Statuses()
        {
            var result =from s in _ctx.Statuses
                select new StatusItem {
                    StatusId = s.StatusId,
                    Status = s.Status
                };

            return result;
        }

        [HttpGet]
        [Route("[Action]/{id:range(-1,3)}")]
        public IEnumerable<ReturnedSample> Samples(int id=-1)
        {
            var result = from samp in _ctx.Samples
                join stat in _ctx.Statuses
                    on samp.StatusId equals stat.StatusId
                join user in _ctx.Users
                    on samp.CreatedBy equals user.UserId
                select new ReturnedSample {
                    CreatedAt = samp.CreatedAt,
                    Barcode = samp.Barcode,
                    Status = stat.Status,
                    StatusId = stat.StatusId,
                    LastName = user.LastName,
                    FirstName = user.FirstName
                };

            if(id != -1)
            {
                result = from s in result
                    where s.StatusId.Equals(id)
                    select s;
            }

            return result;
        }

        [HttpGet]
        [RouteAttribute("[Action]/{chars}")]
        public IEnumerable<ReturnedSample> Users(string chars)
        {
            chars = chars.ToLower();
            var samples = from samp in Samples()
                where (samp.FirstName + samp.LastName).ToLower().Contains(chars) 
                select samp;

            return samples;
        }
        
    
        // POST api/values
        [HttpPost]
        [Route("[Action]")]
        public System.Net.Http.HttpResponseMessage Samples([FromBody]  Sample sample)
        {
        
            int lowStatus = _ctx.Samples.Min(s => s.StatusId);
            int highStatus = _ctx.Samples.Max(s => s.StatusId);
            int lowUser = _ctx.Users.Min(u => u.UserId);
            int highUser = _ctx.Users.Max(u => u.UserId);

            Console.WriteLine("Low Stat:{0} High Stat:{1} Provided:{2}",lowStatus, highStatus, sample.StatusId);
            // verify valid status
            if(sample.StatusId < lowStatus || sample.StatusId > highStatus)
            {
                return new HttpResponseMessage(HttpStatusCode.NotModified);
            }

            if(sample.CreatedBy < lowUser || sample.CreatedBy > highUser)
            {
                return new HttpResponseMessage(HttpStatusCode.NotModified);
            }

            DateTime submitTime = DateTime.Now.Date;
            var newSample = new Sample {
                CreatedAt=submitTime,
                Barcode=sample.Barcode,
                CreatedBy=sample.CreatedBy,
                StatusId=sample.StatusId
            };

            _ctx.Samples.Add(newSample);
            _ctx.SaveChanges();

            return new HttpResponseMessage(HttpStatusCode.OK);
        }

    
    }
}
