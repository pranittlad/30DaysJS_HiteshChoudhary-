function longestUniqueSubstring(s) {
    let maxLength = 0;
    let start = 0;
    let charIndexMap = new Map();

    for (let end = 0; end < s.length; end++) {
        if (charIndexMap.has(s[end])) {
            start = Math.max(charIndexMap.get(s[end]) + 1, start);
        }
        charIndexMap.set(s[end], end);
        maxLength = Math.max(maxLength, end - start + 1);
    }

    console.log("The length of the longest substring without repeating characters is:", maxLength);
    return maxLength;
}

const inputString = "aqqqqeeighihgeigcabcbb";
longestUniqueSubstring(inputString); 
