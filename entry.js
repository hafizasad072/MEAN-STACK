var express = require('express');
var mongoose = require('mongoose')
var cors = require('cors')
var bodyParser = require('body-parser')

// Routes
const route = require('./routes/route')



var app = express();

mongoose.connect("mongodb://localhost:27017/shoppinglist");

mongoose.connection.on('connected',()=>{
    console.log('Db Connected');
})

mongoose.connection.on('error',(err)=>{
    console.log('Error: '+err)
})

// Cors to pass data on diffrent domain's
app.use(cors());

//Get request data in json format
app.use(bodyParser.json());

// routes
app.use('/api',route)

app.get('/',(req,res)=>{
    res.send('Hello MEAN');
})


var PORT = 3000;

app.listen(PORT,()=>{
    console.log("Server start at "+PORT);
})