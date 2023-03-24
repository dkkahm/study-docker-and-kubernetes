FROM node:14

WORKDIR /app

COPY package.json .

RUN npm install

RUN mkdir ./contents

COPY . .

EXPOSE 3000

CMD ["node", "app.mjs"]