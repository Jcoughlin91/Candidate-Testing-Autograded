
// Comment to trigger the workflow


const input = require('readline-sync');

let candidateName = "";
let questions = [
  "Who was the first American woman in space? ",
  "True or false: 5 kilometer == 5000 meters? ",
  "(5 + 3)/2 * 10 = ? ",
  "Given the array [8, 'Orbit', 'Trajectory', 45], what entry is at index 2? ",
  "What is the minimum crew size for the ISS? "
];
let correctAnswers = [
  "Sally Ride",
  "true",
  "40",
  "Trajectory",
  "3"
];
let candidateAnswers = [];
let candidateAnswer = ""; 

function askForName() {
  candidateName = input.question("Please enter your name: ");
}

function askQuestion() {
  for (let i = 0; i < questions.length; i++) {
    candidateAnswer = input.question(questions[i]);
    candidateAnswers.push(candidateAnswer);
  }
}

function gradeQuiz(candidateAnswers) {
  let numCorrect = 0;
  console.log(`\nCandidate Name: ${candidateName}`);
  for (let i = 0; i < questions.length; i++) {
    let userAnswer = candidateAnswers[i];
    let correctAnswer = correctAnswers[i];
    console.log(`\nQuestion ${i + 1}: ${questions[i]}`);
    console.log(`Your answer: ${userAnswer}`);
    console.log(`Correct answer: ${correctAnswer}`);
    if (userAnswer.toLowerCase() === correctAnswer.toLowerCase()) {
      numCorrect++;
      console.log("Correct!");
    } else {
      console.log("Incorrect!");
    }
  }
  let grade = (numCorrect / questions.length) * 100;
  console.log(`\n>>> Overall Grade: ${grade}% (${numCorrect} of ${questions.length} responses correct) <<<`);

  if (grade >= 80) {
    console.log(">>> Status: PASSED <<<");
  } else {
    console.log(">>> Status: FAILED <<<");
  }

  return grade;
}

function runProgram() {
  askForName();
  console.log(`Hello, ${candidateName} you old chap!`);
  askQuestion();
  gradeQuiz(candidateAnswers);
}


module.exports = {
  candidateName: candidateName,
  question: questions[0], 
  correctAnswer: correctAnswers[0], 
  candidateAnswer: candidateAnswer, 
  questions: questions,
  correctAnswers: correctAnswers,
  candidateAnswers: candidateAnswers,
  gradeQuiz: gradeQuiz,
  runProgram: runProgram
};
