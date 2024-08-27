let arr = [1,2,3,4,5];
let start = 0;
let end = arr.length;
let find = 5;
let position = undefined;

function recursive(arr,start,end){

    mid = Math.floor((start+end)/2);
    if(arr[mid] === find){
        position = mid;
        return true;
    } else if (arr[mid] < find) {
        recursive(arr , mid + 1, end);
    } else {
        recursive(arr ,start, mid -1)
    }
}

recursive(arr, start, end)
console.log(position)