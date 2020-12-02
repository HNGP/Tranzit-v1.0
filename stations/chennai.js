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
        "connected": {"Nanganallur Road": 0, "Guindy": 0, "St Thomas Mount": 0},
        "details": {
          "line": ["Blue Line", "Green Line"],
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
          "longitude": 80.22833794602774,
          "latitude": 13.02468136092623 
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
          "longitude": 80.24715884602774,
          "latitude": 13.03870487027928
        }
      },
      "AG-DMS": {
        "connected": {"Teynampet": 0, "Thousand Light": 0},
        "details": {
          "line": ["Blue Line"],
          "layout": "Underground",
          "longitude": 80.24824747671288,
          "latitude": 13.04530961747378
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
        "connected": {"Thousand Light": 0, "Government Estate": 0},
        "details": {
          "line": ["Blue Line"],
          "layout": "Underground",
          "longitude": 80.26626347671288,
          "latitude": 13.065651919670827
        }
      },
      "Government Estate": {
        "connected": {"LIC": 0, "Central Metro": 0},
        "details": {
          "line": ["Blue Line"],
          "layout": "Underground",
          "longitude": 80.27225074191381,
          "latitude": 13.071108073984798
        }
      },
      "Central Metro": {
        "connected": {"Government Estate": 0, "High Court": 0, "Egmore Metro": 0},
        "details": {
          "line": ["Blue Line", "Green Line"],
          "layout": "Underground",
          "longitude": 80.27320800739804,
          "latitude":  13.082598243808862
        }
      },
      "High Court": {
        "connected": {"Central Metro": 0, "Mannadi": 0},
        "details": {
          "line": ["Blue Line"],
          "layout": "Underground",
          "longitude": 80.28463506191679,
          "latitude":  13.088752117779734
        }
      },
      "Mannadi": {
        "connected": {"High Court": 0, "Washermanpet": 0},
        "details": {
          "line": ["Blue Line"],
          "layout": "Underground",
          "longitude": 80.28624613068516,
          "latitude":  13.096336478559556
        }
      },
      "Washermanpet": {
        "connected": {"Mannadi": 0},
        "details": {
          "line": ["Blue Line"],
          "layout": "Underground",
          "longitude": 80.28050910903748,
          "latitude":  13.10847002362935
        }
      },
      "St Thomas Mount": {
        "connected": {"Alandur": 0},
        "details": {
          "line": ["Green Line"],
          "layout": "Elevated",
          "longitude": 80.19877556137033,
          "latitude":  12.996134387880359
        }
      }, 
      "Ekkatutthangal": {
        "connected": {"Alandur": 0, "Ashok Nagar": 0},
        "details": {
          "line": ["Green Line"],
          "layout": "Elevated",
          "longitude": 80.20528661534259,
          "latitude":  13.017602013658701
        }
      },
      "Ashok Nagar": {
        "connected": {"Ekkatutthangal": 0, "Vadapalani": 0},
        "details": {
          "line": ["Green Line"],
          "layout": "Elevated",
          "longitude": 80.21117791534257,
          "latitude":  13.036500015021016
        }
      },
      "Vadapalani": {
        "connected": {"Ashok Nagar": 0, "Arumbakkam": 0},
        "details": {
          "line": ["Green Line"],
          "layout": "Elevated",
          "longitude": 80.21202938465743,
          "latitude":  13.051695955937832
        }
      }, 
      "Arumbakkam": {
        "connected": {"Vadapalani": 0, "CMBT": 0},
        "details": {
          "line": ["Green Line"],
          "layout": "Elevated",
          "longitude": 80.21147145397228,
          "latitude":  13.063305745202708
        }
      },
      "CMBT": {
        "connected": {"Arumbakkam": 0, "Koyambedu": 0},
        "details": {
          "line": ["Green Line"],
          "layout": "Elevated",
          "longitude": 80.20399974602773,
          "latitude":  13.069521786543213
        }
      },
      "Koyambedu": {
        "connected": {"CMBT": 0, "Thirumangalam": 0},
        "details": {
          "line": ["Green Line"],
          "layout": "Elevated",
          "longitude": 80.191584,
          "latitude":  13.073249
        }
      },
      "Thirumangalam": {
        "connected": {"Koyambedu": 0, "Anna Nagar Tower": 0},
        "details": {
          "line": ["Green Line"],
          "layout": "Underground",
          "longitude": 80.2015310846574,
          "latitude":  13.08626582228523
        }
      },
      "Anna Nagar Tower": {
        "connected": {"Thirumangalam": 0, "Anna Nagar East": 0},
        "details": {
          "line": ["Green Line"],
          "layout": "Underground",
          "longitude": 80.20868178465741,
          "latitude":  13.086020224343617
        }
      },
      "Anna Nagar East": {
        "connected": {"Anna Nagar Tower": 0, "Shenoy Nagar": 0},
        "details": {
          "line": ["Green Line"],
          "layout": "Underground",
          "longitude": 80.21874283068514,
          "latitude":  13.085717122319258
        }
      },
      "Shenoy Nagar": {
        "connected": {"Anna Nagar East": 0, "Kilpauk": 0},
        "details": {
          "line": ["Green Line"],
          "layout": "Underground",
          "longitude": 80.22526324602774,
          "latitude":  13.079702948989661
        }
      },
      "Kilpauk": {
        "connected": {"Shenoy Nagar": 0, "Nehru Park": 0},
        "details": {
          "line": ["Green Line"],
          "layout": "Underground",
          "longitude": 80.24273335397226,
          "latitude":  13.078346545139311
        }
      },
      "Nehru Park": {
        "connected": {"Kilpauk": 0, "Egmore Metro": 0},
        "details": {
          "line": ["Green Line"],
          "layout": "Underground",
          "longitude": 80.251101845737,
          "latitude":  13.079558805581115
        }
      },
      "Egmore Metro": {
        "connected": {"Nehru Park": 0, "Central Metro": 0},
        "details": {
          "line": ["Green Line"],
          "layout": "Underground",
          "longitude": 80.26119233068515,
          "latitude":  13.08010234942698
        }
      },


}