class Node {
    constructor(value) {
        this.left = null;
        this.value = value;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    insert(value) {
        const node = new Node(value);
        if (this.isEmpty()) {
            this.root = node;
        } else {
            this.#insertNode(this.root, node);
        }
    }

    #insertNode(root, node) {
        if (node.value < root.value) {
            if (root.left === null) {
                root.left = node;
            } else {
                this.#insertNode(root.left, node);
            }
        } else {
            if (root.right === null) {
                root.right = node;
            } else {
                this.#insertNode(root.right, node);
            }
        }
    }

    search(value) {
        return this.#searchNode(this.root, value);
    }

    #searchNode(root, value) {
        if (!root) {
            return false;
        } else {
            if (root.value === value) {
                return true;
            } else if (value < root.value) {
                return this.#searchNode(root.left, value);
            } else {
                return this.#searchNode(root.right, value);
            }
        }
    }

    preOrder() {
        console.log("PreOrder Traversal");
        return this.#preOrderTraversal(this.root);
    }

    #preOrderTraversal(root) {
        if (root) {
            console.log(root.value);
            this.#preOrderTraversal(root.left);
            this.#preOrderTraversal(root.right);
        }
    }

    inOrder() {
        console.log("InOrder Traversal");
        return this.#inOrderTraversal(this.root);
    }

    #inOrderTraversal(root) {
        if (root) {
            this.#inOrderTraversal(root.left);
            console.log(root.value);
            this.#inOrderTraversal(root.right);
        }
    }

    postOrder() {
        console.log("PostOrder Traversal");
        return this.#postOrderTraversal(this.root);
    }

    #postOrderTraversal(root) {
        if (root) {
            this.#postOrderTraversal(root.left);
            this.#postOrderTraversal(root.right);
            console.log(root.value);
        }
    }

    breathFirstSearch() {
        console.log("Breadth First Search");
        const queue = [];
        queue.push(this.root);
        while (queue.length) {
            let currentElement = queue.shift();
            console.log(currentElement.value);
            if (currentElement.left) queue.push(currentElement.left);
            if (currentElement.right) queue.push(currentElement.right);
        }
    }

    Max() {
        return this.#max(this.root);
    }

    #max(root){
        if(root.right){
            this.#max(root.right);
        } else {
            console.log(root.value);
        }
    }

    Min(){
        return this.#min(this.root);
    }

    #min(root){
        if(root.left){
            this.#min(root.left);
        } else {
            console.log(root.value);
        }
    }

    isEmpty() {
        return this.root === null;
    }
}

const BST = new BinarySearchTree();
console.log('Tree is Empty ? ', BST.isEmpty());
BST.insert(10);
BST.insert(5);
BST.insert(15);
BST.insert(3);
BST.insert(7);
console.log(BST.search(5));
BST.preOrder();
BST.inOrder();
BST.postOrder();
BST.breathFirstSearch();
BST.Max();
BST.Min();