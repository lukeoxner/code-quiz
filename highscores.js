// capture references using DOM queries
var playAgainBtn = document.querySelector("#play-again");
var clearScoresBtn = document.querySelector("#clear-scores");

var highScores = JSON.parse(localStorage.getItem('highScores') || '[]');

var scoresList = document.querySelector("#scores-list");

// var initials = document.querySelector("initials");
// var score = document.querySelector("score");



function init() {
    displayScores();
}


function displayScores() {

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






init();

// event listener for play again button
playAgainBtn.addEventListener("click", function() {
    window.location.href = "index.html"
})

// add event listener for clear scores button
clearScoresBtn.addEventListener("click", function() {

    clearScores();
})