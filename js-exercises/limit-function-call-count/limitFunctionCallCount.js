const limitFunctionCallCount = (aFunction, maxNoOfCalls) => {
  let currentCallCount = 0;
  return function (...args) 
  {
    currentCallCount ++;
    return (currentCallCount <= maxNoOfCalls) ? aFunction(...args) : null;
  };
};

export {
  limitFunctionCallCount,
};
