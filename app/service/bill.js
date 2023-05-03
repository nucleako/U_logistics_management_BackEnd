const { Service } = require('egg');


class BillService extends Service{
    
    async findAll(){
        // const res = this.app.mysql.get('base_role');//获取数据
        // var sql = 'select * from base_role' //query
        var sql = 'base_bill'
        const res = await this.app.mysql.select(sql);//获取数据
        return res
    }

    async findBillById(query){
        console.log(query);
        const res = await this.app.mysql.get('base_bill',query);//获取数据
        return res
    }

    async saveOrUpdate(data){
        console.log(data);
        if (data.id) {
            var res = await this.app.mysql.update('base_bill',data);//获取数据
        }else{
            var res = await this.app.mysql.insert('base_bill',data);//获取数据
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
          const result = await this.app.mysql.query('DELETE FROM `base_bill` WHERE `id` = ?', [id]); 
          return result      
        } catch (err) {
          console.log(err);
          return null;
        }     
    }

}

module.exports = BillService;
