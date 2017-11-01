### What is it? ###
2 simple files to illustrate how easy it is to tie into Sitecore JSS

### What does it do? ###
It uses Angular to call out to a Sitecore instance with the necesary Downloads Installed (https://dev.sitecore.net/Downloads/Sitecore_JavaScript_Services/90_Tech_Preview/Sitecore_JavaScript_Services_90_Tech_Preview.aspx)

### What do I need it for? ###
Sitecore 9 
JSS Server Package (https://dev.sitecore.net/Downloads/Sitecore_JavaScript_Services/90_Tech_Preview/Sitecore_JavaScript_Services_90_Tech_Preview.aspx)
A home page and an About Us page in the Sitecore instance.

### How do I use it ###
Should be as easy as:

1. Clone, download, whatever, just get these files into your project

1. Drop this into a webserver (IIS, Apache, whatever)

1. Hit the `index.html` home page.

### A few advanced examples ###

1. To install/deploy to an endpoint that has Basic Auth and save the IDs of the items that get overwritten by the update: `.\deploy-sitecorepackage.ps1 mysite.dev "C:\Project\Build\Artifacts\1-mysite-templates.update" 300 -ResultsOutputPath "c:/temp/ids.txt"`

1. To publish only the list of IDs overwritten to an endpoint that has Basic Auth: `.\publish-sitecorepackage.ps1 mysite.dev "preview,web" "en" "listofitems" 300 MyUserName MyPassword "C:/temp/ids.txt""`