const buttonPlay = document.querySelector('.play')
const buttonStop = document.querySelector('.stop')
const buttonIncreaseTime = document.querySelector('.time-up')
const buttonDecreaseTime = document.querySelector('.time-down')
const buttonForest = document.querySelector('.card1')
const buttonRain = document.querySelector('.card2')
const buttonCity = document.querySelector('.card3')
const buttonFirePlace = document.querySelector('.card4')
const minutesDisplay = document.querySelector('.minutes')
const secondsDisplay = document.querySelector('.seconds')

let timerTimeOut
let minutes = Number(minutesDisplay.textContent)
let seconds = Number(secondsDisplay.textContent)


buttonIncreaseTime.addEventListener('click', function() {
  increaseTime()
})

buttonDecreaseTime.addEventListener('click', function() {
  decreaseTime()
})

buttonPlay.addEventListener('click', function() {
  countDown()
})

buttonStop.addEventListener('click', function() {

})

buttonForest.addEventListener('click', function() {

})

buttonRain.addEventListener('click', function() {

})

buttonCity.addEventListener('click', function() {

})

buttonFirePlace.addEventListener('click', function() {

})

function increaseTime() {
  minutes += 5
  minutesDisplay.textContent = String(minutes).padStart(2, "0")
}

function decreaseTime() {
  minutes -= 5
  minutesDisplay.textContent = String(minutes).padStart(2, "0")
}

function updateDisplay(newMinutes, seconds) {
  newMinutes = minutes === undefined ? minutes : newMinutes
  seconds = seconds === undefined ? 0 : seconds
  minutesDisplay.textContent = String(newMinutes).padStart(2, "0")
  secondsDisplay.textContent = String(seconds).padStart(2, "0")
}

function countDown() {
  timerTimeOut = setTimeout(function() {
    let seconds = Number(secondsDisplay.textContent)
    let minutes = Number(minutesDisplay.textContent)
    let countDownEnd = minutes <= 0 && seconds <= 0

    updateDisplay(minutes, 0)

    
    if(countDownEnd) {
      updateDisplay()
      return
    }

    if(seconds <= 0) {
      seconds = 10
      --minutes
    }

    updateDisplay(minutes, String(seconds - 1))

    countDown()

  }, 1000)
}
 






