FROM node:16-alpine as prod-deps
WORKDIR /app
COPY package.json yarn.lock ./
RUN yarn install --production


FROM prod-deps as dev-deps
WORKDIR /app
RUN yarn install


FROM dev-deps as builder
WORKDIR /app
COPY ./ .
RUN yarn build


FROM prod-deps
WORKDIR /app
COPY next.config.js ./
COPY --from=builder /app/.next .next
ENV NODE_ENV=production PORT=80
CMD yarn start
