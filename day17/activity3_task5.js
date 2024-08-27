class Queue {
    constructor(){
        this.items= [];
    }

    enqueue(element) {
        this.items.push(element)
    }

    dequeue() {
        if(this.isEmpty()){
            return "Underflow"
        }

        return this.items.shift();
    }
     isEmpty() {
        return this.items.length === 0;
     }

     front(){
        if (this.isEmpty()) {
            return "No element in the queue";
        }
        return this.items[0]
     }
}

const myQueue = new Queue();

myQueue.enqueue(5);
myQueue.enqueue(52);
myQueue.enqueue(523);
myQueue.enqueue(523);
myQueue.dequeue();
myQueue.front(543);


console.log(myQueue);
console.log(myQueue);
console.log(myQueue);



 