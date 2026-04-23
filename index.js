let score = 0;

alert("Welcome to the Pop Quiz! Let's test your knowledge.");
let answer1 = prompt(
  "What is the capital of France?\n a. paris \n b. london ",
).toLowerCase();

if (answer1 === "a") {
  score++;
} else if (answer1 !== "b") {
  alert("Invalid answer. Please choose either 'a' or 'b'.");
}

let answer2 = prompt("What is 2 + 2? \n a. 3 \n b. 4 ").toLowerCase();
if (answer2 === "b") {
  score++;
} else if (answer2 !== "a") {
  alert("Invalid answer. Please choose either 'a' or 'b'.");
}

let answer3 = prompt("what is 3 +3? \n a. 5 \n b. 6 ").toLowerCase();
if (answer3 === "b") {
  score++;
} else if (answer3 !== "a") {
  alert("Invalid answer. Please choose either 'a' or 'b'.");
}

if (score === 0) alert("The user answered 0 questions correctly.");

if (score === 3) alert("The user answered all questions correctly.");
if (score > 0 && score < 3)
  alert("The user answered some questions correctly.");
