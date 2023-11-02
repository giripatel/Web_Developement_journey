// const { error } = require('console');
const fs = require("fs/promises");
const fsc = require("fs");
//Using promises
/*
async function logfile() {
  try {
    const res = await fs.readFile("reaad.txt", "utf-8");
    console.log(res);
  } catch (error) {
    console.log(error);
  }
}
logfile();
*/

const res = fsc.readFile("read.txt","utf-8",(error,data)=>{
    console.log(data)
})

console.log(res)
console.log(fs)