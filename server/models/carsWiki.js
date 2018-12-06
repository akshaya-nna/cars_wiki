var mongoose = require('mongoose');

var CarsWiki = mongoose.model('CarsWiki',{
    brand: {
        type: String,
        required: true
    },
    flagship: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    revenue: {
        type: String
    },
    symbol: {
        type: String,
        required: true
    },
    carImg: {
        type: String,
        required: true
    },
    year: {
        type: String,
        required: true
    },
    parentOrg: {
        type: String
    },
    csnum: {
        type: String
    },
    description: {
        type: String,
        required: true
    }
});

module.exports = {CarsWiki};