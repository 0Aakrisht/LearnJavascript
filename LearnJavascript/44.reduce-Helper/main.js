// write a function called calculateProduct that takes an array of numbers as an argument and returns the product of all the numbers in the array.

// write the calculateProduct function using the reduce() method to achieve this task.
 
const numbers = [2,3,4,5];

const product = numbers.reduce((p,c)=>p*c,1) ;
console.log(product); 

