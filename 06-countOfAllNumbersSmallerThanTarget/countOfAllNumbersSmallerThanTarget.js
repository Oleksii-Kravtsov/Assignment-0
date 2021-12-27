function countOfAllNumbersSmallerThanTarget(nums, target) {
  let count = 0
  for (let x in nums){
    if(nums[x] < target){
      count++
    }
  }
  return count
}

// Do not edit this line;
module.exports = countOfAllNumbersSmallerThanTarget;