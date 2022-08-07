const categoriesList = document.querySelector('#categories')
//console.log(categoriesList)

const categoriesItems = categoriesList.children
//console.log(categoriesItems)

console.log('Number of categories:', categoriesItems.length)

for (let i = 0; i < categoriesItems.length; i += 1) {
  console.log('Category:', categoriesItems[i].firstElementChild.textContent)
  console.log('Elements:', categoriesItems[i].lastElementChild.children.length)
}

console.log(categoriesItems[2].firstElementChild)
