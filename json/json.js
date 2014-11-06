var express = require('express');
var fs = require('fs');

var app = express();

var file = process.argv[3] || __dirname + '/file.json';

app.get('/books', function(req, res) {
	fs.readFile(file, 'utf8', function(err, data){
		if(err) {
			res.send(500);
			return console.error(err);
		}
		res.send(JSON.parse(data));
	})
});

var port = process.argv[2] || 3000;
app.listen(port);

console.log('Listening on port ' + port);
console.log('http://localhost:' + port);