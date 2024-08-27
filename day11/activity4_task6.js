fetch('https://open-weather13.p.rapidapi.com/city/landon')
    .then(ress => {
        if(ress.ok){
            console.log("the process is success");
        }
        else{
            console.log("ERROR");
        }
     ress.json()

    })
    .then(data => console.log(data))
    .catch(error =>console.log('error'))
