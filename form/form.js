var express = require('express');
var bodyparser = require('body-parser');

var app = express();

app.use(bodyparser.urlencoded({extended: false}));

app.post('/form', function(req, res){
	var backwards = req.body.str.split('').reverse().join('');
	res.send(backwards);
});

var port = process.argv[2] || 3000;
app.listen(port);

console.log('Listening on port ' + port);
console.log('http://localhost:' + port);