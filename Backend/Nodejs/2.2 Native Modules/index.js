// const fs = require("fs");

// fs.writeFile("message.txt","Let's do it champ",(err) => {
//   if (err) throw err;
//   console.log('The file has been saved!');
// });

const rd=require("fs");

rd.readFile("C:/web development/Practice/2.3 NPM/message.txt",'utf-8',(err, data) => {
    if (err) throw err;
    console.log(data);
  })