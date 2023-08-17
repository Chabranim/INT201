const testFn = require('./countPosNegValue')

test('output#1', () => {
  expect(testFn([999])).toStrictEqual({ positive: 1, negative: 0 })
})

test('output#2', () => {
  expect(testFn([-132])).toStrictEqual({
    positive: 0,
    negative: 1
  })
})

test('output#3', () => {
  expect(testFn([-1, -10, -91])).toStrictEqual({
    positive: 0,
    negative: 3
  })
})

test('output#4', () => {
  expect(testFn([3, 2432, 10000, 71])).toStrictEqual({
    positive: 4,
    negative: 0
  })
})

test('output#5', () => {
  expect(testFn([-201, 0, -1, -888])).toStrictEqual({
    positive: 0,
    negative: 3
  })
})

test('output#6', () => {
  expect(testFn([0, 33, 453, 1356245])).toStrictEqual({
    positive: 3,
    negative: 0
  })
})

test('output#7', () => {
  expect(testFn([21, 0, -879, 111, 0, -2423])).toStrictEqual({
    positive: 2,
    negative: 2
  })
})
test('output#8', () => {
  expect(testFn([-3, 1, 12, 245, 87392, -2, -10230])).toStrictEqual({
    positive: 4,
    negative: 3
  })
})
test('output#9', () => {
  expect(
    testFn([0, 3, 41, 0, -212, 56, -1222, 120, 80, -99, 12, 34, -188, 0, 0])
  ).toStrictEqual({
    positive: 7,
    negative: 4
  })
})
test('output#10', () => {
  expect(
    testFn([0, 0, 0, -3, 1, 12, 0, 245, 87392, 0, -2, -10230, 0, 0])
  ).toStrictEqual({
    positive: 4,
    negative: 3
  })
})
test('output#11', () => {
  expect(testFn([0, 0, 0, 0, 0, 0, 0])).toStrictEqual({
    positive: 0,
    negative: 0
  })
})
test('output#12', () => {
  expect(testFn([0])).toStrictEqual({
    positive: 0,
    negative: 0
  })
})
test('output#13', () => {
  expect(testFn([])).toStrictEqual({})
})
test('output#14', () => {
  expect(testFn(null)).toStrictEqual(undefined)
})

test('output#15', () => {
  expect(testFn(undefined)).toStrictEqual(undefined)
})
