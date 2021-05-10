//////////////
////SCHEMA////
//////////////

const mongoose = require('mongoose');
const brandSchema = new mongoose.Schema({
    brandName: {
        type: String,
        required: true
    }, 
    region: {
        type: String,
    },
    ingredient: {
        type: String,
        required: true
    },
    // nuts: {
    //     type: Boolean,
    //     required: true
    // },
    review: {
        type: String,
    },
    imageUrl: {
        type: String
    }
});



const Brand = mongoose.model('Brand', brandSchema);

module.exports = Brand;