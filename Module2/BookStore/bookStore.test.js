const BookStore = require('./bookStore.js')

test('output#1: constructor', () => {
  const b1 = new BookStore()
  expect(b1.stores).toStrictEqual([])
  expect(b1.stores).toHaveLength(0)
})

test('output#2: constructor and addNewBook', () => {
  const b1 = new BookStore()
  expect(b1.addNewBook('978-5-028-18098-2', 10)).toBe(10)
  expect(b1.stores.length).toBe(1)
  expect(b1.stores[0]).toStrictEqual({ isbn: '978-5-028-18098-2', stocks: 10 })

  expect(b1.addNewBook('978-5-028-18098-2', 15)).toBe(-1)
  expect(b1.stores.length).toBe(1)
  expect(b1.stores[0]).toStrictEqual({ isbn: '978-5-028-18098-2', stocks: 10 })

  expect(b1.addNewBook('978-2-678-23617-7', 100)).toBe(100)
  expect(b1.stores.length).toBe(2)
  expect(b1.stores[1]).toStrictEqual({ isbn: '978-2-678-23617-7', stocks: 100 })

  expect(b1.addNewBook('978-2-678-23617-7', 100)).toBe(-1)
  expect(b1.stores.length).toBe(2)
  expect(b1.stores[1]).toStrictEqual({ isbn: '978-2-678-23617-7', stocks: 100 })

  expect(b1.addNewBook('978-1-244-81009-2', 25)).toBe(25)
  expect(b1.stores.length).toBe(3)
  expect(b1.stores[2]).toStrictEqual({ isbn: '978-1-244-81009-2', stocks: 25 })

  expect(b1.addNewBook('978-1-244-81009-2', 25)).toBe(-1)
  expect(b1.stores.length).toBe(3)
  expect(b1.stores[2]).toStrictEqual({ isbn: '978-1-244-81009-2', stocks: 25 })
})

test('output#3: constructor and findBookIndex', () => {
  const b1 = new BookStore()
  b1.stores = []
  expect(b1.findBookIndex('978-5-028-18098-2')).toBe(-1)
  b1.stores = [{ isbn: '978-5-028-18098-2', stocks: 100 }]
  expect(b1.findBookIndex('978-5-028-18098-2')).toBe(0)
  expect(b1.findBookIndex('978-5-028-18098-1')).toBe(-1)

  b1.stores = [
    { isbn: '978-5-028-18098-2', stocks: 100 },
    {
      isbn: '978-1-244-81009-2',
      stocks: 50
    },
    {
      isbn: '978-1-777-66228-9',
      stocks: 25
    },
    {
      isbn: '978-3-321-11989-2',
      stocks: 35
    }
  ]
  expect(b1.findBookIndex('978-3-321-11989-2')).toBe(3)
})
test('output#4: constructor and sellBook', () => {
  const b1 = new BookStore()
  b1.stores = []
  expect(b1.sellBook('978-5-028-18098-2', 10)).toBe(-1)

  b1.stores = [{ isbn: '978-5-028-18098-2', stocks: 10 }]
  expect(b1.sellBook('978-5-028-18098-1', 20)).toBe(-1)

  expect(b1.sellBook('978-5-028-18098-2', 5)).toBe(5)
  expect(b1.sellBook('978-5-028-18098-2', 2)).toBe(2)
  expect(b1.sellBook('978-5-028-18098-2', 1)).toBe(1)
  expect(b1.sellBook('978-5-028-18098-2', 2)).toBe(2)
  expect(b1.sellBook('978-5-028-18098-2', 1)).toBe(0)

  b1.stores = [{ isbn: '978-5-028-18098-1', stocks: 10 }]
  expect(b1.sellBook('978-5-028-18098-1', 10)).toBe(10)
  expect(b1.sellBook('978-5-028-18098-1', 1)).toBe(0)

  b1.stores = [{ isbn: '978-5-028-18098-1', stocks: 10 }]
  expect(b1.sellBook('978-5-028-18098-1', 11)).toBe(0)

  b1.stores = [{ isbn: '978-5-028-18098-1', stocks: 0 }]
  expect(b1.sellBook('978-5-028-18098-1', 1)).toBe(0)
})
