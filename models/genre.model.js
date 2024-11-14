
const { Schema, model } = require('mongoose');

const genreSchema = new Schema({
    title: {
        type: String,
        required: [true, 'Title field is required'],
    },

}, {timestamps: true});

module.exports = model('Genre', genreSchema);