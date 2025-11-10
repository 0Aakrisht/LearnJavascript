//This is ES6 method to perform it.
let products = [
{ name: "Checkers", category: "Toys" },
{ name: "Harry Potter", category: "Books" },
{ name: "iPhone", category: "Electronics" },
{ name: "Learn PHP", category: "Books" },
];
//some helper will be true even there is only one true
console.log(products.some(product => product.category == "Books"));
//every helper will be true when all are true
console.log(products.every(product => product.category == "Books"));
