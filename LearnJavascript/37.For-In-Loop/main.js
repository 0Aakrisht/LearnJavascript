let person = {
    name : "Aakrisht",
    age : 20 ,
    city :"Kathmandu"
}

for(let keys in person){
    console.log(`${keys} : ${person[keys]}`);
    
};

let numbers = [1,2,3,4,5,6,7,8,9,0];
for(let index in numbers){
    console.log(`${index} : ${numbers[index]}`);
    
};

//iterate over object and log the property and the values of that object using for in loop.
const car = {
    toyata : "supra",
    ford : "mustang",
    honda : "civic"
}
for(let properties in car){
    console.log(`${properties} : ${car[properties]}` );

}