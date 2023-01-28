const $ = selector => document.querySelector(selector)

const displayWinner = $(".result-panel__winner");
const totaluserWinners = $("#user-counter");
const totalCpurWinners = $("#cpu-counter");
const logList = $(".last-matches__log");

document.querySelectorAll(".user-panel .play-options__option").forEach( choice => choice.addEventListener("click", e => {
  document.querySelector(".result-panel__title").classList.add("hidden");
  document.getElementById("result_container").classList.remove("hidden");

  userChoice = e.target.id; 
  cpuChoice = ["✊🏻", "✋🏻", "✌🏻"][ Math.floor(Math.random() * 3) ]; // cpu choice

  document.getElementById("cpu-choice").src = `img/${cpuChoice}.svg`;
  document.getElementById("user-choice").src = `img/${userChoice}.svg`;

  if (userChoice == cpuChoice) return displayResult()
  switch (`${userChoice} vs ${cpuChoice}`) {
    case "✊🏻 vs ✌🏻":
    case "✌🏻 vs ✋🏻":
    case "✋🏻 vs ✊🏻":
      return displayResult("You Win!", totaluserWinners);
  }
  displayResult('Cpu Wins!', totalCpurWinners)
}));

function displayResult(winner = 'Draw!', totalWinner) {
  displayWinner.innerHTML = winner;
  if (winner == 'Draw!') return addToLog()
  totalWinner.innerHTML = +totalWinner.innerText + 1;
  addToLog()
}

function addToLog () {
  const logItem = document.createElement("li");
  logItem.classList.add("last-matches__item");
  logItem.innerHTML = `<img class="last-matches__img" src="img/${userChoice}.svg"><span>VS</span><img class="last-matches__img flipped" src="img/${cpuChoice}.svg">`;

  if (logList.getElementsByTagName("li").length != 5) return logList.appendChild(logItem);
  logList.removeChild(logList.getElementsByTagName("li")[0]);
  logList.appendChild(logItem);
}