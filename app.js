var fs = require('fs'),
	telegramBot = require('node-telegram-bot-api'),
	token = fs.readFileSync('./token.txt', 'utf8'),
	bot = new telegramBot(token, {polling: true});

// Require handler
require('./handler/onText')(bot);
require('./handler/onPhoto')(bot);

console.log('DukesFotoBot ist wach, gefüttert und schnüffelbereit!\n');