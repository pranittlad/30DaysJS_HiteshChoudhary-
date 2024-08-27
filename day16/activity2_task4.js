function maxi(arr){
    if (arr.length === 1){
        return arr[0];
    }
}
const maxNum = maxi(Math.max(arr));

return arr[0] > maxNum ? arr[0] : maxNum;
const testCases = [
    [1, 2, 3, 4, 5],
    [5, 4, 3, 2, 1],
    [10, 20, 30, 40, 50],
    [-10, -20, -30, -40, -50],
    [100],
    [3, 7, 2, 8, 4, 10, 1]
];

// Logging the results
testCases.forEach((testCase, index) => {
    console.log(`Test Case ${index + 1}: Array = [${testCase}]`);
    console.log(`Maximum Element: ${findMax(testCase)}\n`);
});