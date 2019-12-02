//
// removeParcelLayer.js
//
// Function used to remove  a specific loaded parcel layer of a state

//
// function will depend on the state
// potentially on county as well
//alert("TEST");
function removeParcelLayer(prop){

	var state = (dijit.byId('stateSelect').attr('value'));
	var county = (dijit.byId('countySelect').attr('value'));
	
	if(state == 'MA'){
		
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
	
			//kmlURL = 'http://commondatastorage.googleapis.com/td01/Parcel%20%26%20Road%20Town-By-Town/'+'P'+townNumber+'.kml';
			file = "'" + 'MA_P' + townNumber + "'";
	}else if(state == 'DE'){
	
		if (county == 'Kent'){
			
			var hun = String(prop.hun);
		
			//kmlURL = 'http://commondatastorage.googleapis.com/td02/DE/Kent/Parcel%20Layers/'+'K'+hun+'.kmz';
			file = "'DE_" + 'K' + hun + "'";
			
		}else if(county == 'NewCastle'){
			var lat = prop.latitude;
			var lon = prop.lonigitude;
			
			var number = "";
			
			
			//Load 00 if it's west of -75.65 longitude or 01 if it's east. And likewise for each latitude segment. 00/01 <39.5, 10/11 <39.6 & >39.5, 20/21 <39.7 >39.6, 30/31 <39.8 >39.7 and 40/41 >39.8.
			//
			// x <39.5 latitude East and West (00 and 01) 
			// 39.5 < x < 39.6 latitude east west (10 and 11)
			// 39.6< x < 39.7  latitude east west (20 and 21)
			// 39.7 < x < 39.8 latitude east west (30 and 31)
			// x > 39.8
			
			// // lon < -75.65 means it is west of -75.65
			if(lon < -75.65){
				number = "0";
				//alert(number);
				// number = "0";
				if(lat <39.5){
					number = '0' + number;
				}else if(lat > 39.5 && lat < 39.6){
					number = '1' + number;
				}else if(lat >39.6 && lat < 39.7){
					number = '2' + number;
				}else if(lat > 39.7 && lat < 39.8){
					number = '3' + number;
				}else if(lat > 39.8){
					 number = '4' + number;
				}else{
					alert('lat, lon threw and error ');
				}
			}else{
				//then its east
				number = "1";
				//alert(number);
				if(lon <39.5){
					number = '0' + number;
				}else if(lat > 39.5 && lat < 39.6){
					number = '1' + number;
				}else if(lat >39.6 && lat < 39.7){
					number = '2' + number;
				}else if(lat > 39.7 && lat < 39.8){
					number = '3' + number;
				}else if(lat > 39.8){
					number = '4' + number;
				}else{
					alert(' lat, lon threw and error ');
				}
			}
			file = "'DE_" + 'NP' + number + "'"
			//kmlURL = 'http://commondatastorage.googleapis.com/td02/DE/New%20Castle/Parcel%20Layers/NP' + number + '.kml'
		
		}else if(county == 'Sussex'){
			var dis = String(prop.dis);
			var hun = String(prop.hun);
			//kmlURL = 'http://commondatastorage.googleapis.com/td02/DE/Sussex/Parcel%20Layers/' + 'S' + dis + hun+'.kmz'
			file = "'DE_" + 'S' + dis + hun + "'"
		}else{
			alert('something went wrong with this DE county');
		}
	}else if (state == 'DC'){
			var quadrant = String(prop.quadrantName);			
			//kmlURL = 'http://commondatastorage.googleapis.com/td02/DC/Parcel%20Layers/DC_' + quadrant +'.kml'
			file = "'" + 'DC_' + quadrant + "'";	

	}else if(state == 'ID'){
		alert(" radius search not done yet");
	}else if(state == 'NJ'){
	
		var cdCode = prop.cdCode;
		
		if(cdCode.length == 3){
			cdCode = 0 + cdCode;
		}else if(cdCode.length == 4){
			cdCode = cdCode //dont change anything
		}else{
			alert("check cdCode");
		}

		file = "'NJ_" + "NP" + cdCode + "'";
		//kmlURL = "http://commondatastorage.googleapis.com/td02/NJ/Parcel%20KML/NP"+ cdCode +".kml"
		
	}else{
		alert("state hasnt been added yet");
	}
	
	//alert(file);
	//alert(parcelLayerKmlObjects[file]);
		
	if(parcelLayerKmlObjects[file]){	
		ge.getFeatures().removeChild(parcelLayerKmlObjects[file]);
		parcelLayerKmlObjects[file]=null;
	}
}