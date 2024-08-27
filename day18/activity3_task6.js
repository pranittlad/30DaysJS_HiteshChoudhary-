function countString(str){
     let charcount = {};

     for(let char of str){
        if (charcount[char]){
            charcount[char]++;
        }
        else{
            charcount[char] =  1;
        }
     }
     return charcount;
}

const result = countString("hellllo worllld");

console.log(result);