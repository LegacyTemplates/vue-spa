using System;
using ServiceStack;
using MyApp.ServiceModel;
using ServiceStack.DataAnnotations;
using ServiceStack.Templates;

namespace MyApp.ServiceInterface
{
    [Exclude(Feature.Metadata)]
    [FallbackRoute("/{PathInfo*}")]
    public class FallbackForClientRoutes
    {
        public string PathInfo { get; set; }
    }

    public class MyServices : Service
    {
        //Return index.html for unmatched requests so routing is handled on client
        public object Any(FallbackForClientRoutes request) => 
            new PageResult(Request.GetPage("/"));
            //new HttpResult(VirtualFileSources.GetFile("index.html")); //Use instead if index.html is just static HTML

        public object Any(Hello request)
        {
            return new HelloResponse { Result = $"Hello, {request.Name}!" };
        }
    }
}
