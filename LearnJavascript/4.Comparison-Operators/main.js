//1. create a variable name (firstFavNum) and store your favourite number.
let firstFavNum = 7 ;
console.log(firstFavNum);
//2. create a variable name (secondFavNum) and store your favourite number.
let secondFavNum = 10 ;
console.log(secondFavNum);
//3. check  (firstFavNum is greater than secondFavNum)
console.log(firstFavNum > secondFavNum);
//4. check  (firstFavNum is less than secondFavNum)
console.log(firstFavNum < secondFavNum);
//5. check  (firstFavNum is greater than and equal to secondFavNum)
console.log(firstFavNum >= secondFavNum);
//6. check  (firstFavNum is less than and equal to secondFavNum)
console.log(firstFavNum <= secondFavNum);
//7. check  (firstFavNum is equal to secondFavNum) using strict quality operator
console.log(firstFavNum === secondFavNum);
//8. check  (firstFavNum is equal to secondFavNum) using loose equality operator
console.log(firstFavNum == secondFavNum);
//9. check  (firstFavNum is not equal to secondFavNum) using strict non-equality operator
console.log(firstFavNum ===! secondFavNum);
//10. check  (firstFavNum is not  equal to secondFavNum) using loose non-equality operator
console.log(firstFavNum ==! secondFavNum);

// Loose Equality (==)
// The loose equality operator (double equals) compares two values for equality after performing type coercion.
// If the operands are of different types, JavaScript attempts to convert one or both operands to a common type before performing the comparison.
// This can lead to unexpected results, as values that appear different might evaluate to true due to implicit type conversion.

console.log(5 == "5");   // true (string "5" is coerced to number 5)
console.log(null == undefined); // true (both are considered "falsy" in this context)
console.log(0 == false); // true (both are considered "falsy")

// Strict Equality (===)
// The strict equality operator (triple equals) compares two values for equality without performing any type coercion.
// It checks both the value and the type of the operands. If the types are different, the comparison immediately returns false.
// This operator provides a more predictable and often safer way to compare values, as it avoids the potential pitfalls of implicit type conversion

console.log(5 === "5");   // false (number and string types are different)
console.log(null === undefined); // false (null and undefined are different types)
console.log(0 === false); // false (number and boolean types are different)