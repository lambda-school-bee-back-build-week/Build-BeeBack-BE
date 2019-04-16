const db = require('../../data/dbConfig');

const express = require('express');
const router = express.Router();

router.route('/').get(async (req, res) => {
    try {
        const data = await db('neonic2');
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({ message: "We could not get the data at this time" });
    }
})


module.exports = router;