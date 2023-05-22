FROM node:latest AS build
WORKDIR /build

COPY package.json package.json
COPY package-lock.json package-lock.json
COPY tsconfig.json tsconfig.json
RUN npm ci

COPY public/ public
COPY src/ src
RUN npm run build

FROM alpine:latest
WORKDIR /var/www/html
COPY --from=build /build/build/ .