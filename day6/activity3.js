// task 7


const old_array = [1,2,3,4,5,6,7,8,9]


//filter
const new_array = old_array.filter((num) => num %2==1 )
console.log(new_array)

//map
const new_array2 = old_array.map((num) =>num * 2)
console.log(new_array2)

//reduce
const midd_array =[1,2,3]
const new_array3 = midd_array.reduce(function(accu,value){
    return accu + value
},0)
console.log(new_array3)