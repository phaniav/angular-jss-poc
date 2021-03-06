### What is it? ###
A few simple files to illustrate how easy it is to tie into Sitecore JSS.

- An `index.html` as the root page
- An `app.js` file for the angular
- A custom pipeline and config to augment the data coming back

### What does it do? ###
It uses Angular to call out to a Sitecore instance with the necesary [downloads](https://dev.sitecore.net/Downloads/Sitecore_JavaScript_Services/90_Tech_Preview/Sitecore_JavaScript_Services_90_Tech_Preview.aspx) and serves up content from Sitecore thru the `layoutsvc`

### What do I need for it? ###
- Sitecore 9 

- [JSS Server Package](https://dev.sitecore.net/Downloads/Sitecore_JavaScript_Services/90_Tech_Preview/Sitecore_JavaScript_Services_90_Tech_Preview.aspx)

- A home page and an About Us page in the Sitecore instance.

### What do I need if for? ###

- If you are going headless ([pros](https://community.sitecore.net/technical_blogs/b/steve_vandenbush/posts/disconnected-sitecore-a-headless-and-non-traditional-approach) and [cons](https://www.linkedin.com/pulse/youre-marketer-product-manager-so-why-you-using-stack-gene-de-libero/) of headless)
- If you have developers with strong JavaScript chops and limited .net/mvc devs

### How do I use it ###
Should be as easy as:

1. Clone, download, whatever, just get these files to your computer

1. Drop this into a webserver (IIS, Apache, whatever)

1. Hit the `index.html` home page.

1. If you want to use the pipeline, fire up a VS solution/project, build and deploy the binary and config.

### A few helpful links ###

- [Basic React Walkthru](https://jss.sitecore.net/#/cookbook/advanced-app?id=advanced-sample-app-walkthrough)

- [Advanced React Walkthru](https://jss.sitecore.net/#/cookbook/advanced-app?id=advanced-sample-app-walkthrough)

- [Actual Code Examples](https://github.com/Sitecore/jss/tree/master/samples)

- [Documentation](https://jss.sitecore.net/#/setup/jss-server-install?id=jss-server-install)