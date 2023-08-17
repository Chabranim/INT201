## LAB Exam: Instruction

\*\*\*Write your student id, firstname, and lastname in a single line comment before starting your program, students who do not put this comment will get 50% taken off their score.\*\*\*

# Membership Requirements

Write a class called _Membership_ that contains one property called _members_ and functions as follows:

## Properties:

- **static autoId** : creates static property name _autoId_. The starting value for auto generated id is 1.
- **members** (_An array of {memberId, memberName }_): The members property is an array type which contains a collection of {memberId, memberName} objects.
  - For example, members property has a value
    [{memberId: 1, memberName: 'Alison Butler' },
    { memberId: 2, memberName: 'Simon Brown' },
    { memberId: 3, memberName: 'Tim Carr' },
    { memberId: 4, memberName: 'Neil Davidson' }]

## Functions:

- **constructor()**: without provided parameter, initial members property to an empty array ([]).

- **findMemberId(_id_)**: returns the index of first element in the array that matches the provided parameter id. If no object matches, -1 is returned.

- **findMemberName(_name_)**: returns the index of first element in the array that matches the provided parameter name with case-insensitive. If no object matches, -1 is returned.

- **subscribe(_name_)**:

  - You must check whether the provided name parameter is in members array or not by calling _findMemberName(name)_ function. If there is no member name in the members array then creates an object with two properties: memberId by getting value form an autoId and memberName by getting value from the provide parameter name and adding it to the end of members array. The autoId will increment by 1 for each new member.
  - Returns the new length of members array in case adding a new book into array successfully, otherwise return -1 if there are duplicate member name in the members array.

- **unsubscribe(_id_)**: If the provided parameter id is undefined then you must return -1. Finding the provided parameter id in the members array by calling _findMemberId(id)_. If id is found then removes a member from members array and shift the rest of it to the left, and return a member id, otherwise, return -1.

## Test Structures

- test('output#1: _autoId_')
- test('output#2: _constructor_')
- test('output#3: _constructor and findMemberId_')
- test('output#4: _constructor and findMemberName_')
- test('output#5: _constructor, autoId, and subcribe_')
- test('output#6: _constructor and unsubcribe_')
- test('output#7: _constructor, subscribe, and unsubcribe_')
