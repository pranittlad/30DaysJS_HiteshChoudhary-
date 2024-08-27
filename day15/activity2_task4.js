function capture(name){
    return  function(){
        console.log(`Greethings,${name}`)
    };
}
const pranit = capture('pranit')
const te = capture('te')

console.log(pranit());