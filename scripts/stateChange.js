//
// function that will load the counties when the user selects or changes the state
//
//
function stateChange(){

	var state = $("#stateSelect").val();
	
	//
	// When you change a state clear all pre exisiting Kml layers for now
	//
	removeAllFeatures();

	//
	// load coressponding layers:
	// 1. clear box: StateWideLayers and countyLayersBox (its inside the CountyLayersDiv but doesnt include Wetlands so that button always stays there)
	
	//if we were using jquery
	$("stateWideLayers").empty();
	$("countyLayersBox").empty();

	
	//2. Load the counties drop down and the layers	
	//3. Fill a dropdown in the layers div to let the user load any additional parcels layers in the state

				
	//
	//countyDropdown(state) can be found in countySelection.js
	countyDropdown(state);
	
	// stateLayers() can be found in stateLayers.js
	stateLayers(state);

}