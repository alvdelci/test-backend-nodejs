const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    tittle: {
        type: String
    },
    price: {
        type: Number
    },
    category: {
        type: String
    },
    description: {
        type: String
    }
});

module.exports = mongoose.model('Product', productSchema);


