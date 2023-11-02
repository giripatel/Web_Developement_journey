
// let [x,y] = [1,2];

// console.log(x);
// console.log(y);
let arr = [2,3,5,6,7,8,9];
let [a,b, , , ...rest] = arr;
// console.log(a,b,rest);

let obj = {
    key1 : "hi",
    key2 : "hello",
    key3 : "yes",
    key4 : "hi",
    key5 : "hello",
    key6 : "yes"
}

console.log({...obj,key1:"thisis good"});
let {key1, key2 ,key3, ...restOfobj} = obj;

// console.log(key1,key2, restOfobj)

let arr1 = [2,5,9];
let y = ({...arr1}); 
console.log(y)

const fun = (v1,v2,v3)=>{
    return v1+v2+v3;
}

console.log(fun(...arr1));


const n="yes",m="no";
const c = {n,m}
console.log(c)

//Hosting 
 
// hello("hello")

// function hello(va){
    //     console.log(va , "va is printing")
    // }
    const hello = (va)=>{
        console.log(va , "va is printing")
    }
    hello("hello")