function palindrome(num) {
    let rev = 0;
    let originalNum = num;

    while (num > 0) {
        let digit = num % 10;  // Get the last digit
        rev = rev * 10 + digit; // Add it to the reversed number
        num = Math.floor(num / 10); // Remove the last digit
    }

    return rev === originalNum; // Check if the reversed number matches the original
}

console.log(palindrome(121)); 
console.log(palindrome(123)); 
 