let a = [2, 5, 1, 6, 2, 7, 0, 3];

let j = a.forEach((value) => {
  // console.log(value+1*8);
});

let ma = a.map((value)=> {
  // console.log("map value : "+value+1)
})

let num = 4;
console.assert(num>5 );
console.log(num);

const obj = {
  key1 : "hey",
  key2 : "hello"
}
console.table(obj)

let n = 100;
let sum = 0;
console.time("loop")
for(let i = 0; i<n;i++){
  sum+=i;
}
console.log(sum);
console.timeEnd("loop")


