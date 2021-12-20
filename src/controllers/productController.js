const productController={
    index: (req, res)=> {
        res.render('./products/index')
    },
    edit:(req, res)=> {
        res.render('./products/editProduct')
    },
    add: (req,res)=>{
        res.render('./products/productAdd')
    },
    detail:function (req,res) {
        res.render('./products/productDetail')
    },
    cart: (req,res)=>{
        res.render('./products/productCart')
    },
    resumen: function(req,res) {
        res.render('./products/resumen')
    }
}

module.exports=productController;