var express = require('express');

var app = express();
var views = process.argv[3] || __dirname;

app.set('view engine', 'jade');
app.set('views', views)

app.get('/home', function(req, res) {
	var data = {
		date: new Date().toDateString()
	}
	res.render('index', data);
})

var port = process.argv[2] || 3000;
app.listen(port);

console.log('Listening on port ' + port);
console.log('http://localhost:' + port);