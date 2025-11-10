//1. Iterate over "ages" array.
//2. Print only adults , those whose age is greater than 18.

const ages = [10, 16 , 18 , 30]
console.log(ages.filter(age=>age>=18));

// ------------------------------------------------------------------------------
//1. Iterate over "words" array
//2. Print only those words which length is greater than 6
const words = ["Aakrisht","Pachhai","Hero","Done"];
const results = words.filter(word => word.length > 6);

console.log(results);
