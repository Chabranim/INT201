## LAB Exam: Instruction

\*\*\*Write your student id, firstname, and lastname in a single line comment before starting your program, students who do not put this comment will get 50% taken off their score.\*\*\*

# BookMark Requirements
// 1
Write a class called _BookMark_ that keeps page numbers for tracking of a reader's progress in a book. A book might have a zero or more bookmarks. It consists of the following object properties and functions:

## Properties:

- **isbn** (_String_) : is a book identifier, for examples, '978-7-888-14362-4', '978-3-16-148410-0'

- **totalPages** (_Number_) : is a total number of book pages

- **bookMarks** (_An array of page numbers_): is a marking page numbers that used to keep track of a reader's progrees in a book. The valid bookMarks must be in the range 1 to totalPages inclusively. For example, if tatalPages is equals to 256 then the valid page numbers for bookmarks must be 1 to 256 such as [10, 5, 8, 123, 256]


## Functions:

- **constructor(_isbn, totalPages_)** : creates a new bookmark object initially with the provided parameters isbn and totalPages. If totalPages parameter is undefined or no value, you must initial value as zero (0). In addition, you must initial bookMarks as an empty array ([]).




- **addBookMark(_pageNumber_)** : returns the new length of bookMarks array.If pageNumber is less than one or greater than the totalPages, no pageNumber added.

- **removeBookMark(_pageNumber_)** : returns a remove bookmark and then shift the rest of it to the left, if no pageNumber found, return undefined.

- **goToFirstBookMark()** : returns the first bookMarks pageNumber. If there are no bookMarks in an array, return undefined.

- **goToLastBookMark()** : returns the last bookMarks pageNumber. If there are no bookMarks in an array, return undefined.
- **getBookMarks()** : returns the bookMarks.

## Test Structures

- test('output#1: _constructor_')
- test('output#2: _constructor and getBookMarks_')
- test('output#3: _constructor and addBookMark_')
- test('output#4: _constructor and goToFirstBookMark_')
- test('output#5: _constructor and goToLastBookMark_')
- test('output#6: _constructor and removeBookMark_')
- test('output#7: _constructor, addBookMark, and getBookMarks_')
- test('output#8: _constructor, addBookMark, getBookMarks, and goToFirstBookMark_)
- test('output#9: _constructor, addBookMark, getBookMarks, and goToLastBookMark_')
- test('output#10: _constructor, addBookMark, getBookMarks, and removeBookMark_')
