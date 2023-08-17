# LAB Exam: Instruction

\*\*\*Write your student id, firstname, and lastname in a single line comment before starting your program, students who do not put this comment will get 50% taken off their score.\*\*\*

# test-paginate project

The test-paginate project prepares completed workable functions under two folders: lib and data as follows:

### Two functions provided in the _./lib/paginate.js_

- **getItemsOfCurrentPage(_allItems, currentPage, rowsPerPage_)**
  returns an array of items from allItems that calculates on a given current page and rows per page.
- **getTotalPages(_allItems, rowsPerPage_)**
  returns the total number of pages by calculating from a given allItems’s length and rows per page

### one products data provided in the _./data/products.js_

- **products**: an array of products. Each product is an object.

# paginateManagement Requirements

The _paginateManagement(items, rows)_ function contains two constant variables and three nested functions to handle pagination for a large of products from products.js file as follows:

### Constant Variables:

- **products**: assign items parameter to initial products
- **rowsPerPage**: assign rows parameter to set up number of rows per page

Write the following three nested functions in the _paginateManagement_ function.

### Nested Functions:

- **showPageNumber()** You firstly call _getTotalPages(allItems, rowsPerPage)_ by sending two parameters: products and rows per page. Then you must dynamically create `<button>` elements for showing each of page number under `<div class="pagination">`. You must assign a page number value to attribute name _'id'_ for each `<button>`, for example, `<button id="1">1</button>` for a page number 1, `<button id="2">2</button>` for a page number 2, …, until `<button id="totalPage">` of the last page. Do not forget to add button click hander function to each `<button>` when user click each of page number, calling _pageHandler_ function.

- **showItemsOfCurrentPage(_currentPageNumber_)** accepts a current page number and then shows items on this current page. You firstly call _getItemsOfCurrentPage(allItems, currentPage, rowsPerPage)_ function by sending three parameters: products, a current page number, and rows per page. The _getItemsOfCurrentPage_ function returns items of current page. Then you must dynamically create `<li>` elements for each single product item under `<ul id="products"></ul>`. Each `<li>` element contains a text content `'ID:item id, NAME:item name'` , for example, `'ID:GGOEAFKA087499, NAME:Android Small Removable Sticker Sheet'`. Note that there is only one white space after comma (,) between ID and NAME.

- **pageHandler(_event_)** when a user click on any page number button, you must remove previous page’s items, remove stylesheet of previous page button and assign to original button stylesheet `'border: 1px solid #999'` . Then calling _showItemsOfCurrentPage()_ function to show items on a user’s page number and adding stylesheet `'background-color: LightSteelBlue'` to a current page button. In case event object parameter is undefined means that no user clicking on any page number button, the first page must be shown as default page.

# Test Structures

- test('output#1: _showPageNumber_')
- test('output#2: _showPageNumber and addEventListener to page number buttons_')
- test('output#3: _pageHandler (when user clicks page number button)_')
- test('output#4: _pageHandler (default page)_')

# Screen Capture Outputs (10 products/Page, 9 total pages, 85 products)

![page 1 - FirstPage](/assets/images/output1.JPG)
![page 2](/assets/images/output2.JPG)
![page 9 - LastPage](/assets/images/output3.JPG)
