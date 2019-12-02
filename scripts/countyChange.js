//
// countyChange.js
//
function countyChange(){

	//When the county changes clear all Kml for now
	removeAllFeatures();

	var state = $("#stateSelect").val();
	var county = $("#countySelect").val();
	
	//alert(state);
	//alert(county);
	
	//
	// These functions will load the towns in the townSelect drop down
	// loadTowns.js
	if(state == 'MA'){ 
		if(county == 'Barnstable'){massBarnstable();}
		else if(county == 'Berkshire'){massBerkshire();}
		else{console.log("this county needs to be added");}
	}else{
		console.log("STATE NOT ADDED YET");
	}

}