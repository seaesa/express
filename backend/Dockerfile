FROM node:18-alpine

WORKDIR /app

COPY package*.json ./

COPY ./src ./src
COPY ./public ./public

RUN npm install \
    && npm run build \
    && rm -fr node_modules

EXPOSE 3000

# Start the app using serve command
CMD [ "serve", "-s", "build" ]