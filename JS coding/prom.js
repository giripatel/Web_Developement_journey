let random = Math.floor(Math.random() * 10);
console.log(random);
let prom = new Promise((resolve, reject) => {
  console.log("hello");
  if (random % 2 == 0) {
    resolve(random);
  } else {
    reject(new Error("This promise is rejected..."));
  }
});
prom.then(
  (value) => {
    console.log(value);
  },
  (error) => {
    console.log("error");
  }
);

let prom2 = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(2);
    }, 3000);
  });
};
let prom3 = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(3);
    }, 5000);
  });
};

const pr = [prom, prom2(), prom3()];

// Promise.all(pr).then((values)=>{
//     console.log(values)
// })

/*const promise1 = new Promise((resolve, reject) => {
  setTimeout(() => resolve("Promise 1 resolved"), 1000);
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => resolve("Promise 2 resolved"), 1500);
});

const promise3 = new Promise((resolve, reject) => {
  setTimeout(() => resolve("Promise 3 resolved"), 500);
});

const promise4 = new Promise((resolve, reject) => {
  // Simulate a promise rejection
  setTimeout(() => reject("Promise 4 rejected"), 2000);
});

Promise.resolve(promise3).then((value)=>{
    console.log(value)
})

Promise.reject(promise4).catch((error)=>{
    console.log("error")
})*/
// const promises = [promise1, promise2, promise3, promise4];

/*Promise.all(promises)
    .then(values => {
      console.log('All promises resolved:', values);
    }).catch(error => {
        console.error('At least one promise was rejected:', error);
      })*/

/*Promise.allSettled(promises).then((value)=>{
    console.log(value)
})*/

/*Promise.any(promises).then((value)=>{
    console.log(value)
}).catch((error) =>{
    console.log("Error : ",error)
})*/

/*Promise.race(promises).then((value)=>{
    console.log(value)
}).catch((error) =>{
    console.log("Error : ",error)
})*/

/*const promise = ( )=>{
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
promise().then((value)=>{
    console.log(value);
}).catch((error)=>{
    console.log('yehhhhh we caught the error : '+error);
})


// prom.catch()

// console.log(prom)*/



