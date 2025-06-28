# specify way in which we want the docker image to be created (alpine is minimal versn)
FROM node:22-alpine

# specify working directory for docker image
WORKDIR /app

# specify port of device where we want docker image to listen and connect to
EXPOSE 3000

# copy frontend package files list to curr dir(WORKDIR)
COPY package.json package-lock.json ./

# install node pkg mngr w/o genrtg too much logs
RUN npm install --silent

# cpy all files in curr dir for next versions
COPY . ./

# specify process that needs to be started for this docker img
CMD [ "npm", "start" ]