const fs=require("fs");

function jimmy(){
    let p=new Promise(function(depo){
       fs.readFile("a.txt","utf-8",function(err,data){
        depo(data);
       })
    })
    return p;
}

async function main(){
    let val= jimmy();
    console.log(val);
}
main();