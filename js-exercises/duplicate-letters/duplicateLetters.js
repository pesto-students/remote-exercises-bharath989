function duplicateLetters(args) {
  const inputArray = args.split("");
  const dupOccurances = [];

  for (let i = 0; i < inputArray.length; i++) 
  {

    let dupCount = 1;
    for (let j = 0; j < inputArray.length; j++) 
    {
      if (j != i) {
        if (inputArray[j] == inputArray[i])
         {
          dupCount++;
        }
      }
    }

    if (dupCount > 1) 
    {
      dupOccurances.push(dupCount);
    }
  }
  let result = Math.max(...dupOccurances);
  if (result > 1) 
  {
    return result;
  } 
  else 
  {
    return false;
  }
}

export { duplicateLetters };