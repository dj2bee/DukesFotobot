module.exports = function(router, bot) {
	router.post('/dukesfotobot', function(req, res) {
		console.log(req.body);
		var chatId = '1384527',
			user = req.body.sender.login,
			repoName = req.body.repository.full_name,
			repoUrl = req.body.repository.url;
		bot.sendMessage(chatId, user + ' pushed to ' + repoName + '(' + repoUrl + ')');
		bot.sendMessage('-63867549', user + ' pushed to ' + repoName + '(' + repoUrl + ')');
		res.send('ok');
	});

	// Debug only
	//router.get('/dukesfotobot', function(req, res) {
	//	bot.sendMessage('1384527', 'Webhook foo');
	//	res.send('foo');
	//});

};