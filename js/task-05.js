const inputEl = document.querySelector('#name-input')
//console.log(inputEl)

const textSpan = document.querySelector('#name-output')
//console.log(textSpan)

inputEl.addEventListener('input', onInputFocus)

function onInputFocus(event) {
  console.log(event.currentTarget.value)
  if (inputEl.value === '') {
    return (textSpan.textContent = 'Anonymous')
  }
  textSpan.textContent = event.currentTarget.value
}
