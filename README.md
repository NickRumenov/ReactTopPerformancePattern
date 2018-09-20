# React Top Performance Pattern

## How to run dev locally
``npm install``

PLEASE NOTE: Since we use Webpack 4.19 we have to change in our local node_modules

node_modules/file-loader/dist/index.js:34 with the following

``
-- var context = options.context || this.options.context;
``

``
++ var context = options.context || this.rootContext;
``

Finally:

``npm run dev``

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