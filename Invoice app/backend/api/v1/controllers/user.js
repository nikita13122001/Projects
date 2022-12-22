 const userRepo= require('../../../db/repository/user-operations');
 const {SUCCESS,INTERNAL_SERVER_ERROR, NOT_FOUND} =  require('../../../utils/config/app-constants').STATUS_CODE;
 const language = require('../../../utils/i18n/en.json');
 module.exports = {
    async login(request, response){
        //Date.now()
        let userObject = request.body;
        const result =  await userRepo.find(userObject);
        try{
        if(result && result.email){
            response.status(SUCCESS).json({message:language['login.success.message']});
        }
        else{
            response.status(NOT_FOUND).json({message:language['login.success.fail']});
        }
    }
    catch(err){
        response.status(INTERNAL_SERVER_ERROR).json({message:language['server.error']});
            console.log('Login ',err);
    }

    },
    async register(request, response){
        let userObject = request.body;
        const result =  await userRepo.add(userObject);
        try{
        if(result && result.email){
            response.status(SUCCESS).json({message:language['register.success.message']});
        }
        else{
            response.status(NOT_FOUND).json({message:language['register.fail.message']});
        }
    }
        catch(err){
            response.status(INTERNAL_SERVER_ERROR).json({message:language['server.error']});
            console.log('Register ',err);
        }
    }
}