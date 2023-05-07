'use strict';

const { Controller } = require('egg');

/**
 * @Controller ListController:订单列表模块
 * @apikey
 */
class ListController extends Controller {

  /**
   * @Router get /list/findAll
   * @Summary 查询所有订单信息
   * @apikey
   */
  async findAll() {
    const { ctx } = this;//context可以获取请求对象、响应对象
    // ctx.body = 'list config successed';//响应体数据=》自动转json
    // console.log(ctx.request.query);
    const data = await ctx.service.list.findAll();//promise
    // console.log(data);
    ctx.body = {code:200,message:'success',data,time:new Date().getTime()};//响应体数据=》自动转json
  }

  /**
   * @Router get /list/findListById
   * @Summary 依据某条信息查询
   * @Description 任意信息皆可、仅返回一条内容
   * @Request query number id
   * @apikey   
   */
  async findListById(){
    const { ctx } = this;//context可以获取请求对象、响应对象
    const res = await ctx.service.list.findListById(ctx.query);//promise
    var data =[res,0]
    ctx.response.body = {code:200,message:'success',data,time:new Date().getTime()};//响应体数据=》自动转json
  }

  /**
   * @Router post /list/saveOrUpdateList
   * @Summary 新增或删除
   * @Description 修改某一项数据
   * @apikey
   */
  async saveOrUpdateList(){
    const { ctx } = this;//context可以获取请求对象、响应对象
    ctx.validate({
      name: { type : 'string' }
    })
    console.log(ctx.request.body);
    const data = await ctx.service.list.saveOrUpdateList(ctx.request.body);//promise
    ctx.body={code:200,message:'success',data,time:new Date().getTime()};
  }
  
  /**
  * @tags 订单管理
  * @Router get /list/pageQuery
  * @Summary 分页查询订单数据
  * @description 查询订单列表接口，支持分页和筛选条件
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
    const data = await ctx.service.list.pageQuery(page, pageSize);
    ctx.response.body = { code: 200, message: 'success', data, time: new Date().getTime() };
  }

  /**
   * @Router delete /list/deleteList
   * @Summary 删除！
   * @Description 修改所有数据！！！
   * @Request query number id
   */
  async deleteList(){
    const { ctx } = this;//context可以获取请求对象、响应对象
    const data = await ctx.service.list.deleteList(ctx.query.id);//promise
    console.log(ctx.query);
    ctx.response.body = {code:200,message:'success',data,time:new Date().getTime()};//响应体数据=》自动转json
  }

}

module.exports = ListController;
