
// * CAPTURING DOM REFERENCES via DOM QUERIES

var startBtn = document.querySelector("#start-button");

// * FUNCTIONS


function startQuiz() {
    window.location.href = "game.html";
}

// * Event Listeners

// calls startQuiz function when user clicks start button
startBtn.addEventListener("click", startQuiz);