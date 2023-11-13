const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');


dotenv.config()

const app = express();
const port = process.env.PORT || 3001

app.get('/', (req, res) => {
    res.send('Welcome');
})


mongoose.connect('mongodb+srv://ddqa2208:qa123456789@data-new.s2021bv.mongodb.net/?retryWrites=true&w=majority')
    .then(() => {
        console.log('Connected mongodb')
    })
    .catch((err) => {
        console.log(err)
    })

app.listen(port, () => {
    console.log('listening on port: ' + port)
})