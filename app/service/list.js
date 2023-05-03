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
        console.log(query);

        const res = await this.app.mysql.get('base_list',query);//获取数据
        return res
    }
    
    async saveOrUpdateList(data){
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

    
    async deleteTrans(id) {
        const result = await this.app.mysql.delete('base_list', { id });
        return result;
      }
}

module.exports = ListService;
