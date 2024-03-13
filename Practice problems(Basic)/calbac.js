function summ(num1,num2,funttt){
    let res=num1+num2;
    funttt(res);
}
function disp1(result){
    console.log(result+" This is answer");
}
function disp2(result){
    console.log("This is answer "+result);
}
//you can only change 1 thing in above function;
//and print in any of the above 2 /

let r=summ(1,2,disp2)