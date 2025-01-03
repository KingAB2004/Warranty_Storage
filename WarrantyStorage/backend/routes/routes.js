const express=require('express')
const multer = require('multer');
const upload = multer();
const router=express.Router()
const {addingnewuser,fetchingdetails, addingnewmerchantuser, uploadwarranty,getWarranty ,Contact}=require('../controllers/functions')
const authHeader =require('../middleware/auth')

router.route('/').post(addingnewuser)
router.route('/addmerchant').post(addingnewmerchantuser)
router.route('/id').post(fetchingdetails).get(authHeader)



router.route('/getwarranty').post(getWarranty)
router.post('/createwarranty',upload.single('invoice'),uploadwarranty)


router.route('/contactus').post(Contact);

                            
module.exports=router