export default function Controls() {
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

  return {
    handleButtonClick
  }
}