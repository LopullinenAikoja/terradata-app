//loadTowns.js
// js files of functions to fill the town drop down after a county is picked


//
// Massachusetts
//
function massBarnstable(){

	var s = $("#townSelect");
	
	//clear all previous options if the exist
	s.empty();

	var towns =
	{
	'Select A Town':'',
	'Barnstable':'20',
	'Bourne':'36',
	'Brewster':	'41',
	'Chatham':'55',
	'Dennis':'75',
	'Eastham':'86',
	'Falmouth':'96',
	'Harwich':'126',
	'Mashpee':'172',
	'Orleans':'224',
	'Provincetown':'242',
	'Sandwich':'261',
	'Truro':'300',
	'Wellfleet':'318',
	'Yarmouth':'351'
	};
	
	for(var town in towns) {
		$('<option />', {value: towns[town], text:town }).appendTo(s);
	}
	
}

//
//
// Berkshire county
//
function massBerkshire(){

	var s = $("#townSelect");
	
	//clear all previous options if the exist
	s.empty();
	
	//new options
	var towns =
	{
		'Select A Town':'',
		'Adams':'4',
		'Alford':'6',
		'Becket':'22',
		'Cheshire':'58',
		'Clarksburg':'63',
		'Dalton':'70',
		'Egremont':'90',
		'Florida':'98',
		'Great Barrington':'113',
		'Hancock':'121',
		'Hinsdale':'132',
		'Lanesborough':'148',
		'Lee':'150',
		'Lenox':'152',
		'Mount Washington':'195',
		'New Ashford':'200',
		'New Marlborough':'203',
		'North Adams':'209',
		'Otis':'225',
		'Peru':'233',
		'Pittsfield':'236',
		'Richmond':'249',
		'Sandsfield':'260',
		'Savoy':'263',
		'Sheffield':'267',
		'Stockbridge':'283',
		'Tyringham':'302',
		'Washington':'313',
		'West Stockbridge':	'326',
		'Williamstown':'341',
		'Windsor':'345'
	};
	
	for(var town in towns) {
		$('<option />', {value: towns[town], text:town }).appendTo(s);
	}

}
