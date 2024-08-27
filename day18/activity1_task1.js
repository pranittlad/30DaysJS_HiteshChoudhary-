let arr = [1,23,56,5,6,78]

const bubble = arr => {
    const len = arr.length;

    for (let i = 0; i < len; i++) {
        for (let j = 0; j < len; j++) {
            if(arr[j] > arr[j + 1]){
                const temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;

            }
            
        }
        
    }
    return arr;
}

console.log(arr);
bubble(arr);
console.log(arr)