FROM node:21-alpine

WORKDIR /app/server

COPY . .

RUN yarn

RUN yarn build

CMD [ "yarn", "start" ]