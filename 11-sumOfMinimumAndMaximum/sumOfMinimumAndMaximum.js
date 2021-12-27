function sumOfMinimumAndMaximum(nums) {
  let maxValue = null
  let minValue = null
  for(let x in nums){
    num = nums[x]
    if(maxValue == null || minValue == null){
      maxValue = num
      minValue = num
      continue
    }
    if(num > maxValue){
      maxValue = num
    }else if(num < minValue){
      minValue = num
    }
  }
  return minValue + maxValue
}

// Do not edit this line;
module.exports = sumOfMinimumAndMaximum;