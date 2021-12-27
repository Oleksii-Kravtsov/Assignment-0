function pairSum(nums, target) {
  if(nums.length <= 1){
    throw ReferenceError
  }
  for(let i = 0; i<nums.length-1; i++){
    let number = nums[i]
    for(let a = i + 1; a < nums.length; a++){
      let number2 = nums[a]
      if(number + number2 == target){
        return true
      }
    }
  }
  return false
}

// Do not edit this line;
module.exports = pairSum;