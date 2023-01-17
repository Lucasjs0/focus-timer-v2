import Timer from "./timer.js"
import Controls from "./controls.js"
import Events from "./events.js"
import Sounds from "./sounds.js"
import { minutesDisplay, secondsDisplay } from "./elements.js"

const timer = Timer({
  minutesDisplay,
  secondsDisplay
})

const sound = Sounds()

const control = Controls()

Events({timer, sound, control})