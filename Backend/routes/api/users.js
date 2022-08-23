const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');
const gravatar = require('gravatar');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('config')
const User = require('../../models/Users')

// @route      POST api/user
// @desc       Register user
// @access     Public
router.post('/register', 
[
    check('name', 'Name is required').not().isEmpty(),
    check('email', 'Please include a valid email').isEmail(),
    check('password', 'Password requires a minimum of 6 characters').isLength({ min: 6})
],
async (req,res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const { name, email, password } = req.body;

    try {
    //See if user exists
    let user = await User.findOne({ email });
    if(user) {
        res.status(400).json({ errors: [ { msg: 'User already exists'}] });
    }

    // Get users gravatar from the email of user
    const avatar = gravatar.url(email, {
        //string url of 200
        s: '200',
        //rating pg (no nude)
        r: 'pg',
        //if there's no avatar set default
        d: 'mm'
    })
    
    user = new User({
        name,
        email,
        avatar,
        password
    });
    
    // Encrypt password
    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(password, salt);
    await user.save();
    // Return jsonwebtoken
    const payload = {
        user: {
            id: user.id
        }
    }
    jwt.sign(
        payload,
        config.get('jwtSecret'),
        { expiresIn: 360000},
        (err, token) => {
            if(err) throw err;
            res.json({ token });
        }
        );
    
    } catch(err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
});
module.exports = router;
