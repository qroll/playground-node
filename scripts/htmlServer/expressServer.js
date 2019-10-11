var express = require("express");
var path = require("path");

var app = express();

const redirector = (req, res, next) => {
  res.status(307);
  // res.header('Location', 'intent://drive.google.com/drive/');
  res.header('Location', 'oioioioi://drive.google.com/drive/');
  res.end();
};

const httpPage = (req, res, next) => {
  res.sendFile(path.join(__dirname + '/index.html'));
};

const httpRedirectPage = (req, res, next) => {
  res.sendFile(path.join(__dirname + '/index2.html'));
};

const badRedirect = (req, res, next) => {
  res.status(404);
  res.end();
  // res.sendStatus(404);
};

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

app.use("/badurl", badRedirect);

app.use("/redirect", httpRedirectPage);

app.use("/", httpPage);

app.listen(3000);