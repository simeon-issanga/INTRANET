FROM node:current-alpine3.23
ENV http_proxy="http://cache.univ-pau.fr:3128"
ENV https_proxy="http://cache.univ-pau.fr:3128"
WORKDIR /app

# On copie tout le projet d'un coup
COPY . .

# On installe TOUT (même sans lockfile ça passera)
RUN npm install

# On build l'application
RUN npm run build

# On expose le port 3000
EXPOSE 3000

# On lance le serveur Next.js classique
CMD ["npm", "run", "start"]