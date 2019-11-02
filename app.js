const express = require('express');
const app = express();
const mongoose = require('mongoose');

// ROUTES
app.get('/', (req, res)=>{
    res.send("We are on home page")
})

app.get('/posts', (req, res) => {
    res.send('We are on posts.')
})

//Connect To DB
mongoose.connect('mongodb+srv://danielbugingo1:dbug.123@cluster0-kjlgw.mongodb.net/test?retryWrites=true&w=majority', { useNewUrlParser: true }, { useUnifiedTopology: true }, ()=>{
    console.log('connected to DB')
})

// How we start listening to the server
app.listen(3000);