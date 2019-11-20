const express = require('express');
const router = express.Router();

// Load email validation
const validateEmail = require('../validation/email');


// @route   GET api/
// @desc    Test route
// @access  Public
router.get('/', (req, res) => {
    return res.json({ response: ` '/' WORK ` });
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

    return res.json({ response: req.body.email });
})

module.exports = router;