const db = require('../database/models')
const { Op } = require("sequelize");

const Product = {
    findAll : async ()=>{
        try{
            let products = await db.Products.findAll({
                include: ["Category"]
            })
            return products
        }catch(err){
            console.log(err)
        }
        
    },
    
    findById : async (id) =>{
        try{
            let product = await db.Products.findByPk(id,{
                include: ["Category"]
            })
            return product
            
        }catch(err){
            console.log(err)
        }
        
    },
    
}
module.exports = Product


