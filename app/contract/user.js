module.exports = { // 指定用户模块中数据的格式
	login: {
		username: {
			type: 'string',
			require: true,
			example: 'admin1',
		},
		password: {
			type: 'string',
			require: true,
			example: '123321',
		},
	},
	user: {
		id: {
			type: 'number',
			require: true,
			example: '1',
		},
		username: {
			type: 'string',
			require: true,
			example: 'user1',
		},
		password: {
			type: 'string',
			require: true,
			example: '123456',
		},
		realname: {
			type: 'string',
			require: false,
			example: '陆晨璐',
		},
		roles: {
			type: 'number',
			require: true,
			example: 'admin',
		},
		introduction: {
			type: 'string',
			require: false,
			example: '2号',
		},
		avatar: {
			type: 'string',
			require: false,
			example: 'https://www.pp3.cn/uploads/201502/2015021113.jpg',
		},
		gender: {
			type: 'number',
			require: true,
			example: '0',
		},
		telephone: {
			type: 'number',
			require: false,
			example: '19116656239',
		},
	},
};
