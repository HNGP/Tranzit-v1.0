var express = require("express");
var path = require('path');
var bodyParser = require("body-parser")
var map = require('./stations/test');
var app = express();


// app.set("view engine", "ejs");
app.use(express.static(__dirname + '/views'));
app.set('views', path.join(__dirname, 'views'));

app.engine('html', require('ejs').renderFile);
app.set('view engine', 'ejs');


app.get("/", function(req,res){
    res.render("index");
});

app.get("/map", function(req,res){
  res.render("map");
});

app.get("/calroute", function(req,res){
  var source = req.query.src;
  var destination = req.query.dest;

  let shortestDistanceNode = (distances, visited) => {
    let shortest = null;
    
    for (let node in distances) {
      let currentIsShortest = shortest === null || distances[node] < distances[shortest];
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
      console.log(parent);
      parent = parents[parent];
      
    }
    shortestPath.reverse();
    
    let line = [];

    for(var i in shortestPath){
      line.push(map.map[shortestPath[i]]["details"]["line"])
    }

    console.log(line)
    
    
      
    let results = {
      distance: distances[endNode],
      path: shortestPath,
      lines: line
    };
      
      return results;
  };

  let result = findShortestPath(map.map, source, destination);
  console.log(JSON.stringify(result))
  //lund = JSON.parse(result)
  //res.send(result)
  res.render("resultPage", {data: result});
  

})


let port = process.env.PORT;
if (port == null || port == "") {
  port = 8000;
}

app.listen(port, function(req, res){
    console.log("Server has started!")
});
