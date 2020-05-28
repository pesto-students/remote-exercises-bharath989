function longestWordInString(inputString) {

  let wordsFromInput = inputString.split(" ");
  let resultWord = "";
  wordsFromInput.forEach((word) => 
  {
    maxlengthWord = word.length > resultWord.length ? word : resultWord;
  });
  return resultWord;
}

export { longestWordInString };
