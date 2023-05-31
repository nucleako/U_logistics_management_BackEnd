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
		const { ctx } = this;// context可以获取请求对象、响应对象
		// ctx.body = 'list config successed';//响应体数据=》自动转json
		// console.log(ctx.request.query);
		const data = await ctx.service.list.findAll();// promise

		ctx.body = { message: 'success', data, time: new Date().getTime() };// 响应体数据=》自动转json
	}

	/**
   * @Router get /list/findListById
   * @Summary 依据某条信息查询
   * @Description 任意信息皆可、仅返回一条内容
   * @Request query number id
   * @apikey
   */
	async findListById() {
		const { ctx } = this;// context可以获取请求对象、响应对象
		const res = await ctx.service.list.findListById(ctx.query);// promise
		if (!res) {
			ctx.body = { code: 404, message: 'No related information was found.', res, time: new Date().getTime() };
			ctx.status = 404;
		} else {
			const data = [ res ];
			ctx.response.body = { message: 'success', data, time: new Date().getTime() };
		}
	}

	/**
   * @Router post /list/saveOrUpdateList
   * @Summary 新增或修改
   * @Description 新增一条数据或修改某一项已有数据
   * @Request body list  *body
   * @apikey
   */
	async saveOrUpdateList() {
		const { ctx } = this;// context可以获取请求对象、响应对象
		const data = await ctx.service.list.saveOrUpdateList(ctx.request.body);// promise

		// if (data.success == true) {
		//   ctx.body={code:200,message:'success',data,time:new Date().getTime()};
		// } else {
		//   ctx.body = {code:500,message:'saveOrUpdate Failed.',data,time:new Date().getTime()};
		//   ctx.status = 500;
		// }

		if (data && data.affectedRows !== 0) {
			ctx.body = { code: 200, message: 'success', data, time: new Date().getTime() };
		} else {
			ctx.body = { code: 500, message: 'failed', data, time: new Date().getTime() };
			ctx.status = 500;
		}
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
		if (!data) {
			ctx.body = { message: 'No related information was found.', res, time: new Date().getTime() };
			ctx.status = 404;
		} else {
			ctx.response.body = { message: 'success', data, time: new Date().getTime() };
		}
	}

	/**
   * @Router get /list/deleteList
   * @Summary 删除！
   * @Description 删除一条数据
   * @Request query number id
   */
	async deleteList() {
		const { ctx } = this;// context可以获取请求对象、响应对象
		const result = await ctx.service.list.deleteList(ctx.query.id);// promise
		if (result && result.affectedRows !== 0) {
			ctx.body = { code: 200, message: '删除成功', time: new Date().getTime() };
		} else {
			ctx.status = 500;
			ctx.body = { code: 500, message: '删除失败', time: new Date().getTime() };
		}
	}
}

module.exports = ListController;
