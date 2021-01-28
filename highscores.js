// capture references using DOM queries
var playAgainBtn = document.querySelector("#play-again");
var clearScoresBtn = document.querySelector("#clear-scores");

var highScores = JSON.parse(localStorage.getItem('highScores') || '[]');

var scoresList = document.querySelector("#scores-list");

// var initials = document.querySelector("initials");
// var score = document.querySelector("score");


// declaring init function which simply calls the displayScores function
function init() {
    displayScores();
}

// declare displayScores function that will enable user scores to be displayed
function displayScores() {
    // output all the user scores as list items
   scoresList.innerHTML = highScores.map(score => {
        return `<li class="high-score">${score.initials}-${score.score}</li>`;
   })
   .join("");
}


// declare function that will clear user scores from local memory
function clearScores() {
    localStorage.clear();
    window.location.href = "highscores.html";
}


// call init function to kick things off
init();

// event listener for play again button
playAgainBtn.addEventListener("click", function() {
    window.location.href = "index.html"
})

// add event listener for clear scores button
clearScoresBtn.addEventListener("click", function() {
    // call function to clear all user initials and scores
    clearScores();
})