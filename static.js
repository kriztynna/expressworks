var express = require('express');
var app = express();

var port = process.argv[2];
var indexPagePath = process.argv[3];

app.use(express.static(indexPagePath || path.join(__dirname, 'public')));

app.get('/home',function(req,res){
	res.end('Hello World!');
});

app.listen(port);