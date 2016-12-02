/**
 * Created by debrachong on 12/2/16.
 */
var mongoose = require('mongoose');

var wishSchema = new mongoose.Schema({
    item: {type: String, required: true},
    price: {
        type: Number,
        required: true
    },
    createdOn: {
        type: Date,
        "default": Date.now
    }
});

var userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    comments: [{
        type: String
    }],
    wishlist: [wishSchema]
});

mongoose.model('User', userSchema);