
// npm test CommonJS
// const { template } = require('@babel/core')
// const { getItemsOfCurrentPage, getTotalPages } = require('./lib/paginate.js')
// const products = require('./data/products.js')

// browser ES module
import { getItemsOfCurrentPage, getTotalPages } from './lib/paginate.js'
import { products } from './data/products.js'

function paginateManagement(items, rows) {

  const rowsPerPage = rows
  const products = items

  const showItemsOfCurrentPage = (currentPageNumber) => {
    const ItemsOfCurrent = getItemsOfCurrentPage(
        products,
        currentPageNumber,
        rowsPerPage)

    const productsUl = document.getElementById('products')
    ItemsOfCurrent.forEach((item)=>{
      const liElement = document.createElement('li')
      liElement.textContent = `ID:${item.id}, NAME:${item.name}`
      productsUl.appendChild(liElement)
    })
  }

  const pageHandler = (event) => {
    const productsUl = document.getElementById('products')
    productsUl.textContent=''

    const pageStyle = document.querySelectorAll('button')
    pageStyle.forEach((page)=>(page.style = 'border: 1px solid #999'))

    const currentPage = event?.target.id ?? 1
    console.log(currentPage)
    showItemsOfCurrentPage(currentPage)

    const targetPageButton = document.getElementById(currentPage)
    targetPageButton.style = 'background-color: LightSteelBlue'

  }

  const showPageNumbers = () => {
    const totalPages = getTotalPages(products, rowsPerPage)

    const paginateDiv = document.querySelector('.pagination')
    for (let page = 1; page <= totalPages; page++) {
      const buttonPage = document.createElement('button')
      buttonPage.textContent = page
      buttonPage.setAttribute('id', page)
      paginateDiv.appendChild(buttonPage)
      buttonPage.addEventListener('click', pageHandler) // add event
    }
  }

return {
  showPageNumbers,
  pageHandler
}
}


// npm test CommonJS
// module.exports = paginateManagement

// browser ES module
export { paginateManagement }
const { showPageNumbers,  pageHandler } =
    paginateManagement(products, 10)
showPageNumbers()
pageHandler()
