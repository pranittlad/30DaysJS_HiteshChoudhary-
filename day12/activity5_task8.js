fetch('https://invalid-url.com/api/data')
.then(response => {
    if(!response.ok){
        throw new Error("somthing went worng")
    }
    return response.json;
})
.then(value => {
    console.log(value)
})
.catch(error =>{
    console.error("ERROR",error);
})