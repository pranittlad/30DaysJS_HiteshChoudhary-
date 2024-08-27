function arrayadd(nums, target){
    for (let i = 0; i < nums.length; i++) {
        for (let j=i+1; j< nums.length; j++) {
            if(nums[i] + nums[j] === target){
                return [i,j]
            }
        }    
    }
    return null;
}

nums= [1,2,3,4]
target = 4
console.log(arrayadd(nums,target));



