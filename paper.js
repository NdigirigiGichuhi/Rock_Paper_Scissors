let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    let myList = ['rock', 'paper', 'scissors'];

    let randomIndex = Math.floor(Math.random() * myList.length);

    let choice = myList[randomIndex];

    return choice;
}

//console.log(getComputerChoice());


function getHumanChoice() {
   let condition = true;
   let myList = ['rock', 'paper', 'scissors'];

   while(condition) {
    let choice = prompt("Enter your choice.").toLowerCase();

    if (myList.includes(choice)){
      return(choice);
    }
        
   }
}

/// console.log(getHumanChoice());



function playRound() {
    let i = 0;
    while (i < 10) {
        let humanChoice = getHumanChoice();
        let computerChoice = getComputerChoice();

        if (humanChoice === computerChoice) {
            alert("It's a tie");
            i += 1;
        } else {
            if (humanChoice === "rock" && computerChoice === "scissors") {
                alert("You win! Rock crashes scissors.");
                humanScore += 1;
            } else if (humanChoice === "scissors" && computerChoice === "paper") {
                alert("You win! Scissors cuts Paper.");
                humanScore += 1;
            } else if (humanChoice === "paper" && computerChoice === "rock"){
                alert("You win! Paper covers rock.");
                humanScore += 1;
            } else if (humanChoice === "scissors" && computerChoice === "rock") {
                alert("You lost! Rock crashes scissors.");
                computerScore += 1;
            } else if (humanChoice === "paper" && computerChoice === "scissors") {
                alert("You lost! Scissors cuts Paper.");
                computerScore += 1;
            } else if (humanChoice === "rock" && computerChoice === "paper"){
                alert("You lost! Paper covers rock.");
                computerScore += 1;
            }

            i += 1;
        }
    }

    if (humanScore > computerScore) {
        alert(`You won: ${humanScore}`)
        alert(`Human: ${humanScore}`)
        alert(`Computer: ${computerScore}`)
    } else {
        alert(`You lost: ${humanScore}`)
        alert(`Human: ${humanScore}`)
        alert(`Computer: ${computerScore}`)
    }
}

playRound();