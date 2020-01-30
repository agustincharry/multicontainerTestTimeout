FROM node:10.15.3-alpine
WORKDIR /app
COPY package.json /app
RUN npm install --production
COPY . /app

CMD node app.js