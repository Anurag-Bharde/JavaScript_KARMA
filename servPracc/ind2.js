const bodyParser = require('body-parser');
const express= require('express');
const app= express();

const port=3000;

app.get('/geet',function(req,res){
    console.log("<h1>Hello World</h1>")
    res.send('<h1>Hello world!</h1>')
})

app.use(bodyParser.json());

app.post('/meet',function(req,res){
    console.log(req.query.search)
})
app.listen(port)