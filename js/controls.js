export default function Controls({
  buttonMoon,
  body,
  buttonSun
}) {
  
  let lastSound
  let lastButton

  function handleButtonClick(button, sound) {
    if(lastButton === button) {
      lastButton.classList.remove('marked')
      lastSound.pause()
      lastButton = null
      lastSound = null
    } else {
      if(lastButton && lastSound) {
        lastButton.classList.remove('marked')
        lastSound.pause()
      }

      button.classList.add('marked')
      lastButton = button
      lastSound = sound
      lastSound.play()
    }
  }

  function darkModeOn() {
    buttonMoon.classList.remove('hide')
    body.classList.add('dark')
    buttonSun.classList.add('hide')
  }

  function darkModeOff() {
    buttonMoon.classList.add('hide')
    body.classList.remove('dark')
    buttonSun.classList.remove('hide')
  }

  return {
    handleButtonClick,
    darkModeOn,
    darkModeOff
  }
}