FROM node:10

RUN mkdir -p /home/sharis/docker/node
WORKDIR /home/sharis/docker/node

RUN npm install

COPY . .

EXPOSE 8080

CMD [ "npm", "init-db" ]


FROM node:12

RUN mkdir -p /home/sharis/docker/angular
WORKDIR /home/sharis/docker/angular

RUN npm install -g @angular/cli 

COPY . .
