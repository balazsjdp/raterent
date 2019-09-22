const router = require('express').Router();
let User = require('../models/user.model');
const bcrypt = require('bcryptjs');
const moment = require('moment');
const crypto = require('crypto');
let UserSession = require('../models/userSession.model')

router.route('/checkIfAliveSession').post((req,res) => {
    const {token,userPassword} = req.body;
    
    UserSession.find({token: token})
        .then((response) =>{
            console.log(response)
            if(response && response[0].validUntil > moment()){
                res.send({sessionIsAlive : 1})
            } else{
                res.send({sessionIsAlive : 0})
            }
        })

})


router.route('/verifyCredentials').post((req,res) => {
    const {userName,userPassword} = req.body;
    User.find({userName: userName})
        .then((userDataFromDb) => {
            let loginPassword = userPassword
            let isPasswordValid = bcrypt.compareSync(loginPassword, userDataFromDb[0].userPassword); // true

            const sessionToken = crypto.randomBytes(64).toString('hex');
            let newUserSession = new UserSession({userName: userName, validUntil: moment().add(1,'hours'), token: sessionToken })

            newUserSession.save()


            res.json({
                userFound: true,
                isPasswordValid: isPasswordValid,
                sessionToken: sessionToken
            })
            
        })
        .catch((err) => res.json({
            userFound: false,
            isPasswordValid: false
        }))
})


module.exports = router;