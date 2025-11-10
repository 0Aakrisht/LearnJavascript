//1. Create array with random numbers.
//2. Map over each item in that array, and multiply with 10 .
let numbers = [1,2,3,4,5];
numbers.map(num=>console.log(num*10));

//second way
let nums = [1,2,3,4,5];
function multi(num) {
    return num * 100 ;
}

let array = nums.map(multi);
console.log(array);
