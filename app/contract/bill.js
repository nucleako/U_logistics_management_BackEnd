module.exports = { // 指定对账单模块中数据的格式
	Bill: {
		id: {
			type: 'number',
			require: true,
			example: '1',
		},
		OrderID: {
			type: 'number',
			require: true,
			example: '3333',
		},
		price: {
			type: 'number',
			require: true,
			example: '3333',
		},
		state: {
			type: 'number',
			require: true,
			example: '0',
		},
		date: {
			type: 'string',
			require: true,
			example: '2023-05-12 17:05:13',
		},
	},
};
