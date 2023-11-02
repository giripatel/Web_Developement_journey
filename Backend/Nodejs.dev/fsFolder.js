import fs from 'fs/promises'
import fsc from 'fs'
import url from 'url';
import path from 'path';

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

let dir ="C:/web development/Nodejs.dev/test";
let dir2 ="C:/web development/Nodejs.dev/tested";

//Removing a file
async function remove(){
   await fs.rmdir(dir2)
}
remove()


// Renameing a flder 
/*
async function rename(){
   await fs.rename(dir,dir2)
}
rename()
*/
// Reading a folder contents
/*
async function example(){
    let file = await fs.readdir(dir)
    console.log(file);
}
example()
*/

// Checking the folder exists or not if it is not create one
/*console.log(dir)
let exists = await fs.access(dir);
const folder = async ()=>{
    console.log("Entered into function")
    try {
        console.log("Entered into try")
        // let exists =  fsc.existsSync(dir);
        console.log("Entered into try")
        if(!exists ){
            await  fs.mkdir(dir);
            console.log("entered if");
        }
    } catch (error) {
        console.log(error)
    }
}
folder()
*/

