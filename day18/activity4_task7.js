
function rotaeArray(nums,k) {
    let size  = nums.length;

    if(size > k) {
        k = k % size;
    }
    const rotated =  nums.splice (size - k , size);
    nums.unshift(...rotated);

    return nums;
} 

console.log(rotaeArray([1 , 2, 3, 4, 5, 6, 7],3));


