//
// Wetlands Layer Lookup:
// Unfortunetly: Theres not enough wetlands files to find out a difinitive system
// this will need work

//
// this function will be defunct for now to be hooked up once there exist wetland files for multiple states
//


//
// Global variable for wetlands num this needs to gotten rid of later
//

var wetlands = new Object();
wetlands.state = null;
wetlands.value = null;
wetlands.kmlURL = null;
wetlands.file = null;

//alert("Wetlands Layer Lookup loaded");


function wetlandsLayerLookup(){

	//file and kml variables to load kml
	var kmlURL = null;
	var file = null

	//get the wetlands state 
	//Might wanted to have this changed....safer to have wetlands.state updated during the search/click.... use wetlands.state?
	var state = wetlands.state;

	
	if(state == 'HI'){
		wetlands.file = "'HI_W" + wetlands.value + "'";
		wetlands.kmlURL = 'http://commondatastorage.googleapis.com/td02/HI/Wetlands_Layers/' + wetlands.value + '_Wetlands.kmz'
	}else if(state == 'MA'){
		
		//make it into 002 0012, 123 format
		if (wetlands.value.length == 1){
			//add two zeros
			wetlands.value = '00'+wetlands.value;
		}else if(wetlands.value.length == 2){
			//add one zero
			wetlands.value ='0'+wetlands.value;
		}else if(wetlands.value.length == 3){
			wetlands.value = wetlands.value;
		}else{
			alert("Either a parcel has not been clicked or there is a bad Wetlands num");
		}
		wetlands.file = "'MA_W" + wetlands.value + "'";
		wetlands.kmlURL = 'http://commondatastorage.googleapis.com/td01/Wetlands_MA/W'+wetlands.value+'.kml';
	}
	else if(state == 'DE'){
		wetlands.file = "'DE_W" + wetlands.value + "'";
		wetlands.kmlURL = 'http://commondatastorage.googleapis.com/td02/DE/Wetlands_by_County/' + wetlands.value + '_Wetlands.kml';
	}
	else if(state == 'DC'){
		// alert("DC");
		// alert("DC Wetlands not ready");
	}else if(state == 'NJ'){
		wetlands.file = "'NJ_W" + wetlands.value + "'";
		wetlands.kmlURL = 'http://commondatastorage.googleapis.com/td02/NJ/Roads,%20Wetlands%20&%20Misc%20KML/W' + wetlands.value + '.kml';
	}else if(state == ""){
		// alert("Please conduct a query first");
	}
	else{
		alert("State not added yet ");
	}
	
	kmlURL = wetlands.kmlURL;
	file = wetlands.file;
	
	//alert(file);
	//alert(kmlURL);
	
	google.earth.fetchKml(ge, kmlURL, function(kmlObject) {
		if (kmlObject) {
			wetlandLayerKmlObjects[file] = kmlObject;
			ge.getFeatures().appendChild(kmlObject);
			//Turn off progress bar- layer has been loaded
			$( "#progress" ).hide();
			
		}else{
			// bad KML
			wetlandLayerKmlObjects[file] = null;
		}		
	});

	
	
}