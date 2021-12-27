function productOfAnyAmountOfNumbers(...args) {
  result = 1
  for(let x in args){
    result *= args[x]
  }
  return result
}

// Do not edit this line;
module.exports = productOfAnyAmountOfNumbers;