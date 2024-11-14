
const { Schema, model } = require('mongoose');

const platformSchema = new Schema({
    title: {
        type: String,
        required: [true, 'Title field is required'],
    },

}, {timestamps: true});

module.exports = model('Platform', platformSchema);