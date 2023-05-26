module.exports = {//指定承运商模块中数据的格式
    carrier:{
        id:{
            type: 'number',
            require: true,
            example: '1'
        },
        CarrierName:{
            type: 'string',
            require: true,
            example: '北京市香通笑餐饮股份有限公司'
        },
        name:{
            type: 'string',
            require: false,
            example: '郝春齐'
        },
        phone:{
            type: 'string',
            require: true,
            example: '19737461000'
        },
        location:{
            type: 'string',
            require: false,
            example: '湖北省随州市曾都区万店镇'
        },
    }
}