const { template } = require('@babel/core')
const {re} = require("@babel/core/lib/vendor/import-meta-resolve");


class LoyaltyPoint {
    constructor(customerId){
        this.memberId = customerId
        this.points = 0
        this.memberType = this.calculateMembershipLevel()
  }
    calculatePoints(purchaseAmount){
        let point = Math.floor(purchaseAmount/25)
        this.points = this.points+=point
        return this.points
    }

    redeem(redeemPoints){
        if(redeemPoints<800||redeemPoints>this.points) return -1
        let cash = Math.floor(redeemPoints/800)
        let redeem = cash*800
        let current = this.points-=redeem
        this.points = current
        return {
            memberId: this.memberId,
            cashCoupons: cash,
            redeemPoints: redeem,
            currentPoints: current }
    }

    calculateMembershipLevel(){
        if(this.points<10000){
            return this.memberType = 'SILVER'
        } else if(this.points>=10000&&this.points<=20000){
            return this.memberType = 'GOLD'
        } else return this.memberType = 'PLATINUM'
    }

    
}

module.exports = LoyaltyPoint
