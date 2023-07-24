# docker-crash-course

# to build a container from image
docker build -t name:version .
# show all list of images
docker images

# show all list of containers
docker ps -a

# start a container
docker start [CONTAINER NAME]

# run container
# -p is port mapping 
# docker run --name [NAME CONTAINER] -p [PORTMAPPING] [imagename:version]
docker run --name myapp_nodemon -p 4000:8081 myapp:nodemon