import {
  buttonPlay,
  buttonStop,
  buttonIncreaseTime,
  buttonDecreaseTime,
  buttonForest,
  buttonRain,
  buttonCoffe,
  buttonFirePlace,
  buttonSun,
  buttonMoon,
  forestSlider,
  rainSlider,
  coffeSlider,
  firePlaceSlider
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

  buttonSun.addEventListener('click', function() {
    control.darkModeOn()
  })

  buttonMoon.addEventListener('click', function() {
    control.darkModeOff()
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

  forestSlider.addEventListener('click', function(event) {
    event.stopPropagation()
  })

  forestSlider.addEventListener('input', function(e) {
    sound.bgForest.volume = e.target.value / 100
  })

  rainSlider.addEventListener('click', function(event) {
    event.stopPropagation()
  })

  rainSlider.addEventListener('input', function(e) {
    sound.bgRain.volume = e.target.value / 100
  })

  coffeSlider.addEventListener('click', function(event) {
    event.stopPropagation()
  })

  coffeSlider.addEventListener('input', function(e) {
    sound.bgCoffe.volume = e.target.value / 100
  })

  firePlaceSlider.addEventListener('click', function(event) {
    event.stopPropagation()
  })

  firePlaceSlider.addEventListener('input', function(e) {
    sound.bgFirePlace.volume = e.target.value / 100
  })
}