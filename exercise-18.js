function memoize(fn) {
  let cache = {};
  return function (number) {
    if (number in cache) {
      console.log ("Fetching from cache for " + number);
      return cache[number];
    }
    
    
    else {
      cache[number] = fn(number);
      console.log ("Calculating result for " + number);
      return cache[number];
    }
    
  }
  

  
}


function factorial(x) {
  if (x === 0) {
    return 1;
  }

  return x * factorial(x - 1);
}

factorial = memoize(factorial);
console.log(factorial(10));
console.log(factorial(6));
console.log(factorial(5));