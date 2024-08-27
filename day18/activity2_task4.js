const linerSearch = (nums, target) => {
for (let i = 0; i < nums.length; i++) {
   if (target === nums[i]) {
    return i;
   }
     }

     return -1;
    };

console.log(linerSearch([2,1,3,4,7,6], 6));
console.log(linerSearch([2,1,3,4,7,6], 0));
