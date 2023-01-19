export default function Timer({
  minutesDisplay,
  secondsDisplay
}) {

  let timerTimeOut
  let minutes = Number(minutesDisplay.textContent)

  function updateDisplay(minutes, seconds) {
    minutes = minutes === undefined ? 0 : minutes
    seconds = seconds === undefined ? 0 : seconds
    minutesDisplay.textContent = String(minutes).padStart(2, "0")
    secondsDisplay.textContent = String(seconds).padStart(2, "0")
  }

  function countDown() {
    timerTimeOut = setTimeout(function() {
      let seconds = Number(secondsDisplay.textContent)
      let minutes = Number(minutesDisplay.textContent)
      let countDownEnd = minutes <= 0 && seconds <= 0

      updateDisplay(minutes, 0)

      if(countDownEnd) {
        reset()
        sound.kitchenTimer.play()
        return
      }

      if(seconds <= 0) {
        seconds = 60
        --minutes
      }

      updateDisplay(minutes, String(seconds - 1))

      countDown()

    }, 1000)
  }

  function reset() {
    updateDisplay(minutes, 0)
    clearTimeout(timerTimeOut)
  }

  function increaseTime() {
    let minutes = Number(minutesDisplay.textContent)
    if(minutes <= 85) {
      minutes = Number(minutes) + 5
    }

    minutesDisplay.textContent = String(minutes).padStart(2, "0")
  }

  function decreaseTime() {
    let minutes = Number(minutesDisplay.textContent)
    if(minutes > 5) {
      minutes = Number(minutes) - 5
    }

    minutesDisplay.textContent = String(minutes).padStart(2, "0")
  }

  return {
    updateDisplay,
    countDown,
    reset,
    increaseTime,
    decreaseTime
  }
}
