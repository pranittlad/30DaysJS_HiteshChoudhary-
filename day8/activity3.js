const a = [1,2,3]
const b = [4,5,6]

const c =[...a, ...b]
console.log(c)

// task 6
function box4(...num){
   return num.reduce((sum,cur) => 
    sum + cur)
   }
const result = box4(1,2,3,4)

console.log(result);