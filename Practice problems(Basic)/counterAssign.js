let timer=30;

const tfid=setInterval(jai,1*1000)

function jai(){
    console.log(timer);
    timer--;
    if(timer==0){
        clearInterval(tfid)
    }
}