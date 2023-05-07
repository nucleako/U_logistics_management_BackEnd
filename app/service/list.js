const { Service } = require('egg');


class ListService extends Service{
    
    async findAll(){//查询订单逻辑并返回数据
        // const res = this.app.mysql.get('base_role');//获取数据
        // var sql = 'select * from base_role' //query
        // var sql = 'base_list'
        // const res = await this.app.mysql.select(sql);//获取数据
        const sql = `
            SELECT l.Id, l.OrderDate, l.OrderStatus, l.OrderPrice,
                s.Name AS SdCustomerName, s.CompanyName AS SdCustomerCompanyName, s.Addr AS SdCustomerAddress,
                r.Name AS RcvCustomerName, r.CompanyName AS RcvCustomerCompanyName, r.Addr AS RcvCustomerAddress
            FROM base_list AS l
            JOIN base_customer AS s ON l.SdCustomerID = s.Id
            JOIN base_customer AS r ON l.RcvCustomerID = r.Id;
        `;
        const res = await this.app.mysql.query(sql); 
        return res
    }

    async findListById(query){//查询订单逻辑并返回数据
        const { app } = this;
        const result = await app.mysql.query(`
          SELECT l.Id, l.OrderDate, l.OrderStatus, l.OrderPrice,
              s.Name AS SdCustomerName, s.CompanyName AS SdCustomerCompanyName, s.Addr AS SdCustomerAddress,
              r.Name AS RcvCustomerName, r.CompanyName AS RcvCustomerCompanyName, r.Addr AS RcvCustomerAddress
          FROM base_list AS l
          JOIN base_customer AS s ON l.SdCustomerID = s.Id
          JOIN base_customer AS r ON l.RcvCustomerID = r.Id
          WHERE l.Id = ?;
        `, [query.id]);
        return result[0];
        console.log(query);

        const res = await this.app.mysql.get('base_list',query);//获取数据
        
        return res
        
    }
    
    async saveOrUpdateList(data){
        const { app } = this;
        const mysql = app.mysql;
        const conn = await mysql.beginTransaction(); // 开启事务

        try {
        // 新增或修改 base_list 表
        let result = null;
        if (data.id) {
            // 如果 data 中包含 id，说明是修改操作
            const { id, ...updateData } = data;
            result = await conn.update('base_list', updateData, { id });
        } else {
            // 否则是新增操作
            result = await conn.insert('base_list', data);
            data.id = result.insertId; // 将自增 ID 赋值给 data.id
        }

        // 新增或修改 base_customer 表
        await conn.update('base_customer', { ...data.sdCustomer }, { id: data.sdCustomer.id });
        await conn.update('base_customer', { ...data.rcvCustomer }, { id: data.rcvCustomer.id });

        await conn.commit(); // 提交事务
        return { success: true };
        } catch (err) {
        await conn.rollback(); // 回滚事务
        return { success: false, message: err.message };
        }
        if (data.id) {
            var res = await this.app.mysql.update('base_list',data);//获取数据
        }else{
            var res = await this.app.mysql.insert('base_list',data);//获取数据
        }
        return res;
    }
    
    // 分页查询订单数据
    async pageQuery(page, pageSize) {
        const { app } = this;
        const mysql = app.mysql;
        const count = await mysql.count('base_list');
        const sql = `
          SELECT l.Id, l.OrderDate, l.OrderStatus, l.OrderPrice,
                 s.Name AS SdCustomerName, s.CompanyName AS SdCustomerCompanyName, s.Addr AS SdCustomerAddress,
                 r.Name AS RcvCustomerName, r.CompanyName AS RcvCustomerCompanyName, r.Addr AS RcvCustomerAddress
          FROM base_list AS l
          JOIN base_customer AS s ON l.SdCustomerID = s.Id
          JOIN base_customer AS r ON l.RcvCustomerID = r.Id
          LIMIT ? OFFSET ?;
        `;
        const offset = (page - 1) * pageSize;
        const res = await this.app.mysql.query(sql, [pageSize, offset]);
        return { list: res, total: count, page, pageSize };
    }

    
    async deleteList(id) {
        const result = await this.app.mysql.delete('base_list', { id });
        return result;
      }
}

module.exports = ListService;
