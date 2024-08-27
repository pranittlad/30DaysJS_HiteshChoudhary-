function Promisee(){
    return new Promise((resolve , reject) => {
        const random = Math.random > 0.5;
        setTimeout(() => {
            if(random){
                resolve("teh promise is resolved")
            }
            else{
                reject (new Error("bhai Error aarha"))
            }
        }, 1000);
    })
}

async function handel(){
    try{
        const result = await Promisee();
        console.log(result);
    } catch(error){
        console.error("error aayaga",error.message);
    }
} 

handel()