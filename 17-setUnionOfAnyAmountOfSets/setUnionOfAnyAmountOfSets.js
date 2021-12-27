function setUnionOfAnyAmountOfSets(...args) {
  let outputSet = new Set()
  for(let a in args){
    let set = args[a]
    for(let value of set){
      outputSet.add(value)
    }
  }
  return outputSet
}

// Do not edit this line;
module.exports = setUnionOfAnyAmountOfSets;