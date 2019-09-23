const router = require('express').Router();
let ConfigItem = require('../models/configItem.model');


router.route('/createConfigItem').post((req,res) => {
    const {configItemCategory,configItemName,configItemContent} = req.body

    const newConfigitem = new ConfigItem({configItemCategory: configItemCategory, configItemName: configItemName,configItemContent:configItemContent})

    newConfigitem.save()
})


router.route('/getPageSettings').get((req,res) => {
    const {page} =  req.query
    ConfigItem.find({configItemName: page})
        .then((result) => {
            res.send(result)
        })
        .catch((err) => {
            res.send('Error getting settings from database.')
        })
})  


module.exports = router;