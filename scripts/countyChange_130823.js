//
// countyChange.js
//
function countyChange(){

	//When the county changes clear all Kml for now
	removeAllFeatures();

	var state = (dijit.byId('stateSelect').attr('value'));
	var county = (dijit.byId('countySelect').attr('value'));
	
	//alert(state);
	//alert(county);
	
	//
	// have an Ajax call to the DP_STATUS handler
	// to fill the values of DP_STATUS drop down
	//
	$.ajax({
		url:'lienTypes',
		data: $('#queryParams').serialize(),
		dataType:'json',
		success:function(lienTypesReply){
			if(lienTypesReply != null){
				var s = $('<select />');
				if(document.getElementById("lienTypes")){$("#lienTypes").empty();}
				
				jQuery(s).attr("id","lienTypes");
				jQuery(s).attr("size","5");
				//jQuery(s).width(250);

				
				//append the entires in lienTypesReply as options to the citydrop down
				$('<option />', {value:"", text: 'Select Lien Type '}).appendTo(s);

				
				for(i=0; i < lienTypesReply.length; i++){	
					$('<option />', {value: lienTypesReply[i], text: lienTypesReply[i]}).appendTo(s);
				}
				$( "#progress" ).hide();
				s.appendTo(document.getElementById("lienTypesCell")); 
				}

			}
		});
		
		
	//
	// have an Ajax call to IT_VALDESC handler
	// to fill the values of IT_VALDESC drop down
	//
	$.ajax({
	url:'wetlandsType',
	data: $('#queryParams').serialize(),
	dataType:'json',
	success:function(wetlandsTypeReply){
		if(wetlandsTypeReply != null){
			var s = $('<select />');
			if(document.getElementById("wetlandsType")){$("#wetlandsType").empty();}
			jQuery(s).attr("id","wetlandsType");
			jQuery(s).attr("size","5");
			//jQuery(s).width(250);
			
			//append the entires in wetlandsType as options to the citydrop down
			$('<option />', {value:"", text: 'Select Wetlands Type '}).appendTo(s);
			for(i=0; i < wetlandsTypeReply.length; i++){	
				$('<option />', {value: wetlandsTypeReply[i], text: wetlandsTypeReply[i]}).appendTo(s);
			}
			$( "#progress" ).hide();
			s.appendTo(document.getElementById("wetlandsTypeBox")); 

			}
		}
	});
	
	
	//
	// These functions will load the towns in the townSelect drop down
	// loadTowns.js
	if(state == 'CT'){
		if(county == 'Fairfield'){}
		else if(county == 'Hartford'){connecticutFairfield();}
		else if(county == 'Litchfield'){connecticutLitchfield();}
		else if(county == 'Middlesex'){connecticutMiddlesex();}
		else if(county == 'NewHaven'){connecticutNewHaven()}
		else if(county == 'NewLondon'){connecticutNewLondon();}
		else if(county == 'Tolland'){connecticutTolland();}
		else if(county == 'Windham'){connecticutWindham();}
		else{alert("county: " + county + " not added yet");}
	}else if(state == 'MA'){ 
		if(county == 'Barnstable'){massBarnstable();}
		else if(county == 'Berkshire'){massBerkshire();}
		else if (county == 'Bristol'){massBristol();}
		else if (county == 'Dukes'){massDukes();}
		else if (county == 'Essex'){massEssex();}
		else if (county == 'Franklin'){massFranklin();}
		else if (county == 'Hampden'){massHampden();}
		else if (county == 'Hampshire'){massHampshire();}
		else if (county == 'Middlesex'){massMiddlesex();}
		else if (county == 'Nantucket'){massNantucket();}
		else if (county == 'Norfolk'){massNorfolk();}
		else if (county == 'Plymouth'){massPlymouth();}
		else if (county == 'Suffolk'){massSuffolk();}
		else if(county == 'Worcester'){massWorcester();}
		else{alert("this county needs to be added");}
	}else if(state == 'DE'){
		if(county == 'Kent'){delawareKent();}
		else if(county == 'NewCastle'){delawareNewCastle();}
		else if(county == 'Sussex'){delawareSussex();}
		else{alert("This county needs to be added");}	
	}else if(state == 'DC'){
		//No towns in DC
		dijit.byId('townSelect').removeOption(dijit.byId('townSelect').getOptions());
			var dcTowns = [
			{
				label:'Select A Town',
				name:'town',
				value:''
			}
			];
			//add new options
			require(["dojo/ready", "dojo/dom-style", "dijit/registry"], function(ready, domStyle, registry){
				ready(function(){
					dijit.byId('townSelect').addOption(dcTowns);
				});
			 });
	}else if(state == 'HI') {
		if(county == 'Kauai'){
			hawaiiKauai();
		}else if(county == 'Kalawao'){
			hawaiiKalawao();
		}else if(county == 'Hawaii'){
			hawaiiHawaii();
		}else if(county == 'Honolulu'){
			hawaiiHonolulu();
		}else if(county == 'Maui'){
			hawaiiMaui();
		}else{
			//alert("county has not been added it yet");
		}
	}else if(state == 'ID'){
		alert("blaine states not ready");
	}else if(state == 'MD'){
		if(county == 'Harford'){
			marylandHarford();
		}else{
			alert("county not ready yet");
		}
	}else if(state == 'MT'){
		alert("Montana Towns not added yet");
	
	}else if(state == 'NJ'){
		if(county == 'Atlantic'){
			newJerseyAtlantic();
		}else if(county == 'Bergen'){
			newJerseyBergen();
		}else if (county == 'Burlington'){
			newJerseyBurlington();
		}else if(county == 'Camden'){
			newJerseyCamden();
		}else if(county == 'CapeMay'){
			newJerseyCapeMay();
		}else if(county == 'Cumberland'){
			newJerseyCumberland();
		}else if(county == 'Essex'){
			newJerseyEssex();
		}else if(county == 'Gloucester'){
			newJerseyGloucester();
		}else if(county == 'Hudson'){
			newJerseyHudson();
		}else if(county == 'Hunterdon'){
			newJerseyHunterdon();
		}else if(county == 'Mercer'){
			newJerseyMercer();
		}else if(county == 'Middlesex'){
			newJerseyMiddlesex();
		}else if(county == 'Monmouth'){
			newJerseyMonmouth();
		}else if(county == 'Morris'){
			newJerseyMorris();
		}else if(county == 'Passaic'){
			newJerseyPassaic();
		}else if(county == 'Salem'){
			newJerseySalem();
		}else if(county == 'Somerset'){
			newJerseySomerset();
		}else if(county == 'Sussex'){
			newJerseySussex();
		}else if(county == 'Union'){
			newJerseyUnion();
		}else if(county == 'Warren'){
			newJerseyWarren();
		}else{
			// alert("county not added yet");
		}
		
	}else{
		alert("STATE NOT ADDED YET");
	}

}