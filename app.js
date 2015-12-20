var fs = require('fs'),
	express = require('express'),
	app = express(),
	router = express.Router(),
	bodyParser = require('body-parser'),
	telegramBot = require('node-telegram-bot-api'),
	token = fs.readFileSync('./token.txt', 'utf8'),
	bot = new telegramBot(token, {polling: true});

// Setup webserver
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use('/github', router);
require('./webhooks/dukesfotobot')(router, bot);
app.listen(8081);

// Require handler
require('./handler/onText')(bot);
require('./handler/onPhoto')(bot);

console.log('DukesFotoBot ist wach, gefüttert und schnüffelbereit!\n');