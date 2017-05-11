using System.ComponentModel.DataAnnotations;

namespace Gene.Models
{
    public class StatusItem
    {
        [Key]
        public int StatusId { get; set; }
        public string Status { get; set; }
    }
}