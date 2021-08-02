const mongoose = require("mongoose");
const productSchema = new mongoose.Schema({
	title: String,
	price: Number,
	description : String
});

module.exports.Product = mongoose.model('Product', productSchema);