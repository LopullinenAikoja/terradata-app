//countyLayers.js

//alert("STATE LAYERS LOADED");

function stateLayers(state){
			
			if(state == 'DE'){
				// No layers for delaware yet?
			}else if(state == 'DC'){
				//no layers for DC yet?
			}else if(state == 'MA'){
				massachusettsLayers();
			}else if(state == 'HI'){
				hawaiiLayers();
			}else if(state == 'ID'){
				alert("Idaho layers not ready yet");
			}else if(state == 'MT'){
				montanaLayers();
			}else if(state == 'NJ'){
				newJerseyLayers();
			}else{
				alert("No Layers for " + state);
			}
			parcelLayersDropDown(state);
}

function hawaiiLayers(){
	require(["dojo/ready", "dijit/form/ToggleButton"], function(ready, ToggleButton){
		ready(function(){

		 //State Layers
		 var govtLand = new ToggleButton({
							id:"govtLand",
							showLabel: true,
							checked: false,
							iconClass:'dijitCheckBoxIcon',
							onChange: function(){
										var file = 'HI_GovtLand';

										require(["dojo/dom"], function(dom){
											if(document.getElementById("govtLand").checked){
												loadThematicOverlays('http://commondatastorage.googleapis.com/td02/HI/Miscellaneous_Layers/GovtLand.kmz', file);
											}else{
												if(thematicLayerKmlObjects[file]){
													ge.getFeatures().removeChild(thematicLayerKmlObjects[file]);
													thematicLayerKmlObjects[file]=null;
												}
											}
										});							
									},
							label: "Gov't Land"
						});	

			 var solar = new ToggleButton({
								id:"solar",
								showLabel: true,
								checked: false,
								iconClass:'dijitCheckBoxIcon',
								onChange: function(){
											var file = 'HI_Solar';

											require(["dojo/dom"], function(dom){
												if(document.getElementById("solar").checked){
													loadThematicOverlays('http://commondatastorage.googleapis.com/td02/HI/Miscellaneous_Layers/Solar.kmz', file);
												}else{
													if(thematicLayerKmlObjects[file]){
														ge.getFeatures().removeChild(thematicLayerKmlObjects[file]);
														thematicLayerKmlObjects[file]=null;
													}
												}
											});							
										},
								label: "Solar"
							});	
							
			 var windPower = new ToggleButton({
								id:"windPower",
								showLabel: true,
								checked: false,
								iconClass:'dijitCheckBoxIcon',
								onChange: function(){
											var file = 'HI_WindPower';

											require(["dojo/dom"], function(dom){
												if(document.getElementById("windPower").checked){
													loadThematicOverlays('http://commondatastorage.googleapis.com/td02/HI/Miscellaneous_Layers/wind_power.kmz', file);
												}else{
													if(thematicLayerKmlObjects[file]){
														ge.getFeatures().removeChild(thematicLayerKmlObjects[file]);
														thematicLayerKmlObjects[file]=null;
													}
												}
											});							
										},
								label: "Wind Power"
							});	
			
			var windSpeed = new ToggleButton({
								id:"windSpeed",
								showLabel: true,
								checked: false,
								iconClass:'dijitCheckBoxIcon',
								onChange: function(){
											var file = 'HI_WindSpeed';

											require(["dojo/dom"], function(dom){
												if(document.getElementById("windSpeed").checked){
													loadThematicOverlays('http://commondatastorage.googleapis.com/td02/HI/Miscellaneous_Layers/wind_speed.kmz', file);
												}else{
													if(thematicLayerKmlObjects[file]){
														ge.getFeatures().removeChild(thematicLayerKmlObjects[file]);
														thematicLayerKmlObjects[file]=null;
													}
												}
											});							
										},
								label: "Wind Speed"
							});	

			var sewerMain = new ToggleButton({
								id:"sewerMain",
								showLabel: true,
								checked: false,
								iconClass:'dijitCheckBoxIcon',
								onChange: function(){
											var file = 'HI_SewerMain';

											require(["dojo/dom"], function(dom){
												if(document.getElementById("sewerMain").checked){
													loadThematicOverlays('http://commondatastorage.googleapis.com/td02/HI/Miscellaneous_Layers/Sewer_Main.kmz', file);
												}else{
													if(thematicLayerKmlObjects[file]){
														ge.getFeatures().removeChild(thematicLayerKmlObjects[file]);
														thematicLayerKmlObjects[file]=null;
													}
												}
											});							
										},
								label: "Sewer Main"
							});	

			var sewerConduit = new ToggleButton({
								id:"sewerMain",
								showLabel: true,
								checked: false,
								iconClass:'dijitCheckBoxIcon',
								onChange: function(){
											var file = 'HI_SewerConduit';

											require(["dojo/dom"], function(dom){
												if(document.getElementById("sewerConduit").checked){
													loadThematicOverlays('http://commondatastorage.googleapis.com/td02/HI/Miscellaneous_Layers/Sewer_Conduit.kmz', file);
												}else{
													if(thematicLayerKmlObjects[file]){
														ge.getFeatures().removeChild(thematicLayerKmlObjects[file]);
														thematicLayerKmlObjects[file]=null;
													}
												}
											});							
										},
								label: "Sewer Conduit"
							});	
		
			//County Layers (depends on the county chosen)
	 
		 var topography = new ToggleButton({
					id:"topography",
					showLabel: true,
					checked: false,
					iconClass:'dijitCheckBoxIcon',
					onChange: function(){
								require(["dojo/dom"], function(dom){
															
									var county = dijit.byId('countySelect').attr('value');
									
									if(county == ""){
										alert("Please choose a county first");
									}else{
										var file = 'HI_Topography';

										var url = 'http://commondatastorage.googleapis.com/td02/HI/Topography_Layers/' +county+'_Topography.kmz';
										
										if(document.getElementById("topography").checked){
											loadThematicOverlays(url, file);
										}else{
											if(thematicLayerKmlObjects[file]){
												ge.getFeatures().removeChild(thematicLayerKmlObjects[file]);
												thematicLayerKmlObjects[file]=null;
												}
										}
									}
								});					
								
								},
					label: "Topography"
				});	
			govtLand.placeAt(document.getElementById("stateWideLayers"));
			solar.placeAt(document.getElementById("stateWideLayers"));
			windPower.placeAt(document.getElementById("stateWideLayers"));
			windSpeed.placeAt(document.getElementById("stateWideLayers"));
			sewerMain.placeAt(document.getElementById("stateWideLayers"));
			sewerConduit.placeAt(document.getElementById("stateWideLayers"));
			topography.placeAt(document.getElementById("countyLayersBox"))
			});
		});	
}



function massachusettsLayers(){

require(["dojo/ready", "dijit/form/ToggleButton"], function(ready, ToggleButton){
    ready(function(){
	
	//Statewide Layers (do not depend on the county)

	 var townlines = new ToggleButton({
						id:"townlines",
						showLabel: true,
						checked: false,
						iconClass:'dijitCheckBoxIcon',
						onChange: function(){
									var file = 'MA_Townlines';

									require(["dojo/dom"], function(dom){
										if(document.getElementById("townlines").checked){
											loadThematicOverlays('http://commondatastorage.googleapis.com/td01/GIS%20Layers/Statewide_towns.kml', file);
										}else{
											if(thematicLayerKmlObjects[file]){
												ge.getFeatures().removeChild(thematicLayerKmlObjects[file]);
												thematicLayerKmlObjects[file]=null;
											}
										}
									});							
								},
						label: "Townlines"
					});	
		
	 var transmissionLines = new ToggleButton({
					id:"transmissionLines",
					showLabel: true,
					checked: false,
					iconClass:'dijitCheckBoxIcon',
					onChange: function(){
								var file = 'MA_TransmissionLines';
								require(["dojo/dom"], function(dom){
									if(document.getElementById("transmissionLines").checked){
										loadThematicOverlays('http://commondatastorage.googleapis.com/td01/GIS%20Layers/Statewide_TransmissionLines.kml', file)
									}else{
										if(thematicLayerKmlObjects[file]){
											ge.getFeatures().removeChild(thematicLayerKmlObjects[file]);
											thematicLayerKmlObjects[file]=null;
										}
									}
								});
							},
					label: "Transmission Lines"
				});				
	
	 var railroads = new ToggleButton({
					id:"railroads",
					showLabel: true,
					checked: false,
					iconClass:'dijitCheckBoxIcon',
					onChange: function(){
								var file = 'MA_Railroads';
								require(["dojo/dom"], function(dom){
									if(document.getElementById("railroads").checked){
										loadThematicOverlays('http://commondatastorage.googleapis.com/td01/GIS%20Layers/StateWide_Trains.kml', file)
									}else{
										if(thematicLayerKmlObjects[file]){
											ge.getFeatures().removeChild(thematicLayerKmlObjects[file]);
											thematicLayerKmlObjects[file]=null;
										}
									}
								});						
							},
					label: "Railroads"
				});
	 var comuter = new ToggleButton({
				id:"commuter",
				showLabel: true,
				checked: false,
				iconClass:'dijitCheckBoxIcon',
				onChange: function(){
							var file = 'MA_Commuter';
							require(["dojo/dom"], function(dom){
								if(document.getElementById("commuter").checked){
									loadThematicOverlays('http://commondatastorage.googleapis.com/td01/GIS%20Layers/MBTA_CommuterRail.kml', file)
								}else{
									if(thematicLayerKmlObjects[file]){
										ge.getFeatures().removeChild(thematicLayerKmlObjects[file]);
										thematicLayerKmlObjects[file]=null;
									}
								}
							});				
						},
				label: "Commuter"
			});
						
	//County Layers (depends on the county chosen)
	 
	 var topography = new ToggleButton({
				id:"topography",
				showLabel: true,
				checked: false,
				iconClass:'dijitCheckBoxIcon',
				onChange: function(){
							require(["dojo/dom"], function(dom){
														
								var county = dijit.byId('countySelect').attr('value');
								
								if(county == ""){
									alert("Please choose a county first");
								}else{
									var file = 'MA_Topography';
									var url = 'http://commondatastorage.googleapis.com/td01/GIS%20Layers/'+county+'_Topography.kml';							
									if(document.getElementById("topography").checked){
										loadThematicOverlays(url, file);
									}else{
										if(thematicLayerKmlObjects[file]){
											ge.getFeatures().removeChild(thematicLayerKmlObjects[file]);
											thematicLayerKmlObjects[file]=null;
											}
									}
								}
							});					
							
							},
				label: "Topography"
			});	
		
	 var census = new ToggleButton({
				id:"census",
				showLabel: true,
				checked: false,
				iconClass:'dijitCheckBoxIcon',
				onChange: function(){
					require(["dojo/dom"], function(dom){
						var county = dijit.byId('countySelect').attr('value');
						
						if(county == ""){
							alert("Please choose a county first");
						}else{
							var file = 'MA_Census';
							
							var url = 'http://commondatastorage.googleapis.com/td01/GIS%20Layers/'+county+'_Census.kml';
							if(document.getElementById("census").checked){
								loadThematicOverlays(url, file)
							}else{
								if(thematicLayerKmlObjects[file]){
									ge.getFeatures().removeChild(thematicLayerKmlObjects[file]);
									thematicLayerKmlObjects[file]=null;
								}
							}
						}
				
					});
				},
				label: "Census"
			});
			
	 var zoning = new ToggleButton({
				id:"zoning",
				showLabel: true,
				checked: false,
				iconClass:'dijitCheckBoxIcon',
				onChange: function(){
							require(["dojo/dom"], function(dom){
								var county = dijit.byId('countySelect').attr('value');
								
								if(county == ""){
									alert("Please Choose a county first")
								}else{
									var file = 'MA_Zoning';
									var url = 'http://commondatastorage.googleapis.com/td01/GIS%20Layers/'+county+'_Zoning.kml';
									
									if(document.getElementById("zoning").checked){
										loadThematicOverlays(url, file);
									}else{
										if(thematicLayerKmlObjects[file]){
											ge.getFeatures().removeChild(thematicLayerKmlObjects[file]);
											thematicLayerKmlObjects[file]=null;
										}
									}
								}
							});
				},
				label: "Zoning"
			});
	
	townlines.placeAt(document.getElementById("stateWideLayers"));
	transmissionLines.placeAt(document.getElementById("stateWideLayers"));
	railroads.placeAt(document.getElementById("stateWideLayers"));
	comuter.placeAt(document.getElementById("stateWideLayers"));
	topography.placeAt(document.getElementById("countyLayersBox"))
	census.placeAt(document.getElementById("countyLayersBox"))
	zoning.placeAt(document.getElementById("countyLayersBox"))
	

	
    });
});


}



function montanaLayers(){

require(["dojo/ready", "dijit/form/ToggleButton"], function(ready, ToggleButton){
    ready(function(){
	
	//Statewide Layers (do not depend on the county)

	 var federalLands = new ToggleButton({
						id:"federalLands",
						showLabel: true,
						checked: false,
						iconClass:'dijitCheckBoxIcon',
						onChange: function(){
									var file = 'MT_FederalLands';

									require(["dojo/dom"], function(dom){
										if(document.getElementById("federalLands").checked){
											loadThematicOverlays('http://commondatastorage.googleapis.com/td02/MT_KML/MT_Federal_Lands.kml', file);
										}else{
											if(thematicLayerKmlObjects[file]){
												ge.getFeatures().removeChild(thematicLayerKmlObjects[file]);
												thematicLayerKmlObjects[file]=null;
											}
										}
									});							
								},
						label: "Federal Lands"
					});	
		
	 var stateOwn = new ToggleButton({
						id:"stateOwn",
						showLabel: true,
						checked: false,
						iconClass:'dijitCheckBoxIcon',
						onChange: function(){
									var file = 'MT_StateOwn';

									require(["dojo/dom"], function(dom){
										if(document.getElementById("stateOwn").checked){
											loadThematicOverlays('http://commondatastorage.googleapis.com/td02/MT_KML/MT_StateOwn.kml', file);
										}else{
											if(thematicLayerKmlObjects[file]){
												ge.getFeatures().removeChild(thematicLayerKmlObjects[file]);
												thematicLayerKmlObjects[file]=null;
											}
										}
									});							
								},
						label: "State Own"
					});	
	
	federalLands.placeAt(document.getElementById("stateWideLayers"));
	stateOwn.placeAt(document.getElementById("stateWideLayers"));

	
    });
});


}


function newJerseyLayers(){

	require(["dojo/ready", "dijit/form/ToggleButton"], function(ready, ToggleButton){
		ready(function(){
		
		//State Layers ( do not depend on county)
	  var njRail = new ToggleButton({
						id:"njRailButton",
						showLabel: true,
						checked: false,
						iconClass:'dijitCheckBoxIcon',
						onChange: function(){
							require(["dojo/dom"], function(dom){
					
									var file = 'NJ_Rail';
									var url = 'http://commondatastorage.googleapis.com/td02/NJ/Roads,%20Wetlands%20&%20Misc%20KML/NJ_Rail.kml';
									
									if(document.getElementById("njRailButton").checked){
										loadThematicOverlays(url,file)
									}else{
										if(thematicLayerKmlObjects[file]){
											ge.getFeatures().removeChild(thematicLayerKmlObjects[file]);
											thematicLayerKmlObjects[file]=null;
										}
									}	
							});
							},
						label: "NJ RAIL"
					});
			
			
		var njCongress = new ToggleButton({
							id:"njCongressButton",
							showLabel: true,
							checked: false,
							iconClass:'dijitCheckBoxIcon',
							onChange: function(){
															
								require(["dojo/dom"], function(dom){
					
									var file = 'NJ_Congress';
									var url = 'http://commondatastorage.googleapis.com/td02/NJ/Roads,%20Wetlands%20&%20Misc%20KML/NJ_Congress.kml';
									
									if(document.getElementById("njCongressButton").checked){
										loadThematicOverlays(url,file)
									}else{
										if(thematicLayerKmlObjects[file]){
											ge.getFeatures().removeChild(thematicLayerKmlObjects[file]);
											thematicLayerKmlObjects[file]=null;
										}
									}	
								});
							
							
							},
							label: "Congress"
						});
		

		var elevationContours = new ToggleButton({
					id:"njElevationContoursButton",
					showLabel: true,
					checked: false,
					iconClass:'dijitCheckBoxIcon',
					onChange: function(){
								require(["dojo/dom"], function(dom){
					
									var file = 'NJ_Elevation';
									var url = 'http://commondatastorage.googleapis.com/td02/NJ/Roads,%20Wetlands%20&%20Misc%20KML/NJ_Elevation_Contours.kml';

									if(document.getElementById("njElevationContoursButton").checked){
										loadThematicOverlays(url,file)
									}else{
										if(thematicLayerKmlObjects[file]){
											ge.getFeatures().removeChild(thematicLayerKmlObjects[file]);
											thematicLayerKmlObjects[file]=null;
										}
									}	
								});								
								
								},
					label: "Elevation Countours"
				});

		var municipalBoundaries = new ToggleButton({
					id:"municipalBoundaries",
					showLabel: true,
					checked: false,
					iconClass:'dijitCheckBoxIcon',
					onChange: function(){
								
								require(["dojo/dom"], function(dom){
					
									var file = 'NJ_MunicipalBoundaries';
									var url = 'http://commondatastorage.googleapis.com/td02/NJ/Roads,%20Wetlands%20&%20Misc%20KML/NJ_Municipal_Boundaries.kml';
									
									if(document.getElementById("municipalBoundaries").checked){
										loadThematicOverlays(url,file)
									}else{
										if(thematicLayerKmlObjects[file]){
											ge.getFeatures().removeChild(thematicLayerKmlObjects[file]);
											thematicLayerKmlObjects[file]=null;
										}
									}	
								});										
							
							},
					label: "Municipal Boundaries"
				});

		var sewerFac = new ToggleButton({
					id:"sewerFac",
					showLabel: true,
					checked: false,
					iconClass:'dijitCheckBoxIcon',
					onChange: function(){
								require(["dojo/dom"], function(dom){
					
									var file = 'NJ_StateSewerFac';
									var url = 'http://commondatastorage.googleapis.com/td02/NJ/Roads,%20Wetlands%20&%20Misc%20KML/StateSewerFac.kml';
									
									if(document.getElementById("sewerFac").checked){
										loadThematicOverlays(url,file)
									}else{
										if(thematicLayerKmlObjects[file]){
											ge.getFeatures().removeChild(thematicLayerKmlObjects[file]);
											thematicLayerKmlObjects[file]=null;
										}
									}	
								});									
						
						},
					label: "Sewer Fac"
				});			
		
		njCongress.placeAt(document.getElementById("stateWideLayers"));
		njRail.placeAt(document.getElementById("stateWideLayers"));
		elevationContours.placeAt(document.getElementById("stateWideLayers"))
		municipalBoundaries.placeAt(document.getElementById("stateWideLayers"))
		sewerFac.placeAt(document.getElementById("stateWideLayers"))

		});
	});

}


function parcelLayersDropDown(state){
	
	var s = $('<select />');
	
	if(document.getElementById("parcelLayersDropDown")){$("#parcelLayersCell").empty();}
	
	jQuery(s).attr("id","parcelLayersDropDown");
	
	var file = "";
	
	if(state == 'DC'){
		var data = {
		'Select a Town¨ ': '',
		'NE':'NE',
		'NW':'NW',
		'SE':'SE',
		'SW':'SW',
		'QUADNULL':'QUADNULL'
		}
		file = 'DC_';
	}else if(state == 'MA'){
		var data = {	
		'Select a Town¨ ': '',
		'Abington': 'P001',
		 'Acton': 'P002',
		 'Acushnet': 'P003',
		 'Adams': 'P004',
		 'Agawam': 'P005',
		 'Alford': 'P006',
		 'Amesbury': 'P007',
		 'Amherst': 'P008',
		 'Andover': 'P009',
		 'Aquinnah': 'P104',
		 'Arlington': 'P10',
		 'Ashburnham': 'P011',
		 'Ashby': 'P012',
		 'Ashfield': 'P013',
		 'Ashland': 'P014',
		 'Athol': 'P015',
		 'Attleboro': 'P016',
		 'Auburn': 'P017',
		 'Avon': 'P018',
		 'Ayer': 'P019',
		 'Barnstable': 'P020',
		 'Barre': 'P021',
		 'Becket': 'P022',
		 'Bedford': 'P023',
		 'Belchertown': 'P024',
		 'Bellingham': 'P025',
		 'Belmont': 'P026',
		 'Berkley': 'P027',
		 'Berlin': 'P028',
		 'Bernardston': 'P029',
		 'Beverly': 'P030',
		 'Billerica': 'P031',
		 'Blackstone': 'P032',
		 'Blandford': 'P033',
		 'Bolton': 'P034',
		 'Boston': 'P035',
		 'Bourne': 'P036',
		 'Boxborough': 'P037',
		 'Boxford': 'P038',
		 'Boylston': 'P039',
		 'Braintree': 'P040',
		 'Brewster': 'P041',
		 'Bridgewater': 'P042',
		 'Brimfield': 'P043',
		 'Brockton': 'P044',
		 'Brookfield': 'P045',
		 'Brookline': 'P046',
		 'Buckland': 'P047',
		 'Burlington': 'P048',
		 'Cambridge': 'P049',
		 'Canton': 'P050',
		 'Carlisle': 'P051',
		 'Carver': 'P052',
		 'Charlemont': 'P053',
		 'Charlton': 'P054',
		 'Chatham': 'P055',
		 'Chelmsford': 'P056',
		 'Chelsea': 'P057',
		 'Cheshire': 'P058',
		 'Chester': 'P059',
		 'Chesterfield': 'P060',
		 'Chicopee': 'P061',
		 'Chilmark': 'P062',
		 'Clarksburg': 'P063',
		 'Clinton': 'P064',
		 'Cohasset': 'P065',
		 'Colrain': 'P066',
		 'Concord': 'P067',
		 'Conway': 'P068',
		 'Cummington': 'P069',
		 'Calton': 'P070',
		 'Danvers': 'P071',
		 'Dartmouth': 'P072',
		 'Dedham': 'P073',
		 'Deerfield': 'P074',
		 'Dennis': 'P075',
		 'Dighton': 'P076',
		 'Douglas': 'P077',
		 'Dover': 'P078',
		 'Dracut': 'P079',
		 'Dudley': 'P080',
		 'Dunstable': 'P081',
		 'Duxbury': 'P082',
		 'East Bridgewater': 'P083',
		 'East Brookfield': 'P084',
		 'East Longmeadow': 'P085',
		 'Eastham': 'P086',
		 'Easthampton': 'P087',
		 'Easton': 'P088',
		 'Edgartown': 'P089',
		 'Egremont': 'P090',
		 'Erving': 'P091',
		 'Essex': 'P092',
		 'Everett': 'P093',
		 'Fairhaven': 'P094',
		 'Fall river': 'P095',
		 'Falmouth': 'P096',
		 'Fitchburg': 'P097',
		 'Florida': 'P098',
		 'Foxborough': 'P099',
		 'Framingham': 'P100',
		 'Franklin': 'P101',
		 'Freetown': 'P102',
		 'Gardner': 'P103',
		 'Georgetown': 'P105',
		 'Gill': 'P106',
		 'Gloucester': 'P107',
		 'Goshen': 'P108',
		 'Gosnold': 'P109',
		 'Grafton': 'P110',
		 'Granby': 'P111',
		 'Granville': 'P112',
		 'Great_barrington': 'P113',
		 'Greenfield': 'P114',
		 'Groton': 'P115',
		 'Groveland': 'P116',
		 'Hadley': 'P117',
		 'Halifax': 'P118',
		 'Hamilton': 'P119',
		 'Hampden': 'P120',
		 'Hancock': 'P121',
		 'Hanover': 'P122',
		 'Hanson': 'P123',
		 'Hardwick': 'P124',
		 'Harvard': 'P125',
		 'Harwich': 'P126',
		 'Hatfield': 'P127',
		 'Haverhill': 'P128',
		 'Hawley': 'P129',
		 'Heath': 'P130',
		 'Hingham': 'P131',
		 'Hinsdale': 'P132',
		 'Holbrook': 'P133',
		 'Holden': 'P134',
		 'Holland': 'P135',
		 'Holliston': 'P136',
		 'Holyoke': 'P137',
		 'Hopedale': 'P138',
		 'Hopkinton': 'P139',
		 'Hubbardston': 'P140',
		 'Hudson': 'P141',
		 'Hull': 'P142',
		 'Huntington': 'P143',
		 'Ipswich': 'P144',
		 'Kingston': 'P145',
		 'Lakeville': 'P146',
		 'Lancaster': 'P147',
		 'Lanesborough': 'P148',
		 'Lawrence': 'P149',
		 'Lee': 'P150',
		 'Leicester': 'P151',
		 'Lenox': 'P152',
		 'Leominster': 'P153',
		 'Leverett': 'P154',
		 'Lexington': 'P155',
		 'Leyden': 'P156',
		 'Lincoln': 'P157',
		 'Littleton': 'P158',
		 'Longmeadow': 'P159',
		 'Lowell': 'P160',
		 'Ludlow': 'P161',
		 'Lunenburg': 'P162',
		 'Lynn': 'P163',
		 'Lynnfield': 'P164',
		 'Malden': 'P165',
		 'Manchester': 'P166',
		 'Mansfield': 'P167',
		 'Marblehead': 'P168',
		 'Marion': 'P169',
		 'Marlborough': 'P170',
		 'Marshfield': 'P171',
		 'Mashpee': 'P172',
		 'Mattapoisett': 'P173',
		 'Maynard': 'P174',
		 'Medfield': 'P175',
		 'Medford': 'P176',
		 'Medway': 'P177',
		 'Melrose': 'P178',
		 'Mendon': 'P179',
		 'Merrimac': 'P180',
		 'Methuen': 'P181',
		 'Middleborough': 'P182',
		 'Middlefield': 'P183',
		 'Middleton': 'P184',
		 'Milford': 'P185',
		 'Millbury': 'P186',
		 'Millis': 'P187',
		 'Millville': 'P188',
		 'Milton': 'P189',
		 'Monroe': 'P190',
		 'Monson': 'P191',
		 'Montague': 'P192',
		 'Monterey': 'P193',
		 'Montgomery': 'P194',
		 'Mount Washington': 'P195',
		 'Nahant': 'P196',
		 'Nantucket': 'P197',
		 'Natick': 'P198',
		 'Needham': 'P199',
		 'New Ashford': 'P200',
		 'New Bedford': 'P201',
		 'New Braintree': 'P202',
		 'New Marlborough': 'P203',
		 'New Salem': 'P204',
		 'Newbury': 'P205',
		 'Newburyport': 'P206',
		 'Newton': 'P207',
		 'Norfolk': 'P208',
		 'North Adams': 'P209',
		 'North Andover': 'P210',
		 'North Attleborough': 'P211',
		 'North Brookfield': 'P212',
		 'North Reading': 'P213',
		 'Northampton': 'P214',
		 'Northborough': 'P215',
		 'Northbridge': 'P216',
		 'Northfield': 'P217',
		 'Norton': 'P218',
		 'Norwell': 'P219',
		 'Norwood': 'P220',
		 'Oak Bluffs': 'P221',
		 'Oakham': 'P222',
		 'Orange': 'P223',
		 'Orleans': 'P224',
		 'Otis': 'P225',
		 'Oxford': 'P226',
		 'Palmer': 'P227',
		 'Paxton': 'P228',
		 'Peabody': 'P229',
		 'Pelham': 'P230',
		 'Pembroke': 'P231',
		 'Pepperell': 'P232',
		 'Peru': 'P233',
		 'Petersham': 'P234',
		 'Phillipston': 'P235',
		 'Pittsfield': 'P236',
		 'Plainfield': 'P237',
		 'Plainville': 'P238',
		 'Plymouth': 'P239',
		 'Plympton': 'P240',
		 'Princeton': 'P241',
		 'Provincetown': 'P242',
		 'Quincy': 'P243',
		 'Randolph': 'P244',
		 'Raynham': 'P245',
		 'Reading': 'P246',
		 'Rehoboth': 'P247',
		 'Revere': 'P248',
		 'Richmond': 'P249',
		 'Rochester': 'P250',
		 'Rockland': 'P251',
		 'Rockport': 'P252',
		 'Rowe': 'P253',
		 'Rowley': 'P254',
		 'Royalston': 'P255',
		 'Russell': 'P256',
		 'Rutland': 'P257',
		 'Salem': 'P258',
		 'Salisbury': 'P259',
		 'Sandisfield': 'P260',
		 'Sandwich': 'P261',
		 'Saugus': 'P262',
		 'Savoy': 'P263',
		 'Scituate': 'P264',
		 'Seekonk': 'P265',
		 'Sharon': 'P266',
		 'Sheffield': 'P267',
		 'Shelburne': 'P268',
		 'Sherborn': 'P269',
		 'Shirley': 'P270',
		 'Shrewsbury': 'P271',
		 'Shutesbury': 'P272',
		 'Somerset': 'P273',
		 'Somerville': 'P274',
		 'South Hadley': 'P275',
		 'Southampton': 'P276',
		 'Southborough': 'P277',
		 'Southbridge': 'P278',
		 'Southwick': 'P279',
		 'Spencer': 'P280',
		 'Springfield': 'P281',
		 'Sterling': 'P282',
		 'Stockbridge': 'P283',
		 'Stoneham': 'P284',
		 'Stoughton': 'P285',
		 'Stow': 'P286',
		 'Sturbridge': 'P287',
		 'Sudbury': 'P288',
		 'Sunderland': 'P289',
		 'Sutton': 'P290',
		 'Swampscott': 'P291',
		 'Swansea': 'P292',
		 'Taunton': 'P293',
		 'Templeton': 'P294',
		 'Tewksbury': 'P295',
		 'Tisbury': 'P296',
		 'Tolland': 'P297',
		 'Topsfield': 'P298',
		 'Townsend': 'P299',
		 'Truro': 'P300',
		 'Tyngsborough': 'P301',
		 'Tyringham': 'P302',
		 'Upton': 'P303',
		 'Uxbridge': 'P304',
		 'Wakefield': 'P305',
		 'Wales': 'P306',
		 'Walpole': 'P307',
		 'Waltham': 'P308',
		 'Ware': 'P309',
		 'Wareham': 'P310',
		 'Warren': 'P311',
		 'Warwick': 'P312',
		 'Washington': 'P313',
		 'Watertown': 'P314',
		 'Wayland': 'P315',
		 'Webster': 'P316',
		 'Wellesley': 'P317',
		 'Wellfleet': 'P318',
		 'Wendell': 'P319',
		 'Wenham': 'P320',
		 'West Boylston': 'P321',
		 'West Bridgewater': 'P322',
		 'West Brookfield': 'P323',
		 'West Newbury': 'P324',
		 'West Springfield': 'P325',
		 'West Stockbridge': 'P326',
		 'West Tisbury': 'P327',
		 'Westborough': 'P328',
		 'Westfield': 'P329',
		 'Westford': 'P330',
		 'Westhampton': 'P331',
		 'Westminster': 'P332',
		 'Weston': 'P333',
		 'Westport': 'P334',
		 'Westwood': 'P335',
		 'Weymouth': 'P336',
		 'Whately': 'P337',
		 'Whitman': 'P338',
		 'Wilbraham': 'P339',
		 'Williamsburg': 'P340',
		 'Williamstown': 'P341',
		 'Wilmington': 'P342',
		 'Winchendon': 'P343',
		 'Winchester': 'P344',
		 'Windsor': 'P345',
		 'Winthrop': 'P346',
		 'Woburn': 'P347',
		 'Worcester': 'P348',
		 'Worthington': 'P349',
		 'Wrentham': 'P350',
		 'Yarmouth': 'P351'
		}
		file = 'MA_';
	}else if(state == 'NJ'){
			var data = {
		'Select a Town¨ ': '',			
		'absecon city': 'NP0101',
		 'atlantic city': 'NP0102',
		 'brigantine city': 'NP0103',
		 'buena boro': 'NP0104',
		 'buena vista': 'NP0105',
		 'corbin city': 'NP0106',
		 'egg harbor': 'NP0107',
		 'egg harbor': 'NP0108',
		 'estell manor': 'NP0109',
		 'folsom boro': 'NP0110',
		 'galloway twp': 'NP0111',
		 'hamilton twp': 'NP0112',
		 'hammonton town': 'NP0113',
		 'linwood city': 'NP0114',
		 'longport boro': 'NP0115',
		 'margate city': 'NP0116',
		 'mullica twp': 'NP0117',
		 'northfield city': 'NP0118',
		 'pleasantville city': 'NP0119',
		 'port republic': 'NP0120',
		 'somers point': 'NP0121',
		 'ventnor city': 'NP0122',
		 'weymouth twp': 'NP0123',
		 'allendale boro': 'NP0201',
		 'alpine boro': 'NP0202',
		 'bergenfield boro': 'NP0203',
		 'bogota boro': 'NP0204',
		 'carlstadt boro': 'NP0205',
		 'cliffside park': 'NP0206',
		 'closter boro': 'NP0207',
		 'cresskill boro': 'NP0208',
		 'demarest boro': 'NP0209',
		 'dumont boro': 'NP0210',
		 'elmwood park': 'NP0211',
		 'e rutherford': 'NP0212',
		 'edgewater boro': 'NP0213',
		 'emerson boro': 'NP0214',
		 'englewood city': 'NP0215',
		 'englewood cliffs': 'NP0216',
		 'fairlawn boro': 'NP0217',
		 'fairview boro': 'NP0218',
		 'fort lee': 'NP0219',
		 'franklin lakes': 'NP0220',
		 'garfield city': 'NP0221',
		 'glen rock': 'NP0222',
		 'hackensack city': 'NP0223',
		 'harrington park': 'NP0224',
		 'hasbrouck hghts': 'NP0225',
		 'haworth boro': 'NP0226',
		 'hillsdale boro': 'NP0227',
		 'hohokus boro': 'NP0228',
		 'leonia boro': 'NP0229',
		 'little ferry': 'NP0230',
		 'lodi boro': 'NP0231',
		 'lyndhurst twp': 'NP0232',
		 'mahwah twp': 'NP0233',
		 'maywood boro': 'NP0234',
		 'midland park': 'NP0235',
		 'montvale boro': 'NP0236',
		 'moonachie boro': 'NP0237',
		 'new milford': 'NP0238',
		 'north arlington': 'NP0239',
		 'northvale boro': 'NP0240',
		 'norwood boro': 'NP0241',
		 'oakland boro': 'NP0242',
		 'old tappan': 'NP0243',
		 'oradell boro': 'NP0244',
		 'palisades park': 'NP0245',
		 'paramus boro': 'NP0246',
		 'park ridge': 'NP0247',
		 'ramsey boro': 'NP0248',
		 'ridgefield boro': 'NP0249',
		 'ridgefield park': 'NP0250',
		 'ridgewood village': 'NP0251',
		 'riveredge boro': 'NP0252',
		 'rivervale twp': 'NP0253',
		 'rochelle park': 'NP0254',
		 'rockleigh boro': 'NP0255',
		 'rutherford boro': 'NP0256',
		 'saddle brook': 'NP0257',
		 'saddle river': 'NP0258',
		 'so hackensack': 'NP0259',
		 'teaneck twp': 'NP0260',
		 'tenafly boro': 'NP0261',
		 'teterboro boro': 'NP0262',
		 'upper saddle': 'NP0263',
		 'waldwick boro': 'NP0264',
		 'wallington boro': 'NP0265',
		 'washington twp': 'NP0266',
		 'westwood boro': 'NP0267',
		 'woodcliff lake': 'NP0268',
		 'wood ridge': 'NP0269',
		 'wyckoff twp': 'NP0270',
		 'bass river': 'NP0301',
		 'beverly city': 'NP0302',
		 'bordentown city': 'NP0303',
		 'bordentown twp': 'NP0304',
		 'burlington city': 'NP0305',
		 'burlington twp': 'NP0306',
		 'chesterfield twp': 'NP0307',
		 'cinnaminson twp': 'NP0308',
		 'delanco twp': 'NP0309',
		 'delran twp': 'NP0310',
		 'eastampton twp': 'NP0311',
		 'edgewater park': 'NP0312',
		 'evesham twp': 'NP0313',
		 'fieldsboro boro': 'NP0314',
		 'florence twp': 'NP0315',
		 'hainesport twp': 'NP0316',
		 'lumberton twp': 'NP0317',
		 'mansfield twp': 'NP0318',
		 'maple shade': 'NP0319',
		 'medford twp': 'NP0320',
		 'medford lakes': 'NP0321',
		 'moorestown twp': 'NP0322',
		 'mt holly': 'NP0323',
		 'mt laurel': 'NP0324',
		 'new hanover': 'NP0325',
		 'no hanover': 'NP0326',
		 'palmyra boro': 'NP0327',
		 'pemberton boro': 'NP0328',
		 'pemberton twp': 'NP0329',
		 'riverside twp': 'NP0330',
		 'riverton boro': 'NP0331',
		 'shamong twp': 'NP0332',
		 'southampton twp': 'NP0333',
		 'springfield twp': 'NP0334',
		 'tabernacle twp': 'NP0335',
		 'washington twp': 'NP0336',
		 'westampton twp': 'NP0337',
		 'willingboro twp': 'NP0338',
		 'woodland twp': 'NP0339',
		 'wrightstown boro': 'NP0340',
		 'audubon boro': 'NP0401',
		 'audubon park': 'NP0402',
		 'barrington boro': 'NP0403',
		 'bellmawr boro': 'NP0404',
		 'berlin boro': 'NP0405',
		 'berlin twp': 'NP0406',
		 'brooklawn boro': 'NP0407',
		 'camden city': 'NP0408',
		 'cherry hill': 'NP0409',
		 'chesilhurst boro': 'NP0410',
		 'clementon boro': 'NP0411',
		 'collingswood boro': 'NP0412',
		 'gibbsboro boro': 'NP0413',
		 'gloucester city': 'NP0414',
		 'gloucester twp': 'NP0415',
		 'haddon twp': 'NP0416',
		 'haddonfield boro': 'NP0417',
		 'haddon heights': 'NP0418',
		 'hi nella': 'NP0419',
		 'laurel springs': 'NP0420',
		 'lawnside boro': 'NP0421',
		 'lindenwold boro': 'NP0422',
		 'magnolia boro': 'NP0423',
		 'merchantville boro': 'NP0424',
		 'mount ephraim': 'NP0425',
		 'oaklyn boro': 'NP0426',
		 'pennsauken twp': 'NP0427',
		 'pine hill': 'NP0428',
		 'pine valley': 'NP0429',
		 'runnemede boro': 'NP0430',
		 'somerdale boro': 'NP0431',
		 'stratford boro': 'NP0432',
		 'tavistock boro': 'NP0433',
		 'voorhees twp': 'NP0434',
		 'waterford twp': 'NP0435',
		 'winslow twp': 'NP0436',
		 'woodlynne boro': 'NP0437',
		 'avalon boro': 'NP0501',
		 'cape may': 'NP0502',
		 'cape may': 'NP0503',
		 'dennis twp': 'NP0504',
		 'lower twp': 'NP0505',
		 'middle twp': 'NP0506',
		 'north wildwood': 'NP0507',
		 'ocean city': 'NP0508',
		 'sea isle': 'NP0509',
		 'stone harbor': 'NP0510',
		 'upper twp': 'NP0511',
		 'west cape': 'NP0512',
		 'west wildwood': 'NP0513',
		 'wildwood city': 'NP0514',
		 'wildwood crest': 'NP0515',
		 'woodbine boro': 'NP0516',
		 'bridgeton city': 'NP0601',
		 'commercial twp': 'NP0602',
		 'deerfield twp': 'NP0603',
		 'downe twp': 'NP0604',
		 'fairfield twp': 'NP0605',
		 'greenwich twp': 'NP0606',
		 'hopewell twp': 'NP0607',
		 'lawrence twp': 'NP0608',
		 'maurice river': 'NP0609',
		 'millville city': 'NP0610',
		 'shiloh boro': 'NP0611',
		 'stow creek': 'NP0612',
		 'upper deerfield': 'NP0613',
		 'vineland city': 'NP0614',
		 'belleville twp': 'NP0701',
		 'bloomfield twp': 'NP0702',
		 'caldwell boro': 'NP0703',
		 'cedar grove': 'NP0704',
		 'east orange': 'NP0705',
		 'essex fells': 'NP0706',
		 'fairfield twp': 'NP0707',
		 'glen ridge': 'NP0708',
		 'irvington twp': 'NP0709',
		 'livingston twp': 'NP0710',
		 'maplewood twp': 'NP0711',
		 'millburn twp': 'NP0712',
		 'montclair twp': 'NP0713',
		 'newark city': 'NP0714',
		 'north caldwell': 'NP0715',
		 'nutley twp': 'NP0716',
		 'orange city': 'NP0717',
		 'roseland boro': 'NP0718',
		 'south orange': 'NP0719',
		 'verona twp': 'NP0720',
		 'west caldwell': 'NP0721',
		 'west orange': 'NP0722',
		 'clayton boro': 'NP0801',
		 'deptford twp': 'NP0802',
		 'east greenwich': 'NP0803',
		 'elk twp': 'NP0804',
		 'franklin twp': 'NP0805',
		 'glassboro boro': 'NP0806',
		 'greenwich twp': 'NP0807',
		 'harrison twp': 'NP0808',
		 'logan twp': 'NP0809',
		 'mantua twp': 'NP0810',
		 'monroe twp': 'NP0811',
		 'national park': 'NP0812',
		 'newfield boro': 'NP0813',
		 'paulsboro boro': 'NP0814',
		 'pitman boro': 'NP0815',
		 'so harrison': 'NP0816',
		 'swedesboro boro': 'NP0817',
		 'washington twp': 'NP0818',
		 'wenonah boro': 'NP0819',
		 'west deptford': 'NP0820',
		 'westville boro': 'NP0821',
		 'woodbury city': 'NP0822',
		 'woodbury heights': 'NP0823',
		 'woolwich twp': 'NP0824',
		 'bayonne city': 'NP0901',
		 'east newark': 'NP0902',
		 'guttenberg town': 'NP0903',
		 'harrison town': 'NP0904',
		 'hoboken city': 'NP0905',
		 'jersey city': 'NP0906',
		 'kearny town': 'NP0907',
		 'north bergen': 'NP0908',
		 'secaucus town': 'NP0909',
		 'union city': 'NP0910',
		 'weehawken twp': 'NP0911',
		 'west new': 'NP0912',
		 'alexandria twp': 'NP1001',
		 'bethlehem twp': 'NP1002',
		 'bloomsbury boro': 'NP1003',
		 'califon boro': 'NP1004',
		 'clinton town': 'NP1005',
		 'clinton twp': 'NP1006',
		 'delaware twp': 'NP1007',
		 'east amwell': 'NP1008',
		 'flemington boro': 'NP1009',
		 'franklin twp': 'NP1010',
		 'frenchtown boro': 'NP1011',
		 'glen gardner': 'NP1012',
		 'hampton boro': 'NP1013',
		 'high bridge': 'NP1014',
		 'holland twp': 'NP1015',
		 'kingwood twp': 'NP1016',
		 'lambertville city': 'NP1017',
		 'lebanon boro': 'NP1018',
		 'lebanon twp': 'NP1019',
		 'milford boro': 'NP1020',
		 'raritan twp': 'NP1021',
		 'readington twp': 'NP1022',
		 'stockton boro': 'NP1023',
		 'tewksbury twp': 'NP1024',
		 'union twp': 'NP1025',
		 'west amwell': 'NP1026',
		 'east windsor': 'NP1101',
		 'ewing twp': 'NP1102',
		 'hamilton twp': 'NP1103',
		 'hightstown boro': 'NP1104',
		 'hopewell boro': 'NP1105',
		 'hopewell twp': 'NP1106',
		 'lawrence twp': 'NP1107',
		 'pennington boro': 'NP1108',
		 'princeton boro': 'NP1109',
		 'princeton twp': 'NP1110',
		 'trenton city': 'NP1111',
		 'robbinsville twp': 'NP1112',
		 'west windsor': 'NP1113',
		 'carteret boro': 'NP1201',
		 'cranbury twp': 'NP1202',
		 'dunellen boro': 'NP1203',
		 'east brunswick': 'NP1204',
		 'edison twp': 'NP1205',
		 'helmetta boro': 'NP1206',
		 'highland park': 'NP1207',
		 'jamesburg boro': 'NP1208',
		 'metuchen boro': 'NP1209',
		 'middlesex boro': 'NP1210',
		 'milltown boro': 'NP1211',
		 'monroe twp': 'NP1212',
		 'new brunswick': 'NP1213',
		 'north brunswick': 'NP1214',
		 'old bridge': 'NP1215',
		 'perth amboy': 'NP1216',
		 'piscataway twp': 'NP1217',
		 'plainsboro twp': 'NP1218',
		 'sayreville boro': 'NP1219',
		 'south amboy': 'NP1220',
		 'south brunswick': 'NP1221',
		 'south plainfield': 'NP1222',
		 'south river': 'NP1223',
		 'spotswood boro': 'NP1224',
		 'woodbridge twp': 'NP1225',
		 'aberdeen twp': 'NP1301',
		 'allenhurst boro': 'NP1302',
		 'allentown boro': 'NP1303',
		 'asbury park': 'NP1304',
		 'atlantic highlands': 'NP1305',
		 'avon by': 'NP1306',
		 'belmar boro': 'NP1307',
		 'bradley beach': 'NP1308',
		 'brielle boro': 'NP1309',
		 'colts neck': 'NP1310',
		 'deal boro': 'NP1311',
		 'eatontown boro': 'NP1312',
		 'englishtown boro': 'NP1313',
		 'fair haven': 'NP1314',
		 'farmingdale boro': 'NP1315',
		 'freehold boro': 'NP1316',
		 'freehold twp': 'NP1317',
		 'hazlet twp': 'NP1318',
		 'highlands boro': 'NP1319',
		 'holmdel twp': 'NP1320',
		 'howell twp': 'NP1321',
		 'interlaken boro': 'NP1322',
		 'keansburg boro': 'NP1323',
		 'keyport boro': 'NP1324',
		 'little silver': 'NP1325',
		 'loch arbour': 'NP1326',
		 'long branch': 'NP1327',
		 'manalapan twp': 'NP1328',
		 'manasquan boro': 'NP1329',
		 'marlboro twp': 'NP1330',
		 'matawan boro': 'NP1331',
		 'middletown twp': 'NP1332',
		 'millstone twp': 'NP1333',
		 'monmouth beach': 'NP1334',
		 'neptune twp': 'NP1335',
		 'neptune city': 'NP1336',
		 'ocean twp': 'NP1337',
		 'oceanport boro': 'NP1338',
		 'red bank': 'NP1339',
		 'roosevelt boro': 'NP1340',
		 'rumson boro': 'NP1341',
		 'sea bright': 'NP1342',
		 'sea girt': 'NP1343',
		 'shrewsbury boro': 'NP1344',
		 'shrewsbury twp': 'NP1345',
		 'lake como': 'NP1346',
		 'spring lake': 'NP1347',
		 'spring lake': 'NP1348',
		 'tinton falls': 'NP1349',
		 'union beach': 'NP1350',
		 'upper freehold': 'NP1351',
		 'wall twp': 'NP1352',
		 'west long': 'NP1353',
		 'boonton town': 'NP1401',
		 'boonton twp': 'NP1402',
		 'butler boro': 'NP1403',
		 'chatham boro': 'NP1404',
		 'chatham twp': 'NP1405',
		 'chester boro': 'NP1406',
		 'chester twp': 'NP1407',
		 'denville twp': 'NP1408',
		 'dover town': 'NP1409',
		 'east hanover': 'NP1410',
		 'florham park': 'NP1411',
		 'hanover twp': 'NP1412',
		 'harding twp': 'NP1413',
		 'jefferson twp': 'NP1414',
		 'kinnelon boro': 'NP1415',
		 'lincoln park': 'NP1416',
		 'madison boro': 'NP1417',
		 'mendham boro': 'NP1418',
		 'mendham twp': 'NP1419',
		 'mine hill': 'NP1420',
		 'montville twp': 'NP1421',
		 'morris twp': 'NP1422',
		 'morris plains': 'NP1423',
		 'morristown town': 'NP1424',
		 'mountain lakes': 'NP1425',
		 'mount arlington': 'NP1426',
		 'mount olive': 'NP1427',
		 'netcong boro': 'NP1428',
		 'parsippany tr': 'NP1429',
		 'long hill': 'NP1430',
		 'pequannock twp': 'NP1431',
		 'randolph twp': 'NP1432',
		 'riverdale boro': 'NP1433',
		 'rockaway boro': 'NP1434',
		 'rockaway twp': 'NP1435',
		 'roxbury twp': 'NP1436',
		 'victory gardens': 'NP1437',
		 'washington twp': 'NP1438',
		 'wharton boro': 'NP1439',
		 'barnegat twp': 'NP1501',
		 'barnegat light': 'NP1502',
		 'bay head': 'NP1503',
		 'beach haven': 'NP1504',
		 'beachwood boro': 'NP1505',
		 'berkeley twp': 'NP1506',
		 'brick twp': 'NP1507',
		 'toms river': 'NP1508',
		 'eagleswood twp': 'NP1509',
		 'harvey cedars': 'NP1510',
		 'island heights': 'NP1511',
		 'jackson twp': 'NP1512',
		 'lacey twp': 'NP1513',
		 'lakehurst boro': 'NP1514',
		 'lakewood twp': 'NP1515',
		 'lavallette boro': 'NP1516',
		 'little egg': 'NP1517',
		 'long beach': 'NP1518',
		 'manchester twp': 'NP1519',
		 'mantoloking boro': 'NP1520',
		 'ocean twp': 'NP1521',
		 'ocean gate': 'NP1522',
		 'pine beach': 'NP1523',
		 'plumsted twp': 'NP1524',
		 'point pleasant': 'NP1525',
		 'pt pleasant': 'NP1526',
		 'seaside heights': 'NP1527',
		 'seaside park': 'NP1528',
		 'ship bottom': 'NP1529',
		 'south toms': 'NP1530',
		 'stafford twp': 'NP1531',
		 'surf city': 'NP1532',
		 'tuckerton boro': 'NP1533',
		 'bloomingdale boro': 'NP1601',
		 'clifton city': 'NP1602',
		 'haledon boro': 'NP1603',
		 'hawthorne boro': 'NP1604',
		 'little falls': 'NP1605',
		 'north haledon': 'NP1606',
		 'passaic city': 'NP1607',
		 'paterson city': 'NP1608',
		 'pompton lakes': 'NP1609',
		 'prospect park': 'NP1610',
		 'ringwood boro': 'NP1611',
		 'totowa boro': 'NP1612',
		 'wanaque boro': 'NP1613',
		 'wayne twp': 'NP1614',
		 'west milford': 'NP1615',
		 'woodland park': 'NP1616',
		 'alloway township': 'NP1701',
		 'carneys point': 'NP1702',
		 'elmer boro': 'NP1703',
		 'elsinboro twp': 'NP1704',
		 'lower alloway': 'NP1705',
		 'mannington twp': 'NP1706',
		 'oldmans twp': 'NP1707',
		 'penns grove': 'NP1708',
		 'pennsville twp': 'NP1709',
		 'pilesgrove twp': 'NP1710',
		 'pittsgrove twp': 'NP1711',
		 'quinton twp': 'NP1712',
		 'salem city': 'NP1713',
		 'upper pittsgrove': 'NP1714',
		 'woodstown boro': 'NP1715',
		 'bedminster twp': 'NP1801',
		 'bernards twp': 'NP1802',
		 'bernardsville boro': 'NP1803',
		 'bound brook': 'NP1804',
		 'branchburg twp': 'NP1805',
		 'bridgewater twp': 'NP1806',
		 'far hills': 'NP1807',
		 'franklin twp': 'NP1808',
		 'green brook': 'NP1809',
		 'hillsborough twp': 'NP1810',
		 'manville boro': 'NP1811',
		 'millstone boro': 'NP1812',
		 'montgomery twp': 'NP1813',
		 'north plainfield': 'NP1814',
		 'peapack gladstone': 'NP1815',
		 'raritan boro': 'NP1816',
		 'rocky hill': 'NP1817',
		 'somerville boro': 'NP1818',
		 'so bound': 'NP1819',
		 'warren twp': 'NP1820',
		 'watchung boro': 'NP1821',
		 'andover boro': 'NP1901',
		 'andover twp': 'NP1902',
		 'branchville boro': 'NP1903',
		 'byram twp': 'NP1904',
		 'frankford twp': 'NP1905',
		 'franklin boro': 'NP1906',
		 'fredon twp': 'NP1907',
		 'green twp': 'NP1908',
		 'hamburg boro': 'NP1909',
		 'hampton twp': 'NP1910',
		 'hardyston twp': 'NP1911',
		 'hopatcong boro': 'NP1912',
		 'lafayette twp': 'NP1913',
		 'montague twp': 'NP1914',
		 'newton town': 'NP1915',
		 'ogdensburg boro': 'NP1916',
		 'sandyston twp': 'NP1917',
		 'sparta twp': 'NP1918',
		 'stanhope boro': 'NP1919',
		 'stillwater twp': 'NP1920',
		 'sussex boro': 'NP1921',
		 'vernon twp': 'NP1922',
		 'walpack twp': 'NP1923',
		 'wantage twp': 'NP1924',
		 'berkeley heights': 'NP2001',
		 'clark twp': 'NP2002',
		 'cranford twp': 'NP2003',
		 'elizabeth city': 'NP2004',
		 'fanwood boro': 'NP2005',
		 'garwood boro': 'NP2006',
		 'hillside twp': 'NP2007',
		 'kenilworth boro': 'NP2008',
		 'linden city': 'NP2009',
		 'mountainside boro': 'NP2010',
		 'new providence': 'NP2011',
		 'plainfield city': 'NP2012',
		 'rahway city': 'NP2013',
		 'roselle boro': 'NP2014',
		 'roselle park': 'NP2015',
		 'scotch plains': 'NP2016',
		 'springfield twp': 'NP2017',
		 'summit city': 'NP2018',
		 'union twp': 'NP2019',
		 'westfield town': 'NP2020',
		 'winfield twp': 'NP2021',
		 'allamuchy twp': 'NP2101',
		 'alpha boro': 'NP2102',
		 'belvidere town': 'NP2103',
		 'blairstown twp': 'NP2104',
		 'franklin twp': 'NP2105',
		 'frelinghuysen twp': 'NP2106',
		 'greenwich twp': 'NP2107',
		 'hackettstown town': 'NP2108',
		 'hardwick twp': 'NP2109',
		 'harmony twp': 'NP2110',
		 'hope twp': 'NP2111',
		 'independence twp': 'NP2112',
		 'knowlton twp': 'NP2113',
		 'liberty twp': 'NP2114',
		 'lopatcong twp': 'NP2115',
		 'mansfield twp': 'NP2116',
		 'oxford twp': 'NP2117',
		 'phillipsburg town': 'NP2119',
		 'pohatcong twp': 'NP2120',
		 'washington boro': 'NP2121',
		 'washington twp': 'NP2122',
		 'white twp': 'NP2123'
	}	
		file = 'NJ_';
	}else{
		//town hasn't been added yet
	}
	

	
	for(var val in data) {
		$('<option />', {value: data[val], text:val }).appendTo(s);
	}
	
	s.change(function(){
		var townNumber = $('select[id="parcelLayersDropDown"]').val();
		if(townNumber != ''){
			file = file + townNumber;
			if(state == 'MA'){var kmlURL = 'http://commondatastorage.googleapis.com/td01/Parcel%20%26%20Road%20Town-By-Town/'+ townNumber +'.kml'}
			else if(state == 'DC'){var kmlURL = 'http://commondatastorage.googleapis.com/td02/DC/Parcel%20Layers/' +file +'.kml'}
			else if(state == 'NJ'){var kmlURL = 'http://commondatastorage.googleapis.com/td02/NJ/Parcel%20KML/' + townNumber + '.kml'}
			else{var kml = ""}
			parcelLayerLookup(file,kmlURL);		
		}else{
			clearParcelKml();
		}
		
	});
	
	s.appendTo(document.getElementById("parcelLayersCell")); 
}