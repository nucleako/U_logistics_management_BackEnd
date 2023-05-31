module.exports = { // 指定订单模块中数据的格式
	list: {
		id: {
			type: 'number',
			require: true,
			example: '1',
		},
		OrderPrice: {
			type: 'string',
			require: true,
			example: '熊文杰',
		},
		OrderStatus: {
			type: 'number',
			require: true,
			example: '河南省南阳市邓州市小杨营镇',
		},
		OrderDate: {
			type: 'string',
			require: true,
			example: '123456',
		},


		SdCustomerID: {
			type: 'number',
			require: true,
			example: '1',
		},
		SdCustomerName: {
			type: 'string',
			require: true,
			example: '熊文杰',
		},
		SdCustomerPhone: {
			type: 'number',
			require: false,
			example: '123456',
		},
		SdCustomerGender: {
			type: 'number',
			require: true,
			example: '1',
		},
		SdCustomerCompanyName: {
			type: 'string',
			require: false,
			example: '市辖区谊耀尚服务有限责任公司',
		},
		SdCustomerAddress: {
			type: 'string',
			require: true,
			example: '河南省南阳市邓州市小杨营镇',
		},

		RcvCustomerID: {
			type: 'number',
			require: true,
			example: '4',
		},
		RcvCustomerName: {
			type: 'string',
			require: true,
			example: '范淑华',
		},
		RcvCustomerPhone: {
			type: 'number',
			require: false,
			example: '123456',
		},
		RcvCustomerGender: {
			type: 'number',
			require: true,
			example: '0',
		},
		RcvCustomerCompanyName: {
			type: 'string',
			require: false,
			example: '海南藏族自治州威旺英哲计算机有限公司',
		},
		RcvCustomerAddress: {
			type: 'string',
			require: true,
			example: '福建省漳州市平和县五寨乡',
		},
	},
};
