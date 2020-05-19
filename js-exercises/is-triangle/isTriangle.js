function isTriangle(a, b, c) {
  if (a > 0 && b > 0 && c > 0) {
     if (a + b <= c || b + c <= a || c + a <= b) 
     { 
       return false; 
      } else 
      { 
        return true; 
      } 
    } 
    else 
    { 
      return false; 
    }
}

export { isTriangle };