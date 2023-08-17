const BookMark = require('./bookMarkManagement.js')
const randomBookMark = () => Math.floor(Math.random() * 256) + 1

test('output#1: constructor', () => {
  const bm1 = new BookMark('978-7-888-14362-4')
  expect(bm1.isbn).toBe('978-7-888-14362-4')
  expect(bm1.totalPages).toBe(0)
  expect(bm1.bookMarks).toStrictEqual([])

  const bm2 = new BookMark('978-7-888-14362-5', 111)
  expect(bm2.isbn).toBe('978-7-888-14362-5')
  expect(bm2.totalPages).toBe(111)
  expect(bm1.bookMarks).toStrictEqual([])
})

test('output#2: constructor and getBookMarks', () => {
  const bm1 = new BookMark('978-7-888-14362-4')
  expect(bm1.isbn).toBe('978-7-888-14362-4')
  expect(bm1.totalPages).toBe(0)
  expect(bm1.getBookMarks()).toStrictEqual([])

  const bm2 = new BookMark('978-7-888-14362-5', 111)
  expect(bm2.isbn).toBe('978-7-888-14362-5')
  expect(bm2.totalPages).toBe(111)
  expect(bm2.getBookMarks()).toStrictEqual([])
})

test('output#3: constructor and addBookMark', () => {
  const bm1 = new BookMark('978-7-222-64532-2', 256)
  const bmNumber1 = randomBookMark()
  expect(bm1.addBookMark(bmNumber1)).toStrictEqual(1)
  expect(bm1.bookMarks).toStrictEqual([bmNumber1])
  expect(bm1.addBookMark(257)).toStrictEqual(1)
  expect(bm1.bookMarks).toStrictEqual([bmNumber1])
  expect(bm1.addBookMark(0)).toStrictEqual(1)
  expect(bm1.bookMarks).toStrictEqual([bmNumber1])

  const bmNumber2 = randomBookMark()
  expect(bm1.addBookMark(bmNumber2)).toStrictEqual(2)
  expect(bm1.bookMarks).toStrictEqual([bmNumber1, bmNumber2])

  const bmNumber3 = randomBookMark()
  expect(bm1.addBookMark(bmNumber3)).toStrictEqual(3)
  expect(bm1.bookMarks).toStrictEqual([bmNumber1, bmNumber2, bmNumber3])
})

test('output#4: constructor and goToFirstBookMark', () => {
  const bm1 = new BookMark('978-7-222-64532-2', 256)
  expect(bm1.bookMarks).toStrictEqual([])
  expect(bm1.goToFirstBookMark()).toBe(undefined)

  const bmNumber1 = randomBookMark()
  bm1.bookMarks.push(bmNumber1)
  expect(bm1.bookMarks).toStrictEqual([bmNumber1])
  expect(bm1.goToFirstBookMark()).toBe(bmNumber1)

  const bmNumber2 = randomBookMark()
  bm1.bookMarks.unshift(bmNumber2)
  expect(bm1.bookMarks).toStrictEqual([bmNumber2, bmNumber1])
  expect(bm1.goToFirstBookMark()).toBe(bmNumber2)

  const bmNumber3 = randomBookMark()
  bm1.bookMarks.unshift(bmNumber3)
  expect(bm1.bookMarks).toStrictEqual([bmNumber3, bmNumber2, bmNumber1])
  expect(bm1.goToFirstBookMark()).toBe(bmNumber3)
})

test('output#5: constructor and goToLastBookMark', () => {
  const bm1 = new BookMark('978-7-222-64532-2', 256)
  expect(bm1.bookMarks).toStrictEqual([])
  expect(bm1.goToLastBookMark()).toBe(undefined)

  const bmNumber1 = randomBookMark()
  expect(bm1.bookMarks.push(bmNumber1)).toStrictEqual(1)
  expect(bm1.bookMarks).toStrictEqual([bmNumber1])
  expect(bm1.goToLastBookMark()).toBe(bmNumber1)

  const bmNumber2 = randomBookMark()
  expect(bm1.bookMarks.push(bmNumber2)).toStrictEqual(2)
  expect(bm1.bookMarks).toStrictEqual([bmNumber1, bmNumber2])
  expect(bm1.goToLastBookMark()).toBe(bmNumber2)

  const bmNumber3 = randomBookMark()
  expect(bm1.bookMarks.push(bmNumber3)).toStrictEqual(3)
  expect(bm1.bookMarks).toStrictEqual([bmNumber1, bmNumber2, bmNumber3])
  expect(bm1.goToLastBookMark()).toBe(bmNumber3)
})

test('output#6: constructor and removeBookMark', () => {
  const bm1 = new BookMark('978-7-222-64532-2', 256)
  const bmNumber1 = randomBookMark()

  expect(bm1.bookMarks.push(bmNumber1)).toStrictEqual(1)
  expect(bm1.bookMarks).toStrictEqual([bmNumber1])

  const bmNumber2 = randomBookMark()
  expect(bm1.bookMarks.push(bmNumber2)).toStrictEqual(2)
  expect(bm1.bookMarks).toStrictEqual([bmNumber1, bmNumber2])

  const bmNumber3 = randomBookMark()
  expect(bm1.bookMarks.push(bmNumber3)).toStrictEqual(3)
  expect(bm1.bookMarks).toStrictEqual([bmNumber1, bmNumber2, bmNumber3])

  expect(bm1.removeBookMark(bmNumber1)).toBe(bmNumber1)
  expect(bm1.bookMarks.length).toBe(2)
  expect(bm1.bookMarks).toStrictEqual([bmNumber2, bmNumber3])

  expect(bm1.removeBookMark(257)).toBe(undefined)
  expect(bm1.bookMarks.length).toBe(2)
  expect(bm1.bookMarks).toStrictEqual([bmNumber2, bmNumber3])

  expect(bm1.removeBookMark(bmNumber2)).toBe(bmNumber2)
  expect(bm1.bookMarks.length).toBe(1)
  expect(bm1.bookMarks).toStrictEqual([bmNumber3])

  expect(bm1.removeBookMark(bmNumber3)).toBe(bmNumber3)
  expect(bm1.bookMarks.length).toBe(0)
  expect(bm1.bookMarks).toStrictEqual([])
})

test('output#7: constructor, addBookMark, and getBookMarks', () => {
  const bm1 = new BookMark('978-7-222-64532-2', 256)
  const bmNumber1 = randomBookMark()

  expect(bm1.addBookMark(bmNumber1)).toStrictEqual(1)
  expect(bm1.getBookMarks()).toStrictEqual([bmNumber1])
  expect(bm1.addBookMark(257)).toStrictEqual(1)
  expect(bm1.getBookMarks()).toStrictEqual([bmNumber1])
  expect(bm1.addBookMark(0)).toStrictEqual(1)
  expect(bm1.getBookMarks()).toStrictEqual([bmNumber1])

  const bmNumber2 = randomBookMark()
  expect(bm1.addBookMark(bmNumber2)).toStrictEqual(2)
  expect(bm1.getBookMarks()).toStrictEqual([bmNumber1, bmNumber2])

  const bmNumber3 = randomBookMark()
  expect(bm1.addBookMark(bmNumber3)).toStrictEqual(3)
  expect(bm1.getBookMarks()).toStrictEqual([bmNumber1, bmNumber2, bmNumber3])
})

test('output#8: constructor, addBookMark, getBookMarks, and goToFirstBookMark, ', () => {
  const bm1 = new BookMark('978-7-222-64532-2', 256)
  expect(bm1.goToFirstBookMark()).toBe(undefined)

  const bmNumber1 = randomBookMark()
  expect(bm1.addBookMark(bmNumber1)).toStrictEqual(1)
  expect(bm1.getBookMarks()).toStrictEqual([bmNumber1])
  expect(bm1.goToFirstBookMark()).toBe(bmNumber1)

  const bmNumber2 = randomBookMark()
  expect(bm1.addBookMark(bmNumber2)).toStrictEqual(2)
  expect(bm1.getBookMarks()).toStrictEqual([bmNumber1, bmNumber2])
  expect(bm1.goToFirstBookMark()).toBe(bmNumber1)

  const bmNumber3 = randomBookMark()
  expect(bm1.addBookMark(bmNumber3)).toStrictEqual(3)
  expect(bm1.getBookMarks()).toStrictEqual([bmNumber1, bmNumber2, bmNumber3])
  expect(bm1.goToFirstBookMark()).toBe(bmNumber1)
})

test('output#9: constructor, addBookMark, getBookMarks, and goToLastBookMark', () => {
  const bm1 = new BookMark('978-7-222-64532-2', 256)
  expect(bm1.goToLastBookMark()).toBe(undefined)
  const bmNumber1 = randomBookMark()

  expect(bm1.addBookMark(bmNumber1)).toStrictEqual(1)
  expect(bm1.getBookMarks()).toStrictEqual([bmNumber1])
  expect(bm1.goToLastBookMark()).toBe(bmNumber1)

  const bmNumber2 = randomBookMark()
  expect(bm1.addBookMark(bmNumber2)).toStrictEqual(2)
  expect(bm1.getBookMarks()).toStrictEqual([bmNumber1, bmNumber2])
  expect(bm1.goToLastBookMark()).toBe(bmNumber2)

  const bmNumber3 = randomBookMark()
  expect(bm1.addBookMark(bmNumber3)).toStrictEqual(3)
  expect(bm1.getBookMarks()).toStrictEqual([bmNumber1, bmNumber2, bmNumber3])
  expect(bm1.goToLastBookMark()).toBe(bmNumber3)
})

test('output#10: constructor, addBookMark, getBookMarks, and removeBookMark', () => {
  const bm1 = new BookMark('978-7-222-64532-2', 256)

  const bmNumber1 = randomBookMark()
  expect(bm1.addBookMark(bmNumber1)).toStrictEqual(1)
  expect(bm1.getBookMarks()).toStrictEqual([bmNumber1])

  const bmNumber2 = randomBookMark()
  expect(bm1.addBookMark(bmNumber2)).toStrictEqual(2)
  expect(bm1.getBookMarks()).toStrictEqual([bmNumber1, bmNumber2])

  const bmNumber3 = randomBookMark()
  expect(bm1.addBookMark(bmNumber3)).toStrictEqual(3)
  expect(bm1.getBookMarks()).toStrictEqual([bmNumber1, bmNumber2, bmNumber3])

  expect(bm1.removeBookMark(bmNumber1)).toBe(bmNumber1)
  expect(bm1.bookMarks.length).toBe(2)
  expect(bm1.getBookMarks()).toStrictEqual([bmNumber2, bmNumber3])

  expect(bm1.removeBookMark(257)).toBe(undefined)
  expect(bm1.bookMarks.length).toBe(2)
  expect(bm1.getBookMarks()).toStrictEqual([bmNumber2, bmNumber3])

  expect(bm1.removeBookMark(bmNumber2)).toBe(bmNumber2)
  expect(bm1.bookMarks.length).toBe(1)
  expect(bm1.getBookMarks()).toStrictEqual([bmNumber3])

  expect(bm1.removeBookMark(bmNumber3)).toBe(bmNumber3)
  expect(bm1.bookMarks.length).toBe(0)
  expect(bm1.getBookMarks()).toStrictEqual([])
})
