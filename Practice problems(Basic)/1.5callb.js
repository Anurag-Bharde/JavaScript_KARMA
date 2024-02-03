
function pint(){
    let ans=0;
    for(let i=0;i<100;i++){
        ans+=i;
    }
    return ans;
}

function ondo(){
    pint();
}

    setTimeout(ondo,5000);
    console.log("meow");