const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    currency: { type: Number, default: 100 },
    inventory: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Item' }],
});

const User = mongoose.model('User', userSchema);
module.exports = User;
