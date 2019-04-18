const db = require('../../data/helpers/neonicHelpers');

const express = require('express');
const router = express.Router();

router.route('/').get(async (req, res) => {
    try {
        const data = await db.find();
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({ message: "We could not get the data at this time" });
    }
})

router.route('/:year').get(async (req, res) => {
    const year = req.params.year;
    try {
        const data = await db.findBy({ year: Number(year) });
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({ message: "We could not get the data at this time" });
    }
})

router.route('/:usstate').get(async (req, res) => {
    const usstate = req.params.usstate;
    try {
        const data = await db.us_state({ usstate: usstate });
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({ message: "We could not get the US State data at this time" });
    }
})


module.exports = router;