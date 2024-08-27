new Promise(function(resolve, reject)  {
    console.log('Hello i Promising u')
    resolve()
}).then(function(){
    console.log("not Promising u")
})