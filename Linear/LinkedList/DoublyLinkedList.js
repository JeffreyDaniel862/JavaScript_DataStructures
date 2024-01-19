class Node {
    constructor(value) {
        this.previous = null;
        this.value = value;
        this.next = null;
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    prepend(value) {
        const node = new Node(value)
        if (this.isEmpty()) {
            this.head = node;
            this.tail = node;
        } else {
            node.next = this.head;
            this.head.previous = node;
            this.head = node;
        }
        this.size++;
    }

    append(value){
        const node = new Node(value);
        if(this.isEmpty()){
            this.head = node;
            this.tail = node;
        } else {
            node.previous = this.tail;
            this.tail.next = node;
            this.tail = node;
        }
        this.size++
    }

    removeFromFront(){
        if(this.isEmpty()){
            return null;
        }
        let removeNode = this.head;
        if(this.getSize() === 1){
            this.head = null;
            this.tail = null;
        } else {
            this.head = this.head.next;
            this.head.previous = null;
        }
        this.size--;
        return removeNode.value;
    }

    removeFromEnd(){
        if(this.isEmpty()){
            return null;
        }
        let removeNode = this.tail;
        if(this.getSize() === 1){
            this.head = null;
            this.tail = null;
        } else {
            this.tail = this.tail.previous;
            this.tail.next = null;
        }
        this.size--;
        return removeNode.value;
    }

    isEmpty() {
        return this.size === 0;
    }

    getSize(){
        return this.size;
    }

    print() {
        if(this.isEmpty()){
            console.log("List is Empty");
            return;
        } else {
            let currentNode = this.head;
            let listValues = '';
            while(currentNode){
                listValues += currentNode.value + ' -> ';
                currentNode = currentNode.next;
            }
            listValues += 'null';
            console.log(listValues);
        }
    }

    printReverse(){
        if(this.isEmpty()){
            console.log("List is Empty");
            return;
        } else {
            let currentNode = this.tail;
            let listValues = 'null';
            while(currentNode){
                listValues += ' -> ' + currentNode.value;
                currentNode = currentNode.previous;
            }
            console.log(listValues);
        }
    }
}

const doublyList = new DoublyLinkedList();
console.log(doublyList.isEmpty());
doublyList.prepend(20);
doublyList.prepend(10);
doublyList.append(30);
doublyList.append(40);
console.log(doublyList.isEmpty());
doublyList.print();
doublyList.printReverse();
console.log(doublyList.getSize());
console.log(doublyList.removeFromFront());
console.log(doublyList.removeFromEnd());
doublyList.print();