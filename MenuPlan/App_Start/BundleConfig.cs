using System.Web;
using System.Web.Optimization;

namespace MenuPlan
{
    public class BundleConfig
    {
        // For more information on bundling, visit https://go.microsoft.com/fwlink/?LinkId=301862
        public static void RegisterBundles(BundleCollection bundles)
        {
            //BundleTable.EnableOptimizations = true;

            bundles.Add(new ScriptBundle("~/bundles/jquery").Include(
                        "~/Scripts/default/jquery-{version}.js"));

            // Use the development version of Modernizr to develop with and learn from. Then, when you're
            // ready for production, use the build tool at https://modernizr.com to pick only the tests you need.
            bundles.Add(new ScriptBundle("~/bundles/modernizr").Include("~/Scripts/default/modernizr-*"));

            bundles.Add(new ScriptBundle("~/bundles/bootstrap").Include(
                      "~/Scripts/default/bootstrap.js"
                      ,"~/Scripts/default/respond.js"
                      ));

            bundles.Add(new StyleBundle("~/Content/css").Include(
                      "~/Content/bootstrap.css"
                      ,"~/Content/site.css"
                      ));

            bundles.Add(new ScriptBundle("~/bundles/angular").Include(
                "~/Scripts/angjslib/angular.js"
                ));

            //bundles.Add(new ScriptBundle("~/bundles/modules").Include(
            //            "~/Scripts/app/app.module.js"
            //            ,"~/Scripts/app/market/market.module.js"
            //    ));

            bundles.Add(new ScriptBundle("~/bundles/modules").IncludeDirectory("~/Scripts/app", "*.module.js", true));
            bundles.Add(new ScriptBundle("~/bundles/services").IncludeDirectory("~/Scripts/app", "*.service.js", true));
            bundles.Add(new ScriptBundle("~/bundles/controllers").IncludeDirectory("~/Scripts/app", "*.controller.js", true));
        }
    }
}
