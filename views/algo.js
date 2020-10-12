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
  "HUDA City Centre": {
    "connected": {"Saket": 14.31},
    "details": {
      "line": ["Yellow Line"],
      "layout": "Elevated",
      "longitude": 77.07268,
      "latitude": 28.45927
    }
  },
  "Saket": { 
    "connected": {"Saket": 14.31,"Hauz Khas": 2.56},
    "details": {
    "line": ["Yellow Line"],
    "layout": "Underground",
    "longitude": 77.20138,
    "latitude": 28.52060
    }
  },
  "Hauz Khas": { 
    "connected": {"Saket": 2.56, "INA": 3.56, "IITD": 1.33, "Botanical Garden": 12.67},
    "details": {
    "line": ["Yellow Line","Magenta Line"],
    "layout": "Underground",
    "longitude": 77.20667,
    "latitude": 28.54335
    }
  },
  "INA": {
    "connected": {"Hauz Khas": 3.56, "Rajiv Chowk": 6.46},
    "details": {
      "line": ["Yellow Line"],
      "layout": "Underground",
      "longitude": 77.20935,
      "latitude": 28.57526
    }
  },
  "IITD": {
    "connected": {"Hauz Khas": 1.33, "Munirka": 2.28},
    "details": {
      "line": ["Magenta Line"],
      "layout": "Underground",
      "longitude": 77.193816,
      "latitude": 28.547170
    }
  },
  "Botanical Garden": {
    "connected": {"Hauz Khas": 12.67, "Rajiv Chowk": 13.66, "Noida City Centre": 2.44},
    "details": {
      "line": ["Blue Line"],
      "layout": "Elevated",
      "longitude": 77.33420,
      "latitude": 28.56409
    }
  },
  "Noida City Centre": { 
    "connected": {"Botanical Garden": 2.44},
    "details": {
      "line": ["Blue Line"],
      "layout": "Elevated",
      "longitude": 77.35608,
      "latitude": 28.57466
    }
  },
  "Rajiv Chowk": {
    "connected": {"Botanical Garden": 13.66, "Dwarka": 19.25, "INA": 6.46},
    "details": {
      "line": ["Yellow Line", "Blue Line"],
      "layout": "Underground",
      "longitude": 77.21826,
      "latitude": 28.63282
    }
  },
  "Munirka": { 
    "connected": {"IITD": 2.28, "Indira Gandhi International Airport": 8.53},
    "details": {
      "line": ["Magenta Line"],
      "layout": "Underground",
      "longitude": 77.174012,
      "latitude": 28.557945
    }
  },
  "Indira Gandhi International Airport": {
    "connected": {"Munirka": 8.53, "Janakpuri West": 8.11},
    "details": {
      "line": ["Airport Express","Mangenta Line","Blue Line"],
      "layout": "Underground",
      "longitude": 77.08669,
      "latitude": 28.55693
    }
  },
  "Janakpuri West": {
    "connected" : {"Indira Gandhi International Airport": 8.11, "Dwarka": 5.65},
    "details": {
      "line": ["Blue Line"],
      "layout": "Elevated",
      "longitude": 77.07767,
      "latitude": 28.62943
    }
  },
  "Dwarka": {
    "connected": {"Janakpuri West": 5.65, "Rajiv Chowk": 19.25},
    "details": {
      "line": ["Blue Line"],
      "layout": "Elevated",
      "longitude": 77.02197,
      "latitude": 28.61564
    }
  },
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

  let findShortestPath = (problem, startNode, endNode) => {
  let distances = {};
  distances[endNode] = "Infinity";
  distances = Object.assign(distances, problem[startNode]["connected"]);
  // track paths using a hash object
  let parents = { endNode: null };
  for (let child in problem[startNode]["connected"]) {
    parents[child] = startNode;
  }
 
    let visited = [];

    let node = shortestDistanceNode(distances, visited);
  
  
  while (node) {
    let distance = distances[node];
    let children = problem[node]["connected"]; 
        
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
    let result = findShortestPath(problem, source, destination);
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
