// Quick quiz

/*const object1 = {
    hello : "hi how are you",
    hi : "hello how are you"
}

for(let key in object1){
    console.log(key);
}

let array = [2,4,5,1,2,4];

// for in loop demonstratin
for(let key in array){
    console.log(key);
}
// for of loop demonstratin
for(let key of array){
    console.log("Array value : "+key);
}
*/

// Question 1

const obj = {
    harry : 98,
    giri : 80,
    rohan : 70
}
// console.log(Object.keys(obj)[0]);
for(let i=0;i<Object.keys(obj).length;i++){
    // console.log("key : "+ Object.keys(obj)[i]+" value : "+obj[Object.keys(obj)[i]]);
    console.log("Marks of "+ Object.keys(obj)[i]+" : "+obj[Object.keys(obj)[i]]);

}

// Question 2

for (const key in obj) {
    console.log(key + " : "+ obj[key]);
}

// Question 3