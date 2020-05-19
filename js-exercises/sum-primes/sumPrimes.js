function sumPrimes(num) {
  let start = 1;
  let sumOfPrimes = 0;

  while (start <= num) {
    if (checkIfPrime(start)) {
      total += start;
      sumOfPrimes++;
    }

  }
  return sumOfPrimes;
}

function checkIfPrime(num) 
{
  for (var i = 2; i < num; i++) 
  {
    if (num % i === 0)
    {
      return false;
    } 
    else
    {
      return true;
    }
  }
}

export 
{
  sumPrimes,
};
