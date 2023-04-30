'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller ,jwt} = app;

  router.get('/', controller.home.index);
  router.post('/user/login', controller.user.login);
  router.get('/user/findAll', controller.user.findAll);
  router.get('/user/findUserById',controller.user.findUserById);
  router.get('/user/pageQuery',controller.user.pageQuery);
  router.post('/user/saveOrUpdate',jwt, controller.user.saveOrUpdate);
  router.delete('/user/deleteById/:id',jwt, controller.user.deleteById);
  
  router.get('/list/findAll', controller.list.findAll);
  router.get('/list/findListById',jwt, controller.list.findListById);
  router.get('/list/pageQuery',controller.list.pageQuery);
  router.post('/list/saveOrUpdateList',jwt, controller.list.saveOrUpdateList);
  // router.delete('/list/deleteList', controller.list.deleteList);
  
  router.get('/stock/findAll',jwt, controller.stock.findAll);
  router.get('/stock/findStockById', controller.list.findListById);
  router.post('/stock/saveOrUpdateStock',jwt, controller.list.saveOrUpdateList);

  // router.get('/client/findAll',jwt,controller.client.findAll);
};
