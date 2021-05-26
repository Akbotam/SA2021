FROM node:14.16.1-alpine

COPY package*.json /app/service_front/
WORKDIR /app/service_front/

RUN npm install

COPY . /app/service_front/

EXPOSE 3000