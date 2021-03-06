using SahaiCart.API.Extensions;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.AddServices();

var app = builder.Build();

// Configure the HTTP request pipeline.
app.AddMiddleWare();