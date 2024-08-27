async function fetchData(){
    try{
        const response = await fetch('https://invalid-url.com/api/data');
        if(!response.ok){
                throw new Error("bhai http mai error aarha")
        }
        const data = await response.json();
        console.log(data)
    } catch(error){
        console.error("the error is real");
    }
}
fetchData();