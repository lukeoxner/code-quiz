// capture references to DOM elements
var initialsEl = document.querySelector("#initials");

var saveScoreBtn = document.querySelector("#save-score");

var highScores = JSON.parse(localStorage.getItem('highScores') || '[]');

console.log(highScores)


// declare function to save user initials to local storage
function saveScore() {
    var userScore = localStorage.getItem("lastScore");
    var userInitials = document.querySelector("#initials").value;

    var score = {
        initials: userInitials,
        score: userScore
    };

    highScores.push(score);

    localStorage.setItem("highScores", JSON.stringify(highScores));
}


// event listener for save score button
saveScoreBtn.addEventListener("click", function() {
    saveScore();
    window.location.href = "highscores.html";
})