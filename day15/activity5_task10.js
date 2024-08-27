function memoize(fn) {
    const cache = {};
    return function(...args) {
      const n = args[0]; // Assuming the function takes one argument
      if (n in cache) {
        console.log('Fetching from cache:', n);
        return cache[n];
      } else {
        console.log('Calculating result:', n);
        const result = fn(n);
        cache[n] = result;
        return result;
      }
    };
  }
  
  function factorial(n) {
    if (n <= 1) return 1;
    return n * factorial(n - 1);
  }
  
  const memoizedFactorial = memoize(factorial);
  
  // Example usage:
  console.log(memoizedFactorial(5)); // Output: Calculating result: 5, then 120
  console.log(memoizedFactorial(6)); // Output: Calculating result: 6, then 720
  console.log(memoizedFactorial(5)); // Output: Fetching from cache: 5, then 120
  