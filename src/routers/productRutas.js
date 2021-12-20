const express= require('express');
const router= express.Router();

let productController=require('../controllers/productController');


router.get('/', productController.index);
router.get('/editarProducto', productController.edit);
router.get('/agregarProducto', productController.add);
router.get('/productDetail', productController.detail);
router.get('/productCart',productController.cart);
router.get('/resumen',productController.resumen);

module.exports= router;