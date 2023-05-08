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
        // const { app } = this;
        // const mysql = app.mysql;
        // const conn = await mysql.beginTransaction(); // 开启事务

        // try {
        // // 新增或修改 base_list 表
        // let result = null;
        // if (data.id) {
        //     // 如果 data 中包含 id，说明是修改操作
        //     const { id, ...updateData } = data;
        //     result = await conn.update('base_list', updateData, { id });
        // } else {
        //     // 否则是新增操作
        //     result = await conn.insert('base_list', data);
        //     data.id = result.insertId; // 将自增 ID 赋值给 data.id
        // }

        // // 新增或修改 base_customer 表
        // await conn.update('base_customer', { ...data.sdCustomer }, { id: data.sdCustomer.id });
        // await conn.update('base_customer', { ...data.rcvCustomer }, { id: data.rcvCustomer.id });

        // await conn.commit(); // 提交事务
        // return { success: true };
        // } catch (err) {
        // await conn.rollback(); // 回滚事务
        // return { success: false, message: err.message };
        // }
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

        const listid = await this.app.mysql.get('base_list',{id:listObj.id});//获取数据
        const SDid = await this.app.mysql.get('base_customer',{id:SdObj.id});//获取数据
        const Rcvid = await this.app.mysql.get('base_customer',{id:RcvObj.id});//获取数据
        if (SDid & Rcvid) {
            var res3 = await this.app.mysql.update('base_list',listObj);
        } else if ( Rcvid == null & SDid == null){
            var res2 = await this.app.mysql.insert('base_customer',RcvObj);
            var res1 = await this.app.mysql.insert('base_customer',SdObj);
        } else if( SDid == null){
            var res1 = await this.app.mysql.insert('base_customer',SdObj);
        } else if( Rcvid == null){
            var res2 = await this.app.mysql.insert('base_customer',RcvObj);
        }
        return {Sddetail:res1.affectedRows,Rcvdetail:res2.affectedRows,listdetail:res3.affectedRows}    
        // if (dataid) {
        //     var res1 = await this.app.mysql.update('base_customer',SdObj);
        //     var res2 = await this.app.mysql.update('base_customer',RcvObj);
        //     if (res1.affectedRows == 1 & res2.affectedRows == 1) {
        //         var res3 = await this.app.mysql.update('base_list',listObj);
        //     } else{
        //         return {Sddetail:res1.affectedRows,Rcvdetail:res2.affectedRows}
        //     }
        // }else{
        //     var res1 = await this.app.mysql.insert('base_customer',SdObj);
        //     var res2 = await this.app.mysql.insert('base_customer',RcvObj);
        //     if (res1.affectedRows == 1 & res2.affectedRows == 1) {
        //         var res3 = await this.app.mysql.insert('base_list',listObj);
        //     } else {
        //         return {Sddetail:res1.affectedRows,Rcvdetail:res2.affectedRows}
        //     }
        // }
        return res3;   
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
