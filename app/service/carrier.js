const { Service } = require('egg');


class CarrierService extends Service{


    async findAll(){//查询员工逻辑并返回数据
        // const res = this.app.mysql.get('base_role');//获取数据
        // var sql = 'select * from base_role' //query
        var sql = 'base_carrier'
        const res = await this.app.mysql.select(sql);//获取数据
        return res
    }

    async findCarrierById(query){//查询员工逻辑并返回数据
        console.log(query);
        const res = await this.app.mysql.get('base_carrier',query);//获取数据
        return res
    }

    async saveOrUpdate(data){
        const dataid = await this.app.mysql.get('base_carrier',{id:data.id});//获取数据
        console.log(dataid);
        if (dataid) {
            var res = await this.app.mysql.update('base_carrier',data);//获取数据
        }else{
            var res = await this.app.mysql.insert('base_carrier',data);//获取数据
        }
        return res;    
    }

    // 分页查询用户数据
    async pageQuery(page, pageSize) {
        const { app } = this;
        const mysql = app.mysql;
        const count = await mysql.count('base_carrier');
        const carriers = await mysql.select('base_carrier', {
          where: {},
          limit: pageSize,
          offset: (page - 1) * pageSize,
        });
        return { list: carriers, total: count, page, pageSize };
    }


      async deleteById(id) {
        try {
          // 调用 MySQL 的 delete 方法删除数据
          const result = await this.app.mysql.query('DELETE FROM `base_carrier` WHERE `id` = ?', [id]); 
          return result      
        } catch (err) {
          console.log(err);
          return err;
        }     
    }

}

module.exports = CarrierService;
