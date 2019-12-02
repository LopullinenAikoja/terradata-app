//
// function that will load the counties when the user selects or changes the state
//
//
function stateChange(){

	var state = (dijit.byId('stateSelect').attr('value'));

	if(state == 'DC'){
			$.ajax({
		url:'dpStatus',
		data: $('#queryParams').serialize(),
		dataType:'json',
		success:function(dpStatusReply){
			if(dpStatusReply != null){
				dijit.byId('dpStatus').removeOption(dijit.byId('dpStatus').getOptions());
				//append the entires in dpStatusReply as options to the citydrop down
				dijit.byId("dpStatus").addOption({label: 'Select DP_STATUS',selected:true,value:"",name:'DP_STATUS'});
				for(i=0; i < dpStatusReply.length; i++){	
					dijit.byId("dpStatus").addOption({label: dpStatusReply[i],value:dpStatusReply[i], name:'DP_STATUS'});
					}
				$( "#progress" ).hide();
				}

			}
		});
			$.ajax({
				url:'iTvaldesc',
				data: $('#queryParams').serialize(),
				dataType:'json',
				success:function(iTvaldescReply){
					if(iTvaldescReply != null){
						dijit.byId('itValdesc').removeOption(dijit.byId('itValdesc').getOptions());
						//append the entires in iTvaldescReply as options to the citydrop down
						dijit.byId("itValdesc").addOption({label: 'SelectIT_VALDESC',selected:true,value:"",name:'IT_VALDESC'});
						for(i=0; i < iTvaldescReply.length; i++){	
							//$('<option />', {value: iTvaldescReply[i], text: iTvaldescReply[i]}).appendTo(document.getElementById("city"));
							dijit.byId("itValdesc").addOption({label: iTvaldescReply[i],value:iTvaldescReply[i], name:'IT_VALDESC'});
							}
						$( "#progress" ).hide();
						}

					}
				});
	}




	//
	// When you change a state clear all pre exisiting Kml layers for now
	//
	removeAllFeatures();

	//
	// load coressponding layers:
	// 1. clear box: StateWideLayers and countyLayersBox (its inside the CountyLayersDiv but doesnt include Wetlands so that button always stays there)
	
	//if we were using jquery
	//$("stateWideLayers").empty();
	//$("countyLayersBox").empty();

	//since the buttons are using dojo
	dojo.query('#stateWideLayers').empty(); 
	dojo.query('#countyLayersBox').empty(); 
	
	//document.getElementById("stateWideLayers").empty();
	//document.getElementById("countyLayersBox").empty();
	
	//2. Load the counties drop down and the layers	
	//3. Fill a dropdown in the layers div to let the user load any additional parcels layers in the state

	require(["dojo/ready", "dojo/dom-style", "dijit/registry"], function(ready, domStyle, registry){
		ready(function(){
			var state = (dijit.byId('stateSelect').attr('value'));
			
			//
			//countyDropdown(state) can be found in countySelection.js
			countyDropdown(state);
			
			// stateLayers() can be found in stateLayers.js
			stateLayers(state);

			});
	});	
}