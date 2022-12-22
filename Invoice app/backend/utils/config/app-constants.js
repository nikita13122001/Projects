module.exports = {
    ROUTES :{
        HOME:'/',
        USER:{
            LOGIN :'/login',
            REGISTER:'/register'
        },
        CART:{
            ADD_TO_CART:'/add-to-cart',
            VIEW_CART:'/view-cart'
        },
        PRODUCT:{
            ADD_PRODUCT:'/add-product',
            VIEW_PRODUCT:'/view-products'
        }
    },
    STATUS_CODE:{
        SUCCESS:200,
        INTERNAL_SERVER_ERROR:500,
        NOT_FOUND : 404

    },
    SCHEMAS:{
        USERS:'users'
    }
}