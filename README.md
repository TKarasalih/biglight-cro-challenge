# Biglight CRO Challenge

CRO - Senior Developer challenge

## Dependencies

- NodeJS
- ExpressJS

## Server setup

- Open terminal/cmd and navigate to `biglight-cro-challenge`
- Type `npm install`
- Paste this for a self signed certificate: `openssl req -nodes -new -x509 -keyout server.key -out server.cert`
- Fill in info (doesn't have to be real)
- Start the server by typing `node app.js`
- Visit `https://localhost:7000` first and accept that it isn't trusted

## Injector setup

Be sure to add the following lines into the injector

Challenge 1:

- URL pattern: https://www.amazon.co.uk/Echo-Dot-3rd-Gen-Charcoal/dp/B07PJV3JPR/ref=sr_1_2
- File 1: https://localhost:7000/challenge-1/challenge-1.js
- File 2: https://localhost:7000/challenge-1/challenge-1.css

You can now browse the Amazon site using the injector pointed towards the files.
