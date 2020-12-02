const map = {
    "Chennai Airport Metro": {
        "connected": {"Meenambakkam Metro": 0},
        "details": {
          "line": ["Blue Line"],
          "layout": "Elevated",
          "longitude": 80.16442407671289, 
          "latitude": 12.981912782634431
        }
      },
    "Meenambakkam Metro": {
        "connected": {"Chennai Airport Metro": 0, "Nanganallur Road": 0},
        "details": {
          "line": ["Blue Line"],
          "layout": "Elevated",
          "longitude": 80.17641646931484,
          "latitude": 12.988579383389938
        }
      },
    "Nanganallur Road": {
        "connected": {"Meenambakkam Metro": 0, "Alandur": 0},
        "details": {
          "line": ["Blue Line"],
          "layout": "Elevated",
          "longitude": 80.19410204602774,
          "latitude": 13.001272190377758
        }
      },
      "Alandur": {
        "connected": {"Nanganallur Road": 0, "Guindy": 0},
        "details": {
          "line": ["Blue Line"],
          "layout": "Elevated",
          "longitude": 80.20163316137032,
          "latitude": 13.00592502135824
        }
      },
      "Guindy": {
        "connected": {"Alandur": 0, "Little Mount": 0},
        "details": {
          "line": ["Blue Line"],
          "layout": "Elevated",
          "longitude": 80.21311216931487,
          "latitude": 13.009981948523826
        }
      },
      "Little Mount": {
        "connected": {"Guindy": 0, "Saidapet Metro": 0},
        "details": {
          "line": ["Blue Line"],
          "layout": "Elevated",
          "longitude": 80.22412294602775,
          "latitude": 13.015717808656373
        }
      },
      "Saidapet Metro": {
        "connected": {"Little Mount": 0, "Nandanam": 0},
        "details": {
          "line": ["Blue Line"],
          "layout": "Underground",
          "longitude": 80.22412294602775,
          "latitude": 13.015717808656373
        }
      },
      "Nandanam": {
        "connected": {"Saidapet Metro": 0, "Teynampet": 0},
        "details": {
          "line": ["Blue Line"],
          "layout": "Underground",
          "longitude": 80.240694,
          "latitude": 13.031561
        }
      },
      "Teynampet": {
        "connected": {"Nandanam": 0, "AG-DMS": 0},
        "details": {
          "line": ["Blue Line"],
          "layout": "Underground",
          "longitude": 80.24698718465743,
          "latitude": 13.039248385316649
        }
      },
      "AG-DMS": {
        "connected": {"Teynampet": 0, "Thousand Light": 0},
        "details": {
          "line": ["Blue Line"],
          "layout": "Underground",
          "longitude": 80.24698718465743,
          "latitude": 13.039248385316649
        }
      },
      "Thousand Light": {
        "connected": {"AG-DMS": 0, "LIC": 0},
        "details": {
          "line": ["Blue Line"],
          "layout": "Underground",
          "longitude": 80.25877489205547,
          "latitude": 13.059609863970385
        }
      },
      "LIC": {
        "connected": {"Thousand Light": 0, "LIC": 0},
        "details": {
          "line": ["Blue Line"],
          "layout": "Underground",
          "longitude": 80.26626347671288,
          "latitude": 13.065651919670827
        }
      },

    
}