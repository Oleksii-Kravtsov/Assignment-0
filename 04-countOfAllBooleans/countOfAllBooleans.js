function countOfAllBooleans(arr) {
  let count = 0
  for (let x in arr){
    if(typeof(arr[x]) == "boolean"){
      count++
    }
  }
  return count
}

// Do not edit this line;
module.exports = countOfAllBooleans;