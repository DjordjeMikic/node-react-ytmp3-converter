FROM node:21-alpine

WORKDIR /app/client

COPY . .

RUN yarn

RUN yarn build

CMD [ "yarn", "preview" ]