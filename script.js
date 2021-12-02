"use strict";
const options = ["scissors", "rock", "paper"]; // alternatively, use indexes to compare everything

function computerPlay() {
  const rand = Math.floor(Math.random() * options.length);
  return options[rand];
}

function playRound(playerSel, computerSel) {
  const playerIndex = options.indexOf(playerSel);
  const computerIndex = options.indexOf(computerSel);
  if (playerIndex == -1) {
    return `Error: player selection "${playerSel}" is not valid`;
  }
  if (computerIndex == -1) {
    return `Error: computer selection "${computerSel}" is not valid`;
  }

  const compare = playerIndex - computerIndex;

  // let test;
  switch (compare) {
    case 0:
      return `It's a tie... both of you selected ${playerSel}`;
    // test = "tie";
    // break;
    case -1:
      return `You lose! ${computerSel} beats ${playerSel}`;
    // test = "lose";
    // break;
    default:
      // case -2, 1, 2
      return `You win! ${playerSel} beats ${computerSel}`;
    // test = "win";
  }
  // return `player = ${playerSel} ${playerIndex}; computer = ${computerSel} ${computerIndex}; compare = ${compare}; test = ${test}`;
}

function game() {
  for (let i = 0; i < 5; i++) {
    let playerSelection = "RoCk";
    playerSelection = playerSelection.toLowerCase();
    let computerSelection = computerPlay();
    console.log(playRound(playerSelection, computerSelection));
  }
}

game();
