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
	  console.log(ctx);
	  this.ctx.cookies.set('token', null);
	  ctx.session = null;
	  // 重定向到登录页面
	  ctx.redirect('/login');
	  console.log('user logout!');
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
	  }
	}

	/**
	 * @Router get /user/findInfoByToken
	 * @Summary 根据认证token查询用户信息
	 * @Description 仅返回一条内容
	 * @Header Authorization 认证token
	 * @apikey
	 */
	async findInfoByToken() {
		const { ctx } = this;
		console.log(ctx.request);

		const token = ctx.headers.authorization ? ctx.headers.authorization.split(' ')[1] : ''; // 从请求头中获取 token
		// console.log(token);
		const decoded = this.app.jwt.verify(token, this.app.config.jwt.secret); // 解析 token，获取用户信息
		console.log(decoded);
		const data = await ctx.service.user.findUserById({username:decoded.username}); // 根据用户 id 查找用户信息
	  
		if (!data) {
		ctx.body = { code: 404, message: 'No related information was found.', res, time: new Date().getTime() };
		ctx.status = 404;
		} else {
		ctx.body = { message: 'success', data, time: new Date().getTime() };
		}
	}
	
  

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
	 * @Router post /user/saveOrUpdate
	 * @Summary 新增或修改
	 * @Description 添加或修改某一用户数据
  	 * @Request body user  *body
	 * @apikey
	 */
	async saveOrUpdate(){
		const { ctx } = this;//context可以获取请求对象、响应对象
		const data = await ctx.service.user.saveOrUpdate(ctx.request.body);//promise
		ctx.body={code:200,message:'success',data,time:new Date().getTime()};

		if (data && data.affectedRows !== 0) {
			ctx.body={code:200,message:'success', data ,time:new Date().getTime()};
		} else {
			ctx.body = { code: 500, message: 'failed', data ,time: new Date().getTime() };
			ctx.status = 500;
		}
	}



	/**
	 * @router get /user/deleteUser/{id}
	 * @summary 删除一条用户数据
	 * @description 删除一条用户数据
	 * @request path number *id 用户id
	 * @apikey
	 */
	async deleteUser() {
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

  /**
   * @Router get /user/deleteById
   * @Summary 删除！
   * @Description 删除一条数据
   * @Request query number id
   */
  async deleteById(){
    const { ctx } = this;//context可以获取请求对象、响应对象
    const result = await ctx.service.user.deleteById(ctx.query.id);//promise
    if (result && result.affectedRows !== 0) {
      ctx.body = { code: 200, message: '删除成功', time: new Date().getTime() };
    } else {
      ctx.status = 500;
      ctx.body = { code: 500, message: '删除失败', time: new Date().getTime() };
    }
  }
}



module.exports = UserController;
