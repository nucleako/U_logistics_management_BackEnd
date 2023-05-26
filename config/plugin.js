'use strict';

/** @type Egg.EggPlugin */
module.exports = {
  // had enabled by egg
  // static: {
  //   enable: true,
  // }
  mysql : {
    enable: true,
    package: 'egg-mysql',
  },
  cors : {
    enable: true,
    package: 'egg-cors',
  },
  validate : {
    enable: true,
    package: 'egg-validate',
  },
  jwt : {
    enable: true,
    package: 'egg-jwt',
  },
  swaggerdoc : {
    enable: true,
    package: 'egg-swagger-docs',
  }
};
