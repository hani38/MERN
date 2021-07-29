const JokeController = require('../controller/jokes.controller');

module.exports = (app) => {
    app.get("/api/jokes", JokeController.allJokes);
    app.post("/api/jokes/new", JokeController.createjoke);
    app.get("/api/jokes/:id", JokeController.findOne);
    app.put("/api/jokes//update/:id", JokeController.updatejoke);
    app.delete("/api/jokes/delete/:id", JokeController.deletejoke);
}

