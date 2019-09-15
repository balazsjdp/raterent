const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config()

const app = express();
const port = process.env.SERVER_PORT
const uri = process.env.ATLAS_URI

mongoose.connect(uri, {useNewUrlParser: true, useCreateIndex: true,useUnifiedTopology: true})
const conn = mongoose.connection

conn.once('open', () => {
    console.log('connected to db cluster!')
})

app.use(cors());
app.use(express.json());

app.listen(port, () => {
    console.log('Server running on port ' + port)
})