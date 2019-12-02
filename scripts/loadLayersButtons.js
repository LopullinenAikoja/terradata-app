//
// loadLayersButtons.js
// loading functions, 
//
//
alert("TEST");

function loadLayerButtons(){
	var state = (dijit.byId('stateSelect').attr('value'));
	
	if (state == 'MA'){
		loadMassLayerButtons();
	}else if (state == 'DE'){
		//Delaware
	}else{
		alert("state not added yet");
	}

}

function loadMassLayersButtons(){
	//clear the panels
	
	//progrmatically load state wide layers
	        require(["dijit/form/ToggleButton", "dijit/form/ComboButton", "dijit/Menu", "dijit/MenuItem", "dijit/form/DropDownButton", "dijit/TooltipDialog"], function(ToggleButton, ComboButton, Menu, MenuItem, DropDownButton, TooltipDialog) {
				  var toggleButton = new ToggleButton({
					id:"townlines",
					name:"townlines",
					iconClass: "dijitCheckBoxIcon",
					label: "TownLines",
					checked: fale,
					onClick: function(){}
				}, "toggle");
            toggleButton.startup();
			
			});
	//programatically load county wide layers

}







								
								
