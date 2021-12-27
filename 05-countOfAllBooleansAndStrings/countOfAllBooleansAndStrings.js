
function countOfAllBooleansAndStrings(arr) {
  let count = 0
  for (let x in arr){
    if(typeof(arr[x]) == "boolean"){
      count++
      continue
    }
    if(typeof(arr[x]) == "string"){
      count++
    }
  }
  return count
}

// Do not edit this line;
module.exports = countOfAllBooleansAndStrings;