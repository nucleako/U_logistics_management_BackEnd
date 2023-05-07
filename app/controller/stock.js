'use strict';

const { Controller } = require('egg');

/**
 * @Controller StockController:库存管理模块
 * @apikey
 */
class StockController extends Controller {

  /**
   * @Router get /stock/findAll
   * @Summary 查询所有库存信息
   * @apikey
   */
  async findAll() {
    const { ctx } = this;//context可以获取请求对象、响应对象
    // ctx.body = 'Stock config successed';//响应体数据=》自动转json
    // console.log(ctx.request.query);
    const data = await ctx.service.stock.findAll();//promise
    // console.log(data);
    ctx.body = {code:200,message:'success',data,time:new Date().getTime()};//响应体数据=》自动转json
  }

  /**
   * @Router get /stock/findStockById
   * @Summary 依据某条信息查询
   * @Description 任意信息皆可、仅返回一条内容
   * @Request query number id
   * @apikey
   */
  async findStockById(){
    const { ctx } = this;//context可以获取请求对象、响应对象
    const res = await ctx.service.stock.findStockById(ctx.query);//promise
    var data =[res,0]
    ctx.response.body = {code:200,message:'success',data,time:new Date().getTime()};//响应体数据=》自动转json
  }

  /**
   * @Router post /stock/saveOrUpdateStock
   * @Summary 新增或删除
   * @Description 修改某一项数据
   * @apikey
   */
  async saveOrUpdateStock(){
    const { ctx } = this;//context可以获取请求对象、响应对象
    ctx.validate({
      name: { type : 'string' }
    })
    console.log(ctx.request.body);
    const data = await ctx.service.stock.saveOrUpdateStock(ctx.request.body);//promise
    ctx.body={code:200,message:'success',data,time:new Date().getTime()};
  }
  
  /**
   * @Router delete /stock/deleteStock
   * @Summary 删除！
   * @Description 修改所有数据！！！
   */
  async deleteStock(){
    const { ctx } = this;//context可以获取请求对象、响应对象
    const data = await ctx.service.stock.deleteStock(ctx.query);//promise
    console.log(ctx.query);
    ctx.response.body = {code:200,message:'success',data,time:new Date().getTime()};//响应体数据=》自动转json
  }
}

module.exports = StockController;
