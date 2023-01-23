const possibleChoices = document.querySelector('.user-panel').querySelectorAll('.play-options__option')
const displayWinner = document.querySelector('.result-panel__winner')
const totaluserWinners = document.getElementById('user-counter')
const totalCpurWinners = document.getElementById('cpu-counter')
const logList = document.querySelector('.last-matches__log')

possibleChoices.forEach(choice => choice.addEventListener('click', e =>{
  document.querySelector('.result-panel__title').classList.add('hidden')
  document.getElementById('result_container').classList.remove('hidden')
  
  const userChoice = e.target.id
  const cpuChoice = ['rock', 'paper', 'scissors'][Math.floor(Math.random() * 3) ] // cpu choice
  
  document.getElementById('cpu-choice').src = `img/${cpuChoice}.svg`;
  document.getElementById('user-choice').src = `img/${userChoice}.svg`;

  if (userChoice == 'rock' && cpuChoice == 'paper') {
    displayWinner.innerHTML = 'CPU Wins!'
    totalCpurWinners.innerHTML = +totalCpurWinners.innerText + 1
  } else if (userChoice == 'rock' && cpuChoice == 'scissors') {
    displayWinner.innerHTML = 'You Win!'
    totaluserWinners.innerHTML = +totaluserWinners.innerText + 1
  } else if (userChoice == 'paper' && cpuChoice == 'rock') {
    displayWinner.innerHTML = 'You Win!'
    totaluserWinners.innerHTML = +totaluserWinners.innerText + 1
  } else if (userChoice == 'paper' && cpuChoice == 'scissors') {
    displayWinner.innerHTML = 'CPU Wins!'
    totalCpurWinners.innerHTML = +totalCpurWinners.innerText + 1
  } else if (userChoice == 'scissors' && cpuChoice == 'paper') {
    displayWinner.innerHTML = 'You Win!'
    totaluserWinners.innerHTML = +totaluserWinners.innerText + 1
  } else if (userChoice == 'scissors' && cpuChoice == 'rock') {
    displayWinner.innerHTML = 'CPU Wins!'
    totalCpurWinners.innerHTML = +totalCpurWinners.innerText + 1
  } else {
    displayWinner.innerHTML = 'Draw!'
  }

  const logItem = document.createElement('li')
  logItem.classList.add('last-matches__item')
  logItem.innerHTML = `<img class="last-matches__img" src="img/${userChoice}.svg" alt=""><span>VS</span><img class="last-matches__img flipped" src="img/${cpuChoice}.svg" alt="">`

  if (logList.getElementsByTagName('li').length != 5) return logList.appendChild(logItem)

  logList.removeChild(logList.getElementsByTagName('li')[0])
  logList.appendChild(logItem)
}))