# test-countPosNegValue

#### ข้อกำหนดในการสอบ

\*\*\* ให้ใส่คอมเมนต์เป็นรหัส ชื่อ-นามสกุล ลงใน source code ที่ submit นักศึกษาที่ไม่ใส่จะถูกหักคะแนน 50% ของคะแนนสอบ \*\*\*

ข้อ 1. ให้เขียน Function ชื่อ countPosNegValue (posNegIntegerArray) เพื่อ return object ที่มี properties ดังนี้ {positive: ?, negative: ?} โดยที่ ? แทนจำนวนนับของเลขจำนวนเต็มบวกและจำนวนเต็มลบ ไม่พิจารณาตัวเลขที่ไม่ใช่จำนวนเต็มบวกและจำนวนเต็มลบ

- กรณี posNegIntegerArray เป็น null หรือ undefined ให้คืนค่าเป็น undefined
- กรณี posNegIntegerArray เป็น empty array [ ] ให้คืนค่าเป็น empty object { }
- กรณี ไม่พบรายการตัวเลขที่เป็นจำนวนเต็มบวกและจำนวนเต็มลบ ให้คืนค่าเป็น {positive: 0, negative: 0}

ตัวอย่างเช่น

- countPosNegValue([999]) จะได้ { positive: 1, negative: 0 }
- countPosNegValue([-132]) จะได้ { positive: 0, negative: 1 }
- countPosNegValue([-1, -10, -91]) จะได้ { positive: 0, negative: 3 }
- countPosNegValue([3, 2432, 10000, 71])) จะได้ { positive: 4, negative: 0 }
- countPosNegValue([-201, 0, -1, -888])) จะได้ { positive: 0, negative: 3 }
- countPosNegValue([0, 33, 453, 1356245])) จะได้ { positive: 3, negative: 0 }
- countPosNegValue([21, 0, -879, 111, 0, -2423])) จะได้ { positive: 2, negative: 2 }
- countPosNegValue([-3, 1, 12, 245, 87392, -2, -10230])) จะได้ { positive: 4, negative: 3 }
- countPosNegValue([0, 3, 41, 0, -212, 56, -1222, 120, 80, -99, 12, 34, -188, 0, 0]) จะได้ { positive: 7, negative: 4 }
- countPosNegValue([0, 0, 0, -3, 1, 12, 0, 245, 87392, 0, -2, -10230, 0, 0]) จะได้ { positive: 4, negative: 3 }
- countPosNegValue([0, 0, 0, 0, 0, 0, 0]) จะได้ { positive: 0, negative: 0 }
- countPosNegValue([0]) จะได้ { positive: 0, negative: 0 }
- countPosNegValue([]) จะได้ {}
- countPosNegValue(null) จะได้ undefined
- countPosNegValue(undefined) จะได้ undefined
