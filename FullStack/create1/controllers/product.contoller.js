const { Product } = require('../model/product.model');
module.exports.index = (request, response) => {
    response.json({
        message: "Hello World"
    });
}

module.exports.createProduct = (request, response) => {
    const { title, price , description} = request.body;
    Product.create({
        title,
        price,
        description
    })
        .then(product => response.json(product))
        .catch(err => response.json(err));
}

module.exports.findAllProducts = (req,res) => {
    Product.find({})
        .then(products => res.json(products))
        .catch(err => res.json(err))
}

module.exports.gitProductByID = (req , res) => {
    Product.findOne ({_id:req.params.id})
        .then(product => res.json(product))
        .catch(err => res.json(err))
}


