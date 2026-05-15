FROM node:22-alpine

WORKDIR /app

COPY package.json yarn.lock ./
COPY apps/feast/package.json ./apps/feast/

RUN yarn install

COPY . .

WORKDIR /app/apps/feast

RUN yarn build

EXPOSE 3000

