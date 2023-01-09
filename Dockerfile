# src: https://www.tomray.dev/nestjs-docker-compose-postgres
FROM node:18 as development 
WORKDIR /usr/src/app
COPY --chown=node:node package*.json ./
RUN npm set-script prepare ''
RUN npm install
COPY --chown=node:node . .
USER node

