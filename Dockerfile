FROM amd64/node:16

WORKDIR /app
COPY package.json .
RUN npm install

COPY public ./public
COPY src ./src

EXPOSE 3000
CMD npm start
