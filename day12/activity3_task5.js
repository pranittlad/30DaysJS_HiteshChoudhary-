class ValidationError extends Error {
    constructor(message){
        super(message);
        this.name = "ValidationError"
    }
}
function check(input){
    if(!input || input.trim()=== ""){
        throw new ValidationError("The string is empty")
    }
    console.log("input is valid");
    }
    function test(input){
try{
    check(input)
    }
     catch(error){
    if(error instanceof ValidationError){
        console.error("Validation error:" + error.message);
        
    }
    else{
        console.error("Unexpected error: " + error.message);
        }
    }
}test("  ")