FROM node:16.18.0-alpine3.16

COPY ./src/package.json ./src/yarn.lock ./
RUN yarn install --prod --frozen-lockfile

COPY ./src .

ENV HOST 127.0.0.1
EXPOSE 3000
