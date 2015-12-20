module.exports = function(bot) {
	var callback = function(msg) {
		var text = msg.text;
		if(text[0] == '/') {
			var command = text.split(' ');
			switch(command[0]) {
				case '/sitz':
					bot.sendMessage(msg.chat.id, 'Okay, ich sitze!');
					break;
				case '/down':
					bot.sendMessage(msg.chat.id, 'Bäh! Der Boden ist kalt... Bekomme ich wenigstens einen Keks?');
					break;
				case '/touch':
					bot.sendMessage(msg.chat.id, 'Patsch! Kalte Nase trifft duftende Hand <3');
					break;
				case '/whtsp':
					bot.sendMessage(msg.chat.id, 'https://www.tagesschau.de/');
					break;
				default:
					bot.sendMessage(msg.chat.id, 'Das Kommando kenne ich noch nicht.');
			}
		}
		console.log(msg.from.first_name + ' (' + msg.from.username + ')' + ': ' + msg.text);
	};

	bot.on('text', callback);
};