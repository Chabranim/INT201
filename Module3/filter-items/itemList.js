//Node.js
const { template } = require('@babel/core')
const products = require('./data/products.js')

//Browser
// import { products } from './data/products.js'

function itemList(userItems) {
  const items = userItems

  const initialPage = () => {
    const input = document.querySelector('input')
    input.addEventListener('input',filterItemsHandler)
    showItems(items)
  }

  const filterItemsHandler = (event) => {
    const inputValue = event.target.value.toLowerCase()
    const filter = items.filter((product) =>
        product.keywords.toLowerCase().includes(inputValue))
    showItems(filter)
  }

  const showItems = (items) => {
    const productsUl = document.querySelector('#items')
    productsUl.textContent = ''
    items.forEach((product) => {
      const liElement = document.createElement('li')
      liElement.textContent = `ID:${product.id}, NAME:${product.name}, KEYWORDS:${product.keywords}`
      productsUl.appendChild(liElement)
    })
  }

  return {
    initialPage,
    filterItemsHandler,
    showItems
  }
}

// Node.js
module.exports = itemList

//Browser
// export { itemList }
//
// const { initialPage, filterItemsHandler, showItems } = itemList(products)
// initialPage()
