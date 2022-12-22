const productRepo= require('../../../db/repository/product-operations');
const {SUCCESS,INTERNAL_SERVER_ERROR, NOT_FOUND} =  require('../../../utils/config/app-constants').STATUS_CODE;
const language = require('../../../utils/i18n/en.json');
module.exports = {
   async add(request, response){
       let productObject = request.body;
       const result =  await productRepo.add(productObject);
       try{
       if(result && result._id){
           response.status(SUCCESS).json({message:language['product.added']});
       }
       else{
           response.status(NOT_FOUND).json({message:language['cart.added.fail']});
       }
   }
   catch(err){
       response.status(INTERNAL_SERVER_ERROR).json({message:language['server.error']});
           console.log('Add Product ',err);
   }

   },
   async viewProducts(request, response){
      
       const result =  await productRepo.find();
       try{
       if(result && result.email){
           response.status(SUCCESS).json({products:result});
       }
       else{
           response.status(NOT_FOUND).json({products:[]});
       }
   }
       catch(err){
           response.status(INTERNAL_SERVER_ERROR).json({message:language['server.error']});
           console.log('View Products ',err);
       }
   }
}