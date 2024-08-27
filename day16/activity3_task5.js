function reversstring(str){

    if (str === ""){
        return "";
    }
    else return reversstring(str.substr(1)) + str.charAt(0);   
} 
console.log(reversstring("niqqaa"));
