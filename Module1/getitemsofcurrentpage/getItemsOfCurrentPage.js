const { template } = require('@babel/core')

function getItemsOfCurrentPage(allItems, currentPage, rowsPerPage) {
  if (allItems === null || allItems === undefined) return undefined
  if (allItems.length === 0) return []
  if (rowsPerPage <=0 ) return allItems
  if (currentPage <=0 ) return allItems

  const itemsOfCurrentPages = allItems.slice(rowsPerPage*(currentPage-1),rowsPerPage*currentPage)
  return itemsOfCurrentPages.length>0?itemsOfCurrentPages:[]

}
module.exports = getItemsOfCurrentPage
