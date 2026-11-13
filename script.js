// An array of objects: each object is one question
const questions = [
  {
    text: "Which keyword creates a variable that cannot change?",
    options: ["let", "const", "var"],
    answer: "const",
  },
  {
    text: "Which operator checks both the value and the type?",
    options: ["=", "==", "==="],
    answer: "===",
  },
  {
    text: "Which method adds an item to the end of an array?",
    options: ["push", "pop", "join"],
    answer: "push",
  },
];

let currentIndex = 0;
let score = 0;

const progress = document.querySelector("#progress");
const questionElement = document.querySelector("#question");
const optionsElement = document.querySelector("#options");
const feedback = document.querySelector("#feedback");
const nextButton = document.querySelector("#next");

function showQuestion(text, id) {
  const question = questions[currentIndex];

  progress.textContent = `Question ${currentIndex + 1} of ${questions.length}`;
  questionElement.textContent = question.text;
  optionsElement.innerHTML = "";
  feedback.textContent = "";
  nextButton.hidden = true;

  for (const option of question.options) {
    const button = document.createElement("button");
    button.textContent = option;
    button.addEventListener("click", function () {
      checkAnswer(option, question.answer);
    });
    optionsElement.append(button);
  }
}

function checkAnswer(selected, correct) {
  if (selected === correct) {
    score++;
    feedback.textContent = "Correct!";
  } else {
    feedback.textContent = `Wrong. The answer is ${correct}`;
  }

  // Stop the student from answering the same question twice
  for (const button of optionsElement.children) {
    button.disabled = true;
  }

  nextButton.hidden = false;
}

function showResult() {
  progress.textContent = "Finished";
  questionElement.textContent = `Your score: ${score} of ${questions.length}`;
  optionsElement.innerHTML = "";
  feedback.textContent = "";
  nextButton.textContent = "Start again";
  nextButton.hidden = false;
}

nextButton.addEventListener("click", function () {
  currentIndex++;

  if (currentIndex < questions.length) {
    showQuestion();
  } else if (currentIndex === questions.length) {
    showResult();
  } else {
    currentIndex = 0;
    score = 0;
    nextButton.textContent = "Next";
    showQuestion();
  }
});

showQuestion("mazin", 12134);

const mazin = 23;
window.console.log(!0);

const score1 = 40;

if (score1 >= 85) {
  console.log("Excellent");
} else if (score1 >= 50) {
  console.log("Pass"); // this one runs
} else if (score1 >= 40) {
  console.log("Pass40"); // this one runs
} else if (score1 >= 30) {
  console.log("Pass30"); // this one runs
} else if (score1 >= 20) {
  console.log("Pass20"); // this one runs
} else if (score1 >= 10) {
  console.log("Pass10"); // this one runs
} else {
  console.log("Fail");
}
