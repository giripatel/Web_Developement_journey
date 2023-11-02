// const { reject } = require("async")

//printing after 2 seconds of delay
// setTimeout(()=>{
//     console.log("Hello")
//     console.log("World!")
// },2000)

const prom =  (async(n)=>{
    let a = new Promise((resolve, reject)=>{
        let fun = () => {
            console.log("The function is resolved in "+n*1000  +" Seconds")
        }
        setTimeout(fun, n*1000);
    })
})(6)






// const fun = async () => {
//     let a = new Promise((resolve, reject) => {
//       setTimeout(() => {
//         resolve("2");
//       }, 3000);
//     });
//     console.log(await a); 
//     return a
    
// }
// async function test(){
// let a = await fun();
// console.log(a)
// }

// test()