const player = require("../models/player.model");

module.exports.findAllplayers = (req, res) => {
  player.find()
    .then(allplayers => res.json(allplayers))
    .catch(err => res.json({ message: "Something went wrong", error: err }));

};


module.exports.createNewplayer = (req, res) => {
  player.create(req.body)
    .then(newlyCreateplayer => res.json({  newlyCreateplayer }))
    .catch(err => res.json({ message: "Something went wrong", error: err }));
};

module.exports.deleteplayer = (req, res) => {
  player.deleteOne({ _id: req.params.id })
    .then(result => res.json({ result: result }))
    .catch(err => res.json({ message: "Something went wrong", error: err }));
};



