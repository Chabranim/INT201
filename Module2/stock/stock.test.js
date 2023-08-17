const Stock = require('./stock.js')

test('output#1: constructor', () => {
  const s1 = new Stock()
  expect(s1.stockItems).toStrictEqual([])
  expect(s1.stockItems).toHaveLength(0)
  expect(s1).toEqual({ stockItems: [] })
})

test('output#2: constructor and findItemIndex', () => {
  const s1 = new Stock()
  expect(s1.findItemIndex(101)).toBe(-1)
  s1.stockItems.push({ itemId: 101, quantity: 1 })
  expect(s1.findItemIndex(101)).not.toBe(-1)
  s1.stockItems.push({ itemId: 102, quantity: 1 })

  expect(s1.findItemIndex(100)).toBe(-1)
  expect(s1.findItemIndex(101)).not.toBe(-1)
  expect(s1.findItemIndex(102)).not.toBe(-1)
})

test('output#3: constructor, findItemIndex, and addItem', () => {
  const s1 = new Stock()
  expect(s1.addItem(100, 1)).toBe(1)
  expect(s1.stockItems).toHaveLength(1)
  expect(s1.addItem(100, 10)).toBe(10)
  expect(s1.stockItems).toHaveLength(1)
  expect(s1.addItem(200, 50)).toBe(50)
  expect(s1.stockItems).toHaveLength(2)
  expect(s1.addItem(100, 100)).toBe(100)
  expect(s1.stockItems).toHaveLength(2)
  expect(s1.addItem(300, 5)).toBe(5)
  expect(s1.stockItems).toHaveLength(3)
  expect(s1.addItem(undefined, 5)).toBe(-1)
  expect(s1.addItem(200, undefined)).toBe(-1)
  expect(s1.addItem(undefined, undefined)).toBe(-1)
  expect(s1.stockItems).toHaveLength(3)
})

test('output#4: constructor, findItemIndex, addItem, and addItems', () => {
  const s1 = new Stock()
  expect(s1.addItems([{ itemId: 101, quantity: 1 }])).toBe(1)

  expect(
    s1.addItems([
      { itemId: 102, quantity: 2 },
      { itemId: 103, quantity: 5 },
      { itemId: 103, quantity: 0 }
    ])
  ).toBe(3)

  expect(s1.stockItems).toHaveLength(3)

  expect(
    s1.addItems([
      { itemId: 102, quantity: 10 },
      { itemId: null, quantity: 5 },
      { itemId: 103, quantity: 5 }
    ])
  ).toBe(2)
  expect(s1.stockItems).toHaveLength(3)
  expect(
    s1.addItems([
      { itemId: 102, quantity: 3 },
      { itemId: null, quantity: 5 },
      { itemId: 103, quantity: null }
    ])
  ).toBe(1)
  expect(s1.stockItems).toHaveLength(3)
  expect(
    s1.addItems([
      { itemId: 101, quantity: 50 },
      { itemId: 200, quantity: 10 },
      { itemId: 211, quantity: 20 },
      { quantity: 50 },
      { itemId: 101 },
      {},
      { itemId: 301, quantity: 5 }
    ])
  ).toBe(4)
  expect(s1.stockItems).toHaveLength(6)
})

test('output#5: constructor, findItemIndex, and sell', () => {
  const s1 = new Stock()
  expect(s1.sell(101)).toBe(-1)
  expect(s1.stockItems).toHaveLength(0)
  s1.stockItems.push({ itemId: 101, quantity: 1 })
  expect(s1.sell(101, 1)).toBe(1)
  expect(s1.stockItems).toHaveLength(1)
  expect(s1.sell(101, 1)).toBe(0)
  expect(s1.stockItems).toHaveLength(1)

  s1.stockItems.push({ itemId: 102, quantity: 10 })
  expect(s1.stockItems).toHaveLength(2)
  expect(s1.sell(102, 5)).toBe(5)
  expect(s1.sell(102, 7)).toBe(5)
  expect(s1.stockItems).toHaveLength(2)
})

test('output#6: constructor and getAllStockAmount', () => {
  const s1 = new Stock()
  expect(s1.getAllStockAmount()).toBe(0)

  s1.stockItems.push({ itemId: 101, quantity: 1 })
  expect(s1.getAllStockAmount()).toBe(1)

  s1.stockItems.push({ itemId: 101, quantity: 100 })
  expect(s1.getAllStockAmount()).toBe(101)

  s1.stockItems.push(
    { itemId: 102, quantity: 2 },
    { itemId: 103, quantity: 5 },
    { itemId: 100, quantity: 0 }
  )
  expect(s1.getAllStockAmount()).toBe(108)
})

test('output#7: constructor, findItemIndex, addItem, addItems, sell, and getAllStockAmount', () => {
  const s1 = new Stock()
  expect(s1.stockItems).toHaveLength(0)
  expect(s1.getAllStockAmount()).toBe(0)

  expect(s1.addItem(101, 1)).toBe(1)

  expect(s1.stockItems).toHaveLength(1)
  expect(s1.getAllStockAmount()).toBe(1)

  s1.addItem(101, 5)
  expect(s1.getAllStockAmount()).toBe(6)
  expect(s1.stockItems).toHaveLength(1)

  s1.addItems([
    { itemId: 102, quantity: 1 },
    { itemId: 103, quantity: 1 },
    { itemId: 104, quantity: 0 }
  ])
  expect(s1.getAllStockAmount()).toBe(8)
  expect(s1.stockItems).toHaveLength(4)

  s1.addItem(104, 1000)
  expect(s1.getAllStockAmount()).toBe(1008)
  expect(s1.stockItems).toHaveLength(4)

  s1.sell(104, 500)
  expect(s1.getAllStockAmount()).toBe(508)
  expect(s1.stockItems).toHaveLength(4)

  s1.sell(110, 5)
  expect(s1.getAllStockAmount()).toBe(508)
  expect(s1.stockItems).toHaveLength(4)

  s1.sell(102, 2)
  expect(s1.getAllStockAmount()).toBe(507)
  expect(s1.stockItems).toHaveLength(4)
})
