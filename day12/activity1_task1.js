function theNewError (){
    throw new Error("Error");
}try{
    theNewError()
} catch(error){
    console.error("new error",error.message)
}