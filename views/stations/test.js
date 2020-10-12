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

module.exports = {
    graph
}