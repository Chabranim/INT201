const Membership = require('./membership.js')

test('output#1: autoId', () => {
  expect(Membership.autoId).toBe(1)
})

test('output#2: constructor', () => {
  const b1 = new Membership()
  expect(b1.members).toStrictEqual([])
  expect(b1.members).toHaveLength(0)
})

test('output#3: constructor and findMemberId', () => {
  const b1 = new Membership()
  b1.members = [
    { memberId: 1, memberName: 'Neil Davidson' },
    { memberId: 2, memberName: 'Tim Carr' },
    { memberId: 3, memberName: 'Alison Butler' },
    { memberId: 4, memberName: 'Simon Brown' }
  ]
  expect(b1.findMemberId(2)).toBe(1)
  expect(b1.findMemberId(9)).toBe(-1)
  expect(b1.findMemberId(1)).toBe(0)
  expect(b1.findMemberId(5)).toBe(-1)
})

test('output#4: constructor and findMemberName', () => {
  const b1 = new Membership()
  b1.members = [
    { memberId: 1, memberName: 'Neil Davidson' },
    { memberId: 2, memberName: 'Tim Carr' },
    { memberId: 3, memberName: 'Alison Butler' },
    { memberId: 4, memberName: 'Simon Brown' }
  ]
  expect(b1.findMemberName('Tim')).toBe(-1)
  expect(b1.findMemberName('alison butler')).toBe(2)
  expect(b1.findMemberName('simon bown')).toBe(-1)
  expect(b1.findMemberName('NEIL DAVIDSON')).toBe(0)
})

test('output#5: constructor, autoId, and subscribe', () => {
  const b1 = new Membership()
  expect(b1.subscribe('Alison Butler')).toBe(1)
  expect(b1.members.length).toBe(1)
  expect(b1.members[0]).toStrictEqual({
    memberId: 1,
    memberName: 'Alison Butler'
  })
  expect(Membership.autoId).toBe(2)

  expect(b1.subscribe('alison butler')).toBe(-1)
  expect(b1.members.length).toBe(1)
  expect(b1.members[0]).toStrictEqual({
    memberId: 1,
    memberName: 'Alison Butler'
  })
  expect(Membership.autoId).toBe(2)

  expect(b1.subscribe('Simon Brown')).toBe(2)
  expect(b1.members.length).toBe(2)
  expect(b1.members[0]).toStrictEqual({
    memberId: 1,
    memberName: 'Alison Butler'
  })
  expect(b1.members[1]).toStrictEqual({
    memberId: 2,
    memberName: 'Simon Brown'
  })
  expect(Membership.autoId).toBe(3)

  expect(b1.subscribe('Simon Brown')).toBe(-1)
  expect(b1.members.length).toBe(2)
  expect(b1.members[0]).toStrictEqual({
    memberId: 1,
    memberName: 'Alison Butler'
  })
  expect(b1.members[1]).toStrictEqual({
    memberId: 2,
    memberName: 'Simon Brown'
  })
  expect(Membership.autoId).toBe(3)

  expect(b1.subscribe('Tim Carr')).toBe(3)
  expect(b1.members.length).toBe(3)
  expect(b1.members[0]).toStrictEqual({
    memberId: 1,
    memberName: 'Alison Butler'
  })
  expect(b1.members[1]).toStrictEqual({
    memberId: 2,
    memberName: 'Simon Brown'
  })
  expect(b1.members[2]).toStrictEqual({
    memberId: 3,
    memberName: 'Tim Carr'
  })
  expect(Membership.autoId).toBe(4)
})

test('output#6: constructor and unsubscribe', () => {
  const b1 = new Membership()
  b1.members = [
    { memberId: 1, memberName: 'Neil Davidson' },
    { memberId: 2, memberName: 'Tim Carr' },
    { memberId: 3, memberName: 'Alison Butler' },
    { memberId: 4, memberName: 'Simon Brown' }
  ]

  expect(b1.unsubscribe(undefined)).toBe(-1)

  expect(b1.unsubscribe(10)).toBe(-1)

  expect(b1.unsubscribe(1)).toBe(1)
  expect(b1.members.length).toBe(3)
  expect(b1.members[0]).toStrictEqual({
    memberId: 2,
    memberName: 'Tim Carr'
  })
  expect(b1.members[1]).toStrictEqual({
    memberId: 3,
    memberName: 'Alison Butler'
  })
  expect(b1.members[2]).toStrictEqual({
    memberId: 4,
    memberName: 'Simon Brown'
  })

  expect(b1.unsubscribe(3)).toBe(3)
  expect(b1.members.length).toBe(2)
  expect(b1.members[0]).toStrictEqual({
    memberId: 2,
    memberName: 'Tim Carr'
  })
  expect(b1.members[1]).toStrictEqual({
    memberId: 4,
    memberName: 'Simon Brown'
  })
})

test('output#7: constructor,subscribe, and unsubscribe', () => {
  const b1 = new Membership()
  Membership.autoId = 1
  expect(b1.subscribe('Alison Butler')).toBe(1)
  expect(b1.members.length).toBe(1)
  expect(b1.members[0]).toStrictEqual({
    memberId: 1,
    memberName: 'Alison Butler'
  })

  expect(b1.unsubscribe(2)).toBe(-1)

  expect(b1.unsubscribe(1)).toBe(1)
  expect(b1.members.length).toBe(0)
  expect(b1.members[0]).toStrictEqual(undefined)

  expect(b1.subscribe('Simon Tray')).toBe(1)
  expect(b1.members.length).toBe(1)
  expect(b1.members[0]).toStrictEqual({
    memberId: 2,
    memberName: 'Simon Tray'
  })

  expect(b1.subscribe('John Tray')).toBe(2)
  expect(b1.members.length).toBe(2)
  expect(b1.members[1]).toStrictEqual({
    memberId: 3,
    memberName: 'John Tray'
  })

  expect(b1.subscribe('John Carr')).toBe(3)
  expect(b1.members.length).toBe(3)
  expect(b1.members[2]).toStrictEqual({
    memberId: 4,
    memberName: 'John Carr'
  })

  expect(b1.unsubscribe(3)).toBe(3)
  expect(b1.members.length).toBe(2)
  expect(b1.members[0]).toStrictEqual({
    memberId: 2,
    memberName: 'Simon Tray'
  })
  expect(b1.members[1]).toStrictEqual({
    memberId: 4,
    memberName: 'John Carr'
  })
})
