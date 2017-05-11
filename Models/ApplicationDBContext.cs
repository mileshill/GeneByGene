using Microsoft.EntityFrameworkCore;

namespace Gene.Models
{
    public class ApplicationDBContext : DbContext
    {

        public DbSet<Sample> Samples {get; set;}
        public DbSet<User> Users {get; set;}

        public DbSet<StatusItem> Statuses {get; set;}

        public ApplicationDBContext() : base() { }
        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseSqlite("Filename=./gene.db");
        }
    }
}