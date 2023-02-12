const router = require('express').Router();
const User = require("../models/User")
const bcrypt = require('bcrypt');




//register
router.post("/Register",async (req,res)=>{
    try{
        const salt = await bcrypt.genSalt(10)
        const hashedpass = await bcrypt.hash(req.body.password, salt)
        const newuser = new User({
            username : req.body.username,
            email : req.body.email,
            password : hashedpass,
        });
        const user = await newuser.save();
      res.status(200).json(user)
    }catch(err){
 res.status(500).json(err);
    }
    
})

//Login
router.post('/login', async (req,res)=>{
    try{
        const user =await User.findOne({username: req.body.username})
        if (!user) {
            return res.status(400).json('Wrong credentials');
        }
        const validate = await bcrypt.compare(req.body.password , user.password)
        if (!validate) {
            return res.status(400).json('Wrong credentials');
        }
        const {password, ...others}= user._doc;
        res.status(200).json(others);
    } catch (err) {
        res.status(500).json(err);
    }
});


module.exports = router;