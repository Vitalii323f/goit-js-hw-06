const formEl = document.querySelector('.login-form')
//console.log(formEl)

formEl.addEventListener('submit', onFormSubmit)

function onFormSubmit(event) {
  event.preventDefault()

  // console.dir(event.currentTarget.elements)
  const formData = new FormData(event.currentTarget)
  //console.log(formData)

  const {
    elements: { email, password },
  } = event.currentTarget

  if (email.value === '' || password.value === '') {
    return alert('Пожалуйста заполните все поля')
  }
  console.log(`Email: ${email.value}`)
  console.log(`Password ${password.value}`)
  event.currentTarget.reset()
}
