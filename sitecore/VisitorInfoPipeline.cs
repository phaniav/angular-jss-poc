using System.Web;
using Sitecore.JavaScriptServices.Configuration;
using Sitecore.JavaScriptServices.ViewEngine.LayoutService.Pipelines.GetLayoutServiceContext;

namespace JSS.Pipelines
{
    public class VisitorInfoPipeline : JssGetLayoutServiceContextProcessor
    {
        public VisitorInfoPipeline(IConfigurationResolver configurationResolver) : base(configurationResolver)
        {
        }

        protected override void DoProcess(Sitecore.LayoutService.ItemRendering.Pipelines.GetLayoutServiceContext.GetLayoutServiceContextArgs args, AppConfiguration application)
        {
            args.ContextData.Add("sessionInfo", new
            {
                isAnonymous = !Sitecore.Context.User.IsAuthenticated,
                deviceInfo = HttpContext.Current.Request.Browser
            });
            

        }
    }
}