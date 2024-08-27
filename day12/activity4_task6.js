const random = new Promise((resolve , reject) => {
const randomValue = Math.random();

if(randomValue < 0.5){
    resolve('Promise resolve successfull')
}
else{
    reject('promise is reject')
}
});
random
.then(value => {
    console.log(value)
})
.catch(error =>{
    console.error("ERROR aarha", error);
})


