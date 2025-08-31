//1.Create object name (car)
//2. add (type, model,color) as properties
//3. Check the type of the object
//4. Update the type property to "Toyota"
//Add new property wheel
//6.log car to the console.
let car = {
    type : "Sedan",
    model: "3-Series",
    color:"white",
}
car.type = car.type.replace("Sedan","toyota");
car.wheel = 10;
console.log(typeof car);
console.log(car.type);
console.log(car.wheel);
console.log(car);



