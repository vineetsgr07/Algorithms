/**
 * Route Between Nodes: Given a directed graph, design an algorithm to find out whether 
 * there is a route between two nodes
 */

class Graph {

    constructor() {
        this.directedGraph = new Map();
        this.count = 0;
    }

    addVertex = (v) => this.directedGraph.set(v, [])

    addEdge = (v, w) => this.directedGraph.get(v).push(w)

    printGraph = () => {

        let vertices = this.directedGraph.keys()

        for (let i of vertices) {

            let getValues = this.directedGraph.get(i), connections = ''
            for (let j of getValues) connections += `${j} `;
            console.log(`${i} -> ${connections}`)

        }
    }

    dfs = (startingNode) => {

        let visited = new Array(9).fill(false)
        this.dfsUntil(startingNode, visited)
        return
    }

    dfsUntil = (vert, visited) => {
        visited[vert] = true;
        console.log(vert);

        var get_neighbors = this.directedGraph.get(vert);

        for (var i in get_neighbors) {
            var get_elem = get_neighbors[i];
            if (!visited[get_elem]) {
                this.dfsUntil(get_elem, visited);
            }
        }

    }

}

let directedGraph = new Graph()
directedGraph.addVertex(1)
directedGraph.addVertex(2)
directedGraph.addVertex(3)
directedGraph.addVertex(4)
directedGraph.addVertex(5)
directedGraph.addVertex(6)
directedGraph.addVertex(7)
directedGraph.addVertex(8)
directedGraph.addVertex(9)

directedGraph.addEdge(1, 2)
directedGraph.addEdge(2, 3)
directedGraph.addEdge(3, 4)
directedGraph.addEdge(3, 8)
directedGraph.addEdge(4, 9)
directedGraph.addEdge(4, 5)
directedGraph.addEdge(5, 6)
directedGraph.addEdge(6, 7)
directedGraph.addEdge(7, 8)
directedGraph.addEdge(7, 4)
directedGraph.addEdge(9, 1)

directedGraph.dfs(1)

