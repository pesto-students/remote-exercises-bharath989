function minima(numberOfElements, input) 
{
    return input.sort((a, b) => a - b).slice(0, numberOfElements);
}

export { minima };
