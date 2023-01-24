const possibleChoices = document.querySelector(".user-panel").querySelectorAll(".play-options__option");
const displayWinner = document.querySelector(".result-panel__winner");
const totaluserWinners = document.getElementById("user-counter");
const totalCpurWinners = document.getElementById("cpu-counter");
const logList = document.querySelector(".last-matches__log");

possibleChoices.forEach((choice) => choice.addEventListener("click", (e) => {
  document.querySelector(".result-panel__title").classList.add("hidden");
  document.getElementById("result_container").classList.remove("hidden");

  const userChoice = e.target.id;
  const cpuChoice = ["rock", "paper", "scissors"][ Math.floor(Math.random() * 3) ]; // cpu choice

  document.getElementById("cpu-choice").src = `img/${cpuChoice}.svg`;
  document.getElementById("user-choice").src = `img/${userChoice}.svg`;

  switch (`${userChoice} ${cpuChoice}`) {
    case 'rock paper':
    case 'paper scissors':
    case 'scissors rock':
      displayRes('CPU Wins!', totalCpurWinners)
      break;
    case 'rock scissors':
    case 'scissors paper':
    case 'paper rock':
      displayRes('You Win!', totaluserWinners)
      break;
    default:
      displayWinner.innerHTML = "Draw!";
  }
  
  const logItem = document.createElement("li");
  logItem.classList.add("last-matches__item");
  logItem.innerHTML = `<img class="last-matches__img" src="img/${userChoice}.svg" alt=""><span>VS</span><img class="last-matches__img flipped" src="img/${cpuChoice}.svg" alt="">`;

  if (logList.getElementsByTagName("li").length != 5) return logList.appendChild(logItem);

  logList.removeChild(logList.getElementsByTagName("li")[0]);
  logList.appendChild(logItem);
}));

function displayRes(winner, totalWinner) {
  displayWinner.innerHTML = winner;
  totalWinner.innerHTML = +totalWinner.innerText + 1;
}