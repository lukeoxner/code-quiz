// capture references to DOM elements
var initials = document.querySelector("#initials");
var saveScoreBtn = document.querySelector("#save-score");


// declare function to save user initials to local storage
function saveScore() {
    localStorage.setItem("initials", initials.value);
}


// event listener for save score button
saveScoreBtn.addEventListener("click", function() {
    saveScore();
    window.location.href = "highscores.html";
})