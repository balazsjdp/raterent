const router = require('express').Router();
let User = require('../models/user.model');
const bcrypt = require('bcryptjs');

router.route('/register').post((req,res) => {
    console.log(req.body)
    const {userName,userEmail,userPassword, userFirstName,userLastName} = req.body;

    let salt = bcrypt.genSaltSync(10);
    let hashedPassword = bcrypt.hashSync(userPassword, salt);

    const newUser = new User({userName: userName,userEmail:userEmail,userPassword:hashedPassword,userFirstName:userFirstName,userLastName:userLastName})

    newUser.save()
        .then(() => res.json({success: 1, errorCode: 0, message: 'Registration successful!'}))
        .catch((err) => {
            if(err.code == 11000){
                res.json({success: 0, errorCode: 11000, message: 'User already exists'})
            }
        })

})

module.exports = router;