
const express=require('express');

const port= 3000
const app=express();xit

app.get('/',function(req,res){
    res.json({
        name:"Anurag",
        age:22
    },{
        name:"Pokimon",
        age:54
    })
})

app.listen(port)