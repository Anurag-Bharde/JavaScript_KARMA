const fs= require("fs");

function mazeko(){
    return new Promise(function(pinto){
        fs.readFile("a.txt","utf-8",function(err,data){
            pinto(data);
            // console.log(data);
        });
    })
}

function ondo(data){
    console.log(data);
}


let a=mazeko();
console.log(a);
a.then(ondo);