class MySolution {
  constructor() {
    this.flag = false; // this is optional to use;
  }

  binarySearch(nums, target) {
    let left = 0
    let right = nums.length -1 
    let middle = Math.floor((left + right) / 2)
    let number = nums[middle]
    if(target == number){
      return true
    }
    if(left > right){
      return false
    }
    if(target > number){
      left = middle + 1
    }else if(target < number){
      right = middle - 1
    }
    return this.binarySearch(nums.slice(left, right+1), target)
  }


}

// Do not edit this line;
let StudentSolution = MySolution;
module.exports = StudentSolution;