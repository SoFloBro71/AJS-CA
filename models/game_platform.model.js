
const { Schema, model } = require('mongoose');

const game_PlatformSchema = new Schema({
    title: {
        type: String,
        required: [true, 'Title field is required'],
    },

    game_id: {
        type: Schema.Types.ObjectId,
        ref: 'Game',
        required: [true, 'Game is required']
    },

    platform_id: {
        type: Schema.Types.ObjectId,
        ref: 'Platform',
        required: [true, 'Platform is required']
    },

}, {timestamps: true});

module.exports = model('Game_Platform', game_PlatformSchema);