## LAB Exam: Instruction

\*\*\*Write your student id, firstname, and lastname in a single line comment before starting your program, students who do not put this comment will get 50% taken off their score.\*\*\*

# BookStore Requirements

Write a class called _BookStore_ that contains one property called _stores_ and functions as follows:

## Properties:

- **stores** (_An array of {isbn, stocks}_): The stores property is an array type which contains a collection of {isbn, stock} objects.
  - For example, stores property has a value [{isbn: '978-7-222-64532-2’, stocks: 100}, {isbn: '978-1-980-12345-3’, stocks: 50}, {isbn: '978-1-583-22998-5', stocks: 25}]

## Functions:

- **constructor()**: without provided parameter, initial stores property to an empty array ([]).

- **findBookIndex(_isbn_)**: returns the index of first element in the array that matches the provided parameter isbn. If no object matches, -1 is returned.

- **addNewBook(isbn, stocks)**: adding a new book in a bookstore. All objects in the stores property must have a unique isbn. You must check whether the provided isbn parameter is in stores array or not. If there is no isbn in the stores array then creates an object with two properties: isbn and stocks with the provide parameters and adding it to the end of stores array. Returns stock value in case adding a new book into array successfully, otherwise return -1 if there are duplicate isbn in the stores array.

- **sellBook(isbn, quantity)**: reducing stocks value with a selling quantity. Firstly, you must search the provide parameter isbn in the stores array. If not found, return -1. If found, then you must check whether stocks value is enough for selling or not. In case the selling quantity is more than stocks value, return 0 (means unsuccessfully selling). Otherwise, decreases the selling quantity from stocks value and returns a selling quantity (means successfully selling).

## Test Structures

- test('output#1: _constructor_')
- test('output#2: _constructor and addNewBook_')
- test('output#3: _constructor and findBook_')
- test('output#4: _constructor and sellBook_')
