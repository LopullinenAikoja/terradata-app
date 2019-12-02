function updateInfoScreen(prop){
	
	return function(){
				
		var state = (dijit.byId('stateSelect').attr('value'));
		var county = (dijit.byId('countySelect').attr('value'));
	
		//show clicked results in red
		$(this).css({'color' : 'red'});

		//clear all loaded kml layers
		
		//removeAllFeatures();
		
		// If the county or town has changed the kml's will need to be cleared otherwise keep the 
		// existing road and parcel layers
		// Note: right now it is not necessary to worry about state since, on the change of state all kml files are removed from the map
				
		if(state == 'DC'){
			if(currentProperty.town != prop.quadrantName){
				clearParcelKml();
				clearRoadKml();
				clearWetlandsKml();
				currentProperty.town = prop.quadrantName;
			}	
		}if(state == 'DE'){
			if(county == 'Kent'){
				if(currentProperty.town != prop.hun){
					clearParcelKml();
					clearRoadKml();
					clearWetlandsKml();
					currentProperty.town = prop.hun;
				}	
			}else if(county == 'Sussex'){
				if(currentProperty.town != prop.dis + " " + prop.hun){
					clearParcelKml();
					clearRoadKml();	
					clearWetlandsKml();
					currentProperty.town = prop.dis + " " + prop.hun;
				}	
			}else{
				//then its New Castle
				if(currentProperty.town != prop.hun){
					clearParcelKml();
					clearRoadKml();	
					clearWetlandsKml();
					currentProperty.town = prop.hun
				}	
			}		
		}else if(state == 'NJ'){
			if(currentProperty.town != prop.cdCode){
				clearParcelKml();
				clearRoadKml();		
				clearWetlandsKml();
				currentProperty.town = prop.cdCode
			}	
		}else{
			// alert("MA");
			// alert(currentProperty.town);
			// alert(prop.townNumber);
			if(currentProperty.town != prop.townNumber){
				clearParcelKml();
				clearRoadKml();	
				clearWetlandsKml();
				currentProperty.town = prop.townNumber;
			}		
			
		}
		
		//
		// This section of code is to create a pin for the particular result, so there is only one pushpin on the map at a time,
		//  first: clear the pushpin array
		//	second: call pin map
		//
		//Clear the map of pushpins
		var kmlObjectList = ge.getFeatures().getChildNodes();
		if(pushpinList.length > 0){
			for(i = 0; i < pushpinList.length; i++){
				ge.getFeatures().removeChild(pushpinList[i]);
			}
		}
	
		//clear the info box before printing or reprinting results
		$('#infoTable').empty();
	
	require(["dojo/ready", "dijit/form/ToggleButton"], function(ready, ToggleButton){
		ready(function(){
		
			if(dijit.byId("downloadParcelInfo")){
				dijit.byId("downloadParcelInfo").destroy();
			}
			var downloadParcelInfo = new ToggleButton({
									id:"downloadParcelInfo",
									showLabel:true,
									checked:false,
									iconClass:'dijitCheckBoxIcon',
									onChange:function(){
										
										//alert("object to string test");
										//alert(prop);
										
										var str = "";
										for(var key in prop){
											   if (str != "") {
													str += "&";
												}
											str += key + "=" + prop[key];
										}
										//alert(str);
										
										$('<iframe id="dlBox" name="dlBox" hieght=0px width=0px style="display:none" src="/download?' + str + '">').appendTo('body');	

									},
									success:function(){alert('test');},
									label:"Download Parcel Info"
			});
			downloadParcelInfo.placeAt(document.getElementById("radiusSearchBox"));
			
			if(dijit.byId("radiusSearch")){
				dijit.byId("radiusSearch").destroy(); 			
			}
			 var radiusSearch = new ToggleButton({
								id:"radiusSearch",
								showLabel: true,
								checked: false,
								iconClass:'dijitCheckBoxIcon',
								onChange: function(){	
											
										//alert("download the nearest 100 parcels within a .5 mile radius within the state ");
										// if the button is clicked call the radiusSearch function
										//the function will then get a json reply from the server and return the value
										// as well as loading the parcel kml layers
										//if the button is unclicked remove all the layers in the else clause
										
										//function in radiusSearch.js
											
											radiusParcelSearch(prop);
											
										},
								label: "Load Adjacent Towns"
							});		
			// radiusSearch.placeAt(document.getElementById("radiusSearchBox"));
						});
					});
		
		//call pinMap
		pinMap(prop);
		
		//update the map
		updateMap(prop);
		

		

		var propertyInfo = document.createElement("TABLE"); 

		
		//Address Row
		addressRow = document.createElement("TR"); //address of the result
		addressCell1 = document.createElement("TD");//Coordinates Cell1
		addressCell2 = document.createElement("TD");//Coordinates Cell2
		addressCell1.innerHTML = "ADDRESS:"
		addressCell2.innerHTML = prop.parcelAddress + "," + prop.city + " " + prop.zipcode;
		addressRow.appendChild(addressCell1);
		addressRow.appendChild(addressCell2);
		addressRow.setAttribute("height", "40");
				
		//Cooridantes Row
		coordinatesRow = document.createElement("TR"); // row containing coordinates 
		coorCell1 = document.createElement("TD"); 
		coorCell2 = document.createElement("TD"); 
		coorCell1.innerHTML = "Coordinates: " 
		coorCell2.innerHTML = prop.latitude + "," + prop.longitude;
		coordinatesRow.appendChild(coorCell1);
		coordinatesRow.appendChild(coorCell2);
		coordinatesRow.setAttribute("height", "40");

		
		//Parcel Identification Row
		apnRow = document.createElement("TR"); // row containing apn	
		apnCell1 = document.createElement("TD"); //Parcelid/APN cell 1
		apnCell2 = document.createElement("TD"); //Parcelid/APN cell 2
		apnCell1.innerHTML = "APN: ";
		apnCell2.innerHTML = prop.parcelid;	
		apnRow.appendChild(apnCell1);
		apnRow.appendChild(apnCell2);	
		apnRow.setAttribute("height", "40");
		
		//Land Use Row
		landuseRow = document.createElement("TR"); // row containg landuse 
		landCell1 = document.createElement("TD"); //Landuse cell 1
		landCell2 = document.createElement("TD"); //Landuse cell 2		
		landCell1.innerHTML = " LANDUSE: ";
		landCell2.innerHTML = prop.landuse;
		landuseRow.appendChild(landCell1);
		landuseRow.appendChild(landCell2);	
		landuseRow.setAttribute("height","40");
		
		//Acerage Row
		acerageRow = document.createElement("TR"); // row containing acerage
		acerageCell1 = document.createElement("TD");// acerage cell 1
		acerageCell2 = document.createElement("TD");// acerage cell 2	
		acerageCell1.innerHTML = "ACERAGE ";
		acerageCell2.innerHTML = prop.acerage;	
		acerageRow.appendChild(acerageCell1);
		acerageRow.appendChild(acerageCell2);
		acerageRow.setAttribute("height", "40");
		
		//Assesment Row		
		assesmentRow = document.createElement("TR"); // row containing assessment
		assesCell1 = document.createElement("TD"); //assess cell 1
		assesCell2 = document.createElement("TD"); //assess cell 2
		assesCell1.innerHTML = "ASSESMENT: ";
		assesCell2.innerHTML =  prop.assessment;
		assesmentRow.appendChild(assesCell1);
		assesmentRow.appendChild(assesCell2);
		assesmentRow.setAttribute("height", "40");

		
		//Owner Row
		ownerRow = document.createElement("TR"); // row containing address
		ownerCell1 = document.createElement("TD");// Owner Cell 1
		ownerCell2 = document.createElement("TD");// Owner Cell 2
		ownerCell1.innerHTML = " OWNER: ";
		ownerCell2.innerHTML = prop.owner;
		ownerRow.appendChild(ownerCell1);
		ownerRow.appendChild(ownerCell2);	
		ownerRow.setAttribute("height", "40");
		
		//Book Row
		bookRow = document.createElement("TR"); // row Book 
		bookCell1 = document.createElement("TD"); //book cell
		bookCell2 = document.createElement("TD"); //book cell
		bookCell1.innerHTML = "BOOK: ";
		
		if(state == 'DE'){
			bookCell2.innerHTML = prop.deedBook + prop.volume;
		}else{
			bookCell2.innerHTML = prop.book;
		}
		
		bookRow.appendChild(bookCell1);
		bookRow.appendChild(bookCell2);
		bookRow.setAttribute("height", "40");

		
		//Page Row
		pageRow = document.createElement("TR");//row containing Page
		pageCell1 = document.createElement("TD");//page cell
		pageCell2 = document.createElement("TD");//page cell
		pageCell1.innerHTML = " PAGE: ";
		pageCell2.innerHTML = prop.page;	
		pageRow.appendChild(pageCell1);
		pageRow.appendChild(pageCell2);
		pageRow.setAttribute("height", "40");

		
		//Town Row
		townRow = document.createElement("TR"); // row town number
		townCell1 = document.createElement("TD");
		townCell2 = document.createElement("TD");

		
		
		if(state == 'DC'){
			townCell1.innerHTML = " QUADRANT: ";
			townCell2.innerHTML = prop.quadrantName;
		}if(state == 'DE'){
			if(county == 'Kent'){
				townCell1.innerHTML = " HUN: ";
				townCell2.innerHTML = prop.hun;
			}else if(county == 'Sussex'){
				townCell1.innerHTML = " DIS + HUN: ";
				townCell2.innerHTML = prop.dis + " " + prop.hun;
			}else{
				townCell1.innerHTML = " HUN: ";
				townCell2.innerHTML = prop.hun;	
			}		
		}else if(state == 'MT'){
			townCell1.innerHTML = " Range: ";
			townCell2.innerHTML = prop.range;	
		}else if(state == 'NJ'){
			townCell1.innerHTML = " CD_CODE: ";
			townCell2.innerHTML = prop.cdCode;
		}else if(state == 'OR'){
			townCell1.innerHTML = " City: ";
			townCell2.innerHTML = " City Unavailable ";
		}else{
			townCell1.innerHTML = " TOWN NUMBER: ";
			townCell2.innerHTML =  prop.townNumber;
		}
		
		townRow.appendChild(townCell1);
		townRow.appendChild(townCell2);
		townRow.setAttribute("height", "40");

		
		//List Date Row
		lsdateRow = document.createElement("TR");//row containing ls date
		lsdateCell1 = document.createElement("TD"); // LS DATE CELL 1
		lsdateCell2 = document.createElement("TD"); // LS DATE CELL 2
		lsdateCell1.innerHTML = " LS DATE: " ;
		lsdateCell2.innerHTML = prop.lsdate;	
		lsdateRow.appendChild(lsdateCell1);
		lsdateRow.appendChild(lsdateCell2);
		lsdateRow.setAttribute("height", "40");
		
		//List Price Row
		lspriceRow = document.createElement("TR");//row containing ls price
		lspriceCell1 = document.createElement("TD"); //LS Price Cell 1
		lspriceCell2 = document.createElement("TD"); //LS Price Cell 1
		lspriceCell1.innerHTML = " LS PRICE: ";
		lspriceCell2.innerHTML = prop.lsprice;
		lspriceRow.appendChild(lspriceCell1);
		lspriceRow.appendChild(lspriceCell2);
		lspriceRow.setAttribute("height", "40");

		//Zoning Row
		zoningRow = document.createElement("TR"); //row containing zoning
		zoningCell1 = document.createElement("TD"); //zoning Cell 1
		zoningCell2 = document.createElement("TD"); // zoning cell 2
		zoningCell1.innerHTML = " ZONING: ";
		zoningCell2.innerHTML = prop.zoning;	
		zoningRow.appendChild(zoningCell1);
		zoningRow.appendChild(zoningCell2);	
		zoningRow.setAttribute("height", "40");
		
		//Wetcode Row
		wetcodeRow = document.createElement("TR"); //row containing wetcode
		wetcodeCell1 = document.createElement("TD"); // wetcode cell 1
		wetcodeCell2 = document.createElement("TD"); // wetcode cell 2
		wetcodeCell1.innerHTML = " WETCODE: ";
		wetcodeCell2.innerHTML = prop.wetcode;	
		wetcodeRow.appendChild(wetcodeCell1);
		wetcodeRow.appendChild(wetcodeCell2);
		wetcodeRow.setAttribute("height", "40");
		
		//It Valdescription Row
		itValdescRow = document.createElement("TR"); //row containing IT_VALDESC
		
		//Area Acres
		areaAcresRow = document.createElement("TR");//row Area Acres
		areaAcresCell1 = document.createElement("TD"); //area acres cell 1
		areaAcresCell2 = document.createElement("TD"); // area acres cell 2
		areaAcresCell1.innerHTML = " Wetlands Percentage: "
		areaAcresCell2.innerHTML = prop.areaAcres;
		areaAcresRow.appendChild(areaAcresCell1);
		areaAcresRow.appendChild(areaAcresCell2);
		areaAcresRow.setAttribute("height", "40");
		
		//DP_Note Row  Account Delinquent 3+ Years
		dpNoteRow = document.createElement("TR"); //row DP_NOTE
		dpNoteCell1 = document.createElement("TD"); // dp Note Cell 1
		dpNoteCell2 = document.createElement("TD"); // dp note cell 2
		dpNoteCell1.innerHTML = "Lien Info:";
		dpNoteCell2.innerHTML = prop.dpNote;
		dpNoteRow.appendChild(dpNoteCell1);
		dpNoteRow.appendChild(dpNoteCell2);
		dpNoteRow.setAttribute("height", "40");
		
		//Tax Due Row
		dpStatusRow = document.createElement("TR"); // row DP STATUS
		dpStatusCell1 = document.createElement("TD"); //dp Status Cell 1
		dpStatusCell2 = document.createElement("TD"); // dp status Cell2
		dpStatusCell1.innerHTML = " Tax Due: ";
		dpStatusCell2.innerHTML = prop.dpStatus;
		dpStatusRow.appendChild(dpStatusCell1);
		dpStatusRow.appendChild(dpStatusCell2);
		dpStatusRow.setAttribute("height", "40");
		
		//Append all Rows to the table
		propertyInfo.appendChild(ownerRow);
		propertyInfo.appendChild(addressRow);
		propertyInfo.appendChild(coordinatesRow);
		propertyInfo.appendChild(apnRow);
		propertyInfo.appendChild(assesmentRow);
		propertyInfo.appendChild(landuseRow);
		propertyInfo.appendChild(acerageRow);
		propertyInfo.appendChild(bookRow);
		propertyInfo.appendChild(pageRow);
		propertyInfo.appendChild(townRow);
		propertyInfo.appendChild(lsdateRow);
		propertyInfo.appendChild(lspriceRow);
		propertyInfo.appendChild(zoningRow);
		propertyInfo.appendChild(wetcodeRow);
		propertyInfo.appendChild(areaAcresRow);
		propertyInfo.appendChild(dpNoteRow);
		propertyInfo.appendChild(dpStatusRow);
		infoTable.appendChild(propertyInfo);

		//align the table to the left
		$('.propertyInfo').css('text-align','center');
				
		//Look up road and parcel layers!
		
		parcelLayerLookupProperty(prop);
		roadLayerLookupProperty(prop);
			
		//set the wetlands value
		//possibly make into another function?
		wetlands.state = dijit.byId('stateSelect').attr('value')
		
		if(state == 'HI'){
			if(prop.longitude < -156.7){
				//molokai
				wetlands.value = 'Molokai';
			}else{
				wetlands.value = county;
			}
		}else if(state == 'MA'){
			wetlands.value = String(prop.townNumber);
		}else if(state == 'DE'){
			wetlands.value = county;
		}else if(state == 'NJ'){
			wetlands.value = prop.cdCode.substring(0,2);
			wetlands.state = dijit.byId('stateSelect').attr('value');
		}else{
			alert("wetlands for this state not ready yet?");
		}
		
		//alert(wetlands.value);
		//alert(wetlandsNum);
	
	}
}