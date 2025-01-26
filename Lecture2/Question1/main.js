//Get user to input a number using prompt(“Enter a number:”). Check if the number is a multiple of 5 or not.
const number = prompt("Enter a number:");
if (number !== null && !isNaN(number)) {
  const num = Number(number);
  if (num % 5 === 0) {
    alert(`${num} is a multiple of 5.`);
  } else {
    alert(`${num} is not a multiple of 5.`);
  }
} else {
  alert("Please enter a valid number.");
}
