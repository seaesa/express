FROM node:16-alpine

WORKDIR /app

COPY package*.json ./

COPY ./src ./src
COPY ./public ./public
COPY ./config ./config

RUN npm install \
    && rm -fr node_modules

EXPOSE 3000

# Start the app using serve command
CMD [ "npm", "start"]