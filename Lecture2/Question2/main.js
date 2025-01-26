// Write a code which can give grades to students according to their scores: 80-100, A
// 70-89, B
// 60-69, C
// 50-59, D
// 0-49, F
const score = prompt("Enter the student's score (0-100):");
if (score !== null && !isNaN(score)) {
  const numScore = Number(score);

  if (numScore >= 80 && numScore <= 100) {
    alert("Grade: A");
  } else if (numScore >= 70 && numScore < 80) {
    alert("Grade: B");
  } else if (numScore >= 60 && numScore < 70) {
    alert("Grade: C");
  } else if (numScore >= 50 && numScore < 60) {
    alert("Grade: D");
  } else if (numScore >= 0 && numScore < 50) {
    alert("Grade: F");
  } else {
    alert("Invalid score. Please enter a number between 0 and 100.");
  }
} else {
  alert("Invalid input. Please enter a valid number.");
}
