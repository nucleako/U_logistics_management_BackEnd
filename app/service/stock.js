const { Service } = require('egg');


class StockService extends Service {

	async findAll() { // 查询员工逻辑并返回数据
		// const res = this.app.mysql.get('base_role');//获取数据
		// var sql = 'select * from base_role' //query
		const sql = 'stock';
		const res = await this.app.mysql.select(sql);// 获取数据
		return res;
	}

	async findstockById(query) { // 查询员工逻辑并返回数据
		// console.log(query);
		this.ctx.validate({
			id: { type: 'Number' },
		});
		const res = await this.app.mysql.get('stock', query);// 获取数据
		return res;
	}

	async saveOrUpdatestock(data) {
		if (data.id) {
			var res = await this.app.mysql.update('stock', data);// 获取数据
		} else {
			var res = await this.app.mysql.insert('stock', data);// 获取数据
		}
		return res;
	}

	async deleteStock(data) {
		const res = {};// = await this.app.mysql.delete('stock', data);//极其危险、删掉了整个数据库
		console.log(data + '11111');
		return res;
	}
}

module.exports = StockService;
