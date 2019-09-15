const router = require('express').Router();
let User = require('../models/user.model');
const bcrypt = require('bcryptjs');

router.route('/register').post((req,res) => {
    const {userName,userEmail,userPassword, userFirstName,userLastName} = req.body;

    let salt = bcrypt.genSaltSync(10);
    let hashedPassword = bcrypt.hashSync(userPassword, salt);

    const newUser = new User({userName: userName,userEmail:userEmail,userPassword:hashedPassword,userFirstName:userFirstName,userLastName:userLastName})

    newUser.save()
        .then(() => res.json('Registration successful'))
        .catch((err) => res.status(400).json(`An error occurred: ${err}`))

})

module.exports = router;