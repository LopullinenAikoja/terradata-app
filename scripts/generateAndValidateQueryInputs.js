
require(["dijit/form/NumberTextBox", "dojo/dom-style", "dojo/domReady!"], function(NumberTextBox, CurrencyTextBox, TimeTextBox, DateTextBox,domStyle) {
	
	var maxresults = new NumberTextBox({
		constraints:{fractional:false},
		style:"width: 10em;" ,
		name: "maxresults",
		invalidMessage:"Max Results must be a number"
		},"maxresults");
	maxresults.startup();
	
	var acerageLowerBound = new NumberTextBox({
		constraints:{fractional:true},
		style:"width: 10em;" ,
		name:"acerageLowerBound",
		invalidMessage:"Acerage must be a number"},"acerageLowerBound");
	acerageLowerBound.startup();
	
	var acerageUpperBound = new NumberTextBox({
		constraints:{fractional:true},
		style:"width: 10em;" ,
		name:"assesmentLowerBound",
		invalidMessage:"Acerage must be a number"},"acerageUpperBound");
	acerageUpperBound.startup();
	
	var assesmentLowerBound = new NumberTextBox({
		constraints:{fractional:true},
		style:"width: 10em;" ,
		name:"assesmentLowerBound",
		invalidMessage:"Assesment value must be a number"},"assesmentLowerBound");
	assesmentLowerBound.startup();
	
	var assesmentUpperBound = new NumberTextBox({
		constraints:{fractional:true},
		style:"width: 10em;" ,
		name:"assesmentUpperBound",
		invalidMessage:"Assesment value must be a number"},"assesmentUpperBound");
	assesmentUpperBound.startup();
	
	var book = new NumberTextBox({
		constraints:{fractional:false},
		style:"width: 10em;" ,
		name:"book",
		invalidMessage:"Book value must be a number"},"book");
	book.startup();
		
	var page = new NumberTextBox({
		constraints:{fractional:false},
		style:"width: 10em;" ,
		name:"page",
		invalidMessage:"Book value must be a number"},"page");
	page.startup();
	
	var searchRadiusLat = new NumberTextBox({
		constraints:{fractional:false},
		disabled:true,
		style:"width: 10em;" ,
		name:"searchRadiusLat",
		invalidMessage:"searchRadiusLat value must be a number"},"searchRadiusLat");
	searchRadiusLat.startup();
	
	var searchRadiusLon = new NumberTextBox({
		constraints:{fractional:true},
		disabled:true,
		style:"width: 10em;" ,
		name:"searchRadiusLon",
		invalidMessage:"searchRadiusLon value must be a number"},"searchRadiusLon");
	searchRadiusLon.startup();

	var searchRadius = new NumberTextBox({
		constraints:{fractional:true},
		style:"width: 10em;" ,
		name:"searchRadius",
		invalidMessage:"searchRadius value must be a number"},"searchRadius");
	searchRadius.startup();
	

});

