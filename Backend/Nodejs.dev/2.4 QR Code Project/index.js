/* 
1. Use the inquirer npm package to get user input.
2. Use the qr-image npm package to turn the user entered URL into a QR code image.
3. Create a txt file to save the user input using the native fs node module.
*/
import inquirer from "inquirer";
import fs from "fs/promises";
import qr from "qr-image";
import fsc   from "fs";

const input = async () => {
  try {
    let userInput = await inquirer.prompt([
      {name : 'web', message: "Enter your websit" }
    ]);
    // let  input = JSON.stringify(userInput.web);
    let input = userInput.web
    console.log(userInput.web);
    // console.log(input);
    await fs.writeFile("input.txt", `,${input}`,{flag : 'a+'});

    let qr_svg =await qr.image(input, { type: "png" });
    qr_svg.pipe(fsc.createWriteStream(`${input}.png`));

    // var svg_string = qr.imageSync("I love QR!", { type: "svg" });
  } catch (err) {
    console.log(err);
  }
};
input(); 

/*inquirer
  .prompt([{ message: "Hello is this working", type: "input" }])
  .then((answers) => {
    console.log(answers);
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
      console.log(error);
    } else {
      // Something else went wrong
      console.log(error);
    }
  });*/
