const $ = selector => document.querySelector(selector)

document.querySelectorAll(".user-panel .play-options__option").forEach( choice => choice.addEventListener("click", e => {
  $(".result-panel__title").classList.add("hidden");
  $("#result_container").classList.remove("hidden");

  userChoice = e.target.id; 
  cpuChoice = ["✊🏻", "✋🏻", "✌🏻"][ Math.floor(Math.random() * 3) ]; // cpu choice

  document.getElementById("cpu-choice").src = `img/${cpuChoice}.svg`;
  document.getElementById("user-choice").src = `img/${userChoice}.svg`;

  if (userChoice == cpuChoice) return displayResult()
  switch (`${userChoice} vs ${cpuChoice}`) {
    case "✊🏻 vs ✌🏻":
    case "✌🏻 vs ✋🏻":
    case "✋🏻 vs ✊🏻":
      return displayResult("You Win!", $("#user-counter"));
  }
  displayResult('Cpu Wins!', $("#cpu-counter"))
}));

function displayResult(winner = 'Draw!', totalWinner) {
  $(".result-panel__winner").innerHTML = winner;
  if (winner == 'Draw!') return addToLog()
  totalWinner.innerHTML = +totalWinner.innerText + 1;
  addToLog()
}

function addToLog () {
  const logItem = document.createElement("li");
  logItem.innerHTML = `<img src="img/${userChoice}.svg"><span>VS</span><img src="img/${cpuChoice}.svg">`;
  
  if ($(".last-matches__log").children.length != 5) return $(".last-matches__log").appendChild(logItem);
  $(".last-matches__log").removeChild( $(".last-matches__log").firstElementChild);
  $(".last-matches__log").appendChild(logItem);
}