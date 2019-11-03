const express = require('express');
const router = express.Router();
const db = require('../config/db.js');
const Gig = require('../models/gig.js');

router.get('/', (req, res) => {
    return (
        Gig.findAll().
        then((gigs) => {
            console.log(gigs)
            res.sendStatus(200)
        })
        .catch((err) => console.log(err))
    )
});

module.exports = router;