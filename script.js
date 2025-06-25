let gameResult = document.getElementById("gameResult");
let userInput = document.getElementById("userInput");
let randomNumber = Math.ceil(Math.random() * 100);

function checkGuess() {
  let guessedNumber = parseInt(userInput.value.trim());
  let difference = Math.abs(randomNumber - guessedNumber);

  if (isNaN(guessedNumber) || guessedNumber < 1 || guessedNumber > 100) {
    gameResult.textContent = "Please provide a valid input between 1 and 100.";
    gameResult.style.backgroundColor = "red";
    return;
  }

  if (guessedNumber === randomNumber) {
    gameResult.textContent = "🎉 Congratulations! You got it right.";
    gameResult.style.backgroundColor = "green";
  } else if (difference <= 10) {
    if (guessedNumber > randomNumber) {
      gameResult.textContent = "🔥 Too Close! Go Backward.";
    } else {
      gameResult.textContent = "🔥 Too Close! Go Forward.";
    }
    gameResult.style.backgroundColor = "#FFB300";
  } else if (guessedNumber > randomNumber) {
    gameResult.textContent = "📉 Too High! Try Again.";
    gameResult.style.backgroundColor = "#1e217c";
  } else {
    gameResult.textContent = "📈 Too Low! Try Again.";
    gameResult.style.backgroundColor = "#1e217c";
  }
}

function gamerestart() {
  randomNumber = Math.ceil(Math.random() * 100);
  userInput.value = "";
  gameResult.textContent = "";
  gameResult.style.backgroundColor = "#246db6";
}
