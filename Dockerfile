FROM node:16.17.0

WORKDIR /app

COPY package.json yarn.lock ./
COPY server/package.json server/
COPY client/package.json client/
RUN yarn install

COPY . .

CMD ["yarn", "dev"]