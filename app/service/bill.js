const { Service } = require('egg');


class BillService extends Service {

	async findAll() {
		// const res = this.app.mysql.get('base_role');//获取数据
		// var sql = 'select * from base_role' //query
		const sql = 'base_bill';
		const res = await this.app.mysql.select(sql);// 获取数据
		return res;
	}

	async findBillById(query) {
		console.log(query);
		const res = await this.app.mysql.get('base_bill', query);// 获取数据
		return res;
	}

	async saveOrUpdate(data) {
		// const { app } = this;
		// const mysql = app.mysql;
		// const conn = await mysql.beginTransaction(); // 开启事务

		// try {
		//   // 新增或修改 base_list 表
		//   let result = null;
		//   if (data.id) {
		//     // 如果 data 中包含 id，说明是修改操作
		//     const { id, ...updateData } = data;
		//     result = await conn.update('base_list', updateData, { id });
		//   } else {
		//     // 否则是新增操作
		//     result = await conn.insert('base_list', data);
		//     data.id = result.insertId; // 将自增 ID 赋值给 data.id
		//   }

		//   // 新增或修改 base_customer 表
		//   await conn.update('base_customer', { ...data.sdCustomer }, { id: data.sdCustomer.id });
		//   await conn.update('base_customer', { ...data.rcvCustomer }, { id: data.rcvCustomer.id });

		//   await conn.commit(); // 提交事务
		//   return { success: true };
		// } catch (err) {
		//   await conn.rollback(); // 回滚事务
		//   return { success: false, message: err.message };
		// }
		const dataid = await this.app.mysql.get('base_bill', { id: data.id });// 获取数据
		if (dataid) {
			var res = await this.app.mysql.update('base_bill', data);// 获取数据
		} else {
			var res = await this.app.mysql.insert('base_bill', data);// 获取数据
		}
		return res;
	}

	// 分页查询用户数据
	async pageQuery(page, pageSize) {
		const { app } = this;
		const mysql = app.mysql;
		const count = await mysql.count('base_bill');
		const bills = await mysql.select('base_bill', {
			where: {},
			limit: pageSize,
			offset: (page - 1) * pageSize,
		});
		return { list: bills, total: count, page, pageSize };
	}


	async deleteById(id) {
		try {
			// 调用 MySQL 的 delete 方法删除数据
			const result = await this.app.mysql.query('DELETE FROM `base_bill` WHERE `id` = ?', [ id ]);
			return result;
		} catch (err) {
			console.log(err);
			return null;
		}
	}

}

module.exports = BillService;
