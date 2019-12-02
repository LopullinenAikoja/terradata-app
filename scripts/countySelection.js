//
// This file contains a series of functions that when called will load county values into 
// the county drop down for the user to choose from.
//
//

function countyDropdown(state){
			if(state == 'MA'){massachusettsCounties();}
}


//
// Massachusetts 
//

function massachusettsCounties(){
	
	//clear all previous options if the exist
	$("#countySelect").empty();
	
	var s = $("#countySelect");

	//new options
	var counties = 
	{
		'Select A County':'',
		'Barnstable':'Barnstable',
		'Berkshire':'Berkshire',
		'Bristol':'Bristol',
		'Dukes':'Dukes',
		'Essex':'Essex',
		'Franklin':'Franklin',
		'Hampden':'Hampden',
		'Hampshire':'Hampshire',
		'Middlesex':'Middlesex',
		'Nantucket':'Nantucket',
		'Norfolk':'Norfolk',
		'Plymouth':'Plymouth',
		'Suffolk':'Suffolk',
		'Worcester':'Worcester'
	};
	
	for(var county in counties) {
		$('<option />', {value: counties[county], text:county }).appendTo(s);
	}
	
	s.appendTo($('#countySelectDropDown')); 

	
}