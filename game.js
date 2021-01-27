
// * CAPTURING DOM REFERENCES via DOM QUERIES
// timer
var timerEl = document.querySelector("#timer");
// questions
var questionEl = document.querySelector("#question");
// choices
var choice1 = document.querySelector("#choice-1");
var choice2 = document.querySelector("#choice-2");
var choice3 = document.querySelector("#choice-3");
var choice4 = document.querySelector("#choice-4");
// feedback text area
var feedback = document.querySelector("#feedback");
// game over



// * GLOBAL VARIABLE DECLARATIONS
var timer;
var timerCount;
var currentQuestion = {};
var availableQuestions = [];
var questionCounter;
var userChoice;
var answer;

var questions = [
    {
        question: "Which programming language is responsible for the styling of HTML elements?",
        choice1: "Javascript",
        choice2: "Python",
        choice3: "CSS",
        choice4: "C#",
        answer: "CSS",
    },
    {
        question: "For Loops must contain a Counter, a __________, and an Iterator.",
        choice1: "Condition",
        choice2: "Kitten",
        choice3: "CSS File",
        choice4: "Array",
        answer: "Condition",
    },
    {
        question: "jQuery is a library that is built on which language?",
        choice1: "Boolean",
        choice2: "Javascript",
        choice3: "MySQL",
        choice4: "Python",
        answer: "Javascript",
    },
    {
        question: "Which type of scope is accessible from anywhere in the program?",
        choice1: "Tele",
        choice2: "International",
        choice3: "Local",
        choice4: "Global",
        answer: "Global",
    },
    {
        question: "Is Luke finally starting to *kinda* get the hang of Javascript?",
        choice1: "Yes",
        choice2: "Yes",
        choice3: "Yes",
        choice4: "Yes",
        answer: "Yes",
    },
];

// * FUNCTIONS

// defining the startQuiz function
// it sets the timer starting value and calls several other functions to start the game
function init() {
    timerCount = 60;
    questionCounter = 0;
    availableQuestions = [...questions];
    startTimer();
    displayQuestion();
}


// declaring function startTimer
function startTimer() {
    timer = setInterval(function()  {
        timerCount--;
        timerEl.textContent = timerCount;
        // when the timer reaches 0, the game is ended by calling gameOver function
        if (timerCount === 0) {
            // Clears interval
            clearInterval(timer);
            gameOver();
          }

    }, 1000);
}



function displayQuestion() {
    if (questionCounter < questions.length) {
        currentQuestion = availableQuestions[questionCounter];
        // displays current question text in the question element
        questionEl.textContent = currentQuestion.question;
        // displays each choice text in its element
        choice1.textContent = currentQuestion.choice1;
        choice2.textContent = currentQuestion.choice2;
        choice3.textContent = currentQuestion.choice3;
        choice4.textContent = currentQuestion.choice4;
        answer = currentQuestion.answer;
    }   else {
        gameOver();
    }
}


function questionClick() {
    if (userChoice === answer) {
        correct();
        questionCounter++;
        displayQuestion();
    } else {
        wrong();
        questionCounter++;
        timerCount -= 10;
        displayQuestion();
    }
}


function correct() {
    feedback.textContent = "Correct!";
    setTimeout(function() {
        feedback.textContent = "";
    }, 2000);
}

function wrong() {
    feedback.textContent = "Wrong!";
    setTimeout(function() {
        feedback.textContent = "";
    }, 2000);
}



function gameOver() {
    window.location.href = "gameover.html";

}


// this function fires when the page is loaded to get the party started!
init();

// * Event Listeners

choice1.addEventListener("click", function() {
    userChoice = choice1.textContent;
    questionClick();
});

choice2.addEventListener("click", function() {
    userChoice = choice2.textContent;
    questionClick();
});

choice3.addEventListener("click", function() {
    userChoice = choice3.textContent;
    questionClick();
});

choice4.addEventListener("click", function() {
    userChoice = choice4.textContent;
    questionClick();
});