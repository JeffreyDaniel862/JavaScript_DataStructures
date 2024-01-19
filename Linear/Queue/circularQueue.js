class CircularQueue {
    constructor(capacity) {
        this.items = new Array(capacity);
        this.capacity = capacity;
        this.currentSize = 0;
        this.rear = -1;
        this.front = -1;
    }

    isFull() {
        return this.currentSize === this.capacity;
    }

    isEmpty() {
        return this.currentSize === 0;
    }

    enqueue(element) {
        if (!this.isFull()) {
            this.rear = (this.rear + 1) % this.capacity;
            this.items[this.rear] = element;
            this.currentSize++;
            if (this.front === -1) {
                this.front = this.rear;
            }
        }
    }

    dequeue() {
        if (this.isEmpty()) {
            return "Queue is empty";
        }

        const item = this.items[this.front];
        this.items[this.front] = null;
        this.front = (this.front + 1) % this.capacity;
        this.currentSize--;
        if (this.isEmpty()) {
            this.front = -1;
            this.rear = -1;
        }
        return item;
    }

    peek() {
        if (!this.isEmpty()) {
            return this.items[this.front];
        }

        return null;
    }

    print() {
        if (this.isEmpty()) {
            console.log("Queue is empty");
        } else {
            let str = '';
            let i;
            for (i = this.front; i !== this.rear; i = (i + 1) % this.capacity) {
                str += this.items[i] + ' ';
            }
            str += this.items[i];
            console.log(str);
        }
    }
}

const cQueue = new CircularQueue(5);

console.log(cQueue.isEmpty());

cQueue.enqueue(10);
cQueue.enqueue(20);
cQueue.enqueue(30);
cQueue.enqueue(40);
cQueue.enqueue(50);

console.log(cQueue.isFull());
cQueue.print();

cQueue.dequeue();
console.log(cQueue.peek());
cQueue.print();

cQueue.enqueue(60);
cQueue.print();