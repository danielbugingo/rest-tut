const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
require('dotenv/config');

app.use(bodyParser.json())

// Import Routes
const postsRoute = require('./routes/posts');

app.use('/posts', postsRoute);

// ROUTES
app.get('/', (req, res)=>{
    res.send("We are on home page")
});

//Connection to the database. 
//Mongodb cloud based
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