
const { Schema, model } = require('mongoose');

const creatorSchema = new Schema({
    name: {
        type: String,
        required: [true, 'Name field is required'],
    },

    image_path: {
        type: String,
    },

}, {timestamps: true});

module.exports = model('Creator', creatorSchema);