const { template } = require('@babel/core')

  function countPosNegValue(posNegIntegerArray) {
    if (posNegIntegerArray === null || posNegIntegerArray === undefined) {
        return undefined
    } else if (posNegIntegerArray.length === 0) return {}
  
    let len = posNegIntegerArray.length;
    let positiveCount = 0;
    let negativeCount = 0;
    
  
    for(let i = 0; i < len; i++)
    {
        if (posNegIntegerArray[i] > 0)
        {
            positiveCount++;
        }
        else if (posNegIntegerArray[i] < 0)
        {
            negativeCount++;
        } 
       
    }
    const count = {};
    if (positiveCount >= 0) count["positive"] = positiveCount;
    if (negativeCount >= 0) count["negative"] = negativeCount;
    return count;

}
module.exports = countPosNegValue
