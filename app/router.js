'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller ,jwt} = app;

  router.get('/', controller.home.index);
  router.post('/user/login', controller.user.login);
  router.post('/user/logout', controller.user.logout);
  router.get('/user/findAll', jwt,controller.user.findAll);
  router.get('/user/findUserById',jwt,controller.user.findUserById);
  router.get('/user/findInfoByToken',jwt,controller.user.findInfoByToken);
  router.get('/user/pageQuery',controller.user.pageQuery);
  router.post('/user/saveOrUpdate',jwt, controller.user.saveOrUpdate);
  router.get('/user/deleteUser/:id',jwt, controller.user.deleteUser);
  router.get('/user/deleteById', jwt,controller.user.deleteById);
  
  router.get('/customer/findAll', jwt,controller.customer.findAll);
  router.get('/customer/findCustomerById',jwt,controller.customer.findCustomerById);
  router.get('/customer/pageQuery',controller.customer.pageQuery);
  router.post('/customer/saveOrUpdate', jwt,controller.customer.saveOrUpdate);
  router.get('/customer/deleteCustomer/:id', jwt,controller.customer.deleteCustomer);
  router.get('/customer/deleteById', jwt,controller.customer.deleteById);

  router.get('/bill/findAll', jwt,controller.bill.findAll);
  router.get('/bill/findBillById',jwt,controller.bill.findBillById);
  router.get('/bill/pageQuery',jwt,controller.bill.pageQuery);
  router.post('/bill/saveOrUpdate', jwt,controller.bill.saveOrUpdate);
  router.get('/bill/deleteBill/:id', jwt,controller.bill.deleteBill);
  router.get('/bill/deleteById', jwt,controller.bill.deleteById);

  router.get('/carrier/findAll', jwt,controller.carrier.findAll);
  router.get('/carrier/findCarrierById',jwt,controller.carrier.findCarrierById);
  router.get('/carrier/pageQuery',jwt,controller.carrier.pageQuery);
  router.post('/carrier/saveOrUpdate',jwt, controller.carrier.saveOrUpdate);
  router.get('/carrier/deleteCarrier/:id',jwt, controller.carrier.deleteCarrier);
  router.get('/carrier/deleteById', jwt,controller.carrier.deleteById);

  router.get('/list/findAll',jwt, controller.list.findAll);
  router.get('/list/findListById',jwt, controller.list.findListById);
  router.get('/list/pageQuery',jwt,controller.list.pageQuery);
  router.post('/list/saveOrUpdateList', jwt,controller.list.saveOrUpdateList);
  router.get('/list/deleteList', jwt,controller.list.deleteList);
  
  router.get('/trans/findAll', jwt,controller.trans.findAll);
  router.get('/trans/findOneTrans', jwt,controller.trans.findOneTrans);
  router.get('/trans/pageQuery',jwt,controller.trans.pageQuery);
  router.post('/trans/saveOrUpdateTrans', jwt,controller.trans.saveOrUpdateTrans);
  router.get('/trans/deleteTrans',jwt, controller.trans.deleteTrans);
  
  router.get('/stock/findAll', controller.stock.findAll);
  router.get('/stock/findStockById',jwt, controller.list.findListById);
  router.post('/stock/saveOrUpdateStock',jwt, controller.list.saveOrUpdateList);

  // router.get('/client/findAll',jwt,controller.client.findAll);
};
