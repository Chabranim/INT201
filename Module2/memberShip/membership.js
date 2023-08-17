const { template } = require('@babel/core')
const {re} = require("@babel/core/lib/vendor/import-meta-resolve");



class Membership {
 static autoId = 1
 constructor(){
  this.members = []
 }
 findMemberId(id){
  return this.members.findIndex(d=>d.memberId===id)?? -1
 }
 findMemberName(name){
  return this.members.findIndex(n=>n.memberName.toLowerCase()===name.toLowerCase())?? -1
 }
 subscribe(name){
  if(this.findMemberName(name)===-1){
   return this.members.push({ memberId: Membership.autoId++, memberName: name })
  } return -1
 }
 unsubscribe(id){
  if(this.findMemberId(id)===-1){
   return -1
  } this.members.splice(this.findMemberId(id),1)
  return id

 }

}
module.exports = Membership


