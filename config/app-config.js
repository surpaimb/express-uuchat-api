var config = {
	appName:'uuChat',
	smsSignName:'悠悠聊天',
	hostname:'http://127.0.0.1',
	port:process.env.PORT || 3000,

	debug:false,

	//jsonwebtoken
	secret:'superSecret',

	//bcrypt
	saltRounds:10,
};

config.host = config.hostname + ':' + config.port;

module.exports = config;