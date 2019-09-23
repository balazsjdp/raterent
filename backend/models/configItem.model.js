const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const configItemSchema = new Schema({

    configItemCategory: {
        type: String,
        required: true,
        trim: true
    },
    configItemName: {
        type: String,
        required: true,
        trim: true
    },
    configItemContent: {
        type: JSON,
        required: true,
        trim: true
    }
},
{
    timestamps: true
})

const ConfigItem = mongoose.model('ConfigItem', configItemSchema);

module.exports = ConfigItem