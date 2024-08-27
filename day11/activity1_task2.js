new Promise(function (resole,reject){
    setTimeout(() => {
        reject(new Error("Error wil appire in 2 sec")) // message
    }, 2000);
}).then((result) => {
    console.log(result)
}).catch((err) => {
    console.error("Error aarha;",err.message)
})