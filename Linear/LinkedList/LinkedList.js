class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    };
};

class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    isEmpty() {
        return this.size === 0;
    }

    getSize() {
        return this.size;
    }

    //O(1)
    prepend(value) {
        const node = new Node(value);
        if (!this.isEmpty()) {
            node.next = this.head;
        }
        this.head = node;
        this.size++
    }

    //O(n)
    append(value) {
        const node = new Node(value);
        if (this.isEmpty()) {
            this.head = node;
        } else {
            let previous = this.head;
            while (previous.next) {
                previous = previous.next;
            }
            previous.next = node;
        }
        this.size++;
    }

    insert(value, index) {
        if (index < 0 || index > this.size) {
            console.log("Invalid index");
            return;
        }
        if (index === 0) {
            this.prepend(value);
        } else {
            const node = new Node(value);
            let previous = this.head;
            for (let i = 0; i < index - 1; i++) {
                previous = previous.next;
            }
            node.next = previous.next;
            previous.next = node;
            this.size++;
        }
    }

    /* Remove a value from head is O(1) 
       Remove a value from anywhere other than head is O(n) */

    removeFrom(index) {
        if (index < 0 || index >= this.size) {
            return null;
        }
        let removeNode;
        if (index === 0) {
            removeNode = this.head;
            this.head = this.head.next;
        } else {
            let previous = this.head;
            for (let i = 0; i < index - 1; i++) {
                previous = previous.next;
            }
            removeNode = previous.next;
            previous.next = previous.next.next;
        }
        this.size--;
        return removeNode.value;
    }

    removeValue(value) {
        if (this.isEmpty()) {
            return null;
        }
        let removeNode;
        if (this.head.value === value) {
            removeNode = this.head;
            this.head = this.head.next;
        } else {
            let previous = this.head
            while (previous.next && previous.next.value !== value) {
                previous = previous.next;
            }
            if (!previous.next) {
                return null;
            }
            removeNode = previous.next;
            previous.next = previous.next.next;
        }
        this.size--;
        return removeNode.value;
    }

    search(value) {
        if (this.isEmpty()) {
            return -1;
        }
        let currentNode = this.head;
        for (let i = 0; i < this.size; i++) {
            if (currentNode.value === value) {
                return `${value} is found at index ${i}`
            }
            currentNode = currentNode.next;
        }
        return `${value} not found`;
    }

    reverse(){
        let previousNode = null;
        let currentNode = this.head;
        let nextNode;

        while(currentNode !== null){
            nextNode = currentNode.next
            currentNode.next = previousNode;
            previousNode = currentNode;
            currentNode = nextNode;
        }
        this.head = previousNode;
    }

    print() {
        if (this.isEmpty()) {
            console.log('List is empty');
        } else {
            let currentNode = this.head;
            let listValues = '';
            while (currentNode) {
                listValues += `${currentNode.value} -> `;
                currentNode = currentNode.next;
            }
            console.log(listValues + 'null');
        }
    }
}

const list = new LinkedList();
console.log('List is empty ? ' + list.isEmpty());
console.log('List size ' + list.getSize());
console.log(list.removeFrom(0));
list.prepend(10);
list.prepend(20);
list.prepend(30);
list.print();
console.log('List is empty ? ' + list.isEmpty());
console.log('List size ' + list.getSize());
list.append(5);
list.print();
list.insert(15, 2);
list.print();
list.insert(25, 1);
list.print();
list.insert(2, 5);
list.print();
console.log('List size ' + list.getSize());
console.log(list.removeFrom(5));
list.print();
console.log('List size ' + list.getSize());
console.log(list.removeFrom(5));
list.print();
console.log(list.removeFrom(0));
list.print();
console.log(list.removeValue(15));
list.print();
console.log(list.removeValue(15));
list.print();
console.log(list.search(40));
list.reverse();
list.print();