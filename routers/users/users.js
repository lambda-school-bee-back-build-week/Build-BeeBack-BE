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
}).delete((req, res) => {
    const id = req.params.id;
    User
        .remove(id)
        .then(user => {
            if (user === 0) {
                return res.status(404).json({ errorMessage: 'The user with the specified ID does not exist.' })
            }
            res.status(202).json({ success: `User ${id} successfully removed from database.` })
        })
        .catch(err => {
            res.status(500).json({ error: 'The user could not be removed from the database.' }, err)
        })
}).get(async (req, res) => {
    const id = req.params.id;
    try {
        const user = User.findBy({ id }).first();
        res.status(200).json(user);

    } catch (error) {
        res.status(500).json({ message: 'We could not get that user at this time' });
    }
})

module.exports = router;