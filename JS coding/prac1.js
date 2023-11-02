/*const obj = {
    key1 : "Giri",
    key2 : "Vishnu",
    key3 : "bunny"
}
console.log(Object.keys(obj));
console.log(Object.keys(obj)[0]);
console.log(obj[Object.keys(obj)[0]]);
console.log(obj.key1)
obj.key4 = "siddu";
console.log(Object.keys(obj)) 
delete obj.key4;
console.log(Object.keys(obj)) */

// console.log(obj["key1"]);

// for(let a in obj){
//     console.log(obj[a]);
// }
// console.log("indexing array using '' " + array['0'])
// let number = 0;
// array.forEach((number)=> {
//      number = number*2
//     console.log(number)
/// console.log(number)
// for(let a of array){
//     console.log(a);
// }
// array[0]=12;
// array.push(7,8);
// console.log(array)
// array.push();
// array.pop()
// console.log(array)

/*let a = prompt("Enter a digit");
        let num = Number.parseInt(a);
        console.log(num +' and type of num is '+ typeof num);*/

// console.log(4**4);
// console.log(4*4*4*4);

/* const array = [2,3,5,5,5,6]
const array2 = [1,11,111,1111]
        
// let join = array.join()
console.log(array.length)
console.log(array2.length)
array.shift();
array.unshift(10)
        
console.log(array )
// console.log(join.length)*/

// function game(){
//     let message = "Good morning"
//     {
//         // message = "Good afternoon"
//         console.log("Inside the block : " +message);
//     }
//     console.log("out side the block : " +message);
// }
// game()

/*let string = "hellohello"
// console.log(string.indexOf("lo"));
let replacedString = string.replace(/hel/g, 'wow');
console.log(replacedString)
let splitString = replacedString.split('w')
console.log(splitString)*/

/*const name1 = "harry";
const name2 = "giri";
const c = name1.concat(name2,"yes","this","is","con","cat",'inated');
console.log(c)

let s = "har\"";
console.log(s)
console.log("har\"".length)

let string = "hello";
let test = string[4]="i";
console.log(test)
console.log(string) */

let array = [1, 2, 4, 5, 6];
let input = [1, 2, 3, 0,5, 0];

for (let a of input) {
    if (a == 0) {
        console.log(a)
        break;
    } else {
        array.push(a);
  }
}
console.log(array);

let square = 4**4;
console.log("square : "+ square)

let n = [3,6,1]
console.log(typeof n.join("-"))

let so = [10,3,5,1,7,9,3,8]

let sorted = so.sort((a,b) => a - b)

console.log(sorted);

const numbers = [1,2,4,5,6,6]
// numbers.splice(2,0,23,24)
numbers.reverse()
console.log(numbers)