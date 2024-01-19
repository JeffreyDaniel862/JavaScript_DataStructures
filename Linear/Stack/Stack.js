class Stack {
    constructor(){
        this.items = [];
    }

    push(element){
        this.items.push(element);
    }

    pop(){
        this.items.pop()
    }

    isEmpty(){
        return this.items.length === 0;
    }

    peek(){
        if(!this.isEmpty()){
            return this.items[this.items.length - 1];
        }

        return null;
    }

    size(){
        return this.items.length;
    }

    print(){
        console.log(this.items)
    }
}

const stack = new Stack();

console.log(stack.isEmpty());

stack.push(10);
stack.push(20);
stack.push(30);

console.log(stack.peek());
console.log(stack.size());

stack.pop();

stack.print();