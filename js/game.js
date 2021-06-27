// query selectors
plyrRock = document.querySelector(".plyr-rock");
plyrPaper = document.querySelector(".plyr-paper");
plyrScissors = document.querySelector(".plyr-scissors");

comRock = document.querySelector(".com-rock");
comPaper = document.querySelector(".com-paper");
comScissors = document.querySelector(".com-scissors");

prompt = document.querySelector(".prompt");

roundResult = document.querySelector(".round-result");
result = document.querySelector(".result");

roundDetails = document.querySelector(".round-details");
winChoice = document.querySelector(".win-choice");
loseChoice = document.querySelector(".lose-choice");

roundNumber = document.querySelector("#round-number");
comScore = document.querySelector("#com-score");
plyrScore = document.querySelector("#player-score");

// initializations
let round = 1;
roundNumber.textContent = round;

let com = 0;
comScore.textContent = com;
let plyr = 0;
plyrScore.textContent = plyr;

let comChoice = "";
let plyrChoice = "";

let resultText = "";

let win = "";
let lose = "";

// event listeners
plyrRock.addEventListener("click", () => {
  plyrChoice = "rock";
  comChoice = comPlay();
  game(plyrChoice, comChoice);
});
plyrPaper.addEventListener("click", () => {
  plyrChoice = "paper";
  comChoice = comPlay();
  game(plyrChoice, comChoice);
});
plyrScissors.addEventListener("click", () => {
  plyrChoice = "scissors";
  comChoice = comPlay();
  game(plyrChoice, comChoice);
});

// logic
function comPlay() {
  let sel = ["rock", "paper", "scissors"];
  let i = Math.floor(Math.random() * 3);
  return sel[i];
}

function playRound(plyrChoice, comChoice) {
  if (plyrChoice === comChoice) {
    return "tie";
  }

  let result;
  switch (comChoice) {
    case "rock":
      plyrChoice === "paper" ? (result = "WON") : (result = "LOST");
      break;
    case "paper":
      plyrChoice === "scissors" ? (result = "WON") : (result = "LOST");
      break;
    case "scissors":
      plyrChoice === "rock" ? (result = "WON") : (result = "LOST");
      break;
    default:
      return "error";
  }

  return result;
}

function game(plyrChoice, comChoice) {
  resultText = playRound(plyrChoice, comChoice);
  switch (resultText) {
    case "tie":
      roundResult.textContent = "It's a tie!";
      result.textContent = " X";
      result.classList.add("tie");
      roundResult.appendChild(result);
      prompt.classList.toggle("hidden");
      roundResult.classList.toggle("hidden");
      break;
    case "WON":
      plyr++;
      plyrScore.textContent = plyr;
      break;
    case "LOST":
      com++;
      comScore.textContent = com;
      break;
  }
  if (round < 5) {
    round++;
    roundNumber.textContent = round;
  } else {
    // move to result.html with the result
  }
}

// game();
//window.location.replace("http://www.w3schools.com");
