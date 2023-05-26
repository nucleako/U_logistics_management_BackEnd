/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1676906890368_7755';

  // add your middleware config here
  config.middleware = ['errorHandler',];

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
    
	mysql : {
      // 单数据库信息配置
      client: {
        // host
        host: 'localhost',
        // 端口号
        port: '3306',
        // 用户名
        user: 'root',
        // 密码
        password: 'root',
        // 数据库名
        database: 'wlxt',
      },
      // 是否加载到 app 上，默认开启
      app: true,
      // 是否加载到 agent 上，默认关闭
      agent: false,
    },
    
	cors:{
      origin:'*',
      allowMethods:'GET,HEAD,PUT,POST,DELETE,PATCH'
    },
    
	security:{
      csrf:{
        enable:false,
      }
    },
    
	jwt:{//token密钥
      secret:'888888'
    },

  session:{
    key: 'SESSION_ID',
    maxAge: 24 * 3600 * 1000, // 1 天
    httpOnly: true,
    encrypt: true,
  },

    swaggerdoc: {
      dirScanner: "./app/controller", // 配置⾃动扫描的控制器路径
      apiInfo: {
        title: "LoDp物流管理系统", // 接⼝⽂档标题
        description: "物流管理系统接⼝⽂档", // 接⼝⽂档描述
        version: "1.1.0", // 接⼝⽂档版本
      },
      schemes: ["http", "https"], // 配置⽀持的协议
      consumes: ["application/json","application/x-www-form-urlencoded"], // 指定处理请求的提交内容类型(Content-Type)
      produces: ["application/json"], // 指定返回的内容类型
      securityDefinitions: { //安全认证
        apikey: {
          description: 'Authorization format: Bearer {token}', //描述
          type: 'apiKey', //类型
          name: 'Authorization', // 名称
          in: 'header' //存在位置
        }
      },
      enableSecurity: true, // 是否启⽤授权（默认false不启⽤）
      enableValidate: true, // 是否启动参数校验（默认true开启）
      routerMap: false, // 是否⾃动⽣成路由（默认true开启）
      enable: true,
    }
  };

  return {
    ...config,
    ...userConfig,
  };
};
