
let randomNumber = Math.floor(Math.random() * 100 + 1);
let triesTaken = 6;

function guessNumber() {
  //Collect input from the user
  //If the user inputs a bad input ie 0, empty string, number greater that 100, number less than zero Print "Please enter a number between 1 and 100"
  //If the users guess is higher than the random number print Number is too high, try again (hint use .final-out class to print)
  //If the users guess is lower than the random number print Number is too low, try again  (hint use .final-out class to print)
  //If the user has guessed the random number correctly print out the randomNumber with a message "Guess is correct. You win!"
  let guess = parseInt(document.querySelector('.inputs-Values').value);
  let final = document.querySelector(".final-output");
  let tries = document.querySelector(".Tries-output");
  if ( triesTaken >0){
    if (guess <= 0 || guess === "" || guess > 100) {
      final.textContent = "Please enter a number between 1 and 100";
      return;
    }
  
    triesTaken --;
    if (guess > randomNumber) {
      final.textContent = "Number is too high, try again"
    }else if (guess < randomNumber) {
      final.textContent = "Number is too low, try again";
    }else if (guess === randomNumber) {
      final.textContent = `Guess is correct. You win! The number is ${randomNumber}`;
      tries.textContent = `It took you ${6-triesTaken} tries.`;
    }
  }else if (triesTaken ===0 || triesTaken < 0){
final.textContent = "you lose! the number was "+ randomNumber
return
  }
  

  tries.textContent = `Tries: ${triesTaken}`;
}

// // For this task we will be making a "New Game" button function which will reset our game,
// // Once the user clicks on this button the user will have new random number to guess
// // 1. Reset the values inside the body of the function
// // 2. Attach our new game button using an event listener to the .btnNewGame button
function newGame() {
  randomNumber = Math.floor(Math.random() * 100 + 1);
  document.querySelector(".inputs-Values").value = "";
  triesTaken = 6;
  document.querySelector('.Tries-output').textContent = '';
  document.querySelector('.final-output').textContent = "Guess a number between 1 and 100";
}
document.querySelector('.btnGuess').addEventListener('click', guessNumber);
document.querySelector('.btnNewGame').addEventListener('click', newGame);
