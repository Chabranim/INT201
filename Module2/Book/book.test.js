const Book = require('./book.js')

test('output#1: constructor', () => {
  const b1 = new Book('978-7-888-14362-4', undefined, true)
  expect(b1.isbn).toBe('978-7-888-14362-4')
  expect(b1.title).toBe('untitled')
  expect(b1.ebook).toBe(true)
  expect(b1.authors).toStrictEqual([])

  const b2 = new Book('978-7-123-14355-5', 'JavaScript Beginner', false)
  expect(b2.isbn).toBe('978-7-123-14355-5')
  expect(b2.title).toBe('JavaScript Beginner')
  expect(b2.ebook).toBe(false)
  expect(b2.authors).toStrictEqual([])

  const b3 = new Book('978-7-878-23456-5', 'Introduction to JavaScript')
  expect(b3.isbn).toBe('978-7-878-23456-5')
  expect(b3.title).toBe('Introduction to JavaScript')
  expect(b3.ebook).toBe(false)
  expect(b3.authors).toStrictEqual([])

  const b4 = new Book('978-7-444-78946-5', 'Basic JavaScript', undefined)
  expect(b4.isbn).toBe('978-7-444-78946-5')
  expect(b4.title).toBe('Basic JavaScript')
  expect(b4.ebook).toBe(false)
  expect(b4.authors).toStrictEqual([])

  const b5 = new Book('978-7-432-48971-5')
  expect(b5.isbn).toBe('978-7-432-48971-5')
  expect(b5.title).toBe('untitled')
  expect(b5.ebook).toBe(false)
  expect(b5.authors).toStrictEqual([])

  const b6 = new Book('978-5-028-18098-2', 'JavaScript Testing', true)
  expect(b6.isbn).toBe('978-5-028-18098-2')
  expect(b6.title).toBe('JavaScript Testing')
  expect(b6.ebook).toBe(true)
  expect(b6.authors).toStrictEqual([])
})

test('output#2: constructor and addAuthor', () => {
  const b1 = new Book('978-5-028-18098-2', 'JavaScript Testing', true)
  expect(b1.authors.length).toBe(0)
  expect(b1.addAuthor('Dale', 'Robinson')).toBe(1)
  expect(b1.authors[0]).toStrictEqual({
    firstname: 'Dale',
    lastname: 'Robinson'
  })
  expect(b1.addAuthor('Byron', 'Wall')).toBe(2)
  expect(b1.authors[1]).toStrictEqual({
    firstname: 'Byron',
    lastname: 'Wall'
  })
  expect(b1.addAuthor('Erick', 'Grould')).toBe(3)
  expect(b1.authors[2]).toStrictEqual({
    firstname: 'Erick',
    lastname: 'Grould'
  })
  expect(b1.addAuthor('Trent', 'Heath')).toBe(4)
  expect(b1.authors[3]).toStrictEqual({
    firstname: 'Trent',
    lastname: 'Heath'
  })
  expect(b1.addAuthor('Victor', 'Nixon')).toBe(5)
  expect(b1.authors[4]).toStrictEqual({
    firstname: 'Victor',
    lastname: 'Nixon'
  })
})

test('output#3: constructor, addAuthor, and getFirstAuthor', () => {
  const b1 = new Book('978-5-028-18098-2', 'JavaScript Testing', true)
  expect(b1.authors.length).toBe(0)
  expect(b1.getFirstAuthor()).toBe(undefined)

  b1.addAuthor('Dale', 'Robinson')
  expect(b1.getFirstAuthor()).toStrictEqual({
    firstname: 'Dale',
    lastname: 'Robinson'
  })

  b1.addAuthor('Byron', 'Wall')
  expect(b1.getFirstAuthor()).toStrictEqual({
    firstname: 'Dale',
    lastname: 'Robinson'
  })

  b1.addAuthor('Erick', 'Grould')
  expect(b1.getFirstAuthor()).toStrictEqual({
    firstname: 'Dale',
    lastname: 'Robinson'
  })

  expect(b1.addAuthor('Trent', 'Heath')).toBe(4)
  expect(b1.getFirstAuthor()).toStrictEqual({
    firstname: 'Dale',
    lastname: 'Robinson'
  })

  b1.addAuthor('Victor', 'Nixon')
  expect(b1.getFirstAuthor()).toStrictEqual({
    firstname: 'Dale',
    lastname: 'Robinson'
  })
})

test('output#4: constructor, addAuthor, and getCoAuthors', () => {
  const b1 = new Book('978-5-028-18098-2', 'JavaScript Testing', true)
  expect(b1.authors.length).toBe(0)
  expect(b1.getCoAuthors()).toStrictEqual([])

  b1.addAuthor('Dale', 'Robinson')
  expect(b1.getCoAuthors()).toStrictEqual([])

  b1.addAuthor('Byron', 'Wall')
  expect(b1.getCoAuthors()).toStrictEqual([
    {
      firstname: 'Byron',
      lastname: 'Wall'
    }
  ])

  b1.addAuthor('Erick', 'Grould')
  expect(b1.getCoAuthors()).toStrictEqual([
    {
      firstname: 'Byron',
      lastname: 'Wall'
    },
    {
      firstname: 'Erick',
      lastname: 'Grould'
    }
  ])

  b1.addAuthor('Trent', 'Heath')
  expect(b1.getCoAuthors()).toStrictEqual([
    {
      firstname: 'Byron',
      lastname: 'Wall'
    },
    {
      firstname: 'Erick',
      lastname: 'Grould'
    },
    {
      firstname: 'Trent',
      lastname: 'Heath'
    }
  ])

  b1.addAuthor('Victor', 'Nixon')
  expect(b1.getCoAuthors()).toStrictEqual([
    {
      firstname: 'Byron',
      lastname: 'Wall'
    },
    {
      firstname: 'Erick',
      lastname: 'Grould'
    },
    {
      firstname: 'Trent',
      lastname: 'Heath'
    },
    {
      firstname: 'Victor',
      lastname: 'Nixon'
    }
  ])
})

test('output#5: constructor and findAuthor', () => {
  const b1 = new Book('978-5-028-18098-2', 'JavaScript Testing', true)
  expect(b1.findAuthor('jimmie', 'Kline')).toBe(undefined)
  b1.authors = [
    {
      firstname: 'jimmie',
      lastname: 'Kline'
    },
    {
      firstname: 'Darren',
      lastname: 'Mendez'
    },
    {
      firstname: 'foster',
      lastname: 'Potts'
    },
    {
      firstname: 'Elwood',
      lastname: 'trevino'
    }
  ]

  expect(b1.findAuthor('jimmie', 'kline')).toStrictEqual({
    firstname: 'jimmie',
    lastname: 'Kline'
  })
  expect(b1.findAuthor('JIMMIE', 'KLINE')).toStrictEqual({
    firstname: 'jimmie',
    lastname: 'Kline'
  })

  expect(b1.findAuthor('elwood', 'trevino')).toStrictEqual({
    firstname: 'Elwood',
    lastname: 'trevino'
  })

  expect(b1.findAuthor('Darren', 'Mendez')).toStrictEqual({
    firstname: 'Darren',
    lastname: 'Mendez'
  })

  expect(b1.findAuthor('', '')).toBe(undefined)
})

test('output#6: constructor and hasEbook', () => {
  const b1 = new Book('978-5-028-18098-2', 'JavaScript Testing', true)
  expect(b1.hasEbook()).toBe(true)
  const b2 = new Book('978-7-123-14355-5', 'JavaScript Beginner', false)
  expect(b2.hasEbook()).toBe(false)
  const b3 = new Book('978-7-432-48971-5')
  expect(b3.hasEbook()).toBe(false)
})
