
function computerPlay () {
    let sel = ['rock', 'paper', 'scissors'];
    let i = Math.floor(Math.random() * 3);
    return sel[i];
}



function processInput(input) {
    try {
        input = input.toLowerCase();
    }
    catch {
        return null;
    }
    switch (input){
        case 'r':
        case 'rock':
            input = 'rock';
            break;
        case 'p':
        case 'paper':
            input = 'paper';
            break;
        case 's':
        case 'scissors':
            input = 'scissors';
            break;
        default:
            return null;
    }
    return input;
}



function playRound(playerSelection, computerSelection) {
    
    if (playerSelection === computerSelection) {return "tie"}
    
    let win;
    switch (computerSelection) {
        case 'rock':
            win = (playerSelection === 'paper');
            break;
        case 'paper':
            win = (playerSelection === 'scissors');
            break;
        case 'scissors':
            win = (playerSelection === 'rock');
            break;
        default:
            return "Error!";
    }
    win ? console.log(`You win the round! ${playerSelection} beats ${computerSelection}`) : console.log(`You lose the round! ${computerSelection} beats ${playerSelection}`);
    win ? msg.innerText = `You win the round! ${playerSelection} beats ${computerSelection}` : msg.innerText = `You lose the round! ${computerSelection} beats ${playerSelection}`;
    return win;        
}

function game(){
    
    let com = 0;
    let plyr = 0;
    
    for(let i=0; i<5; i++){
        let playerSelection = null;
        while (playerSelection === null) {
            playerSelection = window.prompt('Enter your choice. rock, paper, or scissors?', '');;
            playerSelection = processInput(playerSelection); 
        }
        const computerSelection = computerPlay();
        let round = playRound(playerSelection, computerSelection);
        if (round === 'tie') {
            console.log("It's a tie. Try again!");
            msg.innerText = "It's a tie. Try again!";
            i--;
        }
        round ? plyr++ : com++;
    }
    
    (plyr > com) ? console.log('You win the game!!!') : console.log('You lose the game :(');
    (plyr > com) ? msg.innerText = 'You win the game!!!' : msg.innerText = 'You lose the game :(';
}

msg = document.getElementById('message');
game();