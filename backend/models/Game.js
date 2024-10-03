const mongoose = require('mongoose');

const gameSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String },
    code: { type: String, required: true }, // store HTML/JS game code
    creator: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }, //user
    createdAt: { type: Date, default: Date.now },
});

const Game = mongoose.model('Game', gameSchema);
module.exports = Game;
