//
// parcel layer lookup
//parcelLayerLookup.js
//


/*
* ParcelLayerLookup:
* Function takes in the file and corresponding kmlURL and loads onto the google earth map.
*
*/
function parcelLayerLookup(file,kmlURL){

	google.earth.fetchKml(ge, kmlURL, function(kmlObject) { 
		if (kmlObject) {
				
			parcelLayerKmlObjects[file] = kmlObject;
			
			ge.getFeatures().appendChild(kmlObject);
			
			//Turn off progress bar- layer has been loaded
			$( "#progress" ).hide();
			
		}else{
			// bad KML
			
			parcelLayerKmlObjects[file] = null;

			// wrap alerts in API callbacks and event handlers
			// in a setTimeout to prevent deadlock in some browsers
			  setTimeout(function() {
				alert('Bad or null KML.');
				alert(kmlURL);
			  }, 0);
			  //turn of progress bar
			  $( "#progress" ).hide();
		}
	});
}




/*
* parcelLayerLookupProperty:
* For every property, this function generates the respective
* file and kmlURL for each state to pass on to the parcelLayerLookupFunction
*
*/
function parcelLayerLookupProperty(prop){

	var state = (dijit.byId('stateSelect').attr('value'));
	var county = (dijit.byId('countySelect').attr('value'));
	
	//Show progress bar to indicate layer is trying to be loaded
	$( "#progress" ).show();
	
	var kmlURL = "";
	var file = "";
	
	if(state == 'CT'){
		
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
		townNumber = 'CTP' + townNumber;
		
		file = 'CT_' + townNumber;
		kmlURL = 'http://commondatastorage.googleapis.com/td02/CT/Parcel/' + townNumber + '.kmz';
	
	}else if(state == 'DC'){

		var quadrant = String(prop.quadrantName);

		if(quadrant == null || quadrant == ""){
			quadrant = 'QUADNULL';
		}

		kmlURL = 'http://commondatastorage.googleapis.com/td02/DC/Parcel%20Layers/DC_' + quadrant +'.kml'
		file = "'" + 'DC_' + quadrant + "'";	

	}else if(state == 'DE'){

			if (county == 'Kent'){
				//alert("Kent Parcel System hasnt been implmented yet");
				
				//Show progress bar to indicate layer is trying to be loaded
				$( "#progress" ).show();
			
				var hun = String(prop.hun);
			
				kmlURL = 'http://commondatastorage.googleapis.com/td02/DE/Kent/Parcel%20Layers/'+'K'+hun+'.kmz';
				file = "'DE_" + 'K' + hun + "'";
			}else if(county == 'NewCastle'){
				var lat = prop.latitude;
				var lon = prop.longitude;
				
				var number = "";
				
				//alert("test");
				
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
				kmlURL = 'http://commondatastorage.googleapis.com/td02/DE/New%20Castle/Parcel%20Layers/NP' + number + '.kml'
			
			}else if(county == 'Sussex'){
				var dis = String(prop.dis);
				var hun = String(prop.hun);
				kmlURL = 'http://commondatastorage.googleapis.com/td02/DE/Sussex/Parcel%20Layers/' + 'S' + dis + hun+'.kmz'
				file = "'DE_" + 'S' + dis + hun + "'"
			}else{
				alert("This county threw an error");
			}
	}else if(state == 'HI'){
		if(county == 'Maui'){
			/*
				For the Kml Files the island is broken up into a 3 x 3 grid. Although there are 9 squares, two of them are just water, 
				So there are 7 KML Files:
					MS1 to MS7. (S stands for sector)
				the grid lines are, from South to North, at: 20.57N, 20.73N, 20.89N and 21.045N latitude 
				and -155.95, -156.2, -156.45 & -156.7 longitude, numbered from south to north, east to west, from 1-7.
				
				The grid should look like this:
				(matrix notation)
				{[7,5,X];[6,4,2];[X,3,1]} where X is a sector of water
				
				
				Lon < -156.7 will be molokai
				
			*/
			
			var lat = prop.latitude;
			var lon = prop.longitude;
			
			var number = ""

		if(lon >= -156.7){
			if(lat > 20.57 && lat < 20.73){
			
				if(lon < -155.95 && lon > -156.2){
					number = '1';
				}else if(lon < -156.2 && lon > -156.45){
					number = '3';
				}else if(lon < -156.45 && lon > -156.7){
					//This sector should be just water, throw an alert
					alert(" These coordinates are in sector that is just water.  ERROR")
				}else{
					alert(" Lat/Lon: " + lat + "/" + lon + " threw an error")
				}
			
			}else if(lat > 20.73 && lat < 20.89){
				if (lon < -155.95 && lon > -156.2){
					number = '2';
				}else if(lon < -156.2 && lon > -156.45){
					number = '4';
				}else if(lon < -156.45 && lon > -156.7){
					number = '6';
				}else{
					alert(" Lat/Lon: " + lat + "/" + lon + " threw an error")
				}
			}else if(lat > 20.89 && lat < 21.045){
				if (lon < -155.95 && lon > -156.2){
					//This sector should be just water, throw an alert
					alert(" These coordinates are in sector that is just water.  ERROR")
				}else if(lon < -156.2 && lon > -156.45){
					number = '5';
				}else if(lon < -156.45 && lon > -156.7){
					number = '7';
				}else{
					alert(" Lat/Lon: " + lat + "/" + lon + " threw an error")
				}
			}else{
				alert("LAT : " + lat + " threw an error.");
			}
			
			kmlURL = 'http://commondatastorage.googleapis.com/td02/HI/Parcel_Layers/MS' + number + '.kmz';
			file = "'HI_" + 'MS' + number + "'";		
		}else{
			kmlURL = 'http://commondatastorage.googleapis.com/td02/HI/Parcel_Layers/Molokai.kmz';
			file = "HI_Molokai";
		}

		
	}else if(county == 'Oahu'){
				/*
				For the Kml Files the island is broken up into a 4 x 4 grid. Although there are 16 squares, some are  just water, 
				So there are 12 KML Files:
					
					OS1 to OS12. (S stands for sector)
				
				just hover the mouse over a point and coordinates are displayed toward the bottom of the screen.
				it´s 0.16 degree increments of Lat starting at 21.25 N and goes to ~21.715, 0.115 increments of long, starting from -157.6495 and going to -158.29

				21.25, 21.41, 21.57, 21.73
			-157.6495	-157.7645, -157.8795, -157.9945, -158.1095
				
				The grid should look like this:
				(matrix notation)
				{[A,B,C,D];[E,F,G,H];[I,J,K,L],[M,N,O,P]} where X is a sector of water
				
								12	10	6	X
								11	9	5	X
								X	8	4	2
								X	7	3	1
				
				*/
			
				var lat = prop.latitude;
				var lon = prop.longitude;
			
				var number = ""		
							
				if(lat > 21.25 && lat < 21.41 ){
					if(lon < -157.6495 && lon > -157.7645){
						number = '12';
					}else if(lon < -157.7645 && lon > -157.8795){
						number = '11';
					}else if(lon < -157.8795 && lon > -157.9945){
						// X sector
					}else  if(lon < -157.9945 && lon > -158.1095){
						//X sector
					}else{
						alert("Lat/Lon combo threw an error");
					}
				}else if(lat >21.41 && lat < 21.57){
					if(lon < -157.6495 && lon > -157.7645){
						number = '10';
					}else if(lon < -157.7645 && lon > -157.8795){
						number = '9';
					}else if(lon < -157.8795 && lon > -157.9945){
						number = '8';
					}else  if(lon < -157.9945 && lon > -158.1095){
						number = '7';
					}else{
						alert("Lat/Lon combo threw an error");
					}				
				}else if(lat > 21.57 && lat < 21.73){
						
					if(lon < -157.6495 && lon > -157.7645){
						number = '6'; //x?
					}else if(lon < -157.7645 && lon > -157.8795){
						number = '5';
					}else if(lon < -157.8795 && lon > -157.9945){
						number = '4';
					}else  if(lon < -157.9945 && lon > -158.1095){
						number = '3';
					}else{
						alert("Lat/Lon combo threw an error");
					}				
				}else if(lat > 21.73 && lat < 21.89){
					if(lon < -157.6495 && lon > -157.7645){
						//X
					}else if(lon < -157.7645 && lon > -157.8795){
						//X
					}else if(lon < -157.8795 && lon > -157.9945){
						number = '2';
					}else  if(lon < -157.9945 && lon > -158.1095){
						number = '1'
					}else{
						alert("Lat/Lon combo threw an error");
					}				
				}else{
					alert("Lat/Lon Combo threw a parcel loading error.")
				}
				
				kmlURL = 'http://commondatastorage.googleapis.com/td02/HI/Parcel_Layers/OS' + number + '.kmz';
				file = "'HI_" + 'OS' + number + "'";	
	
	}
	
	
	}else if (state == 'ID'){
		file = "'" + county + "'"
		kmlURL = "http://commondatastorage.googleapis.com/td02/ID/Parcel_Layers/"+ county +"_Parcel.kml"
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
		
		kmlURL = 'http://commondatastorage.googleapis.com/td01/Parcel%20%26%20Road%20Town-By-Town/'+'P'+townNumber+'.kml';
		file = "'MA_" + 'P' + townNumber + "'";	
	}
	else if(state == 'MT'){
	

		var range = prop.range;
		
		if(county < 10){
			countyValue = "0" + county;
		}else{
			countyValue = county;
		}
		
		//counties 8 to 56 have no range subdivision 
		if(county > 7){
			range = 'ALL'
		}
		
		file = "MT_" + countyValue + 'R' + range;
		kmlURL = "http://commondatastorage.googleapis.com/td02/MT_KML/" + countyValue + "R" + range + ".kml";
		
		alert(kmlURL);
	
	}
	else if(state == 'NJ'){
		var cdCode = prop.cdCode;
		
		if(cdCode.length == 3){
			cdCode = 0 + cdCode;
		}else if(cdCode.length == 4){
			cdCode = cdCode //dont change anything
		}else{
			alert("check cdCode");
		}

		file = "'NJ_" + "NP" + cdCode + "'";
		kmlURL = "http://commondatastorage.googleapis.com/td02/NJ/Parcel%20KML/NP"+ cdCode +".kml"
	}else if(state == 'OR'){
		//
		// Marion and Wallowa have there own kml files, other counties are dependent on the Township value.
		//
		
		if(county = 'Marion'){}
		else if(county == 'Wallowa'){}
		else{}
	
	}else{
		alert("state hasnt been added yet");
	}
	
	parcelLayerLookup(file,kmlURL);
	
}
