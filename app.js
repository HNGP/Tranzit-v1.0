var express = require("express");
var path = require('path');
var bodyParser = require("body-parser")
var map = require('./stations/delhi');
var mapchennai = require('./stations/chennai');
var app = express();


// app.set("view engine", "ejs");
app.use(express.static(__dirname + '/views'));
app.set('views', path.join(__dirname, 'views'));

app.engine('html', require('ejs').renderFile);
app.set('view engine', 'ejs');


app.get("/", function(req,res){
    let stations = Object.keys(map.map);
    res.render("index",{stations: stations});
});

app.get("/chennai", function(req,res){
  let stations = Object.keys(mapchennai.mapchennai);
  res.render("chennai",{stations: stations});
});

app.get("/delhi", function(req,res){
  let stations = Object.keys(map.map);
  res.render("delhi",{stations: stations});
});


app.get("/map", function(req,res){
  res.render("map");
});

app.get("/about", function(req,res){
  res.render("about");
});


app.get("/calroute", function(req,res){
  var source = req.query.src;
  var destination = req.query.dest;

  function getDistance(lat1, lon1, lat2, lon2){
   
    var R = 6371; // Radius of the earth in km
    var dLat = deg2rad(lat2-lat1);  // deg2rad below
    var dLon = deg2rad(lon2-lon1); 
    var a = 
       Math.sin(dLat/2) * Math.sin(dLat/2) +
       Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) * 
       Math.sin(dLon/2) * Math.sin(dLon/2); 
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
    var d = R * c; // Distance in km
    // document.getElementById("container2").innerHTML += '<br>' + d + 'km';
    return d;
  }
 
  function deg2rad(deg) {
    return deg * (Math.PI/180)
  }

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
    let a = {};
    for(i in problem[startNode]["connected"])
    {
        a[i] = getDistance(problem[startNode]["details"]["latitude"], problem[startNode]["details"]["longitude"], problem[i]["details"]["latitude"], problem[i]["details"]["longitude"]);
    }
    
    distances = Object.assign(distances, a);
    // track paths using a hash object
    let parents = { endNode: null };
    for (let child in problem[startNode]["connected"]) {
      parents[child] = startNode;
    }
   
      let visited = [];
  
    let node = shortestDistanceNode(distances, visited);
    
    
    while (node) {
      let distance = distances[node];
      b = {};
      for(i in problem[node]["connected"])
      {
          b[i] = getDistance(problem[node]["details"]["latitude"], problem[node]["details"]["longitude"], problem[i]["details"]["latitude"], problem[i]["details"]["longitude"]);
      }
      let children = b;
          
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
  let stations = Object.keys(map.map);
  res.render("resultPage", {data: result,stations: stations});
  

})

app.get("/calroutec", function (req, res) {
  var source = req.query.src;
  var destination = req.query.dest;

  function getDistance(lat1, lon1, lat2, lon2){
   
    var R = 6371; // Radius of the earth in km
    var dLat = deg2rad(lat2-lat1);  // deg2rad below
    var dLon = deg2rad(lon2-lon1); 
    var a = 
       Math.sin(dLat/2) * Math.sin(dLat/2) +
       Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) * 
       Math.sin(dLon/2) * Math.sin(dLon/2); 
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
    var d = R * c; // Distance in km
    // document.getElementById("container2").innerHTML += '<br>' + d + 'km';
    return d;
  }
 
  function deg2rad(deg) {
    return deg * (Math.PI/180)
  }

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
    let a = {};
    for(i in problem[startNode]["connected"])
    {
        a[i] = getDistance(problem[startNode]["details"]["latitude"], problem[startNode]["details"]["longitude"], problem[i]["details"]["latitude"], problem[i]["details"]["longitude"]);
    }
    
    distances = Object.assign(distances, a);
    // track paths using a hash object
    let parents = { endNode: null };
    for (let child in problem[startNode]["connected"]) {
      parents[child] = startNode;
    }
   
      let visited = [];
  
    let node = shortestDistanceNode(distances, visited);
    
    
    while (node) {
      let distance = distances[node];
      b = {};
      for(i in problem[node]["connected"])
      {
          b[i] = getDistance(problem[node]["details"]["latitude"], problem[node]["details"]["longitude"], problem[i]["details"]["latitude"], problem[i]["details"]["longitude"]);
      }
      let children = b;
          
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
      line.push(mapchennai.mapchennai[shortestPath[i]]["details"]["line"])
    }

    console.log(line)
    
    
      
    let results = {
      distance: distances[endNode],
      path: shortestPath,
      lines: line
    };
      
      return results;
  };

  let result = findShortestPath(mapchennai.mapchennai, source, destination);
  console.log(JSON.stringify(result))
  //lund = JSON.parse(result)
  //res.send(result)
  let stations = Object.keys(mapchennai.mapchennai);
  res.render("resultpagec", {data: result,stations: stations});
  

})


app.get("/api", function(req,res){
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
  lund = JSON.stringify(result)
  res.send(lund)
  let stations = Object.keys(map.map);
 
  

})

let port = process.env.PORT;
if (port == null || port == "") {
  port = 8000;
}

app.listen(port, function(req, res){
    console.log("Server has started!")
});
