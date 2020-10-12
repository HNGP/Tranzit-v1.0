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
 
    let shortest = null;
    
    for (let node in distances) {
        let currentIsShortest =
            shortest === null || distances[node] < distances[shortest];
        if (currentIsShortest && !visited.includes(node)) {
            shortest = node;
        }
    }
    return shortest;
};

  let findShortestPath = (graph, startNode, endNode) => {
  let distances = {};
  distances[endNode] = "Infinity";
  distances = Object.assign(distances, graph[startNode]["connected"]);
  // track paths using a hash object
  let parents = { endNode: null };
  for (let child in graph[startNode]["connected"]) {
    parents[child] = startNode;
  }
 
    let visited = [];

    let node = shortestDistanceNode(distances, visited);
  
  
  while (node) {
    let distance = distances[node];
    let children = graph[node]["connected"]; 
        
  // for each of those child nodes:
        for (let child in children) {
          if (String(child) === String(startNode)) {
            continue;
        } else {
            let newdistance = distance + children[child];

            if (!distances[child] || distances[child] > newdistance) {
      distances[child] = newdistance;
  
      parents[child] = node;
      }
          }
        }
      
        visited.push(node);

 
        node = shortestDistanceNode(distances, visited);
      }

  let shortestPath = [endNode];
  let parent = parents[endNode];
  while (parent) {
    shortestPath.push(parent);
    parent = parents[parent];
    console.log(shortestPath)
  }
  shortestPath.reverse();
  
  let results = {
    distance: distances[endNode],
    path: shortestPath,
  };
  
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
