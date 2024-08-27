function facthing (step) {
    return new Promise(function(resolve,reject){

        setTimeout(() => {
            resolve(`Data from the step${step}`)
        }, 1000);
    })  
}
facthing(1).then((data) =>{
    console.log(data);
    return facthing(2)
})
.then((data) =>{
    console.log(data);
    return facthing(3);
})
.then((data) => {
    console.log(data);
    return facthing(4);
})
.then((data) => {
    console.log(data);
    return facthing(5)
})
.catch((error) =>{
    console.error('somthing went worng',error)
})


