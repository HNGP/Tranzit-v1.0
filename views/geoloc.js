let lat1, lon1;

let lat2 = 28.565307
let lon2 = 77.122413

const routes = {
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
      "connected": {"HUDA City Centre": 14.31,"Hauz Khas": 2.56},
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
    

let distancelist = [];
let nearestObj = [];

function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
    
    
  } else {
    document.getElementById("container2").innerHTML = "Geolocation is not supported by this browser.";
  }
}

function showPosition(position) {
  //document.getElementById("container2").innerHTML += "Latitude: " + position.coords.latitude + " <br> Longitude: " + position.coords.longitude;
  lat1 = position.coords.latitude;
  lon1 = position.coords.longitude


  for(var i in routes){
    console.log(routes[i]);
    lat2 = routes[i].details["latitude"]
    lon2 = routes[i].details["longitude"]

    console.log("long2" + lon2)

    dist = getDistance(lat1, lon1, lat2, lon2);
    distancelist.push(dist)
    nearestObj.push(i)

    
    
  }
  console.log(distancelist)
  n = Math.min(... distancelist)
  console.log(n)
  i = distancelist.indexOf(n)
  document.getElementById("container2").innerHTML += '<br> <h3> Nearest Station: ' + nearestObj[i] + ' (' + n.toFixed(2) + 'KM) </h3>' ;
  console.log(nearestObj[i])
}

  function getDistance(lat1, lon1, lat2, lon2){
   
    var R = 6371; // Radius of the earth in km
      var dLat = deg2rad(lat2-lat1);  // deg2rad below
      var dLon = deg2rad(lon2-lon1); 
      var a = 
        Math.sin(dLat/2) * Math.sin(dLat/2) +
        Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) * 
        Math.sin(dLon/2) * Math.sin(dLon/2)
        ; 
      var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
      var d = R * c; // Distance in km
      // document.getElementById("container2").innerHTML += '<br>' + d + 'km';
      return d;
  }
  
  function deg2rad(deg) {
    return deg * (Math.PI/180)
  }

  getLocation();