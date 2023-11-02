/*let pr = new Promise((resolve,reject)=>{
    console.log("hello !")
    resolve(12);    
}).then((value)=>{
    console.log(value)
    return value+12
}).then((value)=>{
    console.log(value)
    return new Error()
}).catch((value)=>{
    console.log('caught')
})*/
let pr = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        console.log('printing step 1')
        resolve(1);
    },3000)
    // console.log("hello !")
        
})

console.log(pr)
// let pr1 = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         console.log('printing step 2')
//         // console.log("hello !")
//         resolve(2);    
//     },1000)
// })
// let pr2 = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         console.log('printing step 3')
//         // console.log("hello !")
//         resolve(3);    
//     },1000)
// })

// console.time('time')
// setTimeout(()=>{
//     console.log('Without promise step 1')
// },2000)
// setTimeout(()=>{
//     console.log('Without promise step 2')
// },2000)
// setTimeout(()=>{
//     console.log('Without promise step 3')
// },2000)
// console.timeEnd('time')

// writing a promise in function
const promise = ( )=>{
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            const success = false;
            if(success){
                resolve('resolved')
            }else{
                reject('rejected : '+ new Error('Promise is not resolved') )
            }
        },5000)
    })
}

// First type of using then and catch 
/*promise().then((value)=>{
    console.log(value);
}).catch((error)=>{
    console.log('yehhhhh we caught the error : '+error);
})*/

// Secnod  way of handling the error
/*promise().then((value)=>{
    console.log(value);
},(error)=>{
    console.log("hehehe you can't escape error ")
})
console.log(promise)*/