const { template } = require('@babel/core')
const {re} = require("@babel/core/lib/vendor/import-meta-resolve");

class BookMark{
  constructor(isbn, totalPages=0){
    this.bookMarks = []
    this.isbn = isbn
    this.totalPages = totalPages
  }
  addBookMark(pageNumber){
    if(pageNumber<1||pageNumber>this.totalPages){
      return this.bookMarks.length
    } else return this.bookMarks.push(pageNumber)
  }
  removeBookMark(pageNumber){
    let page = this.bookMarks.findIndex(a=>a===pageNumber)
    if(page===-1){
      return undefined
    } else{
      this.bookMarks.splice(page,1)
      return pageNumber
    }
  }
  goToFirstBookMark(){
    return this.bookMarks[0]??undefined
  }
  goToLastBookMark(){
    return this.bookMarks[this.bookMarks.length-1]??undefined
  }
  getBookMarks(){
    return this.bookMarks
  }

}

module.exports = BookMark

