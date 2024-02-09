
// const express=require('express');

// const port= 3000
// const app=express();

// app.post('/chalaja',function(req,res){
//     console.log(req.headers["authorization"])
// })
// app.get('/piku',function(req,res){
//     res.json([{
//         name:"Anurag",
//         age:22
//     },{
//         name:"Pokimane",
//         age:191
//     }])
// })

// app.listen(port)


const express=require('express');

const port= 3000
const app=express();

app.post('/chalaja',function(req,res){
    console.log(req.Body)
})
app.get('/piku',function(req,res){
    res.json([{
        name:"Anurag",
        age:22
    },{
        name:"Pokimane",
        age:191
    }])
})

app.listen(port)