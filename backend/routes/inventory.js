const express = require('express');
const User = require('../models/User');
const Item = require('../models/Item');
const router = express.Router();

// Get user inventory
router.get('/:userId', async (req, res) => {
    const user = await User.findById(req.params.userId).populate('inventory');
    res.json(user.inventory);
});

// Add item to inventory
router.post('/:userId/add', async (req, res) => {
    const { itemId } = req.body;
    const user = await User.findById(req.params.userId);
    user.inventory.push(itemId);
    await user.save();
    res.json({ message: 'Item added to inventory' });
});

module.exports = router;
