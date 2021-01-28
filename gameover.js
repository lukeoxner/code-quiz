// capture references to DOM elements
var initialsEl = document.querySelector("#initials");
var saveScoreBtn = document.querySelector("#save-score");
// get previous user scores from local memory (or if no scores, get blank array)
var highScores = JSON.parse(localStorage.getItem('highScores') || '[]');


// declare function to save user initials and score to local storage
function saveScore() {
    var userScore = localStorage.getItem("lastScore");
    var userInitials = document.querySelector("#initials").value;

    // making an object to store user initials and score
    var score = {
        initials: userInitials,
        score: userScore
    };

    // adding the new initials and score to the array
    highScores.push(score);

    localStorage.setItem("highScores", JSON.stringify(highScores));
}


// event listener for save score button
saveScoreBtn.addEventListener("click", function() {
    // validating that the user input their initials (or something)
    if (initials.value !== null && initials.value !== undefined && initials.value !== "") {
        saveScore();
        window.location.href = "highscores.html";
    } else {
        alert("Please enter your initials!");
    }
})