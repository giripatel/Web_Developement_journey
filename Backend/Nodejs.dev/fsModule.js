// const { error } = require("console");
// const fs = require("fs");
// const fsc = require("fs/promises");

import fs from 'fs';
import  fsc from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

// stat method to retrive information about the file or directory 
fs.stat("./text.txt",(error,stats)=>{
        // console.log(stats)
        console.log(stats.isFile()); // true
        stats.isDirectory(); // false
        stats.isSymbolicLink(); // false
        stats.size; 
})

// fs.statSync()

// open method to read or write the file using depending upon flags passed to it
/*fs.open("./text.txt",'w+',(err,fd)=>{
    console.log(err)
    console.log(fd)
})

 fs.open("./text2.txt",'w+',(err,fd)=>{
    console.log(err)
    console.log(fd)
})
*/

async function example(){
    let file = await fsc.open("./text.txt","r")
    console.log(file.fd,"fd")
    console.log(await file.readFile({ encoding: 'utf8' }))
}
example()

// Or const fs = require('fs').promises before v14.
/*async function example() {
  let filehandle;
  try {
    filehandle = await fsc.open('./text.txt', 'r');
    console.log(filehandle.fd);
    console.log(await filehandle.readFile({ encoding: 'utf8' }));
  } finally {
    if (filehandle) await filehandle.close();
  }
}
example(); */
let data;
const read = async ()=>{
    try{
     data= await fsc.readFile('text.txt',{encoding : 'utf8'});
    console.log(data);
    console.log("data")
    }catch(error){
        console.log(error)
    }
}
read();


let context = "This file content is orver ridden"
const write = async ()=>{
    try {
        
       await fsc.writeFile("text3.txt",context,{flag : "a+"});
    } catch (error) {
        console.log(error);
    }
}
write()


console.log(__dirname)

