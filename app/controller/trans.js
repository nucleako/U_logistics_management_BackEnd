'use strict';

const { Controller } = require('egg');

/**
 * @Controller TransController:运单列表模块
 * @apikey
 */
class TransController extends Controller {

  /**
   * @Router get /trans/findAll
   * @Summary 查询所有运单信息
   * @apikey
   */
  async findAll() {
    const { ctx } = this;//context可以获取请求对象、响应对象
    // ctx.body = 'trans config successed';//响应体数据=》自动转json
    // console.log(ctx.request.query);
    const data = await ctx.service.trans.findAll();//promise
    ctx.body = {code:200,message:'success',data,time:new Date().getTime()};//响应体数据=》自动转json
  }

  /**
   * @Router get /trans/findOneTrans
   * @Summary 依据某条信息查询
   * @Description 任意信息皆可、仅返回一条内容
   * @Request query number id
   * @Request query number OrderID
   * @Request query number CarrierId
   * @apikey   
   */
  async findOneTrans(){
    const { ctx } = this;//context可以获取请求对象、响应对象
    const res = await ctx.service.trans.findOneTrans(ctx.query);//promise
    if (!res) {
      ctx.body = {code:404,message:'No related information was found.',res,time:new Date().getTime()};
      ctx.status = 404;
    }else{      
      var data =[res,]
      ctx.response.body = {message:'success',data,time:new Date().getTime()};    
    }
  }

  /**
   * @Router post /trans/saveOrUpdateTrans
   * @Summary 新增或修改
   * @Description 新增或修改一项数据
   * @Request query number id 运单id
   * @Request query number OrderID 订单id
   * @Request query number CarrierId 承运商id
   * @Request query string goodstype  货物类型
   * @Request query number weight  货物重量
   * @Request query string Origin 发货地
   * @Request query string Destination 目的地  
   * @Request query string SendName 发件人名  
   * @Request query number SendPhone 发件人电话  
   * @Request query string SendAddress 发件地址  
   * @Request query string ReceiverName 收件人名  
   * @Request query number ReceiverPhone 收件人电话  
   * @Request query string ReceiverAddress 收件地址  
   * @Request query string money 金额  
   * @apikey
   */
  async saveOrUpdateTrans(){
    const { ctx } = this;
    let data = await ctx.service.trans.saveOrUpdateTrans(ctx.query);

    if (data && data.affectedRows !== 0) {
			ctx.body={code:200,message:'success', data ,time:new Date().getTime()};
		} else {
			ctx.body = { code: 500, message: 'failed', data ,time: new Date().getTime() };
			ctx.status = 500;
		}
  }
  
  /**
  * @tags 运单管理
  * @Router get /trans/pageQuery
  * @Summary 分页查询运单数据
  * @description 查询运单列表接口，支持分页和筛选条件
  * @request query integer page 页码，默认为1
  * @request query integer pageSize 每页显示数量，默认为10
  * @param number page.query - 当前页数
  * @param number pageSize.query - 每页显示的记录数
  * @apikey
  */

  async pageQuery() {
    const { ctx } = this;
    const page = parseInt(ctx.query.page) || 1;
    const pageSize = parseInt(ctx.query.pageSize) || 10;
    const data = await ctx.service.trans.pageQuery(page, pageSize);
    if (!data) {
      ctx.body = { message:'No related information was found.',res,time:new Date().getTime()};
      ctx.status = 404;
    }else{      
      ctx.response.body = { message: 'success', data, time: new Date().getTime() };
    }  
  }

  /**
   * @Router get /trans/deleteTrans
   * @Summary 删除！
   * @Description 删除所有数据！！！
   * @Request query number id
   */
  async deleteTrans(){
    const { ctx } = this;//context可以获取请求对象、响应对象
    const result = await ctx.service.trans.deleteTrans(ctx.query.id);//promise
    if (result && result.affectedRows !== 0) {
      ctx.body = { code: 200, message: '删除成功', time: new Date().getTime() };
    } else {
      ctx.status = 500;
      ctx.body = { code: 500, message: '删除失败', time: new Date().getTime() };
    }
  }
}
module.exports = TransController;
