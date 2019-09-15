const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config()

const app = express();
const port = process.env.SERVER_PORT
const uri = process.env.ATLAS_URI

app.use(cors());
app.use(express.json());

mongoose.connect(uri, {useNewUrlParser: true, useCreateIndex: true,useUnifiedTopology: true})
const conn = mongoose.connection

conn.once('open', () => {
    console.log('connected to db cluster!')
})

// Route - Registration
const registrationRouter = require('./routes/registration.router');
app.use('/registration', registrationRouter);

const loginRouter = require('./routes/login.router');
app.use('/login', loginRouter);

app.listen(port, () => {
    console.log('Server running on port ' + port)
})