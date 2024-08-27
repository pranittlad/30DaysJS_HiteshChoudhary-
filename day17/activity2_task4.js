class Stack{
    constructor(){
        this.items = [];
    }

    push(element){
        this.items.push(element);
    }

    pop(){
        if (this.isEmpty()){
            return "underflow";
        }
        return this.items.pop()
    }
    isEmpty(){
        return this.items.length === 0;
        }
}

let reversedString = (str) =>{
    let stack = new Stack();

    for (let i = 0; i < str.length; i++) {
        stack.push(str[i]);
    }

    let reversedStr = '';
    while(!stack.isEmpty()){
        reversedStr += stack.pop();
    }

    return reversedStr;
}

let inputString = "hello";
let reversed = reversedString(inputString);
console.log(reversed); 
