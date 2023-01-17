import {
  buttonPlay,
  buttonStop,
  buttonIncreaseTime,
  buttonDecreaseTime,
  buttonForest,
  buttonRain,
  buttonCoffe,
  buttonFirePlace
} from "./elements.js"

export default function Events({timer, sound, control}) {

  let buttonPlayClicked = false

  buttonIncreaseTime.addEventListener('click', function() {
    timer.increaseTime()
  })

  buttonDecreaseTime.addEventListener('click', function() {
    timer.decreaseTime()
  })

  buttonPlay.addEventListener('click', function() {
    if(!buttonPlayClicked) {
      timer.countDown()
      buttonPlayClicked = true
    }
  })

  buttonStop.addEventListener('click', function() {
    timer.reset()
    buttonPlayClicked = false
  })

  buttonForest.addEventListener('click', function() {
    control.handleButtonClick(buttonForest, sound.bgForest)
  })

  buttonRain.addEventListener('click', function() {
    control.handleButtonClick(buttonRain, sound.bgRain)
  })

  buttonCoffe.addEventListener('click', function() {
    control.handleButtonClick(buttonCoffe, sound.bgCoffe)
  })
  
  buttonFirePlace.addEventListener('click', function() {
    control.handleButtonClick(buttonFirePlace, sound.bgFirePlace)
  })
}