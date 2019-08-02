var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema({
    number: { type: Number, required: true },
    name: { type: String, required: true },
    imagePath1: { type: String, required: true },
    imagePath2: { type: String, required: false},
    imageUrl1: { type: String, required: false },
    imageUrl2: { type: String, required: false },
    authorUrl: { type: String, required: false },
    authorImage: { type: String, required: true },
    authorImageBW: { type: String, required: true },
    description: { type: String, required: true }
});

module.exports = mongoose.model('Author', schema);