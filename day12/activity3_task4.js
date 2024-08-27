class CustomError extends Error {
    constructor(message) {
        super(message);
        this.name = "CustomError";
    }
}

function newError (){
    throw new CustomError("69")
}
try{
    newError()
} catch(e){
    if(e instanceof CustomError){
        console.error("somthing went worng" + ":",e.message)
    }
    else{
        console.error("undifind".e.message);
    }

}