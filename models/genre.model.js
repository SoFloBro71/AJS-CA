
const { Schema, model } = require('mongoose');

const franchiseSchema = new Schema({
    title: {
        type: String,
        required: [true, 'Title field is required'],
    },

}, {timestamps: true});

module.exports = model('Franchise', franchiseSchema);