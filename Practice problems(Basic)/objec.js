const abz=[{
    fn:"ads",
    age:45,
    // manjha:{
    //     // gm:2,
    //     // mn:"AB"
    // }
},{
    fn:"gk",
    age:54,
    // manjha:{
    //     // gm:5,
    //     // mn:"ABZ"
    // }
},{
    fn:"mm",
    manjha:{
        gm:6,
        mn:"ABZ"
    }
}
]
for(let i=0;i<abz.length;i++){
    if(abz[i]["manjha"] && abz[i]["manjha"]["gm"]==6){
      console.log("NOT OK")
    }
}