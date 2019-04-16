const router = require('express').Router();

const Users = require('../../data/helpers/userHelpers');

router.route('/:id').delete ((req, res) => {
    const id = req.params.id;

    Users
        .remove(id)
        .then(user => {
            if(user === 0) {
                return res.status(404).json({ errorMessage: 'The user with the specified ID does not exist.' })
            }
            res.status(202).json({ success: `User ${id} successfully removed from database.` })
        })
        .catch(err => {
            res.status(500).json({ error: 'The user could not be removed from the database.'}, err)
        })
});

module.exports = router;