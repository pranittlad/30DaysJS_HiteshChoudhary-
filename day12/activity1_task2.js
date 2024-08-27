function newError (n1 ,n2){
    if(n2 === 0){
       throw new Error("u cannt devide the number with zero")
    }
    return n1 / n2;
}
try {
    let new2 = newError(10 , 0)
    console.log("result: ",new2)
} catch(error){
    console.error("error aagaya",error.message)
}