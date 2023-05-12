module.exports = {//指定对账单模块中数据的格式
    customer:{
        id:{
            type: 'number',
            require: true,
            example: '1'
        },
        name:{
            type: 'string',
            require: true,
            example: '熊文杰'
        },
        addr:{
            type: 'string',
            require: true,
            example: '河南省南阳市邓州市小杨营镇'
        },
        phone:{
            type: 'number',
            require: false,
            example: '123456'
        },
        gender:{
            type: 'number',
            require: true,
            example: '1'
        },
        CompanyName:{
            type: 'string',
            require: false,
            example: '市辖区谊耀尚服务有限责任公司'
        },
    }
}