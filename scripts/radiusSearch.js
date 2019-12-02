//
// Raidus Search
//  radiusSearch.js
// Get the lattitude, longitude, and radius and then 
// pass it to the Search Radius Handler

//alert("radiusSearch.js loaded");

function radiusParcelSearch(prop){
	
	//alert(prop.townNumber);
	
	$( "#progress" ).show();
	
	// ?input1=salkdlk&input2=vlue
	var state = (dijit.byId('stateSelect').attr('value'));
	var county = (dijit.byId('countySelect').attr('value'));
	
	var string = "stateSelect=" + state +"&countySelect=" + county +"&latitude=" + prop.latitude + "&longitude=" + prop.longitude;
	
	//alert(string);
	
	if(document.getElementById("radiusSearch").checked){
		//Then send AJAX request to the radiusSearch handler which will return a json
		$.ajax({
		  url: 'radius',
		  data: string,
		  dataType: 'json',
		  success: function(replyTable) {
			if(replyTable == null){
				//hide the progress bar
				$( "#progress" ).hide();
				alert("The radius search has brought up a null response");
			}else if(replyTable.length == 0){
				$( "#progress" ).hide();
				alert("No adjacent towns?");
				alert(replyTable);
				
			}else{
				
				//hide the progress bar
				 $( "#progress" ).hide();
				 
				//alert(replyTable);	
				prop.adjacentTowns = replyTable;
				
				//create a new property instance
				prop2 = new Object();
				
				for(i = 0; i < prop.adjacentTowns.length; i++){
					alert(replyTable[i])
					if(state == 'DC'){
						prop2.quadrantName = replyTable[i];
					}else if(state == 'MA'){					
						prop2.townNumber = replyTable[i];

					}else{
						alert("Radius search for this state not done yet?");
					}
					parcelLayerLookupProperty(prop2);
				}
				
			}	
		}
		});
	}else{
		alert(prop.adjacentTowns);
		
		for(i = 0; i < prop.adjacentTowns.length; i++){
			
			//alert(prop.adjacentTowns[i]);
			
			prop3 = new Object();
			
			if(state == 'MA'){
				if(prop.adjacentTowns[i] != prop.townNumber){
					//alert(prop.adjacentTowns[i]);
					prop3.townNumber = prop.adjacentTowns[i];
					removeParcelLayer(prop3);
				}
			}
			
		}
	}
}