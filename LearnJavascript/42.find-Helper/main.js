//1. Iterate over "ages" array
//2. Print only those ages which is greater than 18.
const ages = [1,10,15,18,20,31];

const result = ages.find(age => age>18);
console.log(result);

// --------------------------------------------------------------
 let products = [
 {name : "Checkers" , category : "Toys"},
 {name : "Harry Potter", category : "Books"},
 {name :"iPhone", category : "Electronics"},
 {name : "Learn PHP", category : "Books"}
 ];

let results = products.find(product => product.category = "Books");
console.log(results);

