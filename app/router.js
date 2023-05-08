'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller ,jwt} = app;

  router.get('/', controller.home.index);
  router.post('/user/login', controller.user.login);
  router.post('/user/logout', controller.user.logout);
  router.get('/user/findAll', controller.user.findAll);
  router.get('/user/findUserById',controller.user.findUserById);
  router.get('/user/pageQuery',controller.user.pageQuery);
  router.post('/user/saveOrUpdate', controller.user.saveOrUpdate);
  router.get('/user/deleteById/:id', controller.user.deleteById);
  
  router.get('/customer/findAll', controller.customer.findAll);
  router.get('/customer/findCustomerById',controller.customer.findCustomerById);
  router.get('/customer/pageQuery',controller.customer.pageQuery);
  router.post('/customer/saveOrUpdate', controller.customer.saveOrUpdate);
  router.get('/customer/deleteById/:id', controller.customer.deleteById);

  router.get('/bill/findAll', controller.bill.findAll);
  router.get('/bill/findBillById',controller.bill.findBillById);
  router.get('/bill/pageQuery',controller.bill.pageQuery);
  router.post('/bill/saveOrUpdate', controller.bill.saveOrUpdate);
  router.get('/bill/deleteById/:id', controller.bill.deleteById);

  router.get('/carrier/findAll', controller.carrier.findAll);
  router.get('/carrier/findCarrierById',controller.carrier.findCarrierById);
  router.get('/carrier/pageQuery',controller.carrier.pageQuery);
  router.post('/carrier/saveOrUpdate', controller.carrier.saveOrUpdate);
  router.get('/carrier/deleteById/:id', controller.carrier.deleteById);

  router.get('/list/findAll', controller.list.findAll);
  router.get('/list/findListById', controller.list.findListById);
  router.get('/list/pageQuery',controller.list.pageQuery);
  router.post('/list/saveOrUpdateList', controller.list.saveOrUpdateList);
  router.get('/list/deleteList', controller.list.deleteList);
  
  router.get('/trans/findAll', controller.trans.findAll);
  router.get('/trans/findOneTrans', controller.trans.findOneTrans);
  router.get('/trans/pageQuery',controller.trans.pageQuery);
  router.post('/trans/saveOrUpdateTrans', controller.trans.saveOrUpdateTrans);
  router.get('/trans/deleteTrans', controller.trans.deleteTrans);
  
  router.get('/stock/findAll', controller.stock.findAll);
  router.get('/stock/findStockById', controller.list.findListById);
  router.post('/stock/saveOrUpdateStock', controller.list.saveOrUpdateList);

  // router.get('/client/findAll',jwt,controller.client.findAll);
};
