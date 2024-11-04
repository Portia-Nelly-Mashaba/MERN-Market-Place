const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors')

const app = express()
app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
    res.send('this is from backend');
});

mongoose.connect('mongodb+srv://pnpnelly:PfdxkAYMl9G3flOn@backend.gdsq2.mongodb.net/?retryWrites=true&w=majority&appName=backend')
app.listen(5000, () =>{
    console.log('Server is Running');
    
})
    



