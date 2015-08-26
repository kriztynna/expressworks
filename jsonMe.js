var fs = require('fs');
var express = require('express');
var app = express();

app.get('/books',function(req,res){
	fs.readFile(process.argv[3],function(err,data){
		var books;
		if (err) {return res.sendStatus(500);}
		try {
			books = JSON.parse(data);
		}
		catch (e) {
			res.sendStatus(500);
		}
		res.json(books);
	});
});

app.listen(process.argv[2]);