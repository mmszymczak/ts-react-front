FROM node:12.11.1-alpine

RUN apk update && apk upgrade && \
    apk add --no-cache bash git openssh

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

ENV PATH /usr/src/app/node_modules/.bin:$PATH

COPY . /usr/src/app

RUN npm install

CMD ["npm", "start"]
