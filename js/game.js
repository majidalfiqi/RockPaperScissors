// query selectors
cards = document.querySelector(".player-cards");

plyrRock = document.querySelector(".plyr-rock");
plyrPaper = document.querySelector(".plyr-paper");
plyrScissors = document.querySelector(".plyr-scissors");

prompt = document.querySelector(".prompt");

roundTie = document.querySelector(".round-tie");
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

let gameResult;

// event listeners
plyrRock.addEventListener("click", () => {
  let opt = ["rock", "paper", "scissors"];
  plyrChoice = "rock";
  opt.splice(opt.indexOf(plyrChoice), 1);
  opt.forEach((noChoose) => {
    let item = document.querySelector(".plyr-" + noChoose);
    item.classList.add("faded");
    setTimeout(() => item.classList.remove("faded"), 1500);
  });
  comChoice = comPlay();
  game(plyrChoice, comChoice);
});
plyrPaper.addEventListener("click", () => {
  let opt = ["rock", "paper", "scissors"];
  plyrChoice = "paper";
  opt.splice(opt.indexOf(plyrChoice), 1);
  opt.forEach((noChoose) => {
    let item = document.querySelector(".plyr-" + noChoose);
    item.classList.add("faded");
    setTimeout(() => item.classList.remove("faded"), 1500);
  });
  comChoice = comPlay();
  game(plyrChoice, comChoice);
});
plyrScissors.addEventListener("click", () => {
  let opt = ["rock", "paper", "scissors"];
  plyrChoice = "scissors";
  opt.splice(opt.indexOf(plyrChoice), 1);
  opt.forEach((noChoose) => {
    let item = document.querySelector(".plyr-" + noChoose);
    item.classList.add("faded");
    setTimeout(() => item.classList.remove("faded"), 1500);
  });
  comChoice = comPlay();
  game(plyrChoice, comChoice);
});

// logic
function comPlay() {
  let opt = ["rock", "paper", "scissors"];
  let i = Math.floor(Math.random() * 3);
  let sel = opt.splice(i, 1);
  opt.forEach((noChoose) => {
    let item = document.querySelector(".com-" + noChoose);
    item.classList.add("faded");
    setTimeout(() => item.classList.remove("faded"), 1500);
  });
  return sel[0];
}

function playRound(plyrChoice, comChoice) {
  if (plyrChoice === comChoice) {
    return "tie";
  }

  let result;
  switch (comChoice) {
    case "rock":
      plyrChoice === "paper" ? (result = "won") : (result = "lost");
      break;
    case "paper":
      plyrChoice === "scissors" ? (result = "won") : (result = "lost");
      break;
    case "scissors":
      plyrChoice === "rock" ? (result = "won") : (result = "lost");
      break;
    default:
      return "error";
  }

  return result;
}

function printMsg(rslt) {
  switch (rslt) {
    case "tie":
      prompt.classList.add("hidden");
      roundTie.classList.remove("hidden");
      cards.style.pointerEvents = "none";
      setTimeout(() => {
        cards.style.pointerEvents = "auto";
        prompt.classList.remove("hidden");
        roundTie.classList.add("hidden");
      }, 1500);
      break;
    case "won":
      result.textContent = rslt;
      result.classList.add("won");
      prompt.classList.add("hidden");
      roundResult.classList.remove("hidden");
      winChoice.innerText = plyrChoice;
      winChoice.style.color = getComputedStyle(document.querySelector(".plyr-" + plyrChoice)).backgroundColor;
      loseChoice.innerText = comChoice;
      loseChoice.style.color = getComputedStyle(document.querySelector(".com-" + comChoice)).backgroundColor;
      roundDetails.classList.remove("trans");
      cards.style.pointerEvents = "none";
      setTimeout(() => {
        result.classList.remove("won");
        prompt.classList.remove("hidden");
        roundResult.classList.add("hidden");
        roundDetails.classList.add("trans");
        cards.style.pointerEvents = "auto";
      }, 1500);
      break;
    case "lost":
      result.textContent = rslt;
      result.classList.add("lost");
      prompt.classList.add("hidden");
      roundResult.classList.remove("hidden");
      winChoice.innerText = comChoice;
      winChoice.style.color = getComputedStyle(document.querySelector(".com-" + comChoice)).backgroundColor;
      loseChoice.innerText = plyrChoice;
      loseChoice.style.color = getComputedStyle(document.querySelector(".plyr-" + plyrChoice)).backgroundColor;
      roundDetails.classList.remove("trans");
      cards.style.pointerEvents = "none";
      setTimeout(() => {
        result.classList.remove("won");
        prompt.classList.remove("hidden");
        roundResult.classList.add("hidden");
        roundDetails.classList.add("trans");
        cards.style.pointerEvents = "auto";
      }, 1500);
      break;
  }
}

function game(plyrChoice, comChoice) {
  resultText = playRound(plyrChoice, comChoice);
  switch (resultText) {
    case "tie":
      break;
    case "won":
      plyr++;
      plyrScore.textContent = plyr;
      break;
    case "lost":
      com++;
      comScore.textContent = com;
      break;
  }
  printMsg(resultText, plyrChoice, comChoice);
  if (plyr < 5 && com < 5) {
    round++;
    roundNumber.textContent = round;
  } else {
    plyr > com ? (gameResult = "won") : (gameResult = "lost");
    link = location.href.replace("/game.html", "/result.html?" + gameResult);
    location.replace(link);
  }
}
