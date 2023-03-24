FROM node:14

WORKDIR /app

COPY package.json .

RUN npm install

COPY . .

# VOLUME ["/app/feeback"] # Anonymouse Volume

EXPOSE 3000

CMD ["node", "app.mjs"]