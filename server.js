const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors')

const app = express()
app.use(cors())
app.use(express.json())

const productsModel = require('./models/productsModel');

app.get('/', (req, res) => {
    res.send('this is from backend');
});

mongoose.connect('mongodb+srv://pnpnelly:PfdxkAYMl9G3flOn@backend.gdsq2.mongodb.net/?retryWrites=true&w=majority&appName=backend')
.then(() => {
    console.log('Connected to database!');
    app.listen(5000, () => {
        console.log('Server is running on port 5000')
    })
})
.catch(() =>{
    console.log('Connection failed!');
    
})

//Products API
app.get('/getproducts', (req, res) => {
    productsModel.find({})
        .then(docs => res.send(docs ))
        .catch(err => res.status(400).json({ message: 'Something went wrong', error: err }));
});
// app.listen(5000, () =>{
//     console.log('Server is Running');
    
// })
    



