const fs=require("fs");

fs.readFile("a.txt","utf-8",function(err,data){
    console.log(data);
})


console.log("hiii");
let a=0;
for(let i=0;i<100000000;i++){
    a++;
}
console.log("HELO THERE");