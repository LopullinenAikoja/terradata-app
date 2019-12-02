
require(["dijit/form/ToggleButton", "dijit/form/ComboButton", "dijit/Menu", "dijit/MenuItem", "dijit/form/DropDownButton", "dijit/TooltipDialog"], function(ToggleButton, ComboButton, Menu, MenuItem, DropDownButton, TooltipDialog) {
	var tooltip = new TooltipDialog({
		content: "This is a TooltipDialog. You could even put a form in here!"
	});

var myDialog = new TooltipDialog({
	content:
		'<label for="name">Name:</label> <input data-dojo-type="dijit/form/TextBox" id="name" name="name"><br>' +
		'<label for="hobby">Hobby:</label> <input data-dojo-type="dijit/form/TextBox" id="hobby" name="hobby"><br>' +
		'<button data-dojo-type="dijit/form/Button" type="submit">Save</button>' + 
		'<button id="programmatic"></button>'
});

var layersDropDown = new DropDownButton({
		iconClass: "dijitIconApplication",
		label: "Layers",
		dropDown: myDialog
	}, "layers");
	layersDropDown.startup();
	tooltip.startup();
});
