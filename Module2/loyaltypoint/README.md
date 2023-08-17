[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-8d59dc4de5201274e310e4c54b9627a8934c3b88527886e3b421487c677d23eb.svg)](https://classroom.github.com/a/NVK4kMaA)
## LAB Exam: Instruction

\*\*\*Write your student id, firstname, and lastname in a single line comment before starting your program, students who do not put this comment will get 50% taken off their score.\*\*\*

# LoyaltyPoint Requirements

Write a class called _LoyaltyPoint_ that consists of the following object properties and functions:

## Properties:

- **memberId**: stores a unique membership id.
- **points**: stores a member's total number of points.
- **memberType**: stores the member type, it could be each one of these, "SILVER", "GOLD", and "PLATINUM".

## Functions:

- **constructor()**: creates a new LoyaltyPoint object with the provided parameter customerId.

  - You must assign customerId to object property named "memberId".
  - Your constructor must initial the "points" property to zero.
  - Your constructor must initial the "memberType" property by calling calculateMembershipLevel()

- **calculatePoints(_purchaseAmount_)** :
  calculates the number of points on a given purchase amount. For each 25 baht, you get one point. Then add calculated points to "points" property and returns the updated total number of points.For example, if purchaseAmount is 10,500 baht, you will get 400 points.

- **redeem(_redeemPoints_)**:
  You must not allow to redeem if a given redeemPoints less than 800 points or more than the member's current total number of points and -1 will be returned. Otherwise, calculates the number of cash coupons on a given redeemPoints parameter. 800 redeemPoints will get 1 cash coupon with 100 Baht and then return the object that consists of the following properties:

  - {
    memberId: _memberId_,
    cashCoupons: ?,
    redeemPoints: ?,
    currentPoints: ?
    }
    when ? are values that the redeem function will be calculated
  - For example,
    - Case 1: If a member id is 112233 and has a current of total points is 1000. When a member call redeem(900), it would return
      {
      memberId: 112233,
      cashCoupons: 1,
      redeemPoints: 800 ,
      currentPoints: 200
      }
    - Case 2: If a member id is 334455 and has a current of total points is 10000. When a member call redeem(2100), it would return
      {
      memberId: 334455,
      cashCoupons: 2,
      redeemPoints: 1600 ,
      currentPoints: 8400?
      }
    - Case 3: If a member id is 198120 and has a current of total points is 10. When a member call redeem(1000), it would return
      -1 because his/her current point is less than 800.
    - Case 4: If a member id is 354344 and has a current of total points is 2500. When a member call redeem(799), it would return -1 because his/her redeempoint is less than 800.

- **calculateMembershipLevel()** :
  caculates the membership level by comparing the current points as a table below,
  |MemberType| Points |
  |----------|------------|
  |SILVER | < 10000 |
  |GOLD | 10000-20000|
  |PLATINUM | >20000 |

## Test Structures

- test('output#1: _constructor_')
- test('output#2: _constructor and calculatePoints_')
- test('output#3: _constructor and redeem_')
- test('output#4: _constructor and calculateMembership_')
- test('output#5: _constructor, calculatePoints, redeem, and calculateMembership_')
