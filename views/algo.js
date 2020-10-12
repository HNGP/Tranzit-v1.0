const graph = {
  "Adarsh Nagar": {
      "connected": {"AIIMS": 16.8},
      "details": {
        "line": ["Yellow Line"],
        "layout": "Underground",
        "longitude": 77.17046,
        "latitude": 28.71642
      }
    },
    "AIIMS" :{
      "connected": {"Adarsh Nagar": 16.8, "Arjan Garh": 12.63},
      "details": {
        "line": ["Yellow Line"],
        "layout": "Underground",
        "longitude": 77.20771,
        "latitude": 28.56892
      }
    },
    "Arjan Garh":{
      "connected": {"AIIMS": 12.63, "Azadpur": 25.71},
      "details": {
        "line": ["Yellow Line"],
        "layout": "Elevated",
        "longitude": 77.12583,
        "latitude": 28.48076
      }
    },
    "Azadpur":{
      "connected": {"Arjan Garh": 25.71},
      "details": {
        "line": ["Yellow Line"],
        "layout": "Underground",
        "longitude": 77.18053,
        "latitude": 28.70696
      }
    }
  
}
const problem = {
  Gurgaon: {Saket: 18},
  Saket: {Gurgaon: 18, HauzKhas: 5},
  HauzKhas: {Saket: 5, INA: 8, IITD: 7, BotanicalGarden: 17},
  INA: {HauzKhas: 8, RajivChowk: 9},
  IITD: {HauzKhas: 7, Munirka: 1},
  BotanicalGarden: {HauzKhas: 17, RajivChowk: 18, Noida: 12},
  Noida: {BotanicalGarden: 12},
  RajivChowk: {BotanicalGarden: 18, Dwarka: 24, INA: 9},
  Munirka: {IITD: 1, Airport: 9},
  Airport: {Munirka: 9, Janakpuri: 11},
  Janakpuri: {Airport: 11, Dwarka: 12},
  Dwarka: {Janakpuri: 12, RajivChowk: 24}
}

//   const problem = {
//     SamaypurBadli:
//         RohiniSector18:
//         OuterRingRoad:
//         HaiderpurBadliMor:
//         IndianRailways:
//         Jahangirpuri:
//         AdarshNagar
//         RingRoad
//         Azadpur
//         ModelTown
//   };
  
  let shortestDistanceNode = (distances, visited) => {
  // create a default value for shortest
    let shortest = null;
    
      // for each node in the distances object
    for (let node in distances) {
        // if no node has been assigned to shortest yet
          // or if the current node's distance is smaller than the current shortest
        let currentIsShortest =
            shortest === null || distances[node] < distances[shortest];
            
          // and if the current node is in the unvisited set
        if (currentIsShortest && !visited.includes(node)) {
            // update shortest to be the current node
            shortest = node;
        }
    }
    return shortest;
};
  
  // function that returns the minimum cost and path to reach Dwarka
  let findShortestPath = (graph, startNode, endNode) => {
  
  // track distances from the start node using a hash object
    let distances = {};
  distances[endNode] = "Infinity";
  distances = Object.assign(distances, graph[startNode]["connected"]);
  // track paths using a hash object
  let parents = { endNode: null };
  for (let child in graph[startNode]["connected"]) {
    parents[child] = startNode;
  }

  console.log(parents)
  console.log(distances)
    
  // collect visited nodes
    let visited = [];
  // find the nearest node
    let node = shortestDistanceNode(distances, visited);
  
  // for that node:
  while (node) {
  // find its distance from the start node & its child nodes
    let distance = distances[node];
    let children = graph[node]["connected"]; 
        
  // for each of those child nodes:
        for (let child in children) {
    
    // make sure each child node is not the start node
          if (String(child) === String(startNode)) {
            continue;
        } else {
            // save the distance from the start node to the child node
            let newdistance = distance + children[child];
  // if there's no recorded distance from the start node to the child node in the distances object
  // or if the recorded distance is shorter than the previously stored distance from the start node to the child node
            if (!distances[child] || distances[child] > newdistance) {
  // save the distance to the object
      distances[child] = newdistance;
  // record the path
      parents[child] = node;
      }
          }
        }
        // move the current node to the visited set
        visited.push(node);
  // move to the nearest neighbor node
        node = shortestDistanceNode(distances, visited);
      }
    
  // using the stored paths from start node to end node
  // record the shortest path
  let shortestPath = [endNode];
  let parent = parents[endNode];
  while (parent) {
    shortestPath.push(parent);
    parent = parents[parent];
  }
  shortestPath.reverse();
    
  //this is the shortest path
  let results = {
    distance: distances[endNode],
    path: shortestPath,
  };
  // return the shortest path & the end node's distance from the start node
    return results;
};

let getRoute = () => {
    let source = document.getElementById('src').value;
    let destination = document.getElementById('dest').value;
    let result = findShortestPath(graph, source, destination);
    document.getElementById("dist").innerHTML = "";
    document.getElementById("route").innerHTML = "";

    document.getElementById("dist").textContent += "Distance: "+result.distance+"km";
    var count = result.path.length;
  for (var x in result.path) {
    document.getElementById("route").innerHTML += result.path[x];
      if(count>1)
      {
        document.getElementById("route").innerHTML += '<li>';
      }
      count = count - 1;
  }
}
