const express = require('express');
const router = express.Router();

// @route      GET api/profile
// @desc       Test route
// @access     Public
router.get('/', (req,res) => res.send('Profile route'));

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
        res.status(400).json({ errors: [ { msg: 'Invalid username.'}] });
    }
    
    /*
    const isMatch = await bcrypt.compare(password, user.password);

    if(!isMatch) {
        res.status(400).json({ errors: [ { msg: 'Invalid password.'}] });
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
        { expiresIn: 360000},
        (err, token) => {
            if(err) throw err;
            res.json({ user });
        }
        );
    
    } catch(err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
});
module.exports = router;