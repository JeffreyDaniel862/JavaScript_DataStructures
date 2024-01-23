class Graph {
    constructor() {
        this.adjacencyList = {};
    }

    addVertex(vertex) {
        if(!this.adjacencyList[vertex]){
            this.adjacencyList[vertex] = new Set();
        }
    }

    addEdge(vertex1, vertex2){
        if(!this.adjacencyList[vertex1]){
            this.addVertex(vertex1)
        }
        if(!this.adjacencyList[vertex2]){
            this.addVertex(vertex2)
        }
        this.adjacencyList[vertex1].add(vertex2);
        this.adjacencyList[vertex2].add(vertex1);
    }

    removeEdge(vertex1, vertex2){
        this.adjacencyList[vertex1].delete(vertex2);
        this.adjacencyList[vertex2].delete(vertex1);
    }

    removeVertex(vertex){
        if(!this.adjacencyList[vertex]){
            return
        }
        for (const adjacencyList of this.adjacencyList[vertex]) {
            this.removeEdge(vertex, adjacencyList);
        }
        delete this.adjacencyList[vertex];
    }

    display(){
        for (const vertex in this.adjacencyList) {
            if (Object.hasOwnProperty.call(this.adjacencyList, vertex)) {
                const element = this.adjacencyList[vertex];
                console.log(`${vertex} --> ${[...element]}`);
            }
        }
    }

    hasEdge(vertex1, vertex2){
        return (this.adjacencyList[vertex1].has(vertex2) && this.adjacencyList[vertex2].has(vertex1));
    }
}

const graph = new Graph();

graph.addVertex('A');
graph.addVertex('B');
graph.addVertex('C');

graph.addEdge('A', 'B');
graph.addEdge('C', 'B');

console.log(graph.hasEdge('A', 'C'));
graph.display();
graph.removeVertex('B');
graph.display();