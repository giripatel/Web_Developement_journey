let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let index = 0; index < array.length; index++) {
    let count = 0;
  for (let i = 0; i < array[index]; i++) {
    console.log(i+"at during "+array[index]);
    if (array[index] % i === 0) {
      count++;
    }
  }
console.log("--------------------------");
  if (count === 1) {
    console.log(array[index]+"is a prime number");
  } else {
    console.log(array[index]+"is not a prime nubmer");
  }
}
