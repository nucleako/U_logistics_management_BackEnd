module.exports = {//指定用户模块中数据的格式
    login:{
        username:{
            type: 'string',
            require: true,
            example: 'admin1'
        },
        password:{
            type: 'string',
            require: true,
            example: '123321'
        },
    }
}