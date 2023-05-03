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
  
  router.get('/customer/findAll', controller.customer.findAll);
  router.get('/customer/findCustomerById',controller.customer.findCustomerById);
  router.get('/customer/pageQuery',controller.customer.pageQuery);
  router.post('/customer/saveOrUpdate',jwt, controller.customer.saveOrUpdate);
  router.delete('/customer/deleteById/:id',jwt, controller.customer.deleteById);

  router.get('/bill/findAll', controller.bill.findAll);
  router.get('/bill/findBillById',controller.bill.findBillById);
  router.get('/bill/pageQuery',controller.bill.pageQuery);
  router.post('/bill/saveOrUpdate',jwt, controller.bill.saveOrUpdate);
  router.delete('/bill/deleteById/:id',jwt, controller.bill.deleteById);

  router.get('/carrier/findAll', controller.carrier.findAll);
  router.get('/carrier/findCarrierById',controller.carrier.findCarrierById);
  router.get('/carrier/pageQuery',controller.carrier.pageQuery);
  router.post('/carrier/saveOrUpdate',jwt, controller.carrier.saveOrUpdate);
  router.delete('/carrier/deleteById/:id',jwt, controller.carrier.deleteById);

  router.get('/list/findAll', controller.list.findAll);
  router.get('/list/findListById',jwt, controller.list.findListById);
  router.get('/list/pageQuery',controller.list.pageQuery);
  router.post('/list/saveOrUpdateList',jwt, controller.list.saveOrUpdateList);
  router.delete('/list/deleteList', controller.list.deleteList);
  
  router.get('/trans/findAll', controller.trans.findAll);
  router.get('/trans/findTransById',jwt, controller.trans.findTransById);
  router.get('/trans/pageQuery',controller.trans.pageQuery);
  router.post('/trans/saveOrUpdateTrans',jwt, controller.trans.saveOrUpdateTrans);
  router.delete('/trans/deleteTrans', controller.trans.deleteTrans);
  
  router.get('/stock/findAll',jwt, controller.stock.findAll);
  router.get('/stock/findStockById', controller.list.findListById);
  router.post('/stock/saveOrUpdateStock',jwt, controller.list.saveOrUpdateList);

  // router.get('/client/findAll',jwt,controller.client.findAll);
};
