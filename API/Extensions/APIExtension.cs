using SahaiCart.DataAccess.Data;
using Microsoft.EntityFrameworkCore;
using SahaiCart.API.Settings;

namespace SahaiCart.API.Extensions
{
    public static class APIExtension
    {
        public static void AddServices(this WebApplicationBuilder builder)
        {

            builder.Services.AddControllers();
            builder.Services.AddEndpointsApiExplorer();
            builder.Services.AddSwaggerGen();

            builder.Logging.ClearProviders();

            ApiHelper.ApiConfiguration = builder.Configuration.GetSection(ApiConfiguration.Key).Get<ApiConfiguration>();
            builder.Services.AddDbContext<ModelContext>(options => options.UseSqlite(ApiHelper.GetDefaultConnection(), b => b.MigrationsAssembly("SahaiCart.API")));

            ServiceProvider serviceProvider = builder.Services.BuildServiceProvider();
            ModelContext modelContext = serviceProvider.GetService<ModelContext>();
            modelContext.Database.Migrate();
            DbInitializer.Initialize(modelContext);
        }

        public static void AddMiddleWare(this WebApplication app)
        {
            if (app.Environment.IsDevelopment())
            {
                app.UseSwagger();
                app.UseSwaggerUI();
            }
            app.UseHttpsRedirection();
            app.UseAuthorization();
            app.MapControllers();
            app.Run();
        }
    }
}
