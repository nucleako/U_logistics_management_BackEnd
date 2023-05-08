'use strict';

const { Controller } = require('egg');

/**
 * @Controller CustomerController:客户模块
 */

class CustomerController extends Controller {

  /**
   * @Router get /customer/findAll
   * @Summary 查询所有客户信息
   * @apikey
   */
  async findAll() {
    const { ctx } = this;//context可以获取请求对象、响应对象
    // ctx.body = 'customer config successed';//响应体数据=》自动转json
    // console.log(ctx.request.query);
    const data = await ctx.service.customer.findAll();//promise
    // console.log(data);
    ctx.body = {code:200,message:'success',data,time:new Date().getTime()};//响应体数据=》自动转json
  }

  /**
   * @Router get /customer/findCustomerById
   * @Summary 依据某条信息查询
   * @Description 任意信息皆可、仅返回一条内容
   * @Request query number id
   * @apikey
   */
  async findCustomerById(){
    const { ctx } = this;
    const res = await ctx.service.customer.findCustomerById(ctx.query);//promise
    var data =[res,]
    if (!res) {
      ctx.body = {code:404,message:'No related information was found.',res,time:new Date().getTime()};
      ctx.status = 404;
    }else{      
      var data =[res,]
      ctx.response.body = {message:'success',data,time:new Date().getTime()};    
    }
  }

  /**
  * @tags 客户管理
  * @Router get /customer/pageQuery
  * @Summary 分页查询客户数据
  * @description 查询客户列表接口，支持分页和筛选条件
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
    const data = await ctx.service.customer.pageQuery(page, pageSize);
    if (!data) {
      ctx.body = { message:'No related information was found.',res,time:new Date().getTime()};
      ctx.status = 404;
    }else{      
      ctx.response.body = { message: 'success', data, time: new Date().getTime() };
    }
  }
  // async pageQuery(){
  //   const { ctx } = this;
  //   const { page, pageSize } = ctx.query;
  //   const data = await ctx.service.customer.pageQuery(page, pageSize);//promise
  //   ctx.response.body = {code:200,message:'success',data,time:new Date().getTime()};//响应体数据=》自动转json
  // }

  /**
   * @Router post /customer/saveOrUpdate
   * @Summary 新增或修改
   * @Description 添加或修改某一客户数据
   * @Request query number id id
   * @Request query string addr 地址
   * @Request query string name  姓名
   * @Request query number phone 电话号
   * @Request query number gender 性别
   * @Request query string CompanyName 位置信息
   * @apikey
   */
  async saveOrUpdate(){
    const { ctx } = this;//context可以获取请求对象、响应对象
    const data = await ctx.service.customer.saveOrUpdate(ctx.query);//promise
    ctx.body={code:200,message:'success',data,time:new Date().getTime()};

  }


  /**
     * @router delete /customer/deleteById/{id}
     * @summary 删除一条客户数据
     * @description 删除一条客户数据
     * @request path number *id 客户id
     * @apikey
     */
  async deleteById() {
    const { ctx } = this;
    const id = ctx.params.id;
    console.log(ctx.params);
    // 调用 service 层的方法删除数据
    const result = await ctx.service.customer.deleteById(id);
    console.log(result);
    if (result && result.affectedRows !== 0) {
      ctx.body = { code: 200, message: '删除成功', time: new Date().getTime() };
    } else {
      ctx.body = { code: 500, message: '删除失败', time: new Date().getTime() };
    }
  }
}



module.exports = CustomerController;
