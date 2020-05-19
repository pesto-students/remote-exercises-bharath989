function sumAll([a,b]) {

  let minNum = Math.min(a,b);
  let maxNum = Math.max(a,b);
  let sum  = 0;
  for(let i = minNum ; i<=maxNum; i++)
  {
    sum += i;
  }

  return sum;
}

export {
  sumAll,
};
