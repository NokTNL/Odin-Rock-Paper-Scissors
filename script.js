"use strict";
const options = ["scissors", "rock", "paper"]; // alternatively, use indexes to compare everything

function computerPlay() {
  const rand = Math.floor(Math.random() * options.length);
  return options[rand];
}

function playRound(playerInput, computerInput) {
  const playerIndex = options.indexOf(playerInput);
  const computerIndex = options.indexOf(computerInput);

  const compare = playerIndex - computerIndex;

  switch (compare) {
    case 0:
      return "tie";
    case -1:
      return "lose";
    default:
      // case -2, 1, 2
      return "win";
  }
}

function game() {
  let playerSelection, computerSelection;
  let playerCounter = 0,
    computerCounter = 0;

  for (let i = 0; i < 5; i++) {
    playerSelection = prompt(`Round ${i + 1}: Rock, Paper or Scissors?`);
    // debug
    if (playerSelection === "debug") {
      debugger;
      return;
    }

    // Any falsy value, either blank entry or pressed 'Cancel'
    if (!playerSelection) {
      playerSelection = "";
    } else {
      playerSelection = playerSelection.toLowerCase();
    }

    if (!options.includes(playerSelection)) {
      alert(`"${playerSelection}" is not a valid choice...`);
      i--;
      continue; // restart the loop
    }

    computerSelection = computerPlay();

    let roundResult = playRound(playerSelection, computerSelection);
    switch (roundResult) {
      case "tie":
        alert(
          `It's a tie... both of you selected ${playerSelection}. Play this round again!`
        );
        i--;
        break;
      case "lose":
        alert(
          `You lose this round! ${computerSelection} beats ${playerSelection}`
        );
        computerCounter++;
        break;
      case "win":
        alert(
          `You win this round! ${playerSelection} beats ${computerSelection}`
        );
        playerCounter++;
        break;
    }

    console.log(
      `${roundResult}; player: ${playerCounter}; computer: ${computerCounter};`
    );
  }

  // Declare winner
  if (playerCounter > computerCounter) {
    alert(`You win! Your score is: ${playerCounter}`);
  } else {
    alert(`You lose! Your score is: ${playerCounter}`);
  }
}

game();
