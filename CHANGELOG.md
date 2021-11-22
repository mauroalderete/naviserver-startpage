# CHANGELOG

# 20211122 - Hotfix v1.0.1

The image used to display the preview screenshot has the extension in uppercase. Whereas, the reference in the readme file looks for the file named in lowercase.
When I change the name, Windows does not respond effectively, because its file system does not handle case sensitivity.
So, I had to change the full name for everything to work fine.

# 20211122 - Release v1.0.0

First main version of project. Include a start page website prepared to run on nginx server. Use a Dockerfile to build image and a kubernetes deployment file to implement this solution in *Navi*.

# 20211122 - sketch and deploy process

I make a simple website in the src folder that implements a homepage in the main naviservers domain
This home page consults the forcast API and gets a quote from the firebase service. Also, it shows the current date and time.

The compilation will be done using dockerfile. It allows the use of the Docker public registry and facilitates the deployment on the navi server.

Additionally, a Kubernetes deployment file is available that runs pods, a service, and external access through the ingress module.

# 20211121 - Initialization

I initialize basic documentation.
