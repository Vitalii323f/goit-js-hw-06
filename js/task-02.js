const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
]

const listElements = ingredients.map((ingredient) => {
  //console.log(ingredient)
  const liEl = document.createElement('li')
  //console.log(100, liEl)
  liEl.textContent = ingredient
  liEl.classList = 'item'

  return liEl
})
console.log(listElements)

const ingList = document.querySelector('#ingredients')
ingList.append(...listElements)
console.log(ingList)

//-----------------------2 вариант-------------------------------

// const listElements = ingredients
//   .map((ingredient) => `<li class="list-item">${ingredient}</li>`)
//   .join('')
// console.log(listElements)

// const ingList = document.querySelector('#ingredients')
// ingList.insertAdjacentHTML('afterbegin', listElements)
// console.log(ingList)
