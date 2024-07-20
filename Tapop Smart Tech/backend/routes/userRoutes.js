const express = require('express');
const User = require('../models/User');

const router = express.Router();

router.post('/', async (req, res) => {
    const user = new User(req.body);
    try {
    await user.save();
    res.status(201).send(user);
} catch (error) {
    res.status(400).send(error);
}
});

router.get('/:id', async (req, res) => {
    try {
    const user = await User.findById(req.params.id);
    res.status(200).send(user);
} catch (error) {
    res.status(400).send(error);
}
});

router.put('/:id', async (req, res) => {
    try {
    const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.status(200).send(user);
} catch (error) {
    res.status(400).send(error);
}
});

router.delete('/:id', async (req, res) => {
    try {
    await User.findByIdAndDelete(req.params.id);
    res.status(200).send({ message: 'User deleted' });
} catch (error) {
    res.status(400).send(error);
}
});

module.exports = router;