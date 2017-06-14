using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using BeerLog.Data.Store;
using BeerLog.Data.Repositories;
using AutoMapper;
using BeerLog.Services;
using Microsoft.AspNetCore.Cors.Infrastructure;
using BeerLog.Models.ViewModels;
using BeerLog.Models.Domain;

namespace BeerLog
{
    public class Startup
    {
        public Startup(IHostingEnvironment env)
        {
            var builder = new ConfigurationBuilder()
                .SetBasePath(env.ContentRootPath)
                .AddJsonFile("appsettings.json", optional: false, reloadOnChange: true)
                .AddJsonFile($"appsettings.{env.EnvironmentName}.json", optional: true)
                .AddEnvironmentVariables();
            Configuration = builder.Build();
        }

        public IConfigurationRoot Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            // Add framework services.
            var policy = new CorsPolicy();
            policy.Headers.Add("*");
            policy.Methods.Add("*");
            policy.Origins.Add("*");
            policy.SupportsCredentials = true;
            services.AddCors(x => x.AddPolicy("devPolicy", policy));
            
            services.AddMvc();

            services.AddSingleton<IDataLoader, DataLoader>();

            services.AddScoped<IBeerTypeTransformer, BeerTypeTransformer>();

            services.AddScoped<IBeerRepository, BeerRepository>();
            services.AddScoped<ISearchRepository, SearchRepository>();

            Mapper.Initialize(x =>
            {
                x.CreateMap<BeerDetailsViewModel, BeerModel>().ReverseMap();
                x.CreateMap<ScoreViewModel, ScoreModel>().ReverseMap();

                x.CreateMap<BreweryListingViewModel, BreweryListingModel>().ReverseMap();
            });
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IHostingEnvironment env, ILoggerFactory loggerFactory, IDataLoader dataLoader)
        {
            loggerFactory.AddConsole(Configuration.GetSection("Logging"));
            loggerFactory.AddDebug();

            if (env.IsDevelopment())
                app.UseCors("devPolicy");

            app.UseMvc();

            dataLoader.Load(env.ContentRootPath);
        }
    }
}
