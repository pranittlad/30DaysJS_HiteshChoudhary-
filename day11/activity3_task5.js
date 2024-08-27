async function waiting (Promise){
    try{
        const show = await Promise;
        console.log('thanks for waiting',show);
    }
    catch(error){
        console.error('somthng went worng',error)
    }
}

const naya = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject(new Error('error appire'))
    }, 2000);
})
waiting(naya)