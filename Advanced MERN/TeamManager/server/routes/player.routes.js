const playerController = require("../controllers/player.controller");

module.exports = app => {
  app.get("/api/players/", playerController.findAllplayers);
  // app.get("/api/jokes/:id", playerController.findOneSingleJoke);
  app.post("/api/players/new", playerController.createNewplayer);
  // app.put("/api/jokes/update/:id", playerController.updateExistingjoke);
  app.delete("/api/players/delete/:id", playerController.deleteplayer);
};

