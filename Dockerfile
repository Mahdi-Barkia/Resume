FROM node:12.16-alpine as development

RUN mkdir -p /usr/src/app

WORKDIR /usr/src/app


COPY package*.json ./
RUN npm install

COPY . .

EXPOSE 3000

CMD "npm" "run" "dev" 


