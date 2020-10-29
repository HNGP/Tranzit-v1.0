const map = {
  "Arjan Garh": {
    "connected": {"HUDA City Centre": 5.72, "Saket": 8.61},
    "details": {
      "line": ["Yellow Line"],
      "layout": "Elevated",
      "longitude": 77.12583,
      "latitude": 28.48076
    }
  },
  "Azadpur":{
    "connected": {"New Delhi": 8.15, "Jahangirpuri": 2.73},
    "details": {
      "line": ["Yellow Line"],
      "layout": "Underground",
      "longitude": 77.18053,
      "latitude": 28.70696
    }
  },
  "Botanical Garden": {
    "connected": {"Hauz Khas": 12.67, "Rajiv Chowk": 13.66, "Noida City Centre": 2.44},
    "details": {
      "line": ["Blue Line", "Magenta Line"],
      "layout": "Elevated",
      "longitude": 77.33420,
      "latitude": 28.56409
    }
  },
  "Central Secretariat": {
    "connected": {"INA": 4.4, "Rajiv Chowk": 2.1},
    "details": {
      "line": ["Yellow Line"],
      "layout": "Underground",
      "longitude": 77.21191,
      "latitude": 28.61474
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
  "Hauz Khas": {
    "connected": {"Saket": 2.58, "INA": 3.56, "IITD": 1.33, "Botanical Garden": 12.67},
    "details": {
    "line": ["Yellow Line","Magenta Line"],
    "layout": "Underground",
    "longitude": 77.20667,
    "latitude": 28.54335
    }
  },
  "HUDA City Centre": {
    "connected": {"Arjan Garh": 5.72},
    "details": {
      "line": ["Yellow Line"],
      "layout": "Elevated",
      "longitude": 77.07268,
      "latitude": 28.45927
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
  "INA": {
    "connected": {"Hauz Khas": 3.56, "Central Secretariat": 4.4},
    "details": {
      "line": ["Yellow Line"],
      "layout": "Underground",
      "longitude": 77.20935,
      "latitude": 28.57526
    }
  },
  "Jahangirpuri": {
    "connected": {"Azadpur": 2.73, "Samaypur Badli": 3.35},
    "details": {
      "line": ["Yellow Line"],
      "layout": "Underground",
      "longitude": 77.16267,
      "latitude": 28.72592
    }
  },
  "Janakpuri West": {
    "connected" : {"Terminal 1 IGI Airport": 8.11, "Dwarka": 5.65},
    "details": {
      "line": ["Blue Line"],
      "layout": "Elevated",
      "longitude": 77.07767,
      "latitude": 28.62943
    }
  },
  "Munirka": {
    "connected": {"IITD": 2.28, "Terminal 1 IGI Airport": 8.53},
    "details": {
      "line": ["Magenta Line"],
      "layout": "Underground",
      "longitude": 77.174012,
      "latitude": 28.557945
    }
  },
  "New Delhi": {
    "connected": {"Rajiv Chowk": 1.18, "Azadpur": 8.15},
    "details": {
      "line": ["Yellow Line"],
      "layout": "Underground",
      "longitude": 77.22144,
      "latitude": 28.64307
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
    "connected": {"Central Secretariat": 2.1,"Botanical Garden": 13.66, "Dwarka": 19.25, "New Delhi": 1.18},
    "details": {
      "line": ["Yellow Line", "Blue Line"],
      "layout": "Underground",
      "longitude": 77.21826,
      "latitude": 28.63282
    }
  },
  "Saket": {
    "connected": {"Arjan Garh": 8.61, "Hauz Khas": 2.58},
    "details": {
    "line": ["Yellow Line"],
    "layout": "Underground",
    "longitude": 77.20138,
    "latitude": 28.52060
    }
  },
  "Samaypur Badli": {
    "connected": {"Jahangirpuri": 3.35},
    "details": {
      "line": ["Yellow Line"],
      "layout": "Elevated",
      "longitude": 77.137530,
      "latitude": 28.746521
    }
  },
  "Terminal 1 IGI Airport": {
    "connected": {"Munirka": 8.53, "Janakpuri West": 8.11},
    "details": {
      "line": ["Magenta Line"],
      "layout": "Underground",
      "longitude": 77.08669,
      "latitude": 28.55693
    }
  },
}

module.exports = {
  map : map
}