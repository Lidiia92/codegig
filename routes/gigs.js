const express = require('express');
const router = express.Router();
const db = require('../config/db.js');
const Gig = require('../models/gig.js');

router.get('/', (req, res) => {
    Gig.findAll({}).
    then((gigs) => {
        res.json({
            error: false,
            data: gigs
        })
    })
    .catch((err) => console.log(err))
});

//Add gig
router.post('/add', (req, res) => {

    const newTodo = {
        title: req.body.title,
        technologies: req.body.technologies,
        description: req.body.description,
        budget: req.body.budget,
        contact_email: req.body.contact_email,
    }

    Gig.create({...newTodo})
    .then(gig => res.status(201).json({
        error: false,
        data: gig,
        message: "New gig created"
    }))
    .catch(err => console.log(err));

})

module.exports = router;