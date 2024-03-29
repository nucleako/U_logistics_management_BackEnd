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
		const { ctx } = this;// context可以获取请求对象、响应对象
		// ctx.body = 'carrier config successed';//响应体数据=》自动转json
		// console.log(ctx.request.query);
		const data = await ctx.service.carrier.findAll();// promise
		// console.log(data);
		ctx.body = { code: 200, message: 'success', data, time: new Date().getTime() };// 响应体数据=》自动转json
	}

	/**
   * @Router get /carrier/findCarrierById
   * @Summary 依据某条信息查询
   * @Description 任意信息皆可、仅返回一条内容
   * @Request query number id
   * @apikey
   */
	async findCarrierById() {
		const { ctx } = this;
		const res = await ctx.service.carrier.findCarrierById(ctx.query);// promise
		if (!res) {
			ctx.body = { code: 404, message: 'No related information was found.', res, time: new Date().getTime() };
			ctx.status = 404;
		} else {
			const data = [ res ];
			ctx.response.body = { message: 'success', data, time: new Date().getTime() };
		}
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
		if (!data) {
			ctx.body = { message: 'No related information was found.', res, time: new Date().getTime() };
			ctx.status = 404;
		} else {
			ctx.response.body = { message: 'success', data, time: new Date().getTime() };
		}
	}
	// async pageQuery(){
	//   const { ctx } = this;
	//   const { page, pageSize } = ctx.query;
	//   const data = await ctx.service.carrier.pageQuery(page, pageSize);//promise
	//   ctx.response.body = {code:200,message:'success',data,time:new Date().getTime()};//响应体数据=》自动转json
	// }

	/**
   * @Router post /carrier/saveOrUpdate
   * @Summary 新增或修改
   * @Description 添加或修改某一承运商数据
   * @Request body carrier  *body
   * @apikey
   */
	async saveOrUpdate() {
		const { ctx } = this;// context可以获取请求对象、响应对象
		console.log(ctx.request.body);
		const data = await ctx.service.carrier.saveOrUpdate(ctx.request.body);// promise

		if (data && data.affectedRows !== 0) {
			ctx.body = { code: 200, message: 'success', data, time: new Date().getTime() };
		} else {
			ctx.body = { code: 500, message: 'failed', data, time: new Date().getTime() };
			ctx.status = 500;
		}
	}


	/**
     * @router get /carrier/deleteCarrier/{id}
     * @summary 删除一条承运商数据    ？无删除
     * @description 删除一条承运商数据
     * @request path number *id 承运商id
     * @apikey
     */
	async deleteCarrier() {
		const { ctx } = this;
		const id = ctx.params.id;
		const result = await ctx.service.carrier.deleteById(id);
		if (result && result.affectedRows !== 0) {
			ctx.body = { code: 200, message: '删除成功', time: new Date().getTime() };
		} else {
			ctx.body = { code: 500, message: '删除失败', time: new Date().getTime() };
		}
	}

	/**
   * @Router get /carrier/deleteById
   * @Summary 删除！
   * @Description 删除一条数据
   * @Request query number id
   */
	async deleteById() {
		const { ctx } = this;// context可以获取请求对象、响应对象
		console.log(ctx.query);
		const result = await ctx.service.carrier.deleteById(ctx.query.id);// promise
		if (result && result.affectedRows !== 0) {
			ctx.body = { code: 200, message: '删除成功', time: new Date().getTime() };
		} else {
			ctx.status = 500;
			ctx.body = { code: 500, message: '删除失败', time: new Date().getTime() };
		}
	}
}


module.exports = CarrierController;
