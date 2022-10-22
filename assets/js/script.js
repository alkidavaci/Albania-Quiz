// Define variables
var home = document.querySelector("#home_page");
var startBtn = document.querySelector("#startbtn");

var quiz = document.querySelector("#quiz");

var question = document.querySelector(".question");

var choicesElem = document.querySelectorAll(".choices");
var answer1li = document.querySelector("#answer_li1");
var answer2li = document.querySelector("#answer_li2");
var answer3li = document.querySelector("#answer_li3");
var answer4li = document.querySelector("#answer_li4");

var correctIncorrect = document.querySelector("#correct-incorrect");

var submitResult = document.querySelector("#submitResult");
var userScore = document.querySelector("#user_score");
var userInitial = document.querySelector("#initial");
var submitBtn = document.querySelector("#submitbtn");

var highScoreElm = document.querySelector("#highscores");

var backBtn = document.querySelector("#back_btn");
var clearBtn = document.querySelector("#clear_btn");

var timeLeft = document.getElementById("timercount");
var timeElm = document.getElementsByClassName("timercount");

//  Declared array with objects that contains questions, choices and the right answer index
var questions = [
  {
    question: "What is the capital of Albania?",
    choices: ["1. Lezhe", "2. Milot", "3. Vlore", "4. Tirane"],
    answer: 4,
  },
  {
    question: "What is the national animal of Albania?",
    choices: ["1. Tiger", "2. Goat", "3. Golden Eagle", "4. Lion"],
    answer: 3,
  },
  {
    question: "How many world heritage sites are there in Albania?",
    choices: ["1. 5", "2. 10", "3. 4", "4. 2"],
    answer: 3,
  },
  {
    question: "Which of the singers are from albania?",
    choices: ["1. Bebe Rexha", "2. Ariana Grande", "3. Lady Gaga", "4. Demi Lavato"],
    answer: 1,
  },
  {
    question: "What currency is used in Albania?",
    choices: ["1. Euro", "2. Albanian Crowns", "3. Albanian Dinar", "4. Albanian Lek"],
    answer: 4,
  },
];

var secondsLeft = 60;
var questionNr = 0;
var totalScore = 0;
var questionCount = 1;

function gameOver() {
  // Show submit results 
  quiz.classList.add("hidden");
  submitResult.classList.remove("hidden");

  // totalScore is variable for the user score in the quiz
  userScore.textContent = "Your final score is : " + totalScore;

};

// Timer function
function setTimer() {

  var timerInterval = setInterval(function () {

    secondsLeft--;
    timeLeft.textContent = secondsLeft + " s";
    // No time left
    if (secondsLeft <= 0) {
     
      clearInterval(timerInterval);
      // function for ending game
      gameOver();
    }
    // No question left
    else if (questionCount >= questions.length + 1) {
      timeLeft.innerHTML = "0"
      clearInterval(timerInterval);
      gameOver();
    }

  }, 1000);
}

// Function to start Quiz
function startQuiz() {
  home.classList.add("hidden");
  quiz.classList.remove("hidden");

  // function to set timer
  setTimer()
  // function to show questions
  showQuestion(questionNr)
}
// Declare function to show questions

function showQuestion(n) {
  question.textContent = questions[n].question;
  answer1li.textContent = questions[n].choices[0];
  answer2li.textContent = questions[n].choices[1];
  answer3li.textContent = questions[n].choices[2];
  answer4li.textContent = questions[n].choices[3];
  questionNr = n;
}

// Declare function to check answer and go to next answer
function checkAnswer(e) {
  e.preventDefault();
  //make it display
  correctIncorrect.style.display = "block";
  setTimeout(function () {
    correctIncorrect.style.display = 'none';
  }, 1000);

  // Check answer is correct or Wrong
  if (questions[questionNr].answer == e.target.value) {
    correctIncorrect.textContent = "Correct!";
    // store time 
    totalScore = secondsLeft;

  } else {
    // Decrease 10 sec when is wrong and stor time
    secondsLeft = secondsLeft - 10;
    totalScore = secondsLeft;

    correctIncorrect.textContent = "Wrong!";
  }
  //THEN I am presented with another question
  if (questionNr < questions.length - 1) {
    // call showQuestions to bring in next question when any reactBtn is clicked
    showQuestion(questionNr + 1);
  }
  else {
    gameOver();
  }
  questionCount++;
}



// Event Listener to for each choice

choicesElem.forEach(function (e) {

  // Click on choices to show if is correct answer and to go to next question 
  e.addEventListener("click", checkAnswer);
});
// Event Listener to start quiz
startBtn.addEventListener("click", startQuiz);