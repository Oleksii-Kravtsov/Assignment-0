function countOfAllIndexMatchingNumbers(nums) {
  let count = 0
  for (let x in nums){
    if(nums[x] == x){
      count++
    }
  }
  return count
}

// Do not edit this line;
module.exports = countOfAllIndexMatchingNumbers;