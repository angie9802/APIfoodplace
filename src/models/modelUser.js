const db = require('../database/models')


const User = {
    findAll : async ()=>{
      try{
        let users = await db.Users.findAll()
        return users
      }catch(err){
        console.log(err)
      }
    },
    findById : async (id) =>{
        try{
          let user = await db.Users.findByPk(id,{
            include: ["Role"]
          })
          return user
        }catch(err){
            console.log(err)
        }
        
    },
   
}
module.exports = User


