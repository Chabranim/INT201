## LAB Exam: Instruction

\*\*\*Write your student id, firstname, and lastname in a single line comment before starting your program, students who do not put this comment will get 50% taken off their score.\*\*\*

# Book Requirements

Write a class called _Book_ that consists of the following object properties and functions:

## Properties:

- **isbn** (_String_) : is a book identifier, for examples, '978-7-888-14362-4', '978-3-16-148410-0'.
- **title** (_String_): is a book title.
- **authors** (_An array of authors_): is book authors. An array contains author objects which each author object stores
  - firstname (String): author’s firstname
  - lastname (String): author’s lastname
  - For example,
    [{ firstname: 'John', lastname: 'Scott' }, { firstname: 'Adam', lastname: 'Kim' }
    ]
- **ebook** (_Boolean_) : indicates whether book has e-book version or not.

## Functions:

- **constructor(_isbn, title, ebook_)**: creates a new book object with the provided parameters: isbn, title and ebook.

  - If title parameter is undefined or no value passed, you must set title to 'untitle' as a default function parameter.
  - If ebook parameter is undefined or no value passed you must set ebook to false as a default function parameter.
  - Your constructor must initial authors property to an empty array ([]) without provided parameter.

- **addAuthor(_fn, ln_)**: creates an author object by assigning the firstname property with the provided parameter named _fn_ and
  the lastname property with the provided parameter named _ln_. Then adding it to the end of authors array. You must return the new length of the authors array.

- **getFirstAuthor()** : returns the first author object of book, if no author then returns undefined.

- **getCoAuthors()** :returns array of all authors except the first author, if no co-author, returns an empty array ([]).
- **findAuthor(_firstname, lastname_)** : returns the first author object that matches both firstname and lastname parameters (case insensitive). If no author matches, undefined is returned.

- **hasEbook()** : returns the ebook property’ s value.

## Test Structures

- test('output#1: _constructor_')
- test('output#2: _constructor and addAuthor_')
- test('output#3: _constructor, addAuthor, and getFirstAuthor_')
- test('output#4: _constructor, addAuthor, and getCoAuthors_')
- test('output#5: _constructor and findAuthor_')
- test('output#6: _constructor and hasEbook_')
