function sumOfNumsWithinARange(nums, start, end) {
  startIndex = nums.indexOf(start)
  endIndex = nums.indexOf(end)
  if(startIndex == -1){
    return 0
  }
  if(endIndex == -1){
    endIndex = nums.length
  }else{
    endIndex++
  }
  let count = 0
  for(let i = startIndex; i < endIndex; i++)
    count++
  return count
}

// Do not edit this line;
module.exports = sumOfNumsWithinARange;