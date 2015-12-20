module.exports = function(router, bot) {
	router.post('/dukesfotobot', function(req, res) {
		console.log(req.body);
		var chatId = '1384527',
			user = req.body.sender.login,
			repo = req.body.repository.full_name;
		bot.sendMessage(chatId, user + ' pushed to ' + repo);
		bot.sendMessage('-63867549', user + ' pushed to ' + repo);
		res.send('ok');
	});

	// Debug only
	//router.get('/dukesfotobot', function(req, res) {
	//	bot.sendMessage('1384527', 'Webhook foo');
	//	res.send('foo');
	//});

};