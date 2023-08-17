## LAB Exam: Instruction

\*\*\*Write your student id, firstname, and lastname in a single line comment before starting your program, students who do not put this comment will get 50% taken off their score.\*\*\*

# Stock Requirements

Write a class called _Stock_ that consists of the following object properties and functions:

## Properties:

- **stockItems** (_An array of stock items_): is a stock of items. An array contains stock item objects which each stock item object stores
  - itemId (Number): each item has a unique id
  - quantity (Number): a stock amounts of item
  - For example,
    [{ itemId: 101, quantity: 10 }, { itemId: 102, quantity: 500 }]

## Functions:

- **constructor()**: creates a new stock object without the provided parameters.

  - Your constructor must initial stockItems property to an empty array ([]).

- **findItemIndex(_id_)** : returns the index of the first stock item object that matches id parameters. If no stock item matches, -1 is returned.

- **addItem(_id, amount_)**: creates a new stock item object with the provided prarameter _id_ and _amount_. In either parameter is null or undefined then return -1. You must call _findItemIndex_ to check if the item already exists in the stockItems array. If the item already exists, the stock amount is increased. otherwise, adding a new stock item is added to the end of stockItems array and then the added amount is returned.

- **addItems(_items_)** : adds each item by calling _addItem()_ from the provied items array parameter then returns the number of sucessfully items added to an stockItems array. For example,

  - addItems([
    { itemId: 102, quantity: 2 },
    { itemId: 103, quantity: 5 },
    { itemId: 103, quantity: 0 }
    ]) return 3
  - addItems([
    { itemId: 102, quantity: 10 },
    { itemId: null, quantity: 5 },
    { itemId: 103, quantity: 5 }
    ]) return 2
  - addItems([
    { itemId: 101, quantity: 50 },
    { itemId: 200, quantity: 10 },
    { itemId: 211, quantity: 20 },
    { quantity: 50 },
    { itemId: 101 },
    {},
    { itemId: 301, quantity: 5 }
    ]) return 4

- **sell(_id, amount_)** : Before decreasing the stock amount with the selling amount received from the provided parameter, you must call _findItemIndex()_ to check if the item exists in the stockItems array. The stock amount must be decreased by the selling amount, and the stock amount must not be allowed to go below zero (or must not sell more than the stock amount). If the item is not found in the stockItems array, -1 is returned.

- **getAllStockAmount()** : returns the total number of stock amounts of all items.

## Test Structures

- test('output#1: _constructor_')
- test('output#2: _constructor and findItemIndex_')
- test('output#3: _constructor, findItemIndex, and addItem_')
- test('output#4: _constructor, findItemIndex, addItem, and addItems_')
- test('output#5: _constructor, findItemIndex, and sell_')
- test('output#6: _constructor and getAllStockAmount_')
- test('output#7: _constructor, findItemIndex, addItem, addItems, sell, and getAllStockAmount_')
