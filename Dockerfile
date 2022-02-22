FROM cypress/base:10
WORKDIR /app
COPY ./cypress ./cypress
COPY ./cypress.json ./cypress.json
COPY ./package.json ./package.json
COPY ./app.js ./app.js

EXPOSE 3050

RUN npm i 

CMD npx cypress run && node app.js