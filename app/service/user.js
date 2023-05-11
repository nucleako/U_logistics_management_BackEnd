const { Service } = require('egg');


class UserService extends Service{
    
    async login(data){

        const res = await this.app.mysql.get('base_user',data);//获取数据

        if (!res) {
            return 
        }else{
            // 签发token
            const token = 'Bearer ' + this.app.jwt.sign(
                { username: data.username },    //生成token后、jiexitoken会返回这个信息
                this.app.config.jwt.secret,     //密钥
                { expiresIn: '3600s' }          //有效期
            );
            //token in header
            // Content-Type: application/x-www-form-urlencoded
            return token;
        }
    }

    async findAll(){//查询员工逻辑并返回数据
        // const res = this.app.mysql.get('base_role');//获取数据
        // var sql = 'select * from base_role' //query
        var sql = 'base_user'
        const res = await this.app.mysql.select(sql);//获取数据
        return res
    }

    async findUserById(query){//查询员工逻辑并返回数据
        console.log(query);

        const res = await this.app.mysql.get('base_user',query);//获取数据
        // res.roles = [res.roles]
        return res
    }

    async saveOrUpdate(data){
        const dataid = await this.app.mysql.get('base_user',{id:data.id});//获取数据
        if (dataid) {
            var res = await this.app.mysql.update('base_user',data);//获取数据
        }else{
            var res = await this.app.mysql.insert('base_user',data);//获取数据
        }
        return res;
    }

    // 分页查询用户数据
    async pageQuery(page, pageSize) {
        const { app } = this;
        const mysql = app.mysql;
        const count = await mysql.count('base_user');
        const users = await mysql.select('base_user', {
          where: {},
          limit: pageSize,
          offset: (page - 1) * pageSize,
        });
        return { list: users, total: count, page, pageSize };
    }


      async deleteById(id) {
        try {
          // 调用 MySQL 的 delete 方法删除数据
          const result = await this.app.mysql.query('DELETE FROM `base_user` WHERE `id` = ?', [id]); 
          return result      
        } catch (err) {
          console.log(err);
          return null;
        }     
    }

}

module.exports = UserService;
