'use strict';

const { Controller } = require('egg');

/**
 * @Controller CarrierController:承运商管理模块
 */

class CarrierController extends Controller {

  /**
   * @Router get /carrier/findAll
   * @Summary 查询所有承运商信息
   * @apikey
   */
  async findAll() {
    const { ctx } = this;//context可以获取请求对象、响应对象
    // ctx.body = 'carrier config successed';//响应体数据=》自动转json
    // console.log(ctx.request.query);
    const data = await ctx.service.carrier.findAll();//promise
    // console.log(data);
    ctx.body = {state:200,message:'success',data,time:new Date().getTime()};//响应体数据=》自动转json
  }

  /**
   * @Router get /carrier/findCarrierById
   * @Summary 依据某条信息查询
   * @Description 任意信息皆可、仅返回一条内容
   * @Request query number id
   * @apikey
   */
  async findCarrierById(){
    const { ctx } = this;
    const data = await ctx.service.carrier.findCarrierById(ctx.query);//promise
    ctx.response.body = {state:200,message:'success',data,time:new Date().getTime()};//响应体数据=》自动转json
  }

  /**
  * @tags 承运商管理
  * @Router get /carrier/pageQuery
  * @Summary 分页查询承运商数据
  * @description 查询承运商列表接口，支持分页和筛选条件
  *@request query integer page 页码，默认为1
  * @request query integer pageSize 每页显示数量，默认为10
  * @param number page.query - 当前页数
  * @param number pageSize.query - 每页显示的记录数
  * @apikey
  */

  async pageQuery() {
    const { ctx } = this;
    const page = parseInt(ctx.query.page) || 1;
    const pageSize = parseInt(ctx.query.pageSize) || 10;
    const data = await ctx.service.carrier.pageQuery(page, pageSize);
    ctx.response.body = { state: 200, message: 'success', data, time: new Date().getTime() };
  }
  // async pageQuery(){
  //   const { ctx } = this;
  //   const { page, pageSize } = ctx.query;
  //   const data = await ctx.service.carrier.pageQuery(page, pageSize);//promise
  //   ctx.response.body = {state:200,message:'success',data,time:new Date().getTime()};//响应体数据=》自动转json
  // }

  /**
   * @Router post /carrier/saveOrUpdateCarrier
   * @Summary 新增或修改
   * @Description 添加或修改某一承运商数据
   * @Request query string
   * @apikey
   */
  async saveOrUpdate(){
    const { ctx } = this;//context可以获取请求对象、响应对象
    const data = await ctx.service.carrier.saveOrUpdate(ctx.request.body);//promise
    ctx.body={state:200,message:'success',data,time:new Date().getTime()};

  }


  /**
     * @router delete /carrier/deleteById/{id}
     * @summary 删除一条承运商数据
     * @description 删除一条承运商数据
     * @request path number *id 承运商id
     * @apikey
     */
  async deleteById() {
    const { ctx } = this;
    const id = ctx.params.id;
    console.log(11111111111);
    console.log(ctx.params);
    // 调用 service 层的方法删除数据
    const result = await ctx.service.carrier.deleteById(id);
    console.log(result);
    if (result && result.affectedRows !== 0) {
      ctx.body = { state: 200, message: '删除成功', time: new Date().getTime() };
    } else {
      ctx.body = { state: 500, message: '删除失败', time: new Date().getTime() };
    }
  }
}



module.exports = CarrierController;
