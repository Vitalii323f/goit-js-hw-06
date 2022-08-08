function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`
}

const bodyBgColorEl = document.querySelector('body')
const spanEl = document.querySelector('.color')
const btnChangeColorEl = document.querySelector('.change-color')

btnChangeColorEl.addEventListener('click', changeColor)

function changeColor(event) {
  const functionHexColor = getRandomHexColor(event)

  bodyBgColorEl.style.backgroundColor = functionHexColor

  spanEl.textContent = functionHexColor
}
