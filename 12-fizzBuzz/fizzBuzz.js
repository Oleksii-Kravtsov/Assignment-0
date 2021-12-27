function fizzBuzz(start, end) {
  let outputList = []
  for (let i = start; i < end + 1; i++){
    let output = ""
    if(i % 3 == 0){
      output += "Fizz"
    }
    if(i % 5 == 0){
      output += "Buzz"
    }
    if(output == ""){
      output = i 
    }
    outputList.push(output)
  }
  return outputList
}

// Do not edit this line;
module.exports = fizzBuzz;