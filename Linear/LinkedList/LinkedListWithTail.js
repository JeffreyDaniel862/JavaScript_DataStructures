class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedListTail {
    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    isEmpty() {
        return this.size === 0;
    }

    getSize() {
        return this.size;
    }

    print() {
        if (this.isEmpty()) {
            console.log("List is Empty");
            return
        } else {
            let currentNode = this.head;
            let listValues = '';
            while (currentNode) {
                listValues += currentNode.value + ' -> ';
                currentNode = currentNode.next;
            }
            console.log(listValues + 'null');
        }
    }

    prepend(value) {
        const node = new Node(value);
        if (this.isEmpty()) {
            this.head = node;
            this.tail = node;
        } else {
            node.next = this.head;
            this.head = node;
        }
        this.size++;
    }

    append(value) {
        const node = new Node(value);
        if (this.isEmpty()) {
            this.tail = node;
            this.head = node;
        } else {
            this.tail.next = node;
            this.tail = node;
        }
        this.size++;
    }

    removeFromHead() {
        if (this.isEmpty()) {
            return null;
        } 
        const removeNode = this.head.value;
        if(this.size === 1){
            this.head = null;
            this.tail = null;
        } else {    
            this.head = this.head.next;
        }
        this.size--;
        return removeNode;
    }

    removeFromEnd() {
        if(this.isEmpty()){
            return null;
        }
        const removeNode = this.tail.value;
        if(this.size === 1){
            this.head = null;
            this.tail = null;
        } else {
            let previousNode = this.head;
            while(previousNode.next !== this.tail){
                previousNode = previousNode.next;
            }
            previousNode.next = null;
            this.tail = previousNode;
        }
        this.size--;
        return removeNode;
    }
};

module.exports = LinkedListTail

// const list = new LinkedListTail();

// console.log('list is empty ? ' + list.isEmpty());
// console.log('The size of the list ' + list.getSize());
// list.append(10);
// list.append(20);
// list.append(30);
// list.print();
// list.prepend(5);
// list.print();
// console.log('The size of the list ' + list.getSize());
// console.log(list.removeFromEnd());
// list.print();
// console.log('The size of the list ' + list.getSize());
// console.log(list.removeFromHead());
// list.print();
// console.log('The size of the list ' + list.getSize());