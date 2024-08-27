function memoize(fn){
    const cache = {}

    return function(...args){
        const key = JSON.stringify(args);
        if(cache[key]){
            return cache[key];
        } else {
            const result = fn(...args);
            cache[key] = result;
            return result
        }
    };
}

const slowFunction = (num) => {
    console.log('computing....');
    return num * 2;
}

const memoizedFunction = memoize(slowFunction);

console.log(memoizedFunction(5)); 
console.log(memoizedFunction(5)); 
// console.log(memoizedFunction(10)); 
// console.log(memoizedFunction(10));