async function promiseMe (Promise) {
    try{
        const valuee = await Promise;
        console.log('thanks for waiting',valuee);
    }catch(error){
        console.error('Promise gott an error',error)
    }
}

const naya = new Promise((resolve, reject) => {
setTimeout(() => {
    resolve('hello world')
}, 5000);
})

promiseMe(naya);