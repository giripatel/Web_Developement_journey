let array = [];

let count = 1;
function fizzBuzz(array){
    if(array.length === 0){
        array.push(count);
    }
    count++;
    array.push(count);
    console.log(array);

}

for(let i = 0 ; i< 10 ; i++){
    fizzBuzz(array);
}