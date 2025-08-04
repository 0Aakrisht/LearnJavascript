//1.Create a variable name (favPlayerFirstName) and assign it your favorite player's first name
let favPlayerFirstName = "Cristiano";
//2.Create a variable name (favPlayerLastName) and assign it your favorite player's last name
let favPlayerLastName = "Ronaldo";
//3.create a variable name (favPlayerFullName) and concatenate favPlayerFirstName and favPlayerLastName
let favPlayerFullName = favPlayerFirstName.concat(" " + favPlayerLastName);
//4.Create variable name (uppercase) and capitalize favPlayerFullName
let uppercase = favPlayerFullName.toUpperCase();
//5.Create a variable name (message) and store ` My favorite player is ${favPlayerFullName} and his name in uppercase is ${uppercase}`
let message = `My favourite player is ${favPlayerFullName} and his name in uppercase is ${uppercase}`;
console.log(message);

