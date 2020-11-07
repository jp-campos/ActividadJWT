var express = require('express');
var router = express.Router();
var [getProducts, insertProduct,updateProduct,deleteProduct] = require('../controllers/product');
let {checkToken, checkAdmin, checkAdminEmployee} = require('../lib/utils/middleware')


/* GET product listing. */
router.get('/',checkToken,async function (req, res, next) {
  const products = await getProducts();
  console.warn('products->', products);
  res.send(products);
});
/**
 * POST product
 */
router.post('/',checkAdmin ,async function (req, res, next) { 
  const newProduct = await insertProduct(req.body);
  console.warn('insert products->', newProduct);
  res.send(newProduct);
});

router.put('/', checkAdminEmployee ,async function (req, res, next) {
  const newProduct = await updateProduct(req.body);
  console.warn('update products->', newProduct);
  res.send(newProduct);

});

router.delete('/',checkAdmin ,async function (req, res, next) {
  const newProduct = await deleteProduct(req.body);
  console.warn('delete products->', newProduct);
  res.send(newProduct);
  
});



module.exports = router;
  