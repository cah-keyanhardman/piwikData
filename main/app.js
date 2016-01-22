var express = require('express'); // Express web server framework
var request = require('request'); // "Request" library

var app = express();

app.use(express.static(__dirname + '/public'));

app.listen(8888);