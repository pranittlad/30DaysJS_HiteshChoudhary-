let countOccurrences = (arr, target) => {
    if (arr.length === 0) return 0;

    let count = (arr[0] === target) ? 1 : 0;

    return count + countOccurrences(arr.slice(1), target);
}

console.log(countOccurrences([1,2,3,4,5,6],2));
console.log(countOccurrences([7, 8, 7, 7, 9], 7)); 
