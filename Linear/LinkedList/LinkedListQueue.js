const LinkedListTail = require('./LinkedListWithTail');

class LinkedListQueue{
    constructor(){
        this.list = new LinkedListTail();
    }

    enqueue(value){
        this.list.append(value);
    }

    dequeue(){
        return this.list.removeFromHead();
    }

    peek(){
        return this.list.head.value;
    }

    isEmpty(){
        return this.list.isEmpty();
    }

    getSize(){
        return this.list.getSize();
    }

    print(){
        return this.list.print();
    }
}

const queueList = new LinkedListQueue();

console.log(queueList.isEmpty());
queueList.enqueue(10);
queueList.enqueue(20);
queueList.enqueue(30);
queueList.print();
console.log(queueList.dequeue());
queueList.print();
console.log(queueList.peek());
console.log(queueList.getSize());