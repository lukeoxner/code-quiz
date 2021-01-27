
// * CAPTURING DOM REFERENCES via DOM QUERIES
// timer
var timerEl = document.querySelector("#timer");
// questions
var questionEl = document.querySelector("#question");
// choices

// game over



// * GLOBAL VARIABLE DECLARATIONS
var timer;
var timerCount;
var currentQuestion = {};
var availableQuestions = [];
var questionCounter;

var questions = [
    {
        question: "What programming language is responsible for the styling of HTML elements?",
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
]



// * FUNCTIONS

// defining the startQuiz function
// it sets the timer starting value and calls several other functions to start the game
function startQuiz() {
    timerCount = 75;
    questionCounter = 0;
    availableQuestions = [...questions];
    startTimer();
    clearIntro();
    initializeButtons();
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
    currentQuestion = availableQuestions[questionCounter];
    console.log(currentQuestion);


}
    // display questions and choices
    // ref DOM
    // loop thru my questions
    // loop thru choices
    // display each choice on DOM



// ? function questionClick
    // check choice against answer
    // if answer correct, show next question
    // ???
    // displayQuestion()
    // if answer incorrect, subtract time, show next question
    // time = time - 15


// ? function gameOver
    // when all questions answered, game over
    // when time reaches 0, game over


// this function fires when the page is loaded to get the party started!
init();

// * Event Listeners
