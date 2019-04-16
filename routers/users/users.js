const router = require('express').Router();
const User = require('../../data/helpers/userHelpers');

router.route('/:id').put(async (req, res) => {
    const { username, password, email } = req.body;
    if (!username || !password || !email) return res.status(400).json({ message: 'User info must include username, password and email' });
    const id = req.params.id;
    try {
        const updated = await User.update(id, { ...req.body });
        if (updated === 0) return res.status(404).json({ message: "We could not find a user at that id" });
        const updatedUser = await User.findBy({ id }).first();
        res.status(200).json(updatedUser);
    } catch (error) {
        res.status(500).json({ message: 'We could not update that user at this time' });
    }
})

module.exports = router;