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
        const listObj = {
            id:data.id,
            OrderPrice:data.OrderPrice,
            OrderStatus:data.OrderStatus,
            OrderDate:data.OrderDate,
            RcvCustomerID:data.RcvCustomerID,
            SdCustomerID:data.SdCustomerID,
        }
        const SdObj = {
            id:data.SdCustomerID,
            name:data.SdCustomerName,
            phone:data.SdCustomerPhone,
            addr:data.SdCustomerAddress,
            gender:data.SdCustomerGender,
            CompanyName:data.SdCustomerCompanyName
        }
        const RcvObj = {
            id:data.RcvCustomerID,
            name:data.RcvCustomerName,
            phone:data.RcvCustomerPhone,
            addr:data.RcvCustomerAddress,
            gender:data.SdCustomerGender,
            CompanyName:data.RcvCustomerCompanyName
        }

        const conn = await this.app.mysql.beginTransaction(); // 开始事务
        try {
            // 检查是否存在 base_customer 数据
            const [sdRow, rcvRow] = await Promise.all([
            conn.get('base_customer', { id: SdObj.id }),
            conn.get('base_customer', { id: RcvObj.id }),
            ]);

            // 更新或插入 base_customer 数据
            if (sdRow) {
                await conn.update('base_customer', SdObj);
            } else {
                await conn.insert('base_customer', SdObj);
            }

            if (rcvRow) {
                await conn.update('base_customer', RcvObj);
            } else {
                await conn.insert('base_customer', RcvObj);
            }

            // 检查是否存在 base_list 数据
            const listRow = await conn.get('base_list', { id: listObj.id });

            // 插入或更新 base_list 数据
            if (listRow) {
                await conn.update('base_list', listObj);
            } else {
                await conn.query('INSERT IGNORE INTO base_list SET ?', [listObj]);
            }

            await conn.commit(); // 提交事务
            return { success: true };
        } catch (err) {
            await conn.rollback(); // 回滚事务
            return { success: false, error: err };
        }
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
