//
// function to update the google map after a property has been selected
//


function updateMap(prop){
	if( prop.latitude == undefined || prop.latitude == null){
		alert("NULL");
	}else if(prop.latitude == 0){
		alert("latitude = 0");
	}else{
		//Shift the map to the new location
		var lon = Number(prop.longitude);
		var lat = Number(prop.latitude);
		
		var la = ge.createLookAt('');

		la.set(lat, lon,
			0, // altitude
			ge.ALTITUDE_RELATIVE_TO_GROUND,
			0, // heading
			0, // straight-down tilt
			400 // range (inverse of zoom)
			);
		
		ge.getView().setAbstractView(la);
		
			//bounding box
	}
	
  }