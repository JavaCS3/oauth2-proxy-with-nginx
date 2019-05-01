FROM node:8-alpine

RUN apk add --no-cache tar

WORKDIR /usr/src/app

ENV NODE_ENV production

COPY ["package.json", "package-lock.json*", "npm-shrinkwrap.json*", "./"]

RUN npm install --verbose \
    && mv node_modules ..

COPY . .

EXPOSE 3000
