var express = require('express');

var app = express();

var staticpath = process.argv[3] || __dirname;

app.use(express.static(staticpath));

var port = process.argv[2] || 3000;
app.listen(port);

console.log('Listening on port ' + port);
console.log('http://localhost:' + port);