const express = require('express');
const Game = require('../models/Game');
const router = express.Router();

// Get all games
router.get('/', async (req, res) => {
    const games = await Game.find();
    res.json(games);
});

// Get single game by ID
router.get('/:id', async (req, res) => {
    const game = await Game.findById(req.params.id);
    res.json(game);
});

// Create new game
router.post('/create', async (req, res) => {
    const { title, description, code, creatorId } = req.body;
    const newGame = new Game({ title, description, code, creator: creatorId });
    await newGame.save();
    res.json({ message: 'Game created!', game: newGame });
});

module.exports = router;
