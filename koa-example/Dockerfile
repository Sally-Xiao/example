FROM node:12

RUN npm install pm2 -g

RUN mkdir -p /home/node/koaRouter/node_modules && chown -R node:node /home/node/koaRouter

WORKDIR /home/node/koaRouter

COPY package*.json ./

USER node

RUN npm install

COPY --chown=node:node . .

EXPOSE 3002

CMD ["pm2-runtime", "./src/router.js"]
