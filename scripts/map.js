//
// Map Functions using:
//Google Earth API
//
var ge;
google.load("earth", "1.x");

function init() {
	google.earth.createInstance('map', initCB, failureCB);
}

function initCB(instance) {
	ge = instance;
	ge.getWindow().setVisibility(true);
	ge.getNavigationControl().setVisibility(ge.VISIBILITY_AUTO);
	ge.getNavigationControl().setStreetViewEnabled(true);
	ge.getLayerRoot().enableLayerById(ge.LAYER_ROADS, true);
	
	// Pan Google Earth to MA
	var lookAt = ge.getView().copyAsLookAt(ge.ALTITUDE_RELATIVE_TO_GROUND);
	lookAt.setLatitude(42.3583);
	lookAt.setLongitude(-71.0603);
	lookAt.setRange(800000.0);
	ge.getView().setAbstractView(lookAt);	

	
	
	//load the coverage map when the app starts
	google.earth.fetchKml(ge, 'http://commondatastorage.googleapis.com/td02/Coverage%20Map.kml', function(kmlObject) {  
	   if (kmlObject) {
		  // show it on Earth
		  ge.getFeatures().appendChild(kmlObject);
		  
		} else {
		  // bad KML	  
		  // wrap alerts in API callbacks and event handlers
		  // in a setTimeout to prevent deadlock in some browsers
		  setTimeout(function() {
			alert('Bad or null KML.');
		  }, 0);

		}
	  }); 		

	  google.earth.addEventListener(ge.getView(), 'click', function(){
			alert("testing");
			}
		);

}
	
function failureCB(errorCode) {
}

google.setOnLoadCallback(init);

function hideTerrain() {
	var layerRoot = ge.getLayerRoot();
	var terrainLayer = layerRoot.getLayerById(ge.LAYER_TERRAIN);
	terrainLayer.setVisibility(false);
}

function hideBuildingsClick() {
	ge.getLayerRoot().enableLayerById(ge.LAYER_BUILDINGS, false);
}

