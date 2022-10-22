// Define variables
var home = document.querySelector("#home_page");
var startBtn = document.querySelector("#startbtn");

var quiz = document.querySelector("#quiz");

var question = document.querySelector(".question");

var choicesElem = document.querySelectorAll(".choices");
var answer1li = document.querySelector("#answer_btn1");
var answer2li = document.querySelector("#answer_btn2");
var answer3li = document.querySelector("#answer_btn3");
var answer4li = document.querySelector("#answer_btn4");

var correctIncorrect = document.querySelector("#correct-incorrect");

var submitResult = document.querySelector("#submitResult");
var userScore = document.querySelector("#user_score");
var userInitial = document.querySelector("#initial");
var submitBtn = document.querySelector("#submitbtn");

var highScoreElm = document.querySelector("#highscores");

var backBtn = document.querySelector("#back_btn");
var clearBtn = document.querySelector("#clear_btn");

//  Declared array with objects that contains questions, choices and the right answer index
var questions = [
  {
    question: "What is the capital of Albania?",
    choices: ["1. Lezhe", "2. Milot", "3. Vlore", "4. Tirane"],
    asnwer: 4,
  },
  {
    question: "What is the national animal of Albania?",
    choices: ["1. Tiger", "2. Goat", "3. Golden Eagle", "4. Lion"],
    asnwer: 3,
  },
  {
    question: "How many world heritage sites are there in Albania?",
    choices: ["1. 5", "2. 10", "3. 4", "4. 2"],
    asnwer: 3,
  },
  {
    question: "Which of the singers are from albania?",
    choices: ["1. Bebe Rexha", "2. Ariana Grande", "3. Lady Gaga", "4. Demi Lavato"],
    asnwer: 1,
  },
  {
    question: "What currency is used in Albania?",
    choices: ["1. Euro", "2. Albanian Crowns", "3. Albanian Dinar", "4. Albanian Lek"],
    asnwer: 4,
  },
];
