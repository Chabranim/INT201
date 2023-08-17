const { template } = require('@babel/core')
const {re} = require("@babel/core/lib/vendor/import-meta-resolve");
class Book{
    constructor(isbn, title='untitled', ebook=false){
        this.authors = []
        this.isbn = isbn
        this.title = title
        this.ebook = ebook
    }
    addAuthor(fn, ln){
        return this.authors.push({ firstname: fn, lastname: ln })
    }
    getFirstAuthor(){
        return this.authors[0]??undefined
    }
    getCoAuthors(){
        return this.authors.slice(1)??[]
    }
    findAuthor(firstname, lastname){
        return this.authors.find(a=>a.firstname.toLowerCase()===firstname.toLowerCase()&&a.lastname.toLowerCase()===lastname.toLowerCase())??undefined
    }
    hasEbook(){
        return this.ebook
    }

}
module.exports = Book


