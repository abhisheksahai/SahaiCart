using Microsoft.EntityFrameworkCore;
using SahaiCart.API.Settings;
using SahaiCart.DataAccess.Data;

namespace SahaiCart.API.Extensions
{
    public static class APIExtension
    {
        public static void AddServices(this WebApplicationBuilder builder)
        {

            builder.Services.AddControllers();
            builder.Services.AddEndpointsApiExplorer();
            builder.Services.AddSwaggerGen();

            builder.Services.AddCors();

            builder.Logging.ClearProviders();

            ApiHelper.ApiConfiguration = builder.Configuration.GetSection(ApiConfiguration.Key).Get<ApiConfiguration>();
            builder.Services.AddDbContext<ModelContext>(options => options.UseNpgsql(ApiHelper.GetDefaultConnection(), b => b.MigrationsAssembly("SahaiCart.API")));

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

            app.UseCors(opt => opt.AllowAnyHeader().AllowAnyMethod().AllowAnyOrigin());

            app.UseHttpsRedirection();
            app.UseAuthorization();
            app.MapControllers();
            app.Run();
        }
    }
}
