const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const hostname = '127.0.0.1';
const port = 3000;

//using the body-parser middleware
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/scripts', express.static(__dirname + '/public/scripts'));

app.get('/', (req, res) => {
  res.sendFile("/public/home/home.html", { root: __dirname});
});

app.get('/timeline', (req, res) => {
  res.sendFile("/public/timeline/timeline.html", { root: __dirname});
});

app.get('/aboutus', (req, res) => {
  res.sendFile("/public/aboutus/aboutus.html", { root: __dirname});
});

app.listen(port, hostname);
