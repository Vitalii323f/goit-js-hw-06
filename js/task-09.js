function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`
}

const bodyBgColorEl = document.querySelector('body')
console.log(bodyBgColorEl)
const spanEl = document.querySelector('.color')
console.log(spanEl)
const btnChangeColorEl = document.querySelector('.change-color')
console.log(btnChangeColorEl)

btnChangeColorEl.addEventListener('click', changeColor)

function changeColor(event) {
  const functionHexColor = getRandomHexColor(event)

  console.log(functionHexColor)

  bodyBgColorEl.style.backgroundColor = functionHexColor

  spanEl.textContent = functionHexColor
}
