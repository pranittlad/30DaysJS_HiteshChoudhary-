function fac(num){
    if(num===0){
        return 1
    }
    else{
        let x = num * fac(num-1)
        return x
    }
}
console.log(fac(5)); 