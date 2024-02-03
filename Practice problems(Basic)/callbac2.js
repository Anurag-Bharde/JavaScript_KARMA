function funn(num1,num2,piko){
   return piko(num1,num2);
}
function minn(num1,num2){
    let ans=num1-num2;
    return ans;
}
function plus(num1,num2){
    let ans=num1+num2;
    return ans;
}

const r=funn(9,8,plu)
console.log(r);