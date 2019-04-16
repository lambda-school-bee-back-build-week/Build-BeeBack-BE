const router = require('express').Router();
const bcrypt = require('bcryptjs');

const Users = require('../../data/helpers/userHelpers');

router.route('/').post((req, res) => {
    let user = req.body;
    const hash = bcrypt.hashSync(user.password, 8);
    req.body.password = hash
    if (!user.username || !user.password || !user.email) return res.status(400).json({ message: "Request must have username, email and password" });
    Users.add(req.body)
        .then(saved => {
            res.status(201).json(saved);
        })
        .catch(err => {
            res.status(500).json(err)
        })
})

module.exports = router;