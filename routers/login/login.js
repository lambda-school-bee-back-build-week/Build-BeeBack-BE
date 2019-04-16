const express = require('express');
const bcrypt = require('bcryptjs');
const db = require('../../data/helpers/userHelpers');
const jwt = require("jsonwebtoken");
const d = require('../../data/dbConfig');

const router = express.Router();

const secret = process.env.SECRET;

const generateToken = (user, secret) => {
    const payload = {
        subject: user.id,
        username: user.username,
    };
    const options = {
        expiresIn: "1d"
    };
    return jwt.sign(payload, secret, options);
};

router.route('/')
    .post(async (req, res) => {
        const { username, password } = req.body;
        if (!username || !password) return res.status(400).json({ message: "You must have a username and password to login" });
        try {
            const user = await db.findBy({ username }).first();
            console.log(user)
            if (user && bcrypt.compareSync(password, user.password)) {
                const token = generateToken(user, secret);
                
                return res.status(200).json({ message: 'Logged In', token })
            }
            else {
                res.status(401).json({ message: 'Invalid credentials' });
            }
        } catch (error) {
            res.status(500).json({ message: "We could not log you in at this time" })
        }
    })


module.exports = router;