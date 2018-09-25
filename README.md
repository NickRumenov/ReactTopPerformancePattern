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

## Run prod mode

``node server.js``

and open

``localhost:8080``

## Run dev mode

``node server.js``

Now, our app runs with prod files if we open localhost:8080 
that`s why we have to run

``npm run dev`` (on another console)

and open

``localhost:8081``

Then the server is listening for http requests on port 8080
and the app is running on the webpack dev server.

## How to run it with docker
### Build the image
``docker build -t nick1r1/reacttopperformancepattern .``
### Run the image
``docker run -p 49160:8080 -d nick1r1/reacttopperformancepattern``
### Finally, we have to build it
``docker exec -it <ContainerID> /bin/bash``
``npm run build``
### Run in your browser
``http://localhost:49160/``

### For the Server-Side we use **linuxserver/mysql** image
some server side commands

``docker exec -it mysql /bin/bash``

``mysql -u root -p ``

enter password 

then we have command prompt 

``mysql>``               