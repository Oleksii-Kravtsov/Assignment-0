function frequencyCounter(word) {
  var letters = {}
  for(let i = 0; i < word.length; i++){
    letter = word[i]
    if(letters[letter] == undefined){
      letters[letter] = 1
    }else{
      letters[letter] += 1
    }
  }
  return letters
}

// Do not edit this line;
module.exports = frequencyCounter;