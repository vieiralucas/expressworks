var express = require('express');

var app = express();

app.get('/home', function(req, res) {
	res.end('Hello World!')
});

var port = process.argv[2] || 3000;
app.listen(port);

console.log('Server listening on port ' + port);
console.log('http://localhost:' + port);