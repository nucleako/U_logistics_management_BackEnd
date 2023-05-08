const { Service } = require('egg');


class CustomerService extends Service{
    
    async findAll(){//查询员工逻辑并返回数据
        // const res = this.app.mysql.get('base_role');//获取数据
        // var sql = 'select * from base_role' //query
        var sql = 'base_customer'
        const res = await this.app.mysql.select(sql);//获取数据
        return res
    }

    async findCustomerById(query){//查询员工逻辑并返回数据
        console.log(query);
        const res = await this.app.mysql.get('base_customer',query);//获取数据
        return res
    }

    async saveOrUpdate(data){
      const dataid = await this.app.mysql.get('base_customer',{id:data.id});//获取数据
      if (dataid) {
          var res = await this.app.mysql.update('base_customer',data);//获取数据
      }else{
          var res = await this.app.mysql.insert('base_customer',data);//获取数据
      }
      return res;
  }

    // 分页查询用户数据
    async pageQuery(page, pageSize) {
        const { app } = this;
        const mysql = app.mysql;
        const count = await mysql.count('base_customer');
        const customers = await mysql.select('base_customer', {
          where: {},
          limit: pageSize,
          offset: (page - 1) * pageSize,
        });
        return { list: customers, total: count, page, pageSize };
    }


      async deleteById(id) {
        try {
          // 调用 MySQL 的 delete 方法删除数据
          const result = await this.app.mysql.query('DELETE FROM `base_customer` WHERE `id` = ?', [id]); 
          return result      
        } catch (err) {
          console.log(err);
          return null;
        }     
    }

}

module.exports = CustomerService;
