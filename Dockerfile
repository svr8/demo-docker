FROM ubuntu:16.04

USER root

# setup workspace
RUN mkdir -p /home/app/node_modules
WORKDIR /home/app

# copy dependency files
COPY package.json /home/app/package.json

# install node
RUN apt-get update
RUN apt-get -y install curl gnupg
RUN curl -sL https://deb.nodesource.com/setup_11.x  | bash -
RUN apt-get -y install nodejs

# install node dependencies
RUN npm install

# get codebase
COPY . .

# run server
EXPOSE 80
CMD ["node", "app/app.js"]