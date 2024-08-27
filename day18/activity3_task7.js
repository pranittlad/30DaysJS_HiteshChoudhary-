function lengthOfLongestSubstring(s) {
    let n = s.length;
    let set = new Set();
    let maxLength = 0;
    let left = 0;
    let right = 0;

    while (right < n){
        if(!set.has(s[right])){
            set.add(s[right]);
            right++;
            maxLength = Math.max(maxLength,right - left);
        }
        else {
            set.delete(s[left]);
            left++;
        }
    }
return maxLength;
}
 const s = "abcabcbb";
const length =lengthOfLongestSubstring(s);

console.log(length); 
