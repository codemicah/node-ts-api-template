# syntax=docker/dockerfile:1

FROM node:18-alpine
WORKDIR /app
COPY . .
RUN yarn
CMD ["yarn", "start"]
EXPOSE 5000