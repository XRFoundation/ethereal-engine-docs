"use strict";(self.webpackChunk_ethereal_engine_docs=self.webpackChunk_ethereal_engine_docs||[]).push([[4089],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var i=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},l=Object.keys(e);for(i=0;i<l.length;i++)n=l[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(i=0;i<l.length;i++)n=l[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=i.createContext({}),u=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=u(e.components);return i.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},c=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,p=r(e,["components","mdxType","originalType","parentName"]),c=u(n),h=a,m=c["".concat(s,".").concat(h)]||c[h]||d[h]||l;return n?i.createElement(m,o(o({ref:t},p),{},{components:n})):i.createElement(m,o({ref:t},p))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=c;var r={};for(var s in t)hasOwnProperty.call(t,s)&&(r[s]=t[s]);r.originalType=e,r.mdxType="string"==typeof e?e:a,o[1]=r;for(var u=2;u<l;u++)o[u]=n[u];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}c.displayName="MDXCreateElement"},1071:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>l,metadata:()=>r,toc:()=>u});var i=n(7462),a=(n(7294),n(3905));const l={},o="Ethereal Engine on Minikube",r={unversionedId:"devops_deployment/minikube",id:"devops_deployment/minikube",title:"Ethereal Engine on Minikube",description:"Install kubectl, Helm, Docker, and VirtualBox",source:"@site/docs/2_devops_deployment/1_minikube.md",sourceDirName:"2_devops_deployment",slug:"/devops_deployment/minikube",permalink:"/ethereal-engine-docs/docs/devops_deployment/minikube",draft:!1,editUrl:"https://github.com/XRFoundation/ethereal-engine-docs/docs/2_devops_deployment/1_minikube.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Deployment",permalink:"/ethereal-engine-docs/docs/devops_deployment/"},next:{title:"Ethereal Engine on AWS",permalink:"/ethereal-engine-docs/docs/devops_deployment/AWS_setup"}},s={},u=[{value:"Install kubectl, Helm, Docker, and VirtualBox",id:"install-kubectl-helm-docker-and-virtualbox",level:2},{value:"Download and install minikube",id:"download-and-install-minikube",level:2},{value:"Clone this repo to your local machine",id:"clone-this-repo-to-your-local-machine",level:2},{value:"Start MariaDB server locally via Docker",id:"start-mariadb-server-locally-via-docker",level:2},{value:"Start local file server",id:"start-local-file-server",level:2},{value:"Create minikube cluster",id:"create-minikube-cluster",level:2},{value:"Starting ingress after minikube has started",id:"starting-ingress-after-minikube-has-started",level:3},{value:"Get minikube IP address and edit system hostfile to point to",id:"get-minikube-ip-address-and-edit-system-hostfile-to-point-to",level:2},{value:"Add Helm repos",id:"add-helm-repos",level:2},{value:"Install Agones and redis deployments",id:"install-agones-and-redis-deployments",level:2},{value:"Install Elastic Search and Kibana using Helm for Server Logs",id:"install-elastic-search-and-kibana-using-helm-for-server-logs",level:2},{value:"Run build_minikube.sh",id:"run-build_minikubesh",level:2},{value:"Deploy Ethereal Engine Helm chart",id:"deploy-ethereal-engine-helm-chart",level:2},{value:"Accept invalid certs",id:"accept-invalid-certs",level:2}],p={toc:u};function d(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,i.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"ethereal-engine-on-minikube"},"Ethereal Engine on Minikube"),(0,a.kt)("h2",{id:"install-kubectl-helm-docker-and-virtualbox"},"Install kubectl, Helm, Docker, and VirtualBox"),(0,a.kt)("p",null,"If ",(0,a.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/tasks/tools/"},"kubectl"),", ",(0,a.kt)("a",{parentName:"p",href:"https://helm.sh/docs/intro/install/"},"Helm"),",\n",(0,a.kt)("a",{parentName:"p",href:"https://docs.docker.com/get-docker/"},"Docker")," and/or ",(0,a.kt)("a",{parentName:"p",href:"https://www.virtualbox.org/wiki/Downloads"},"VirtualBox"),"\naren't already installed on your machine, install them."),(0,a.kt)("p",null,"You may also need to install ",(0,a.kt)("a",{parentName:"p",href:"https://docs.docker.com/compose/install/"},"Docker Compose")),(0,a.kt)("h2",{id:"download-and-install-minikube"},"Download and install minikube"),(0,a.kt)("p",null,"Instructions can be found ",(0,a.kt)("a",{parentName:"p",href:"https://minikube.sigs.k8s.io/docs/start/"},"here")),(0,a.kt)("p",null,"While you can follow the demo instructions there about starting minikube, deploying\nsome demo deployments, etc. to get a feel for it, before deploying Ethereal Engine you should delete\nyour minikube cluster, since we have some specific starting requirements."),(0,a.kt)("h2",{id:"clone-this-repo-to-your-local-machine"},"Clone this repo to your local machine"),(0,a.kt)("p",null,"To build the Ethereal Engine Docker image locally, and to have a pre-tested way to run various local\nservices, you'll need to get the Ethereal Engine repo on your machine. This is most easily\ndone by running ",(0,a.kt)("inlineCode",{parentName:"p"},"git clone https://github.com/XRFoundation/XREngine.git")),(0,a.kt)("h2",{id:"start-mariadb-server-locally-via-docker"},"Start MariaDB server locally via Docker"),(0,a.kt)("p",null,"For simplicity, we recommend running a MariaDB server on your local machine outside of minikube.\nLater instructions will set up minikube so that it can access this server"),(0,a.kt)("p",null,"If you run ",(0,a.kt)("inlineCode",{parentName:"p"},"docker-compose up")," from the top-level ",(0,a.kt)("inlineCode",{parentName:"p"},"/scripts")," directory in the Ethereal Engine repo, it will\nstart up multiple MariaDB docker images (as well as a redis server, which is not needed). One, intended\nfor local development, runs on port 3306; another, intended for automated testing purposes, runs on\nport 3305; and the last one, intended for minikube testing, runs on port 3304. Once the\nminikube MariaDB Docker image is stopped, you can start it again by running\n",(0,a.kt)("inlineCode",{parentName:"p"},"docker start xrengine_minikube_db"),". "),(0,a.kt)("p",null,"Alternatively, if you want to just run MariaDB on its own without Docker, that's fine too.\nYou'll just have to configure the Helm config file to have the appropriate SQL server configuration,\nand possibly change the script ",(0,a.kt)("inlineCode",{parentName:"p"},"./scripts/build_minikube.sh"),"."),(0,a.kt)("h2",{id:"start-local-file-server"},"Start local file server"),(0,a.kt)("p",null,"If you're going to have the minikube deployment use a local storage provider, rather than a cloud\nstorage provider like AWS S3, you'll need to have the local file server running on your machine\noutside of minikube."),(0,a.kt)("p",null,"Run ",(0,a.kt)("inlineCode",{parentName:"p"},"npm install")," (or ",(0,a.kt)("inlineCode",{parentName:"p"},"yarn install")," if ",(0,a.kt)("inlineCode",{parentName:"p"},"npm install")," isn't working right;\nyou'd need to install yarn in that case) from the root of the Ethereal Engine repo. When that's finished,\ngo to packages/server and run ",(0,a.kt)("inlineCode",{parentName:"p"},"npm run serve-local-files"),". This will start a local file server\non port 8642, and will create and serve those files from packages/server/upload."),(0,a.kt)("h2",{id:"create-minikube-cluster"},"Create minikube cluster"),(0,a.kt)("p",null,"Run the following command:\n",(0,a.kt)("inlineCode",{parentName:"p"},"minikube start --disk-size 40000m --cpus 4 --memory 10124m --addons ingress --driver virtualbox")),(0,a.kt)("p",null,"This says to start minikube with 40GB of disk space, 4 CPUs, 10GB of memory, using VirtualBox as its\ndriver, and starting up an nginx ingress service."),(0,a.kt)("p",null,"The disk space, CPUs, and memory allocation are configurable. These are what we recommend for optimal\nrunning (though the disk space might be a bit more than necessary). When minikube is running,\nit will reserve those resources for itself regardless of whether the services in minikube are using\nthat much."),(0,a.kt)("p",null,"The 10GB of memory might be the spec with the least wiggle room. Later instructions on building\nthe Docker image will have it be built in the minikube context. This uses the RAM reserved for minikube,\nand the client build process normally uses about 8GB of RAM at its peak. minikube may freeze if\nit gets maxed out on RAM, and the Docker build process might freeze indefinitely."),(0,a.kt)("h3",{id:"starting-ingress-after-minikube-has-started"},"Starting ingress after minikube has started"),(0,a.kt)("p",null,"If you forget to use ",(0,a.kt)("inlineCode",{parentName:"p"},"--addons ingress")," when starting minikube, you can start nginx later by\nrunning ",(0,a.kt)("inlineCode",{parentName:"p"},"minikube addons enable ingress")),(0,a.kt)("h2",{id:"get-minikube-ip-address-and-edit-system-hostfile-to-point-to"},"Get minikube IP address and edit system hostfile to point to"),(0,a.kt)("p",null,"Run this command after minikube has started: ",(0,a.kt)("inlineCode",{parentName:"p"},"minikube ip"),"\nThis will get you the address that minikube is running on."),(0,a.kt)("p",null,"You'll need to edit your hostfile to point certain domains to minikube IP addresses. On Linux,\nthis is done by running ",(0,a.kt)("inlineCode",{parentName:"p"},"sudo gedit /etc/hosts"),"."),(0,a.kt)("p",null,"Add the following lines:\n",(0,a.kt)("inlineCode",{parentName:"p"},"<Output of 'minikube ip'>  local.theoverlay.io api-local.theoverlay.io instanceserver-local.theoverlay.io 00000.instanceserver-local.theoverlay.io 00001.instanceserver-local.theoverlay.io 00002.instanceserver-local.theoverlay.io 00003.instanceserver-local.theoverlay.io"),"\n",(0,a.kt)("inlineCode",{parentName:"p"},"10.0.2.2   host.minikube.internal")),(0,a.kt)("p",null,"The first line says to point several *-local.theoverlay.io domains internally to the minikube cluster,\nwhere the nginx ingress server will redirect the traffic to the appropriate pod.\nThe second line is used to give minikube access to your local environment, particularly so that it\ncan access the MariaDB server."),(0,a.kt)("p",null,"Make sure to save this file after you've edited it. On Linux, at least, you need root permissions\nto edit it."),(0,a.kt)("h2",{id:"add-helm-repos"},"Add Helm repos"),(0,a.kt)("p",null,"You'll need to add a few Helm repos. Run the following:\n",(0,a.kt)("inlineCode",{parentName:"p"},"helm repo add agones https://agones.dev/chart/stable"),"\n",(0,a.kt)("inlineCode",{parentName:"p"},"helm repo add redis https://charts.bitnami.com/bitnami"),"\n",(0,a.kt)("inlineCode",{parentName:"p"},"helm repo add xrengine https://helm.xrengine.io")),(0,a.kt)("p",null,"This will add the Helm charts for Agones, redis, and Ethereal Engine, respectively."),(0,a.kt)("h2",{id:"install-agones-and-redis-deployments"},"Install Agones and redis deployments"),(0,a.kt)("p",null,"After adding those Helm repos, you'll start installing deployments using Helm repos."),(0,a.kt)("p",null,"Make sure that kubectl is pointed at minikube by running ",(0,a.kt)("inlineCode",{parentName:"p"},"kubectl config current-context"),",\nwhich should say 'minikube'. You can also run ",(0,a.kt)("inlineCode",{parentName:"p"},"kubectl config get-contexts")," to get all contexts\nthat kubectl has been configured to run; the current one will have a '*' under the left-most\n'current' column."),(0,a.kt)("p",null,"Once kubectl is pointed to minikube, from the top of the Ethereal Engine repo, run\n",(0,a.kt)("inlineCode",{parentName:"p"},"helm install -f packages/ops/configs/agones-default-values.yaml agones agones/agones")," to install Agones\nand ",(0,a.kt)("inlineCode",{parentName:"p"},"helm install local-redis redis/redis")," to install redis."),(0,a.kt)("p",null,"You can run ",(0,a.kt)("inlineCode",{parentName:"p"},"kubectl get pods -A")," to list all of the pods running in minikube. After a minute or so,\nall of these pods should be in the Running state."),(0,a.kt)("h2",{id:"install-elastic-search-and-kibana-using-helm-for-server-logs"},"Install Elastic Search and Kibana using Helm for Server Logs"),(0,a.kt)("p",null,"To install Elasticsearch, add the elastic repository in Helm: ",(0,a.kt)("inlineCode",{parentName:"p"},"helm repo add elastic https://helm.elastic.co")),(0,a.kt)("p",null,"Now, use the curl command to download the values.yaml file containing configuration information:"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"curl -O https://raw.githubusercontent.com/elastic/helm-charts/master/elasticsearch/examples/minikube/values.yaml")),(0,a.kt)("p",null,"Use the helm install command and the values.yaml file to install the Elasticsearch helm chart: "),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"helm install elasticsearch elastic/elasticsearch -f ./values.yaml")),(0,a.kt)("p",null,"The -f option allows specifying the yaml file with the template. If you wish to install Elasticsearch in a specific namespace, add the -n option followed by the name of the namespace: ",(0,a.kt)("inlineCode",{parentName:"p"},"helm install elasticsearch elastic/elasticsearch -n [namespace] -f ./values.yaml")),(0,a.kt)("p",null,"Now check if the cluster members are up: ",(0,a.kt)("inlineCode",{parentName:"p"},"kubectl get pods --namespace=default -l app=elasticsearch-master -w")),(0,a.kt)("p",null,"The other option is to use the helm test command to examine the cluster\u2019s health: ",(0,a.kt)("inlineCode",{parentName:"p"},"helm test elasticsearch")),(0,a.kt)("p",null,"To install Kibana on top of Elasticsearch : ",(0,a.kt)("inlineCode",{parentName:"p"},"helm install kibana elastic/kibana")),(0,a.kt)("p",null,"Check if all the pods are ready: ",(0,a.kt)("inlineCode",{parentName:"p"},"kubectl get pods")),(0,a.kt)("p",null,"After you set up port-forwarding, access Elasticsearch, and the Kibana GUI by typing ",(0,a.kt)("inlineCode",{parentName:"p"},"http://localhost:5601 "),"in your browser"),(0,a.kt)("p",null,"In order to connect logger with elasticsearch, update ",(0,a.kt)("inlineCode",{parentName:"p"},"packages/ops/configs/local.template.values.yaml")," env ",(0,a.kt)("inlineCode",{parentName:"p"},"api.extraEnv.ELASTIC_HOST")," for e.g. ",(0,a.kt)("inlineCode",{parentName:"p"},"http://<username>:<password>@<host>:<port>")),(0,a.kt)("h2",{id:"run-build_minikubesh"},"Run build_minikube.sh"),(0,a.kt)("p",null,"When minikube is running, run the following command from the root of the Ethereal Engine repo:\n",(0,a.kt)("inlineCode",{parentName:"p"},"./scripts/build_minikube.sh")),(0,a.kt)("p",null,"This points Docker ",(0,a.kt)("em",{parentName:"p"},"in the current terminal")," to minikube's Docker environment. Anything that Docker builds\nwill be locally accessible to minikube; if the first main command in the script were not run, Docker would build to your\nmachine's Docker environment, and minikube would not have access to it."),(0,a.kt)("p",null,"The script also builds the full-repo Docker image using several build arguments. Vite, which builds\nthe client files, uses some information from the MariaDB database created for minikube deployments\nto fill in some variables, and needs database credentials. The script will supply default values\nfor all of the MYSQL_* variables if they are not provided to the script, as well as VITE_CLIENT_HOST,\nVITE_SERVER_HOST, and VITE_INSTANCESERVER_HOST. The latter three will make your minikube deployment\naccessible on ",(0,a.kt)("inlineCode",{parentName:"p"},"(local/api-local/instanceserver-local).theoverlay.io"),"; if you want to run it on a different\ndomain, then you'll have to set those three environment variables to what you want them to be (and also\nchange the hostfile records you made pointing those subdomains to minikube's IP)"),(0,a.kt)("p",null,"This will build an image of the entire Ethereal Engine repo into a single Docker file. When deployed for\ndifferent services, it will only run the parts needed for that service. This may take up to 15 minutes,\nthough later builds should take less time as things are cached."),(0,a.kt)("h2",{id:"deploy-ethereal-engine-helm-chart"},"Deploy Ethereal Engine Helm chart"),(0,a.kt)("p",null,"Run the following command: ",(0,a.kt)("inlineCode",{parentName:"p"},"helm install -f </path/to/local.values.yaml> --set api.extraEnv.FORCE_DB_REFRESH=true local xrengine/xrengine"),".\nThis will use a Helm config file titled 'local.values.yaml' to configure the deployment. There is\na ",(0,a.kt)("a",{parentName:"p",href:"../packages/ops/configs/local.template.values.yaml"},"template")," for this file in packages/ops/configs"),(0,a.kt)("p",null,"After a minute or so, running ",(0,a.kt)("inlineCode",{parentName:"p"},"kubectl get pods")," should show one or more instanceservers, one or more api\nservers, and one client server in the Running state. Setting ",(0,a.kt)("inlineCode",{parentName:"p"},"FORCE_DB_REFRESH=true")," made the api servers\n(re)initialize the database. Since you don't want that to happen every time a new api pod starts, run\n",(0,a.kt)("inlineCode",{parentName:"p"},"helm upgrade --reuse-values --set api.extraEnv.FORCE_DB_REFRESH=false local xrengine/xrengine"),".\nThe API pods will restart and will now not attempt to reinit the database on boot."),(0,a.kt)("h2",{id:"accept-invalid-certs"},"Accept invalid certs"),(0,a.kt)("p",null,"Since there are no valid certificates for this domain, you'll have to tell your browser to ignore the\ninsecure connections when you try to load the application."),(0,a.kt)("p",null,"Go to ",(0,a.kt)("a",{parentName:"p",href:"https://local.theoverlay.io/login"},"https://local.theoverlay.io/login")," You should see a warning about an invalid certificate; accept this\ninvalid cert to get to the login page. You'll next have to open the dev tools for your browser and go to\nthe console and/or Network tab. There should be errors on ",(0,a.kt)("a",{parentName:"p",href:"https://api-local.theoverlay.io"},"https://api-local.theoverlay.io"),"; open that link\nin a new tab and accept the invalid certificate for that, too."),(0,a.kt)("p",null,"When you go to ",(0,a.kt)("a",{parentName:"p",href:"https://local.theoverlay.io/location/default"},"https://local.theoverlay.io/location/default"),", you'll have to open the console again, find the\nerroring ",(0,a.kt)("a",{parentName:"p",href:"https://instanceserver-local.theoverlay.io"},"https://instanceserver-local.theoverlay.io"),", open that link in a new tab, and accept the invalid certificate\nfor that domain, as well."))}d.isMDXComponent=!0}}]);