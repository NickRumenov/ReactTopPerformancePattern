# React Top Performance Pattern

## How to run it locally
``npm install``

PLEASE NOTE: Since we use Webpack 4.19 we have to change in our local node_modules

node_modules/file-loader/dist/index.js:34 with the following

``
-- var context = options.context || this.options.context;
``

``
++ var context = options.context || this.rootContext;
``

### Prod mode

``node server.js``

``localhost:8080``

### Dev mode

``node server.js``

Our app is running with prod files if we open localhost:8080 
that`s why we have to run the app on another console and another port with webpack-dev-server

``npm run dev`` 

``localhost:8081``

Then the server is listening for http requests on port 8080
and the app is running on the webpack dev server.

For both modes we have to have linuxserver/mysql container for hosting MySQL DB

## How to run it with docker
We have to run two containers form the images: nodejs/reactjs and linuxserver/mysql

### NodeJS/ReactJS 
Build the image

``docker build -t nick1r1/reacttopperformancepattern .``

``docker run -p 49160:8080 -d nick1r1/reacttopperformancepattern``

``docker exec -it <ContainerID> /bin/bash``

``npm run build``

``http://localhost:49160/``

### Linux/MySQL
Clone the image from docker hub

``docker exec -it mysql /bin/bash``

``mysql -u root -p ``

enter your password then we have command prompt for mysql

``mysql>``               