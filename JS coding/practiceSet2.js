// Question 1

const age = 20;

if (age >= 10 && age <= 20) {
  console.log("age is between 10 and 20 ");
} else {
  console.log("age is not between 10 and 20 ");
}

// Question 2

switch (age) {
  case 1:
   console.log( "hello i am 1");
    break;
  case "hello":
   console.log("hi i am hello");
    break;
  case 20:
    console.log("hello i am 20 you found me");
    break;
}

// Question 3

let num = 12;

if(num%2==0 && num%3==0){
    console.log(num + " is divisible by 2 and 3")
}else{
    console.log(num + " is not divisible by 2 and 3");
}

// Question 4

let number = 11;

if(number%2==0 || number%3==0){
    console.log(num + " is divisible by 2 or 3")
}else{
    console.log(num + " is not divisible by 2 or 3");
}

// Question 5

let age2 = 19;

(age2>18)? console.log("you can drive ") : console.log("you can't drive");