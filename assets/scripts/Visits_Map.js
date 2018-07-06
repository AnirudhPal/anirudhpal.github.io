    // Object Def
    var map = AmCharts.makeChart("mapdiv",{

    // Map Settings
    type: "map",
    theme: "dark",
    projection: "eckert5",
    panEventsEnabled : true,
    backgroundColor : "#FDFDFD",
    backgroundAlpha : 0,
    zoomControl: {
      zoomControlEnabled : false
    },

    // Country Selection
    dataProvider : {
      map : "worldHigh",
      getAreasFromMap : true,
      areas : [
	       {"id": "FR", "showAsSelected": true},
	       {"id": "DE", "showAsSelected": true},
	       {"id": "IT", "showAsSelected": true},
	       {"id": "CH", "showAsSelected": true},
	       {"id": "GB", "showAsSelected": true},
	       {"id": "MX", "showAsSelected": true},
	       {"id": "US", "showAsSelected": true},
	       {"id": "EG", "showAsSelected": true},
	       {"id": "CN", "showAsSelected": true},
	       {"id": "IN", "showAsSelected": true},
	       {"id": "JO", "showAsSelected": true},
	       {"id": "KW", "showAsSelected": true},
	       {"id": "LB", "showAsSelected": true},
	       {"id": "NP", "showAsSelected": true},
	       {"id": "OM", "showAsSelected": true},
	       {"id": "QA", "showAsSelected": true},
	       {"id": "SG", "showAsSelected": true},
	       {"id": "SY", "showAsSelected": true},
         {"id": "TR", "showAsSelected": true},
	       {"id": "AE", "showAsSelected": true}
      ]
    },

    // Country Settings
    areasSettings : {
      autoZoom : true,
      color : "#B4B4B7",
      colorSolid : "#000000",
      selectedColor : "#000000",
      outlineColor : "#FDFDFD",
      rollOverColor : "#000000",
      rollOverOutlineColor : "#FDFDFD"
    }
  });
