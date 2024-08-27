class Stack{
    constructor(){
        this.arr = [];
        this.currentSize= 0;
    }


 push(value){
    this.arr[this.currentSize] = value;
    this.currentSize += 1;
}

 pop()  {
    if(this.currentSize > 0){
        this.currentSize -= 1;
        return this.arr.pop();

        }
    return null;
    }

   peek(){
    if(this.currentSize > 0){
        return this.arr[this.currentSize - 1];
    }
    return null;
   }
}

function reverse(input){
     let stack = new Stack();

     for (let i = 0; i < input.length; i++) {
        stack.push(input[i]);
     }
     let reversed = '';

     for (let i = 0; i < input.length; i++) {
      reversed += stack.pop();
     }
     return reversed;
    }

    let originalString = "hello";
    let reversedString = reverse(originalString);
    console.log(reversedString);










// let stack = new Stack();
// stack.push(20);
// stack.push(110);
// stack.push(10);
// console.log(stack.peek()); // Output: 10
// console.log(stack.pop());  // Output: 10
// console.log(stack.pop());  // Output: 110
// console.log(stack.peek()); // Output: 20
