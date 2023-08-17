const { template } = require('@babel/core')



class Stock {
  constructor(){
    this.stockItems=[]
  }
  findItemIndex(id){
    return this.stockItems.findIndex(a=>a.itemId===id)??-1
  }
  addItem(id, amount){
    if(id===undefined||id===null||amount===undefined||amount===null){
      return -1
    } else {
      if(this.findItemIndex(id)===-1){
        this.stockItems.push({ itemId: id, quantity: amount })
        return amount
      } else {
        this.stockItems[this.findItemIndex(id)].quantity += amount
        return amount

      }
    }
  }

  addItems(items){
    let all = 0
    for(let item of items){
      const result = this.addItem(item.itemId, item.quantity)
      if(result!==-1){
        all++
      }
    } return all
  }
  sell(id, amount){
    if(this.findItemIndex(id)!==-1){
      let stockQuantity = this.stockItems[this.findItemIndex(id)].quantity
      if(stockQuantity - amount < 0){
        this.stockItems[this.findItemIndex(id)].quantity = 0
        return stockQuantity
      } else {
        this.stockItems[this.findItemIndex(id)].quantity -= amount
        return amount
      }
    } return -1
  }
  getAllStockAmount(){
    let allStock = 0
    for (let stock of this.stockItems) {
      allStock += stock.quantity
    } return allStock
  }
}
module.exports = Stock