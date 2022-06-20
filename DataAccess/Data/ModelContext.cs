﻿using Microsoft.EntityFrameworkCore;
using SahaiCart.Models.Entities;

namespace DataAccess.Data
{
    public class ModelContext : DbContext
    {
        public ModelContext(DbContextOptions dbContextOptions) : base(dbContextOptions)
        {

        }

        public DbSet<Product> Products { get; set; }
    }
}
