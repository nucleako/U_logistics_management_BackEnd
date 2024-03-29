const { Service } = require('egg');


class TransService extends Service {

	async findAll() { // 查询订单逻辑并返回数据
		// const res = this.app.mysql.get('base_role');//获取数据
		// var sql = 'select * from base_role' //query
		const sql = 'base_trans';
		const res = await this.app.mysql.select(sql);// 获取数据
		return res;
	}

	async findOneTrans(query) { // 查询订单逻辑并返回数据
		console.log(query);

		const res = await this.app.mysql.get('base_trans', query);// 获取数据
		return res;
	}

	// async saveOrUpdateTrans(data) {
	//     let res;
	//     if (data.id) {
	//       res = await this.app.mysql.update('base_trans', data);
	//     } else {
	//       res = await this.app.mysql.insert('base_trans', data);
	//     }
	//     return res;
	//   }
	async saveOrUpdateTrans(data) {
		const dataid = await this.app.mysql.get('base_trans', { id: data.id });// 获取数据
		if (dataid) {
			var res = await this.app.mysql.update('base_trans', data);// 获取数据
		} else {
			var res = await this.app.mysql.insert('base_trans', data);// 获取数据
		}
		return res;
	}

	async pageQuery(page, pageSize) {
		const count = await this.app.mysql.count('base_trans');// 获取总数
		const offset = (page - 1) * pageSize;// 偏移量
		const list = await this.app.mysql.select('base_trans', {
			where: {}, // 写其他查询的条件，此处不可进行模糊查询
			orders: [[ 'id', 'asc' ]], // 排序方式 desc 表示降序排序 asc表示升序排序
			limit: pageSize, // 返回数据量
			offset, // 数据偏移量
		});
		return { list, total: count, page, pageSize };
	}


	async deleteTrans(id) {
		const result = await this.app.mysql.delete('base_trans', { id });
		return result;
	}
}

module.exports = TransService;
