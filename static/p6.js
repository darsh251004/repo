const questions = [
  {
    question: "அ__மா",
    answers: [
      { text: "க", correct: false },
      { text: "ம்", correct: true },
      { text: "எ", correct: false },
      { text: "ஐ", correct: false },
    ],
  },
  {
    question: "உ___வு ",
    answers: [
      { text: "இ", correct: false },
      { text: "ஐ", correct: false },
      { text: "ண", correct: true },
      { text: "து", correct: false },
    ],
  },
  {
    question: "ஐ__து ",
    answers: [
      { text: "ம்", correct: false },
      { text: "உ", correct: false },
      { text: "ஏ", correct: false },
      { text: "ந்", correct: true },
    ],
  },
  {
    question: "ஏ___",
    answers: [
      { text: "ணி", correct: true },
      { text: "ந்", correct: false },
      { text: "க", correct: false },
      { text: "ஐ", correct: false },
    ],
  },
  {
    question: "உ__கம் ",
    answers: [
      { text: "ஈ", correct: false },
      { text: "தி", correct: false },
      { text: "ல", correct: true },
      { text: "லை", correct: false },
    ],
  },
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  nextButton.innerHTML = "Next";
  showQuestion();
}

function showQuestion() {
  resetState();
  let currentQuestion = questions[currentQuestionIndex];
  let questionNo = currentQuestionIndex + 1;
  questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

  currentQuestion.answers.forEach(answer => {
    const button = document.createElement("button");
    button.innerHTML = answer.text;
    button.classList.add("btn");
    answerButtons.appendChild(button); // Corrected line
    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }
    button.addEventListener("click", selectAnswer);
  });
}

function resetState() {
  nextButton.style.display = "none";
  while (answerButtons.firstChild) {
    answerButtons.removeChild(answerButtons.firstChild);
  }
}

function selectAnswer(e) {
  const selectedBtn = e.target;
  const isCorrect = selectedBtn.dataset.correct === "true";
  if (isCorrect) {
    selectedBtn.classList.add("correct");
    score++;
  } else {
    selectedBtn.classList.add("incorrect");
  }
  Array.from(answerButtons.children).forEach(button => {
    if (button.dataset.correct === "true") {
      button.classList.add("correct");
    }
    button.disabled = true;
  });
  nextButton.style.display = "block";
}

function showScore() {
  resetState();
  questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
  nextButton.innerHTML = "Play Again";
  nextButton.style.display = "block";
}
function showScore() {
  resetState();
  questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
  nextButton.innerHTML = "Play Again";
  nextButton.style.display = "block";

  // Add comments and suggestions based on score
  if (score === questions.length) {
    // Perfect score!
    questionElement.innerHTML += " Excellent work! You seem to have a strong grasp of the Tamil alphabet.";
  } else if (score > questions.length * 0.75) {
    // Above 75% score
    questionElement.innerHTML += " Great job! You're doing well with identifying Tamil letters.";
  } else if (score > questions.length * 0.5) {
    // Above 50% score
    questionElement.innerHTML += " Keep practicing! You're on the right track.";
  } else {
    // Below 50% score (optional, you can add a message here)
    questionElement.innerHTML += " Needs more practice. Should be strong at the foundation level.";
  }
}


function handleNextButton() {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    showQuestion();
  } else {
    showScore();
  }
}

nextButton.addEventListener("click", () => {
  if (currentQuestionIndex < questions.length) {
    handleNextButton();
  } else {
    startQuiz();
  }
});

startQuiz(); // Call startQuiz to begin the quiz
