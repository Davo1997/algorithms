/*
  Dijkstra algorithm to find the minimum distance between two vertices
*/

function dijkstra(graph, start, end) {
  const queue = [start];
  const distances = { [start]: 0 };
  
  /*
    collecting a queue of vertices and going on by all verticies'
    neighbours one by one for finding the shortest path to that vertex
  */
  
  while(queue.length) {
    let currentVertex = queue.shift();
    const neighbours = Object.keys(graph[currentVertex]);
    neighbours.forEach(neighbour => {
      const value = distances[currentVertex] + graph[currentVertex][neighbour];
      if(distances[neighbour] === undefined || distances[neighbour] > value) {
        distances[neighbour] = value;
        queue.push(neighbour);
      }
    });
  }
  
  /*
    here we already collected all distances to all verticies (the "distance" array)
    We have to go backward from the ending vertex to staring vertex,
    subtracting neighbour's distance value from current vertex's distance
    value we receive a value which has to be the one that equals to the
    X -> Y edge value (the 37th line is the statement of that check)
  */
  
  let currentPoint = end;
  const path = [currentPoint];
  while(currentPoint !== start) {
    const neighbours = Object.keys(graph[currentPoint]);
    let minimumValue = Infinity;
    neighbours.forEach(neighbour => {
      const difference = distances[currentPoint] - distances[neighbour];
      if(difference === graph[currentPoint][neighbour]) {
        minimumValue = distances[neighbour];
        currentPoint = neighbour;
      }
    });
    path.push(currentPoint);
  }
  return path.reverse();
}

// Example
const graph = {
  A: { B: 2, H: 15 },
  B: { A: 2, C: 1, D: 5 },
  C: { B: 1, D: 3, F: 2, G: 1 },
  D: { B: 5, C: 3, E: 6, F: 4 },
  E: { D: 6, F: 7, I: 2 },
  F: { C: 2, D: 4, E: 7, G: 1, H: 3 },
  G: { C: 1, F: 1 },
  H: { A: 15, F: 3, I: 12 },
  I: { E: 2, H: 12 },
};

const result = dijkstra(graph, 'A', 'I');
console.log('result: -> ', result);
