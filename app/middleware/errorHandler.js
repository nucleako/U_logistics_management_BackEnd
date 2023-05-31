const Message = require('../utils/Message');

module.exports = () => {

	return async function errorHandler(ctx, next) {

		try {
			await next();
		} catch (err) {

			// 所有的异常都在 app 上触发⼀个 error 事件，框架会记录⼀条错误⽇志
			ctx.app.emit('error', err, ctx);
			const status = err.status || 500;
			// ⽣产环境时 500 错误的详细错误内容不返回给客户端，因为可能包含敏感信息
			const message = status === 500 ? 'Internal Server Error' : err.message;
			// 从 error 对象上读出各个属性，设置到响应中
			ctx.body = new Message(status, null, message);
			if (status === 422) {
				ctx.body.data = err.errors;
			}
			ctx.status = status;

		}
	};
};
