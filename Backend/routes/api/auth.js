const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');
const auth = require('../../middleware/auth');
const Users = require('../../models/Users');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('config')
// @route      GET api/auth
// @desc       Test route
// @access     Public
router.get('/', auth,
async (req,res) => {
    try {
     const user = await Users.findById(req.user.id).select('-password');
     res.json(user);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error.');
    }
});

// @route      POST api/auth
// @desc       Authenticate user & get token
// @access     Public
router.post('/', 
[
    check('username', 'Username is required').exists(),
    check('password', 'Password is required').exists()
],
async (req,res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    
    const { username, password } = req.body;
    try {
    //See if user exists
    let user = await Users.findOne({ 'username': username });
    if(!user) {
        res.status(400).json({ errors: [ { msg: 'Invalid Credentials'}] });
    }
    
    if(password != user.password){
        return res.status(400).json({ errors: [ { msg: 'Invalid Credentials'}] });
    }
    /*
    const isMatch = await bcrypt.compare(password, user.password);

    if(!isMatch) {
        return res.status(400).json({ errors: [ { msg: 'Invalid Credentials'}] });
    }*/

    // Return jsonwebtoken
    const payload = {
        user: {
            user_id: user.user_id,
            username: user.username,
            password: user.password 
        }
    }
    jwt.sign(
        payload,
        config.get('jwtSecret'),
        { expiresIn: '5 days'},
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