const LinkedListTail = require('./LinkedListWithTail');

class LinkedListStack{
    constructor(){
        this.list = new LinkedListTail();
    }

    push(value){
        this.list.prepend(value);
    }

    pop(){
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

const stackList = new LinkedListStack();
console.log(stackList.isEmpty());
stackList.push(10);
stackList.push(20);
stackList.push(30);
stackList.print();
console.log(stackList.pop());
stackList.print();
console.log(stackList.peek());