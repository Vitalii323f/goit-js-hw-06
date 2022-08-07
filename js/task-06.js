const textInput = document.querySelector('input')
console.log(textInput)

textInput.addEventListener('blur', onOutBlur)

function onOutBlur(event) {
  console.log(event.currentTarget.value.length)

  if (event.currentTarget.value.length === Number(textInput.dataset.length)) {
    textInput.classList.add('valid')
    textInput.classList.remove('invalid')
    console.log(textInput.classList)
  } else {
    textInput.classList.add('invalid')
    textInput.classList.remove('valid')
    console.log(textInput.classList)
  }
}

//console.log('This input has blur')

//console.log(111, textInput.dataset.length)

// const textInput = document.querySelector('#validation-input')
// const dataInputAtr = document.querySelector(['data-length'])

// console.log(dataInputAtr)

// textInput.addEventListener('blur', onCheckContentInput)

// function onCheckContentInput(event) {
//   if (event.currentTarget.value.length === Number(dataInputAtr.dataset.length)) {
//     textInput.classList.add('valid')
//     textInput.classList.remove('invalid')
//   } else {
//     textInput.classList.add('invalid')
//     textInput.classList.remove('valid')
//   }
// }
