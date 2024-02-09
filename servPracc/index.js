
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
const bodyParser=require('body-parser');

const port= 3000;
const app=express();

app.use(bodyParser.json());
app.post('/chalaja',function(req,res){
    console.log(req.body)
    res.send('REcieved messege')
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