const router = require('express').Router();
const db = require('../data/dbConfig');

router.route('/').get(async (req, res) => {
    try {
        const data = await db('state_charting');
        res.status(200).json(data);
    }
    catch (err) {
        res.status(500).json({message: "We could not get the state charting data at this time"})
    }
})

module.exports = router;