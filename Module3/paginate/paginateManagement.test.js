const { getItemsOfCurrentPage, getTotalPages } = require('./lib/paginate.js')
const products = require('./data/products.js')
const paginateManagement = require('./paginateManagement.js')

const fs = require('fs')
const initialHtml = fs.readFileSync('./index.html')
window.document.body.innerHTML = initialHtml

beforeEach(() => {
  window.document.body.innerHTML = initialHtml
  jest.resetModules()
})

const getRowsPerPage = () => Math.floor(Math.random() * 11) + 10
const testRowsPerPage = getRowsPerPage()
const { showPageNumbers, pageHandler } = paginateManagement(
  products,
  testRowsPerPage
)
const totalPages = getTotalPages(products, testRowsPerPage)

test('showPageNumber', () => {
  showPageNumbers()
  const paginateDiv = document.querySelector('.pagination')
  expect(paginateDiv.children).toHaveLength(totalPages)

  for (let i = 0; i < totalPages; i++) {
    const pButton = paginateDiv.children[i]
    expect(pButton.nodeName).toBe('BUTTON')
    expect(pButton.textContent).toBe(String(i + 1))
    expect(pButton.getAttribute('id')).toBe(String(i + 1))
  }
})

test('showPageNumber and addEventListener to page number buttons', () => {
  showPageNumbers()

  const paginateDiv = document.querySelector('.pagination')
  expect(paginateDiv.children).toHaveLength(totalPages)

  for (let i = 0; i < totalPages; i++) {
    const pButton = paginateDiv.children[i]
    expect(pButton.nodeName).toBe('BUTTON')
    expect(pButton.textContent).toBe(String(i + 1))
    expect(pButton.getAttribute('id')).toBe(String(i + 1))
    pButton.addEventListener('click', pageHandler)
  }

  const event = new Event('click')
  Array.from(paginateDiv.children).forEach((pButton) => {
    pButton.dispatchEvent(event)
    expect(pButton.style['background-color']).toEqual('LightSteelBlue')
    Array.from(paginateDiv.children)
      .filter(
        (noClickButton) =>
          noClickButton.getAttribute('id') !== pButton.getAttribute('id')
      )
      .forEach((noActionButton) =>
        expect(noActionButton.style['border']).toEqual('1px solid #999')
      )
  })
})

test('pageHandler (when user clicks page number button)', () => {
  showPageNumbers()
  const paginateDiv = document.querySelector('.pagination')
  expect(paginateDiv.children).toHaveLength(totalPages)

  for (let i = 0; i < totalPages; i++) {
    const pButton = paginateDiv.children[i]
    expect(pButton.nodeName).toBe('BUTTON')
    expect(pButton.textContent).toBe(String(i + 1))
    expect(pButton.getAttribute('id')).toBe(String(i + 1))
    pButton.addEventListener('click', pageHandler)
  }

  const event = new Event('click')
  Array.from(paginateDiv.children).forEach((pButton) => {
    pButton.dispatchEvent(event)
    const currentPage = pButton.getAttribute('id')
    const itemsOnCurrentPage = getItemsOfCurrentPage(
      products,
      Number(currentPage),
      testRowsPerPage
    )
    const productsUl = document.getElementById('products')
    expect(productsUl.children.length).toBe(itemsOnCurrentPage.length)
    let record = 0
    Array.from(productsUl.children).forEach((liProduct) => {
      expect(liProduct.nodeName).toBe('LI')
      expect(liProduct.textContent).toBe(
        `ID:${itemsOnCurrentPage[record].id}, NAME:${itemsOnCurrentPage[record].name}`
      )
      record++
    })
  })
})

test('pageHandler (default page)', () => {
  showPageNumbers()
  const paginateDiv = document.querySelector('.pagination')
  expect(paginateDiv.children).toHaveLength(totalPages)
  pageHandler()
  expect(paginateDiv.children[0].style['background-color']).toEqual(
    'LightSteelBlue'
  )

  let remainingPageButton = Array.from(paginateDiv.children)
  remainingPageButton = remainingPageButton.slice(1)
  remainingPageButton.forEach((noActionButton) =>
    expect(noActionButton.style['border']).toEqual('1px solid #999')
  )

  const itemsOnCurrentPage = getItemsOfCurrentPage(products, 1, testRowsPerPage)
  const productsUl = document.getElementById('products')
  expect(productsUl.children.length).toBe(itemsOnCurrentPage.length)
  let record = 0
  Array.from(productsUl.children).forEach((liProduct) => {
    expect(liProduct.nodeName).toBe('LI')
    expect(liProduct.textContent).toBe(
      `ID:${itemsOnCurrentPage[record].id}, NAME:${itemsOnCurrentPage[record].name}`
    )
    record++
  })
})
