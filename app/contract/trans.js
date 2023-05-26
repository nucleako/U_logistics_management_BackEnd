module.exports = {//指定订单模块中数据的格式
    trans:{
        id:{
            type: 'number',
            require: true,
            example: '1'
        },
        OrderID:{
            type: 'number',
            require: false,
            example: '熊文杰'
        },
        CarrierId:{
            type: 'number',
            require: false,
            example: '河南省南阳市邓州市小杨营镇'
        },
        goodstype:{
            type: 'string',
            require: false,
            example: '123456'
        },


        weight:{
            type: 'number',
            require: false,
            example: '1'
        },
        Origin:{
            type: 'string',
            require: false,
            example: '熊文杰'
        },
        Destination:{
            type: 'string',
            require: false,
            example: '123456'
        },

        SendName:{
            type: 'string',
            require: false,
            example: '1'
        },
        SendPhone:{
            type: 'number',
            require: false,
            example: '市辖区谊耀尚服务有限责任公司'
        },
        SendAddress:{
            type: 'string',
            require: false,
            example: '河南省南阳市邓州市小杨营镇'
        },

        ReceiverName:{
            type: 'string',
            require: false,
            example: '1'
        },
        ReceiverPhone:{
            type: 'number',
            require: false,
            example: '市辖区谊耀尚服务有限责任公司'
        },
        ReceiverAddress:{
            type: 'string',
            require: false,
            example: '河南省南阳市邓州市小杨营镇'
        },

        money:{
            type: 'number',
            require: false,
            example: '4'
        },
        
    }
}