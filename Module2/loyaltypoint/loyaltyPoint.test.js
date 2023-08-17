const LoyaltyPoint = require('./loyaltyPoint.js')

test('output#1: constructor', () => {
  const l1 = new LoyaltyPoint(100101)
  expect(l1.memberId).toBe(100101)
  expect(l1.points).toBe(0)
  expect(l1.memberType).toBe('SILVER')
  expect(l1).toEqual({
    memberId: 100101,
    points: 0,
    memberType: 'SILVER'
  })

  const l2 = new LoyaltyPoint(100155)
  expect(l2.memberId).toBe(100155)
  expect(l2.points).toBe(0)
  expect(l2.memberType).toBe('SILVER')
  expect(l2).toEqual({
    memberId: 100155,
    points: 0,
    memberType: 'SILVER'
  })
})

test('output#2: constructor and calculatePoints', () => {
  const l1 = new LoyaltyPoint(565758)
  const l2 = new LoyaltyPoint(111188)
  expect(l1.points).toBe(0)
  expect(l2.points).toBe(0)

  l1.calculatePoints(20)
  expect(l1.points).toBe(0)
  l1.calculatePoints(128)
  expect(l1.points).toBe(5)
  l1.calculatePoints(1000)
  expect(l1.points).toBe(45)

  l2.calculatePoints(55)
  expect(l2.points).toBe(2)
  l2.calculatePoints(5)
  expect(l2.points).toBe(2)
  l2.calculatePoints(8855)
  expect(l2.points).toBe(356)
  l2.calculatePoints(0)
  expect(l2.points).toBe(356)
})

test('output#3: constructor and redeem', () => {
  const l1 = new LoyaltyPoint(548734)
  l1.points = 1000

  expect(l1.redeem(900)).toEqual({
    memberId: 548734,
    cashCoupons: 1,
    redeemPoints: 800,
    currentPoints: 200
  })
  expect(l1.points).toBe(200)

  expect(l1.redeem(100)).toBe(-1)
  expect(l1.points).toBe(200)
  expect(l1.redeem(200)).toBe(-1)
  expect(l1.points).toBe(200)
  expect(l1.redeem(10000)).toBe(-1)
  expect(l1.points).toBe(200)

  const l2 = new LoyaltyPoint(598464)
  expect(l2.redeem(1000)).toBe(-1)
  l2.points = 10000
  expect(l2.redeem(10000)).toEqual({
    memberId: 598464,
    cashCoupons: 12,
    redeemPoints: 9600,
    currentPoints: 400
  })
  expect(l2.points).toBe(400)
  expect(l2.redeem(400)).toBe(-1)
  expect(l2.points).toBe(400)
})

test('output#4: constructor and calculateMembership', () => {
  const l1 = new LoyaltyPoint(555555)
  expect(l1.calculateMembershipLevel()).toBe('SILVER')
  l1.points = 9999
  expect(l1.calculateMembershipLevel()).toBe('SILVER')
  expect(l1.memberType).toBe('SILVER')

  l1.points = 10000
  expect(l1.calculateMembershipLevel()).toBe('GOLD')
  expect(l1.memberType).toBe('GOLD')

  l1.points = 20000
  expect(l1.calculateMembershipLevel()).toBe('GOLD')
  expect(l1.memberType).toBe('GOLD')

  l1.points = 20001
  expect(l1.calculateMembershipLevel()).toBe('PLATINUM')
  expect(l1.memberType).toBe('PLATINUM')
})

test('output#5: constructor, calculatePoints, redeem, and calculateMembership', () => {
  const l1 = new LoyaltyPoint(100101)
  expect(l1.memberId).toBe(100101)
  expect(l1.points).toBe(0)
  expect(l1.memberType).toBe('SILVER')
  expect(l1).toEqual({
    memberId: 100101,
    points: 0,
    memberType: 'SILVER'
  })
  expect(l1.calculateMembershipLevel()).toBe('SILVER')

  l1.calculatePoints(20)
  expect(l1.points).toBe(0)
  expect(l1.calculateMembershipLevel()).toBe('SILVER')
  l1.calculatePoints(128)
  expect(l1.points).toBe(5)
  expect(l1.calculateMembershipLevel()).toBe('SILVER')
  l1.calculatePoints(1000)
  expect(l1.points).toBe(45)
  expect(l1.calculateMembershipLevel()).toBe('SILVER')
  l1.calculatePoints(248875)
  expect(l1.points).toBe(10000)
  expect(l1.calculateMembershipLevel()).toBe('GOLD')

  expect(l1.redeem(8001)).toEqual({
    memberId: 100101,
    cashCoupons: 10,
    redeemPoints: 8000,
    currentPoints: 2000
  })
  expect(l1.points).toBe(2000)
  expect(l1.calculateMembershipLevel()).toBe('SILVER')

  expect(l1.redeem(1700)).toEqual({
    memberId: 100101,
    cashCoupons: 2,
    redeemPoints: 1600,
    currentPoints: 400
  })
  expect(l1.points).toBe(400)
  expect(l1.calculateMembershipLevel()).toBe('SILVER')

  l1.calculatePoints(500025)
  expect(l1.points).toBe(20401)
  expect(l1.calculateMembershipLevel()).toBe('PLATINUM')
})
