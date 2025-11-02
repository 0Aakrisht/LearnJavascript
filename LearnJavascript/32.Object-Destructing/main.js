const person = {
    name : "Aakrisht",
    age : 20,
    gender : "male",
    country : "Nepal"
}
//your task is to use object destructuring to extract the name , age , gender and country properties from the person object and assign them to seperate variables named personName , personAge , personGender and personCountry respectively.
const {name : personName , age : personAge , gender : personGender , country :personCountry} = person ;

//After extracting the properties, log each variable's value to the console.
console.log(personName);
console.log(personAge);
console.log(personGender);
console.log(personCountry);





