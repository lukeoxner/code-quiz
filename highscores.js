// capture references using DOM queries
var playAgainBtn = document.querySelector("#play-again");
var clearScoresBtn = document.querySelector("#clear-scores");

// var initials = document.querySelector("initials");
// var score = document.querySelector("score");



function init() {
    displayScores();
}


function displayScores() {

    var userInitials = localStorage.getItem("initials");
    var userScore = localStorage.getItem("lastScore");

    document.getElementById("initials").textContent = userInitials;
    document.getElementById("score").textContent = userScore;


}








// declare function that will clear user scores from local memory
function clearScores() {
    localStorage.clear();
    document.getElementById("initials").textContent = "";
    document.getElementById("score").textContent = "";
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