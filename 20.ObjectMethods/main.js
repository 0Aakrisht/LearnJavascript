const person = {
    firstName :"Aakrisht",
    lastName : "Pachhai",
    age : 20,
    data : function() {
        return `My name is ${person.firstName} ${person.lastName} and I am ${person.age} years old.`;
    }
};
console.log(person.data())
