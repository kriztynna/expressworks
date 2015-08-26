var express = require('express');
var app = express();
var stylus = require('stylus');

var port = process.argv[2];
var pathToFiles = process.argv[3];

app.use(stylus.middleware(pathToFiles));
app.use(express.static(pathToFiles));

app.listen(port);