var express = require('express');
var crypto = require('crypto');

var app = express();

app.put('/message/:id', function(req, res) {
	var id = req.params.id;
	var sha1 = crypto.createHash('sha1')
		.update(new Date().toDateString() + id)
		.digest('hex');
	res.send(sha1);
});

var port = process.argv[2] || 3000;
app.listen(port);

console.log('Listening on port ' + port);
console.log('http://localhost:' + port);