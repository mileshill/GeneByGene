using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Gene.Models
{
    public class Sample
    {
       [Key]
       [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
       public int SampleId {get; set;}
       
       public string Barcode {get; set;}
       

       [DataType(DataType.Date)]
       [DisplayFormat(DataFormatString="{0:yyyy-MM-dd}", ApplyFormatInEditMode=true)]
       public DateTime CreatedAt {get; set;}

       public int CreatedBy {get; set;}
       public int StatusId {get; set;}
       

    }
}