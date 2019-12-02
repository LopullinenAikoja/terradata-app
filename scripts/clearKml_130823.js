// 
// clearKml.js
//
// This file will contain functions used to remove all different Kml layers
//


//
// Remove All Features
// This function will remove all Kml and features attached to the map
// 
//
function removeAllFeatures()
{
  var features = ge.getFeatures();
  while (features.getLastChild() != null)
  {
    features.removeChild(features.getLastChild());
  }
}

//
//  clearParcelKml
//	This function will clear only the parcelLayers attached to the map and
//	set all the objects to null
//
// (maybe add some conditionals so that it will only clear the parcels if it is a different town?)
//
function clearParcelKml(){
	for(file in parcelLayerKmlObjects){
		//alert(object);
		if(parcelLayerKmlObjects[file]){
			ge.getFeatures().removeChild(parcelLayerKmlObjects[file]);
			parcelLayerKmlObjects[file]=null;
		}
	}
}


//
//	clearRoadKml
//	This function will clear only the roadLayers attached to the map 
//	and set all coresponding objects to null
//
// (maybe add some conditionals so that it will only clear the Road kml if it is a different town?)
function clearRoadKml(){
	for(file in roadLayerKmlObjects){
		if(roadLayerKmlObjects[file]){
			ge.getFeatures().removeChild(roadLayerKmlObjects[file]);
			roadLayerKmlObjects[file]=null;
		}
	}	
}

//
//	clearWetlandsKml()
//	This function will clear only the wetland layers attached to the map
//	and set the coresponding objects to null. 
//	Also uncheck the button so it can be used again.
//
// (maybe add some conditionals so that it will only clear the Road kml if it is a different town?)
function clearWetlandsKml(){
	for(file in wetlandLayerKmlObjects){
		if(wetlandLayerKmlObjects[file]){
			ge.getFeatures().removeChild(wetlandLayerKmlObjects[file]);
			wetlandLayerKmlObjects[file]=null;
		}
	}
	dijit.byId('wetlands').set('checked', false);
}

//Uncheck all different layer boxes?