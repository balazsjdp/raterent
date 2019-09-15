const router = require('express').Router();
let User = require('../models/user.model');
const bcrypt = require('bcryptjs');


router.route('/verifyCredentials').post((req,res) => {
    const {userName,userPassword} = req.body;

    User.find({userName: userName})
        .then((userDataFromDb) => {
            let loginPassword = userPassword
            let isPasswordValid = bcrypt.compareSync(loginPassword, userDataFromDb[0].userPassword); // true

            res.json({
                userFound: true,
                isPasswordValid: isPasswordValid
            })
        })
        .catch((err) => res.status(404).json({
            error_description: "This user doesn't exists in the database!",
            error_details: err
        }))
})


module.exports = router;