FROM node:8

WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
# RUN npm install --only=production

COPY . .

EXPOSE 1515

CMD [ "npm", "start" ]