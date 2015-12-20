var bot;

var callback = function(msg){
    console.log(msg);
    var antwort = 'Danke.';
    var path = '.'; //TODO
    bot.sendMessage(msg.chat.id, antwort);
    bot.downloadFile(msg.photo[0].file_id, path + '/thumbnails/');
    bot.downloadFile(msg.photo[msg.photo.length-1].file_id, path + '/fullsize/');
};

module.exports = function(telegramBot) {
    bot = telegramBot;
    bot.on('photo', callback);
};

//{ message_id: 367,
//    from:
//    chat:
//    date: 1450639447,
//        photo:
//    [ { file_id: 'AgADAgADAqgxGyM3ZAL5EFkjxK-6BqvygioABKaj-RSMGNxlhHMAAgI',
//        file_size: 1326,
//        width: 90,
//        height: 60 },
//        { file_id: 'AgADAgADAqgxGyM3ZAL5EFkjxK-6BqvygioABHNNsMrlhrbDg3MAAgI',
//            file_size: 12663,
//            width: 320,
//            height: 213 },
//        { file_id: 'AgADAgADAqgxGyM3ZAL5EFkjxK-6BqvygioABAsfQa4tF7V9gnMAAgI',
//            file_size: 36566,
//            width: 800,
//            height: 533 } ] }
