const fs=require("fs");

function might(){
    return new Promise(function(pint){
         fs.readFile("a.txt","utf-8",function(err,data){
            pint(data);
         })
    })
}

function ondo(data){
    console.log(data);
}

let a=might();
console.log(a);
a.then(ondo);