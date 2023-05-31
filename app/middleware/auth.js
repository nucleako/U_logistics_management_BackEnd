// 文件位置：app/middleware/auth.js
const jwt = require('jsonwebtoken');

module.exports = options => {
	// 返回一个 async function 作为 middleware
	return async function auth(ctx, next) {
		try {
			// 从请求头部分解析 token
			const token = ctx.header.split(' ')[1];
			// 验证 token 是否有效
			const decoded = jwt.verify(token, options.secret);
			// 将解码后的用户信息保存在请求上下文中
			ctx.state.user = decoded;
			await next();
		} catch (err) {
			ctx.status = 401;
			ctx.body = { message: '无效的认证凭据' };
		}
	};
};
