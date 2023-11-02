/*const makeWithdraw = (balance) =>
  ((copyBalance) => {
    let balance = copyBalance; // This variable is private
    const doBadThings = () => {
      console.log("I will do bad things with your money");
    };
    doBadThings();
    return {
      withdraw(amount) {
        if (balance >= amount) {
          balance -= amount;
          return balance;
        }
        return "Insufficient money";
      },
    };
  })(balance);

const firstAccount = makeWithdraw(100); // "I will do bad things with your money"
console.log(firstAccount.balance); // undefined
console.log(firstAccount.withdraw(20)); // 80
console.log(firstAccount.withdraw(30)); // 50
console.log(firstAccount.doBadThings); // undefined; this method is private
const secondAccount = makeWithdraw(20); // "I will do bad things with your money"
console.log(secondAccount.withdraw(30)); // "Insufficient money"
console.log(secondAccount.withdraw(20)); // 0
*/

const value1 = ()=>{
    let var1 = "hello";
    let var2 = "hello2";
    let val = ()=>{
        console.log("This is a funcion val1")
        return "This is a funcion";
    }
    console.log(var1)
    console.log(var2)
}



console.log(value1.val);
const value2 = (()=>{
    let var1 = "hello";
    let var2 = "hello2";

    console.log(var1)
    console.log(var2)
})()