const map = {
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
      "line": ["Blue Line", "Magenta Line"],
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
      "line": ["Mangenta Line","Blue Line"],
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
module.exports = {
  map : map
}