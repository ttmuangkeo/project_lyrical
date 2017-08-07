require('dotenv').config();
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var translate = require('moji-translate');
var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/api/emoji', function(req, res) {
	res.send(translate.translate(req.query.searchTerm));
});

app.get('/*', function(req, res) {
    res.sendFile(path.join(__dirname, 'public/index.html'));
});

var server = app.listen(process.env.PORT || 3000);

module.exports = server;