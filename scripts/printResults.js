//
// printResults function
// This function will take the reply JSON and create for every property instance returned a prop object
//	and then saves the respective values in the prop object. An address row is then generated and appeneded to a results table which is displayed. 
//	when the address row is clicked a function UpdateInfoScreen in updateInfoScreen.js is called.
//
function printResults(replyTable,start,end){

 
	//Object used to keep track of the current property being looked at
	// when a user's clicks a new property address, and the properties town changes, (later maybe state and county as well)
	// the function updateInfoScreen will then clear the road and parcel layers
	currentProperty = new Object();	
	currentProperty.town = null;
	
	for(i = start; i < end; i++){
	
		var state = $("#stateSelect").val();
		var county = $("#countySelect").val();

		prop = new Object();

		prop.state = state;
		prop.county = county;
		
		if (state == 'MA'){
			//selectClause = 'SELECT lon, lat, site_addr,city,zipcode, prop_id, use_code, lotsize, owner1, town_number, total_val, zoning, MA.' + county + '_Book_Page_LocId.BOOK,  MA.' +county + '_Book_Page_LocId.PAGE, ls_date, ls_price,  WETCODE, IT_VALDESC, AREAACRES, DP_NOTE, DP_STATUS '			
			prop.longitude = replyTable[i][0];
			prop.latitude = replyTable[i][1];
			prop.parcelAddress = replyTable[i][2];
			prop.city = replyTable[i][3];
			prop.zipcode = replyTable[i][4];
			prop.parcelid = replyTable[i][5];
			prop.landuse = replyTable[i][6];
			prop.acerage = (replyTable[i][7]);
			prop.owner = replyTable[i][8];
			prop.townNumber = replyTable[i][9];
			prop.assessment = replyTable[i][10];
			prop.zoning = replyTable[i][11];
			prop.book = replyTable[i][12];
			prop.page = replyTable[i][13];
			prop.lsdate = replyTable[i][14];
			prop.lsprice =replyTable[i][15];
			prop.wetcode = replyTable[i][16]
			prop.itValdesc = replyTable[i][17];
			prop.areaAcres = replyTable[i][18];
			prop.dpNote = replyTable[i][19];
			prop.dpStatus = replyTable[i][20];
		}else{
			console.log("error in printResults.js");
		}
		
		
		//Javascript for putting the results in the results box
				
		//var property = document.createElement("TABLE"); //Box for the particular result
			
		addressRow = document.createElement("TR"); //address of the result
		
		if(!prop.parcelAddress){
			prop.parcelAddress = " No Available Address ";
		}else{
			prop.parcelAddress + ","
		}
		if(!prop.city){
			prop.city = "";
		}
		if(!prop.zipcode){
			prop.zipcode = "";
		}
		var rowNum = i+1;		
		//addressRow.innerHTML = rowNum + " " + prop.parcelAddress + " " + prop.city + " " + prop.zipcode;
		addressRow.innerHTML = "<div class=\"panel-row\">" + "<div class=\"panel-number-block\">" + rowNum + "</div><div class=\"panel-text-block\">" + prop.parcelAddress + " " + prop.city + " " + prop.zipcode + "</div></div>";
		addressRow.onclick = updateInfoScreen(prop); 
		
		//property.appendChild(addressRow);
		//resultsTable.appendChild(property);
		resultsTable.appendChild(addressRow);

		//puts a puhipin for each property result
		//Note: this will create a pushpin for every result on the map
		//pinMap(prop);
			

	}
		// BW 30821 added space at the bottom to expand panel for pagination
		$( "#search-results-panel-controls" ).show();
		$( "#banner-results" ).show();
		$( "#help-wrapper" ).hide();
		//$( "#map" ).show();

		//spacerRow = document.createElement("TR");
		//spacerRow.innerHTML = " ";	
		//resultsTable.appendChild(spacerRow);
}
