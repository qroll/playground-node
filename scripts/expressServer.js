var express = require("express");

var app = express();

const redirector = (req, res, next) => {
  res.status(307);
  // res.header('Location', 'intent://drive.google.com/drive/');
  res.header('Location', 'oioioioi://drive.google.com/drive/');
  res.end();
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

app.use("/*", redirector);

app.listen(3000);