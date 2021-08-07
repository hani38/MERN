const mongoose = require("mongoose");

const playerschema = new mongoose.Schema({
    name: {
        type: String,
        required: [
            true,
            "name is required"
        ]
    
    },

    position: {
        type: String,
        required: [
            true,
            "position is required"
        ]
    
    },

    
    
}, { timestamps: true });

const player = mongoose.model("player", playerschema);
module.exports = player;
