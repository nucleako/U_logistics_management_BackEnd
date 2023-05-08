'use strict';

const { Controller } = require('egg');

/**
 * @Controller UserController:⽤户模块
 */

class UserController extends Controller {

    /**
     * @Router post /user/login
     * @Summary 登录接口
     * @Description 用户名密码
     * @Request body login  *body
     */
    async login(){
      const { ctx } = this;
      console.log(ctx.request.body);
      const token = await ctx.service.user.login(ctx.request.body);
      if (!token) {
        ctx.body = {code:401,message:'No authorization token was found',token,time:new Date().getTime()};
        ctx.status = 401;
      }else{      
        ctx.body = {code:200,message:'login success',token,time:new Date().getTime()};//响应体数据=》自动转json
      }
    }  

    /**
     * @Router post /user/logout
     * @Summary 登出接口
     * @Description 登出
     */
    async logout() {
      const { ctx } = this;
	  this.ctx.cookies.set('token', null);
      ctx.logout(); // 调用 ctx.logout() 方法清除当前 Session 中的用户信息将用户注销
      ctx.status = 200;
      ctx.body = { message: 'User has been logged out' };
    }


	/**
	 * @Router get /user/findAll
	 * @Summary 查询所有用户信息
	 * @apikey
	 */
	async findAll() {
	const { ctx } = this;//context可以获取请求对象、响应对象
	// ctx.body = 'user config successed';//响应体数据=》自动转json
	// console.log(ctx.request.query);
	const data = await ctx.service.user.findAll();//promise
	// console.log(data);
	ctx.body = {code:200,message:'success',data,time:new Date().getTime()};//响应体数据=》自动转json
	}

	/**
	 * @Router get /user/findUserById
	 * @Summary 依据某条信息查询
	 * @Description 任意信息皆可、仅返回一条内容
	 * @Request query number id
	 * @Request query string roles
	 * @Request query number gender
	 * @apikey
	 */
	async findUserById(){
	const { ctx } = this;
	const data = await ctx.service.user.findUserById(ctx.query);//promise
    if (!data) {
		ctx.body = {code:404,message:'No related information was found.',res,time:new Date().getTime()};
		ctx.status = 404;
	  }else{      
		ctx.response.body = {message:'success',data,time:new Date().getTime()};    
	  }	}

	/**
	 * @tags 用户管理
	 * @Router get /user/pageQuery
	 * @Summary 分页查询用户数据
	 * @description 查询用户列表接口，支持分页和筛选条件
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
	const data = await ctx.service.user.pageQuery(page, pageSize);
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
	//   const data = await ctx.service.user.pageQuery(page, pageSize);//promise
	//   ctx.response.body = {code:200,message:'success',data,time:new Date().getTime()};//响应体数据=》自动转json
	// }

	/**
	 * @Router post /user/saveOrUpdateUser
	 * @Summary 新增或修改
	 * @Description 添加或修改某一用户数据
	 * @Request query number id 用户id
	 * @Request query string username 用户名 	 
	 * @Request query string password 密码 	 
	 * @Request query string realname  真实姓名
	 * @Request query string roles 身份
	 * @Request query string introduction 简介  
 	 * @Request query string avatar  头像信息
	 * @Request query string gender 性别
	 * @Request query number telephone 联系电话  
	 * @apikey
	 */
	async saveOrUpdate(){
	const { ctx } = this;//context可以获取请求对象、响应对象
	const data = await ctx.service.user.saveOrUpdate(ctx.request.body);//promise
	ctx.body={code:200,message:'success',data,time:new Date().getTime()};

	}


	/**
	 * @router delete /user/deleteById/{id}
	 * @summary 删除一条用户数据
	 * @description 删除一条用户数据
	 * @request path number *id 用户id
	 * @apikey
	 */
	async deleteById() {
	const { ctx } = this;
	const id = ctx.params.id;
	console.log(11111111111);
	console.log(ctx.params);
	// 调用 service 层的方法删除数据
	const result = await ctx.service.user.deleteById(id);
	if (result && result.affectedRows !== 0) {
		ctx.body = { code: 200, message: '删除成功', time: new Date().getTime() };
	} else {
		ctx.body = { code: 500, message: '删除失败', time: new Date().getTime() };
	}
	}
}



module.exports = UserController;
