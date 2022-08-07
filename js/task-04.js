let counterValue = 0

function decrement() {
  console.log('decrement')
  counterValue -= 1
  render()
}

function increment() {
  console.log('increment')
  counterValue += 1
  render()
}
// отрисовка значения в HTML
function render() {
  const value = document.querySelector('#value')
  value.textContent = counterValue
}

const buttonDecrement = document.querySelector('[data-action="decrement"]')
buttonDecrement.addEventListener('click', decrement)

const buttonIncrement = document.querySelector('[data-action="increment"]')
buttonIncrement.addEventListener('click', increment)
