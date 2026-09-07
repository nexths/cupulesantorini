var APP_DATA = {
  "scenes": [
    {
      "id": "0-area-externa-piscina",
      "name": "Area Externa Piscina",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1767.5,
      "initialViewParameters": {
        "yaw": -0.2613249942145206,
        "pitch": 0.024436838747973866,
        "fov": 1.3365071038314758
      },
      "linkHotspots": [
        {
          "yaw": 0.2550814779287496,
          "pitch": 0.24381471316415038,
          "rotation": 0,
          "target": "1-espaco-gourmet"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-espaco-gourmet",
      "name": "Espaco Gourmet",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1767.5,
      "initialViewParameters": {
        "yaw": -2.777301655198512,
        "pitch": 0.07218534573276081,
        "fov": 1.3365071038314758
      },
      "linkHotspots": [
        {
          "yaw": 1.2927188312915163,
          "pitch": 0.5381955745407154,
          "rotation": 0,
          "target": "2-inerior-cupula-lateral"
        },
        {
          "yaw": -2.283227230907187,
          "pitch": 0.33770013350983774,
          "rotation": 0,
          "target": "5-redario-jardim"
        },
        {
          "yaw": 0.7080209539864306,
          "pitch": 0.5552894804270387,
          "rotation": 0,
          "target": "0-area-externa-piscina",
          "targetViewParameters": {
          "yaw":-2.5450738983350885,
          "pitch": 0,
          "fov": 1.3365071038314758
        }
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-inerior-cupula-lateral",
      "name": "Inerior Cupula Lateral",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1767.5,
      "initialViewParameters": {
        "yaw": 0.48344933072181107,
        "pitch": 0.05621478734161656,
        "fov": 1.3365071038314758
      },
      "linkHotspots": [
        {
          "yaw": -0.17147570611655993,
          "pitch": 0.5496782488751357,
          "rotation": 0,
          "target": "3-iterior-cupula-cama-"
        },
        {
          "yaw": 2.8046987349277455,
          "pitch": 0.4824099935518458,
          "rotation": 0,
          "target": "4-bathroom",
          "targetViewParameters": {
          "yaw": -3.0405342443220906,
          "pitch": 0,
          "fov": 1.3365071038314758
        }
        },
        {
          "yaw": -2.430924032876879,
          "pitch": 0.4117987763634865,
          "rotation": 0,
          "target": "1-espaco-gourmet",
          "targetViewParameters": {
          "yaw":-1.964746341131253,
          "pitch": 0,
          "fov": 1.3365071038314758
        }
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-iterior-cupula-cama-",
      "name": "Iterior Cupula Cama ",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1767.5,
      "initialViewParameters": {
        "yaw": -2.0583061182823528,
        "pitch": -0.01976516071075629,
        "fov": 1.3365071038314758
      },
      "linkHotspots": [
        {
          "yaw": -0.6937443014025657,
          "pitch": 0.42970027404678035,
          "rotation": 7.0685834705770345,
          "target": "4-bathroom"
        },
        {
          "yaw": 0.9466142440651595,
          "pitch": 0.5707000372984243,
          "rotation": 0,
          "target": "2-inerior-cupula-lateral",
          "targetViewParameters": {
          "yaw":-2.603357293357881,
          "pitch": 0,
          "fov": 1.3365071038314758
        }
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-bathroom",
      "name": "Bathroom",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1767.5,
      "initialViewParameters": {
        "yaw": 0.21303753226096944,
        "pitch": -0.061823113413678854,
        "fov": 1.3365071038314758
      },
      "linkHotspots": [
        {
          "yaw": 2.8686561436290265,
          "pitch": 0.6063115915253618,
          "rotation": 5.497787143782138,
          "target": "3-iterior-cupula-cama-",
          "targetViewParameters": {
          "yaw":1.8718135049656173,
          "pitch": 0,
          "fov": 1.3365071038314758
        }
        },
        {
          "yaw": 0.37595332714958474,
          "pitch": 0.336561318990551,
          "rotation": 1.5707963267948966,
          "target": "2-inerior-cupula-lateral",
          "targetViewParameters": {
          "yaw":-0.5824196848905618,
          "pitch": 0,
          "fov": 1.3365071038314758
        }
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-redario-jardim",
      "name": "Redario Jardim",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1767.5,
      "initialViewParameters": {
        "yaw": -2.064383389213642,
        "pitch": 0.08730737894851615,
        "fov": 1.3365071038314758
      },
      "linkHotspots": [
        {
          "yaw": -0.5493509158620355,
          "pitch": 0.5089935717789356,
          "rotation": 0,
          "target": "6-viso-lateral-jardim"
        },
        {
          "yaw": 0.9860584156661041,
          "pitch": 0.43169124695189254,
          "rotation": 0,
          "target": "1-espaco-gourmet",
          "targetViewParameters": {
          "yaw":1.1945890420068217,
          "pitch": 0,
          "fov": 1.3365071038314758
        }

        }
      ],
      "infoHotspots": []
    },
    {
      "id": "6-viso-lateral-jardim",
      "name": "Visão Lateral jardim",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1767.5,
      "initialViewParameters": {
        "yaw": -2.2971578030859803,
        "pitch": -0.011278540960603323,
        "fov": 1.3365071038314758
      },
      "linkHotspots": [
        {
          "yaw": -1.2916382930760477,
          "pitch": 0.27830354136222013,
          "rotation": 0,
          "target": "7-estacionamento"
        },
        {
          "yaw": 0.9296703779367075,
          "pitch": 0.31901721662482707,
          "rotation": 0,
          "target": "5-redario-jardim",
          "targetViewParameters": {
          "yaw": 2.726979469619361,
          "pitch": 0,
          "fov": 1.3365071038314758
        }
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "7-estacionamento",
      "name": "Estacionamento",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1767.5,
      "initialViewParameters": {
        "yaw": -1.6758123725670426,
        "pitch": 0.0797823552206971,
        "fov": 1.3365071038314758
      },
      "linkHotspots": [
        {
          "yaw": 1.0224532958542714,
          "pitch": 0.17155452191294884,
          "rotation": 0,
          "target": "6-viso-lateral-jardim",
          "targetViewParameters": {
          "yaw": 1.4072226910327466,
          "pitch": 0,
          "fov": 1.3365071038314758
        }
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Cupule Santorini",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
