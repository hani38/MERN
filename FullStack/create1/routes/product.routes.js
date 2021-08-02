const productControllers = require("../controllers/product.contoller");

module.exports = function(app) {
app.post("/api/products/",productControllers.createProduct);
app.get("/api/products/", productControllers.findAllProducts);
//   app.get("/api/jokes/:id", JokesControllers.findOneSingleJoke);
//   app.post("/api/jokes/new", JokesControllers.createNewjoke);
  app.get("/api/products/:id", productControllers.gitProductByID);
//   app.delete("/api/jokes/delete/:id", JokesControllers.deleteAnExistingjoke);
};