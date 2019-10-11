const express = require("express");
const path = require('path');
const fs = require('fs');
const http = require('http');
const https = require('https');

const app = express();

app.use((req, res, next) => {
  console.log('request:', req.originalUrl);
  next();
});

app.use((req, res, next) => {
  res.once('finish', () => {
    console.log('response:', res.statusCode);
  })
  next();
});

app.use("/image.png", (req, res) => {
  res.sendFile(path.join(__dirname, 'image.png'));
});

app.use("/*", (req, res) => {
  res.json({ message: 'hello' })
});

const privateKey = fs.readFileSync(path.join(__dirname, 'server.key'), 'utf8');
const certificate = fs.readFileSync(path.join(__dirname, 'server.crt'), 'utf8');

const credentials = { key: privateKey, cert: certificate };

var httpServer = http.createServer(app);
var httpsServer = https.createServer(credentials, app);

httpServer.listen(3000);
// httpsServer.listen(3000);