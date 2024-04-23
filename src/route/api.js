const express=require('express')
const productController=require('../controller/ProductContoller')

const router=express.Router()

//Product
router.post('/Create',productController.Create)
router.get('/Read',productController.Read)
router.get('/ReadById/:id',productController.ReadById)
router.post('/Update/:id',productController.Update)
router.get('/Delete/:id',productController.Delete)

module.exports=router;
