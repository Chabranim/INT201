### ข้อกำหนดในการสอบปฏิบัติ

\*\*\* ให้ใส่คอมเมนต์เป็นรหัส ชื่อ-นามสกุล ของนักศึกษาลงใน source code ที่ submit นักศึกษาที่ไม่ใส่จะถูกหักคะแนน 50% ของคะแนนสอบ \*\*\*

# getItemsOfCurrentPage() Requirement

ข้อ 1. ให้เขียน Function ชื่อ getItemsOfCurrentPage (allItems, currentPage, rowsPerPage) เพื่อ return รายการ Items เฉพาะของ page ปัจจุบัน (currentPage) โดย allItems คือ array ของรายการ items ทั้งหมด และ rowsPerPage คือ จำนวน items สูงสุดที่ต้องการแสดงผลต่อ 1 page

- กรณี allItems เป็น null หรือ undefined ให้ return เป็น undefined
- กรณี คำนวณแล้วไม่มีจำนวน items ของ page ที่ระบุ หรือ กรณี allItems เป็น empty array [ ] ให้ return เป็น empty array [ ]
- กรณี rowsPerPage เป็น 0 หรือ เป็นตัวเลขติดลบ ให้ return allItems
- กรณี currentPage เป็น 0 หรือ เป็นตัวเลขติดลบ ให้ return allItems

- ตัวอย่างเช่น

  - allItems = [item1, item2, item3,…, item32] , currentPage = 3 , rowsPerPage = 15 return [item31, item32]
  - allItems = [item1, item2, item3,…, item15] , currentPage = 1 , rowsPerPage = 20 return [item1, item2, item3,…, item15]
  - allItems = [item1, item2, item3,…, item20] , currentPage = 2, rowsPerPage = 5 return [item6, item7, item8, item9, item10]
  - allItems = [item1, item2, item3,…, item100] , currentPage = 5, rowsPerPage = 10 return [item51, item2, item3,…, item60]
  - allItems = [item1, item2, item3,…, item100], currentPage = 5, rowsPerPage = 20 return [item80, item2, item3,…, item100]
  - allItems = [item1, item2, item3,…, item61], currentPage = 5, rowsPerPage = 15 return [item61]
  - allItems = [item1, item2, item3,…, item45] , currentPage = 1, rowsPerPage = 45 return [item1, item2, item3,…, item45]
  - allItems = [item1, item2, item3,…, item25] , currentPage = 2, rowsPerPage = 0 return [item1, item2, item3,…, item25]
  - allItems = [item1, item2, item3,…, item45] , currentPage = 2, rowsPerPage = -100 return [item1, item2, item3,…, item45]
  - allItems = [item1, item2, item3,…, item25] , currentPage = 0, rowsPerPage = 12 return [item1, item2, item3,…, item25]
  - allItems = [item1, item2, item3,…, item20] , currentPage = -5, rowsPerPage = 10 return [item1, item2, item3,…, item20]
  - allItems = [item1, item2, item3,…, item10] , currentPage = 3, rowsPerPage = 30 return [ ]
  - allItems = [ ], currentPage = 2, rowsPerPage = 5 return [ ]
  - allItems = null , currentPage = 2, rowsPerPage = 5 return undefined
  - allItems = undefined , currentPage = 3, rowsPerPage = 10 return undefined
