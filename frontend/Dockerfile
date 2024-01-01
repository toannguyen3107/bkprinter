    # front end
    FROM node:20-alpine3.17

    WORKDIR /usr/app

    COPY package*.json ./

    RUN npm install -qy

    COPY . .

    CMD ["npm", "run", "dev"]