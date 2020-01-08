FROM node:13

WORKDIR /src/app

COPY package*.json  ./

RUN npm install

COPY . .

EXPOSE 5000
CMD ["npm", "start"]