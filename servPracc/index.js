
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

app.get('/go',function(req,res){
    res.send('<h1>Anurag was here</h1>')
})
app.post('/chalaja',function(req,res){
    // res.send('<h1>Anurag was here</h1>')
    res.send('REcieved messege')
    console.log(req.body)
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