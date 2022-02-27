const maxId = require("../utils/maxId");
const ProductModel = require("../models/modelProduct");



function dataProduct (products){
  let dataProduct = []
  products.map(product =>{
    dataProduct.push({
      id: product.id,
      name : product.name,
      price : product.price,
      category: product.Category.name,
      productTime : product.producttime,
      description :  product.description,
      detail : "http://localhost:3000/api/products/"+ product.id,
    })
  })
  return (dataProduct)
}

const controller = {
  
  list:  (req, res, next) => {
    const products =  ProductModel.findAll()
    
    products.then(products => {
      return res.json({
        products : dataProduct(products),
      }) 
    })
  .catch((err) => {
    next(err);
  })

  },
  detail: (req, res, next) => {
    const productDetail = ProductModel.findById(req.params.id);
    productDetail.then(product=>{
      return res.json({
        id: product.id,
        name: product.name,
        price: product.price,
        producttime: product.producttime,
        description: product.description,
        category: product.Category.name,
        image : "http://localhost:3000/images/products/"+product.image
      })
    })

  },
  
}

module.exports = controller;

