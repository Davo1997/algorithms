/*
  Depth First Search (DFS), used for different things related to graphs.
  In this case - used to define the number of the connected components
*/

function dfs(start, graph, passed) {
  if(typeof start !== 'string' || typeof graph !== 'object' || !Array.isArray(passed)) {
    throw new Error(`
      Please set the following params:
      - start: STRING
      - graph: OBJECT
      - [passed]: ARRAY

      example: dfs(start, graph, passed)
    `)
  }
  passed.push(start);
  for(neighbour of graph[start]) {
    if(!used.includes(neighbour)) {
      dfs(neighbour, graph, passed);
    }
  }
}

// Example use case
dfs()

let n = 0;
const used = [];
const graph = {
  A: ['B', 'C', 'D'],
  B: ['A', 'C', 'D', 'E'],
  C: ['A', 'B', 'E'],
  D: ['B', 'A'],
  E: ['C', 'D'],
  F: ['G'],
  G: ['F']
};
const verticies = Object.keys(graph);
for(vertex of verticies) {
  if(!used.includes(vertex)) {
    dfs(vertex, graph, used);
    n++;
  }
}

console.log('Numer of connected components: -> ', n); // 2