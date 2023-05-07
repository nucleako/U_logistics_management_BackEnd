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
   * @Router get /trans/findTransById
   * @Summary 依据某条信息查询
   * @Description 任意信息皆可、仅返回一条内容
   * @Request query number id
   * @apikey   
   */
  async findTransById(){
    const { ctx } = this;//context可以获取请求对象、响应对象
    const res = await ctx.service.trans.findTransById(ctx.query);//promise
    var data =[res,0]
    ctx.response.body = {code:200,message:'success',data,time:new Date().getTime()};//响应体数据=》自动转json
  }

  /**
   * @Router post /trans/saveOrUpdateTrans
   * @Summary 新增或修改
   * @Description 新增或修改一项数据
   * @request query string data 请求参数
   * @apikey
   */
  async saveOrUpdateTrans(){
    const { ctx } = this;
    const { id, ...rest } = ctx.request.body;
    console.log( ctx.request.body);
    // 根据请求中是否带有 id 判断是新增还是修改操作
    let data = await ctx.service.trans.saveOrUpdateTrans({ id, ...rest });
  
    ctx.body={code:200,message:'success',data,time:new Date().getTime()};
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
    ctx.response.body = { code: 200, message: 'success', data, time: new Date().getTime() };
  }

  /**
   * @Router delete /trans/deleteTrans
   * @Summary 删除！
   * @Description 删除所有数据！！！
   * @Request query number id
   */
  async deleteTrans(){
    const { ctx } = this;//context可以获取请求对象、响应对象
    const data = await ctx.service.trans.deleteTrans(ctx.query.id);//promise
    console.log(ctx.query);
    ctx.response.body = {code:200,message:'success',data,time:new Date().getTime()};//响应体数据=》自动转json
  }
}

module.exports = TransController;
