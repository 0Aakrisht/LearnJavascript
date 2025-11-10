const fruits = ["apple","mango","banana","orange"]

fruits.forEach((fruit) => console.log(fruit));

//1. Create an array of numbers.
//2. Create a variable to hold the sum 
//3. Create the adder function which takes the parameter of number and add that with sum variable.
//4. Loop over the arrray , incrementing the sum variable except this time a function gets referenced in the forEach 
//5. Print the sum variable.
 const numbers = [1,2,3,4,5];
 let sum = 0;
    function adder(number){
        sum += number;
    }
    numbers.forEach(adder);
    console.log(sum);