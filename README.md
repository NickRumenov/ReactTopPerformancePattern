# React Top Performance Pattern

## How to run it with docker

### Build the image

``docker build -t nick1r1/reacttopperformancepattern .``

### Run the image

``docker run -p 49160:8080 -d nick1r1/reacttopperformancepattern``

### Run in your browser

``http://localhost:49160/``

### If you want to exec something in the container 

``docker exec -it <ContainerID> /bin/bash``