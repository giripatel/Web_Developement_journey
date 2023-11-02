let randomNumber = Math.floor(Math.random() * 10 + 1);

let chances = 0;
while (chances <= 10) {
  chances++;
  let userInput = prompt("Guess the number");
  let guessedNumber = Number.parseInt(userInput);

  if (randomNumber == guessedNumber) {
    console.log(`Yeah..! you guessed it right in ${chances} attempts`);
    break;
  }
}
