const { mongoUtils, dataBase } = require('../lib/utils/mongo.js');
const COLLECTION_NAME = 'productos';
let Producto = require('../lib/utils/sqlize').Producto

async function getProducts() {
  return await Producto.findAll({})
}

async function insertProduct(product) {

  return await Producto.create(product)
}


async function updateProduct(product){  
  return Producto.update(product, {
    where: {
      nombre: product.nombre
    }
  });
}

async function deleteProduct(product){
  return await Producto.destroy({where: {nombre: product.nombre}})

}
module.exports = [getProducts, insertProduct, updateProduct,deleteProduct];
