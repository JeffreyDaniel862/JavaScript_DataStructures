//Queue Data Structure using Array (non optimal Queue implementation)

class Queue {
    constructor(){
        this.items = [];
    }
    
    enqueue(element){
        this.items.push(element);
    }

    dequeue(element){
        this.items.shift(element);
    }

    isEmpty(){
        return this.items.length === 0;
    }

    peek(){
        if(!this.isEmpty()){
            return this.items[0];
        }
        return null;
    }

    size(){
        return this.items.length;
    }

    print(){
        console.log(this.items.toString())
    }
}

const queue = new Queue();

queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);

queue.dequeue();
console.log(queue.peek());

queue.print();
