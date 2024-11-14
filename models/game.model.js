
const { Schema, model } = require('mongoose');

const gameSchema = new Schema({
    title: {
        type: String,
        required: [true, 'Title field is required'],
    },

    description: {
        type: String,
        required: [true, 'Description field is required'],
    },

    genre_id: {
        type: Schema.Types.ObjectId,
        ref: 'Genres',
        required: [true, 'Genre is required']
    },

    release_date: {
        type: Date,
        required: [true, 'Release Date field is required'],
    },

    image_path: {
        type: String,
    },

}, {timestamps: true});

module.exports = model('Game', gameSchema);