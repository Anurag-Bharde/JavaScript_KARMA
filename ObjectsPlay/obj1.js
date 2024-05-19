// let per={
//     name:"abc",
//     age:24,
//     xyz: function(){
//         console.log(this.name + "is afda")
//     }
// }

// per.xyz();

function person(name,age,isok,ok){
    this.name=name;
    this.age=age;
    this.isok=isok;
    this.ok=ok;
}
let pt=new person("afs",22,"ok","isok")

console.log(pt)