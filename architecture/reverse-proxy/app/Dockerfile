FROM node:10-alpine

WORKDIR /usr/src/app
COPY package* .
RUN npm i
COPY . .

EXPOSE 80
CMD [ "node", "app.js" ]