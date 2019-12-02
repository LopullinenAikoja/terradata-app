//
// Load Kml Function 
// input params: the kml url and the file name
// loads thematic overlays
//
//
//alert("TEST");

function loadThematicOverlays(kmlUrl,file){
	
	//Show progress bar to indicate layer is trying to be loaded
	$( "#progress" ).show();
	
	// fetch the KML
	// NOTE: we still have access to the 'file' variable (via JS closures)
	google.earth.fetchKml(ge, kmlUrl, function(kmlObject) {
	
	   if (kmlObject) {
		  // show it on Earth
		  thematicLayerKmlObjects[file] = kmlObject;
		  ge.getFeatures().appendChild(kmlObject);
		  
			//Turn off progress bar- layer has been loaded
			$( "#progress" ).hide();
		} else {
		  // bad KML
		  thematicLayerKmlObjects[file] = null;
	  
		  // wrap alerts in API callbacks and event handlers
		  // in a setTimeout to prevent deadlock in some browsers
		  setTimeout(function() {
			alert('Bad or null KML.');
		  }, 0);
	
			//Turn off progress bar- 
			$( "#progress" ).hide();
		  // uncheck the box
		  // file mus become "file"

		  document.getElementById(" ' " + file + " ' ").checked = '';
		}
	
	});
}