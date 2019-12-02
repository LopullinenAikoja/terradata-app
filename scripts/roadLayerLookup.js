// Road Layer function
// 
//


/*
* roadLayerLookup:
* takes a file and corresponding kmlURL, loads the kml to the map 
* and saves the information as a file
*
*/

function roadLayerLookup(file,kmlURL){

	google.earth.fetchKml(ge, kmlURL, function(kmlObject) { 
		if (kmlObject) {
			//alert("test1");
			
			roadLayerKmlObjects[file] = kmlObject;
			
			ge.getFeatures().appendChild(kmlObject);
			
			//Turn off progress bar- layer has been loaded
			$( "#progress" ).hide();
			
		}else{
			//alert("test2");
			// bad KML
			roadLayerKmlObjects[file] = null;
	  
			// wrap alerts in API callbacks and event handlers
			// in a setTimeout to prevent deadlock in some browsers
			  setTimeout(function() {
				alert('Bad or null KML.');
			  }, 0);
			  //turn of progress bar
			  $( "#progress" ).hide();
		}
	});

}

/*
* roadLayerLookupProperty:
* For every property, this function generates the respective
* file and kmlURL for each state to pass on to the roadLayerLookupFunction
*
*/

function roadLayerLookupProperty(prop){

	var state = $("#stateSelect").val();
	var county = $("#countySelect").val();
	
	
	//Show progress bar to indicate layer is trying to be loaded
	$( "#progress" ).show();
	
	var kmlURL = "";
	var file = "";

	if(state == 'HI'){
		file = "'HI_" + 'R' + county + "'";
		kmlURL = 'http://commondatastorage.googleapis.com/td02/HI/Road_Layers/' + county +'_Roads.kmz';
	}else if(state == 'ID'){
		var file = "'" + county + '_Roads' + "'";
		var kmlURL = "http://commondatastorage.googleapis.com/td02/ID/Road_Layers/"+ county +"_Roads.kml";
	}else if(state == 'MA'){
			
		townNumber = String(prop.townNumber);
	
		if (townNumber.length == 1){
			//add two zeros
			townNumber = '00'+townNumber;
		}else if(townNumber.length == 2){
			//add one zero
			townNumber = '0'+townNumber;
		}else if(townNumber.length == 3){
			townNumber = townNumber;
		}else{
			//not sure
		}
		
		kmlURL = 'http://commondatastorage.googleapis.com/td01/Parcel%20%26%20Road%20Town-By-Town/'+'R'+townNumber+'.kml';
		file = "'MA_" + 'R' + townNumber + "'";
	}else if(state == 'NJ'){
		var cdCode = prop.cdCode;
		
		if(cdCode.length == 3){
			cdCode = 0 + cdCode;
		}else if(cdCode.length == 4){
			cdCode = cdCode //dont change anything
		}else{
			alert("check cdCode");
		}

		file = "'NJ_" + "R" + cdCode.substring(0,2) + "'";
		kmlURL = "http://commondatastorage.googleapis.com/td02/NJ/Roads,%20Wetlands%20&%20Misc%20KML/R" + cdCode.substring(0,2) + ".kml"
	}else{
		alert("state hasnt been added yet");
	}
	
	roadLayerLookup(file,kmlURL)
}
