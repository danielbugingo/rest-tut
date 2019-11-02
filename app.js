const express = require('express');
const app = express();
const mongoose = require('mongoose');

require('dotenv/config');

//const dbRoute = 'mongodb+srv://danielbugingo1:dbug.256@cluster0-gtr7v.mongodb.net/test?retryWrites=true&w=majority'

// ROUTES
app.get('/', (req, res)=>{
    res.send("We are on home page")
})

app.get('/posts', (req, res) => {
    res.send('We are on posts.')
})

//Connect To DB
mongoose.connect(process.env.DB_CONNECTION, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
 })
 .then(()=>console.log(`connection to database established`))
 .catch(err=>console.log(`db error ${err.message}`));

// How we start listening to the server
app.listen(3000);