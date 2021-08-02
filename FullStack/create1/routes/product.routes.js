const productControllers = require("../controllers/product.contoller");

module.exports = function(app) {
app.post("/api/products/",productControllers.createProduct);
app.get("/api/products/", productControllers.findAllProducts);
//   app.get("/api/jokes/:id", JokesControllers.findOneSingleJoke);
//   app.post("/api/jokes/new", JokesControllers.createNewjoke);
//   app.put("/api/jokes/update/:id", JokesControllers.updateExistingjoke);
//   app.delete("/api/jokes/delete/:id", JokesControllers.deleteAnExistingjoke);
};