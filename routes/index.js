const express = require('express');
const router = express.Router();

// Load email validation
const validateEmail = require('../validation/email');

// @route   GET api/
// @desc    Test route
// @access  Public
router.get('/', (req, res) => {
    console.log('SESSION', req.session);
    return res.json({ response: req.session });
})

// @route   GET api/subscribe
// @desc    Subscribe user
// @access  Public
router.post('/subscribe', (req, res) => {
    const { errors, isValid } = validateEmail(req.body);
    
    // Check validation
    if(!isValid) {
        return res.status(400).json(errors);
    }

    if(!req.session.email){
        req.session.email = req.body.email;
        req.session.save();
    }
    console.log('INTO',req.session)
    return res.json({session: req.session});
})

module.exports = router;