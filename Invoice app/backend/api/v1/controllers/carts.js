const cartRepo= require('../../../db/repository/cart-operations');
const {SUCCESS,INTERNAL_SERVER_ERROR, NOT_FOUND} =  require('../../../utils/config/app-constants').STATUS_CODE;
const language = require('../../../utils/i18n/en.json');
module.exports = {
   async addToCart(request, response){
       let cartObject = request.body;
       const result =  await cartRepo.add(cartObject);
       try{
       if(result && result._id){
           response.status(SUCCESS).json({message:language['cart.added']});
       }
       else{
           response.status(NOT_FOUND).json({message:language['cart.added.fail']});
       }
   }
   catch(err){
       response.status(INTERNAL_SERVER_ERROR).json({message:language['server.error']});
           console.log('Add to Cart ',err);
   }

   },
   async viewCart(request, response){
       const userid= request.query.userid; 
       
       const result =  await cartRepo.find(userid);
       
       try{
       if(result && result.length>0){
           response.status(SUCCESS).json({carts:result});
       }
       else{
           response.status(NOT_FOUND).json({carts:result});
       }
   }
       catch(err){
           response.status(INTERNAL_SERVER_ERROR).json({message:language['server.error']});
           console.log('View Cart ',err);
       }
   }
}