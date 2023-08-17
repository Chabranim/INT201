const testFn = require('./countCovidStatus')

test('output#1', () => {
  expect(
    testFn([
      'negative and low risk',
      'positive',
      'negative and low risk',
      'negative and high risk',
      'positive',
      'negative and low risk'
    ])
  ).toStrictEqual({
    'negative and low risk': 3,
    positive: 2,
    'negative and high risk': 1
  })
})

test('output#2', () => {
  expect(
    testFn(['positive', 'negative and low risk', 'positive'])
  ).toStrictEqual({ positive: 2, 'negative and low risk': 1 })
})

test('output#3', () => {
  expect(
    testFn([
      'negative and low risk',
      'positive',
      'negative and low risk',
      'abnormal',
      'negative and high risk',
      'positive',
      ' normal'
    ])
  ).toStrictEqual({
    positive: 2,
    'negative and low risk': 2,
    'negative and high risk': 1
  })
})

test('output#4', () => {
  expect(testFn(['covid'])).toStrictEqual({})
})

test('output#5', () => {
  expect(testFn([])).toStrictEqual({})
})
test('output#6', () => {
  expect(testFn(null)).toStrictEqual(undefined)
})

test('output#7', () => {
  expect(testFn(undefined)).toStrictEqual(undefined)
})
