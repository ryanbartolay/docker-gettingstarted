# parent image
FROM node:20-alpine3.17

RUN npm install -g nodemon

# tells docker that when we run commands in the image, to do this under this directory
WORKDIR /app

# copy package.json to be able to run npm install successfully
COPY package.json .

# this will run in the WORKDIR, on layer caching, docker will cache the image up to this point
RUN npm install

# copy the current contents(source directory) to inside the container (target directory) WORKDIR
COPY . .

# tells docker what port is going to be exposed
# optional if running on docker desktop as we can port mapping
EXPOSE 8081

# Unlike RUN, CMD waits for the container to run first
# defines the default executable of a Docker image. You can run this image as the base of a container without adding command-line arguments.
#CMD ["node", "server.js"]

# Command for nodemon
CMD ["npm", "run", "dev"]

# run by
# docker --run --name myapp -p 4000:4000 myapp5