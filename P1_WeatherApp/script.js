
const search = document.getElementById('search')
const btn = document.getElementById('btn')
const city = document.getElementById('city')
const temp = document.getElementsByClassName('temperature')
const state = document.getElementsByClassName('state')

btn.addEventListener('click', () =>{
    if(search.value.trim() !=''){
        updateInfo(search.value)
        console.log(search.value);
        search.value = '';
        search.blur();
    }
})

 async function fecthedData(endPont, city) {
    const apiUrl = `https://api.openweathermap.org/data/2.5/${endPont}?q=${city}&appid=4a5ea751b704bdb11783a2c5dc91eb96`;
    const respone = await fetch(apiUrl);

    return respone.json()
}

 async function updateInfo(search){
    const weatherData = await fecthedData('weather',search)
    console.log(weatherData);

    const {
        name: country,
        main: {temp , humidity},
        weather: [{id,  main}]
    } = weatherData;

    city.textContent = country;
    temp.textContent = temp;
    state.textContent = state;
    
}

