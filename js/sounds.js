export default function Sounds() {

  const bgForest = new Audio("./sounds/Floresta.wav")
  const bgCoffe = new Audio("./sounds/Cafeteria.wav")
  const bgRain = new Audio("./sounds/Chuva.wav")
  const bgFirePlace = new Audio("./sounds/Lareira.wav")

  bgForest.loop = true
  bgCoffe.loop = true
  bgRain.loop = true
  bgFirePlace.loop = true

  return {
    bgForest,
    bgCoffe,
    bgRain,
    bgFirePlace,
  }
}