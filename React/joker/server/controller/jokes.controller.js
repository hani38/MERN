const Joke = require('../models/jokes.model')

module.exports.allJokes = (req, res) => {
    Joke.find()
    .then(alljokes =>  res.json({jokes : alljokes}))
    .catch(err => res.json({error:err}))
}

module.exports.createjoke = (req, res) => {
    Joke.create(req.body)
    .then(asd =>  res.json({joke : asd}))
    .catch(err => res.json({error:err}))
}

module.exports.findOne = (req , res) => {
    Joke.findOne({ _id: req.params.id })
    .then(joker =>  res.json({joke : joker}))
    .catch(err => res.json({error:err}))
}

module.exports.updatejoke = (req , res) => {
    Joke.updateOne( {_id : req.params.id } , req.body, {new:true,runValidators: true })
    .then(updatedJoke => res.json({ joke: updatedJoke }))
    .catch(err => res.json({ message: 'Something went wrong', error: err }));
}

module.exports.deletejoke = (req , res) => {
    Joke.deleteOne( {_id : req.params.id } )
    .then(deleteJoke => res.json({ joke: deleteJoke }))
    .catch(err => res.json({ message: 'Something went wrong', error: err }));
}




