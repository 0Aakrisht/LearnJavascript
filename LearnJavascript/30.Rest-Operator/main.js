function person(name , age , ...skills){
    console.log("Name:",name);
    console.log("Age:",age);
    console.log("Skills:",skills);  
}
person("Aakrisht",20,"football","valorant","coding");


//create a function which will take unlimited amount of parameters and log all that params to the console.
function variadic(...params) {
    console.log(params);
}
variadic("Aakrisht",20,"football","valorant","coding");
