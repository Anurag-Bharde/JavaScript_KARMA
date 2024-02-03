const fs=require("fs");

function might(){
    return new Promise(function(pintu){
        fs.readFile("a.txt","utf-8",function(err,data){
            pintu(data);
        });
    }
    )
}

function ondd(data){
    console.log(data);
}


let a=might();
console.log(a);
a.then(ondd)