var express = require('express');

var app = express();

app.get('/search', function(req, res) {
	res.send(req.query)
});

var port = process.argv[2] || 3000;
app.listen(port);

console.log('Listening on port ' + port);
console.log('http://localhost:' + port);