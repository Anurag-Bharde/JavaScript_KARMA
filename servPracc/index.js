
const express=require('express');

const port= 3000
const app=express();

app.get('/',function(req,res){
    res.json([{
        name:"Anurag",
        age:22
    },{
        name:"Pokimane",
        age:191
    }])
})

app.listen(port)