FROM node:22-alpine as builder 

WORKDIR /app    

COPY package.json yarn.lock ./
COPY apps/feast/package.json ./apps/feast/

RUN  rm -rf node_modules && yarn install

COPY . .

EXPOSE 3000

