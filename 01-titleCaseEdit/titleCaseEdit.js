function titleCaseEdit(title) {
  let listOfWords = String(title).split(" ")
  let newTitle = ""
  for (let x in listOfWords){
    let word = listOfWords[x]
    newTitle += word.substring(0,1).toUpperCase() + word.substring(1) + " "
  }
  newTitle = newTitle.trim()
  return newTitle
}

// Do not edit this line;
module.exports = titleCaseEdit;