function rev(nums) {
    let revs = nums.toString().split("").reverse().join("")
    if(revs.endsWith("-")){
        revs = "-" + revs;
        return parseInt(revs)
    }
    else{
        return parseInt(revs)
    }
}

console.log(rev(1230));
 








