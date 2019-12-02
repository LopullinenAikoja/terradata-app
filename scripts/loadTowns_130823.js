//loadTowns.js
// js files of functions to fill the town drop down after a county is picked

//
// CONNECTICUT
//


//
// Fairfield County
//
function connecticutFairfield(){
	//clear all previous options if the exist
	dijit.byId('townSelect').removeOption(dijit.byId('townSelect').getOptions());

	var fairfieldTowns = [
		{
		label:'Select A Town',
		name:'town',
		value:''
	},	
	{
	label:'Bethel',
	name:'town',
	value:'9'
	},
	{
	label:'Bridgeport',
	name:'town',
	value:'??'
	},
	{
	label:'Brookfield',
	name:'town',
	value:'18'
	},
	{
	label:'Danbury',
	name:'town',
	value:'34'
	},
	{
	label:'Darien',
	name:'town',
	value:'35'
	},
	{
	label:'Easton',
	name:'town',
	value:'??'
	},
	{
	label:'Fairfield',
	name:'town',
	value:'??'
	},
	{
	label:'Greenwich',
	name:'town',
	value:'57'
	},
	{
	label:'Monroe',
	name:'town',
	value:'85'
	},
	{
	label:'New Canaan',
	name:'town',
	value:'90'
	},
	{
	label:'New Fairfield',
	name:'town',
	value:'??'
	},
	{
	label:'Newtown',
	name:'town',
	value:'97'
	},
	{
	label:'Norwalk',
	name:'town',
	value:'103'
	},
	{
	label:'Redding',
	name:'town',
	value:'117'
	},
	{
	label:'Ridgefield',
	name:'town',
	value:'??'
	},
	{
	label:'Shelton',
	name:'town',
	value:'126'
	},
	{
	label:'Sherman',
	name:'town',
	value:'127'
	},
	{
	label:'Stamford',
	name:'town',
	value:'135'
	},
	{
	label:'Stratford',
	name:'town',
	value:'138'
	},
	{
	label:'Trumbull',
	name:'town',
	value:'??'
	},
	{
	label:'Weston',
	name:'town',
	value:'??'
	},
	{
	label:'Westport',
	name:'town',
	value:'158'
	},
	{
	label:'Willton',
	name:'town',
	value:'161'
	}
	];
	//add new options
	require(["dojo/ready", "dojo/dom-style", "dijit/registry"], function(ready, domStyle, registry){
		ready(function(){
			dijit.byId('townSelect').addOption(fairfieldTowns);
		});
	});
}

function connecticutLitchfield(){
	//clear all previous options if the exist
	dijit.byId('townSelect').removeOption(dijit.byId('townSelect').getOptions());

	var litchfieldTowns = [
		{
		label:'Select A Town',
		name:'town',
		value:''
	},	
	{
	label:'Barkhamsted',
	name:'town',
	value:'5'
	},
	{
	label:'Bethlehem',
	name:'town',
	value:'10'
	},
	{
	label:'Bridgewater',
	name:'town',
	value:'16'
	},
	{
	label:'Canaan',
	name:'town',
	value:'21'
	},
	{
	label:'Colebrook',
	name:'town',
	value:'29'
	},
	{
	label:'Cornwall',
	name:'town',
	value:'31'
	},
	{
	label:'Goshen',
	name:'town',
	value:'55'
	},
	{
	label:'Harwinton',
	name:'town',
	value:'66'
	},
	{
	label:'Kent',
	name:'town',
	value:'68'
	},
	{
	label:'Litchfield',
	name:'town',
	value:'74'
	},
	{
	label:'Morris',
	name:'town',
	value:'87'
	},
	{
	label:'New Hartford',
	name:'town',
	value:'64'
	},
	{
	label:'New Milford',
	name:'town',
	value:'96'
	},
	{
	label:'Norfolk',
	name:'town',
	value:'98'
	},
	{
	label:'North Canaan',
	name:'town',
	value:'100'
	},
	{
	label:'Plymouth',
	name:'town',
	value:'111'
	},
	{
	label:'Roxbury',
	name:'town',
	value:'120'
	},
	{
	label:'Salisbury',
	name:'town',
	value:'122'
	},
	{
	label:'Sharon',
	name:'town',
	value:'125'
	},
	{
	label:'Thomaston',
	name:'town',
	value:'140'
	},
	{
	label:'Torrington',
	name:'town',
	value:'143'
	},
	{
	label:'Warren',
	name:'town',
	value:'149'
	},
	{
	label:'Washington',
	name:'town',
	value:'150'
	},
	{
	label:'Watertown',
	name:'town',
	value:'153'
	},
	{
	label:'Winchester',
	name:'town',
	value:'162'
	},
	{
	label:'Woodbury',
	name:'town',
	value:'168'
	}	
	];
	//add new options
	require(["dojo/ready", "dojo/dom-style", "dijit/registry"], function(ready, domStyle, registry){
		ready(function(){
			dijit.byId('townSelect').addOption(litchfieldTowns);
		});
	});
}

function connecticutMiddlesex(){
	//clear all previous options if the exist
	dijit.byId('townSelect').removeOption(dijit.byId('townSelect').getOptions());

	var middlesexTowns = [
		{
		label:'Select A Town',
		name:'town',
		value:''
	},	
	{
	label:'Chester',
	name:'town',
	value:'5'
	},
	{
	label:'Clinton',
	name:'town',
	value:'26'
	},
	{
	label:'Cromwell',
	name:'town',
	value:'33'
	},
	{
	label:'Deep River',
	name:'town',
	value:'36'
	},
	{
	label:'Durham',
	name:'town',
	value:'38'
	},
	{
	label:'East Haddam',
	name:'town',
	value:'41'
	},
	{
	label:'East Hampton',
	name:'town',
	value:'42'
	},
	{
	label:'Essex',
	name:'town',
	value:'50'
	},
	{
	label:'Haddam',
	name:'town',
	value:'61'
	},
	{
	label:'Killingworth',
	name:'town',
	value:'70'
	},
	{
	label:'Middlefield',
	name:'town',
	value:'82'
	},
	{
	label:'Middletown',
	name:'town',
	value:'83'
	},
	{
	label:'Old Saybrook',
	name:'town',
	value:'106'
	},
	{
	label:'Portland',
	name:'town',
	value:'113'
	},
	{
	label:'Westbrook',
	name:'town',
	value:'154'
	}
	];
	//add new options
	require(["dojo/ready", "dojo/dom-style", "dijit/registry"], function(ready, domStyle, registry){
		ready(function(){
			dijit.byId('townSelect').addOption(middlesexTowns);
		});
	});
}

function connecticutNewHaven(){
	//clear all previous options if the exist
	dijit.byId('townSelect').removeOption(dijit.byId('townSelect').getOptions());

	var newHavenTowns = [
		{
		label:'Select A Town',
		name:'town',
		value:''
	},	
{
label:'Ansonia',
name:'town',
value:'2'
},
{
label:'Beacon Falls',
name:'town',
value:'6'
},
{
label:'Bethany',
name:'town',
value:'8'
},
{
label:'Branford',
name:'town',
value:'14'
},
{
label:'Cheshire',
name:'town',
value:'25'
},
{
label:'Derby',
name:'town',
value:'37'
},
{
label:'East Haven',
name:'town',
value:'44'
},
{
label:'Guilford',
name:'town',
value:'60'
},
{
label:'Hamden',
name:'town',
value:'62'
},
{
label:'Madison',
name:'town',
value:'76'
},
{
label:'Meriden',
name:'town',
value:'80'
},
{
label:'Middlebury',
name:'town',
value:'81'
},
{
label:'Milford',
name:'town',
value:'84'
},
{
label:'Naugatuck',
name:'town',
value:'88'
},
{
label:'New Haven',
name:'town',
value:'93'
},
{
label:'North Branford',
name:'town',
value:'99'
},
{
label:'North Haven',
name:'town',
value:'101'
},
{
label:'Orange',
name:'town',
value:'107'
},
{
label:'Oxford',
name:'town',
value:'108'
},
{
label:'Prospect',
name:'town',
value:'115'
},
{
label:'Seymour',
name:'town',
value:'124'
},
{
label:'Southbury',
name:'town',
value:'130'
},
{
label:'Wallingford',
name:'town',
value:'148'
},
{
label:'Waterbury',
name:'town',
value:'151'
},
{
label:'West Haven',
name:'town',
value:'156'
},
{
label:'Wolcott',
name:'town',
value:'166'
},
{
label:'Woodbridge',
name:'town',
value:'167'
}
];
//add new options
require(["dojo/ready", "dojo/dom-style", "dijit/registry"], function(ready, domStyle, registry){
ready(function(){
dijit.byId('townSelect').addOption(newHavenTowns);
});
});
}

function connecticutNewLondon(){
	//clear all previous options if the exist
	dijit.byId('townSelect').removeOption(dijit.byId('townSelect').getOptions());

	var newLondonTowns = [
		{
		label:'Select A Town',
		name:'town',
		value:''
	},	
	{
	label:'Bozrah',
	name:'town',
	value:'13'
	},
	{
	label:'Colchester',
	name:'town',
	value:'28'
	},
	{
	label:'East Lyme',
	name:'town',
	value:'45'
	},
	{
	label:'Franklin',
	name:'town',
	value:'53'
	},
	{
	label:'Groton',
	name:'town',
	value:'59'
	},
	{
	label:'Lebanon',
	name:'town',
	value:'71'
	},
	{
	label:'Ledyard',
	name:'town',
	value:'72'
	},
	{
	label:'Lisbon',
	name:'town',
	value:'73'
	},
	{
	label:'Lyme',
	name:'town',
	value:'75'
	},
	{
	label:'Montville',
	name:'town',
	value:'86'
	},
	{
	label:'New London',
	name:'town',
	value:'95'
	},
	{
	label:'North Stonington',
	name:'town',
	value:'102'
	},
	{
	label:'Norwich',
	name:'town',
	value:'104'
	},
	{
	label:'Old Lyme',
	name:'town',
	value:'105'
	},
	{
	label:'Preston',
	name:'town',
	value:'114'
	},
	{
	label:'Salem',
	name:'town',
	value:'121'
	},
	{
	label:'Sprague',
	name:'town',
	value:'133'
	},
	{
	label:'Stonington',
	name:'town',
	value:'137'
	},
	{
	label:'Voluntown',
	name:'town',
	value:'147'
	},
	{
	label:'Waterford',
	name:'town',
	value:'152'
	}
	];
	//add new options
	require(["dojo/ready", "dojo/dom-style", "dijit/registry"], function(ready, domStyle, registry){
		ready(function(){
			dijit.byId('townSelect').addOption(newLondonTowns);
		});
	});
}

function connecticutTolland(){
	//clear all previous options if the exist
	dijit.byId('townSelect').removeOption(dijit.byId('townSelect').getOptions());

	var tollandTowns = [
		{
		label:'Select A Town',
		name:'town',
		value:''
	},	
{
label:'Andover',
name:'town',
value:'1'
},
{
label:'Bolton',
name:'town',
value:'12'
},
{
label:'Columbia',
name:'town',
value:'30'
},
{
label:'Coventry',
name:'town',
value:'32'
},
{
label:'Ellington',
name:'town',
value:'48'
},
{
label:'Hebron',
name:'town',
value:'67'
},
{
label:'Mansfield',
name:'town',
value:'78'
},
{
label:'Somers',
name:'town',
value:'129'
},
{
label:'Stafford',
name:'town',
value:'134'
},
{
label:'Tolland',
name:'town',
value:'142'
},
{
label:'Union',
name:'town',
value:'145'
},
{
label:'Vernon',
name:'town',
value:'146'
},
{
label:'Willington',
name:'town',
value:'160'
}
];
//add new options
require(["dojo/ready", "dojo/dom-style", "dijit/registry"], function(ready, domStyle, registry){
ready(function(){
dijit.byId('townSelect').addOption(tollandTowns);
});
});
}

function connecticutWindham(){
	//clear all previous options if the exist
	dijit.byId('townSelect').removeOption(dijit.byId('townSelect').getOptions());

	var windhamTowns = [
		{
		label:'Select A Town',
		name:'town',
		value:''
	},	
{
label:'Ashford',
name:'town',
value:'3'
},
{
label:'Brooklyn',
name:'town',
value:'19'
},
{
label:'Canterbury',
name:'town',
value:'22'
},
{
label:'Chaplin',
name:'town',
value:'24'
},
{
label:'Eastford',
name:'town',
value:'39'
},
{
label:'Hampton',
name:'town',
value:'63'
},
{
label:'Killingly',
name:'town',
value:'69'
},
{
label:'Plainfield',
name:'town',
value:'109'
},
{
label:'Pomfret',
name:'town',
value:'112'
},
{
label:'Putnam',
name:'town',
value:'116'
},
{
label:'Scotland',
name:'town',
value:'123'
},
{
label:'Sterling',
name:'town',
value:'136'
},
{
label:'Thompson',
name:'town',
value:'141'
},
{
label:'Windham',
name:'town',
value:'163'
},
{
label:'Woodstock',
name:'town',
value:'169'
}
];
//add new options
require(["dojo/ready", "dojo/dom-style", "dijit/registry"], function(ready, domStyle, registry){
ready(function(){
dijit.byId('townSelect').addOption(windhamTowns);
});
});
}




//
// DELAWARE DE
// contains functions to load the towns in each delaware county
//


//
// Kent County
//


function delawareKent(){

	//clear all previous options if the exist
	dijit.byId('townSelect').removeOption(dijit.byId('townSelect').getOptions());

	var kentTowns = [
	{
		label:'Select A Town',
		name:'town',
		value:''
	},	
	{
	label:'Dover',
	name:'town',
	value:'Dover'
	},
	{
	label:'Harrington',
	name:'town',
	value:'Harrington'
	},
	{
	label:'Milford',
	name:'town',
	value:'Milford'
	},
	{
	label:'Bowers',
	name:'town',
	value:'Bowers'
	},
	{
	label:'Camden',
	name:'town',
	value:'Camden'
	},
	{
	label:'Cheswold',
	name:'town',
	value:'Cheswold'
	},
	{
	label:'Clayton',
	name:'town',
	value:'Clayton'
	},
	{
	label:'Farmington',
	name:'town',
	value:'Farmington'
	},
	{
	label:'Felton',
	name:'town',
	value:'Felton'
	},
	{
	label:'Frederica',
	name:'town',
	value:'Frederica'
	},
	{
	label:'Hartly',
	name:'town',
	value:'Hartly'
	},
	{
	label:'Houston',
	name:'town',
	value:'Houston'
	},
	{
	label:'Kenton',
	name:'town',
	value:'Kenton'
	},
	{
	label:'Leipsic',
	name:'town',
	value:'Leipsic'
	},
	{
	label:'Little Creek',
	name:'town',
	value:'Little Creek'
	},
	{
	label:'Magnolia',
	name:'town',
	value:'Magnolia'
	},
	{
	label:'Smyrna',
	name:'town',
	value:'Smyrna'
	},
	{
	label:'Viola',
	name:'town',
	value:'Viola'
	},
	{
	label:'Woodside',
	name:'town',
	value:'Woodside'
	},
	{
	label:'Wyoming',
	name:'town',
	value:'Wyoming'
	},
	];
	//add new options
	require(["dojo/ready", "dojo/dom-style", "dijit/registry"], function(ready, domStyle, registry){
		ready(function(){
			dijit.byId('townSelect').addOption(kentTowns);
		});
	});
}



//
// New Castle County
//
function delawareNewCastle(){
	//clear all previous options if the exist
	dijit.byId('townSelect').removeOption(dijit.byId('townSelect').getOptions());

	var newCastleTowns = [
	{
		label:'Select A Town',
		name:'town',
		value:''
	},	
	{
	label:'Arden',
	name:'town',
	value:'Arden'
	},
	{
	label:'Ardencroft',
	name:'town',
	value:'Ardencroft'
	},
	{
	label:'Ardentown',
	name:'town',
	value:'Ardentown'
	},
	{
	label:'Bellefonte',
	name:'town',
	value:'Bellefonte'
	},
	{
	label:'Clayton',
	name:'town',
	value:'Clayton'
	},
	{
	label:'Delaware City',
	name:'town',
	value:'Delaware City'
	},
	{
	label:'Elsmere',
	name:'town',
	value:'Elsmere'
	},
	{
	label:'Middletown',
	name:'town',
	value:'Middletown'
	},
	{
	label:'New Castle',
	name:'town',
	value:'New Castle'
	},
	{
	label:'Newark',
	name:'town',
	value:'Newark'
	},
	{
	label:'Newport',
	name:'town',
	value:'Newport'
	},
	{
	label:'Odessa',
	name:'town',
	value:'Odessa'
	},
	{
	label:'Smyrna',
	name:'town',
	value:'Smyrna'
	},
	{
	label:'Townsend',
	name:'town',
	value:'Townsend'
	},
	{
	label:'Wilmington',
	name:'town',
	value:'Wilmington'
	},
	];
	//add new options
	require(["dojo/ready", "dojo/dom-style", "dijit/registry"], function(ready, domStyle, registry){
		ready(function(){
			dijit.byId('townSelect').addOption(newCastleTowns);
		});
	});
}

//
// Sussex County
//
function delawareSussex(){
	//clear all previous options if the exist
	dijit.byId('townSelect').removeOption(dijit.byId('townSelect').getOptions());
	
		var sussexTowns = [
	{
		label:'Select A Town',
		name:'town',
		value:''
	},
	{
	label:'Bethany Beach',
	name:'town',
	value:'Bethany Beach'
	},
	{
	label:'Bethel',
	name:'town',
	value:'Bethel'
	},
	{
	label:'Blades',
	name:'town',
	value:'Blades'
	},
	{
	label:'Bridgeville',
	name:'town',
	value:'Bridgeville'
	},
	{
	label:'Dagsboro',
	name:'town',
	value:'Dagsboro'
	},
	{
	label:'Delmar',
	name:'town',
	value:'Delmar'
	},
	{
	label:'Dewey Beach',
	name:'town',
	value:'Dewey Beach'
	},
	{
	label:'Ellendale',
	name:'town',
	value:'Ellendale'
	},
	{
	label:'Fenwick Island',
	name:'town',
	value:'Fenwick Island'
	},
	{
	label:'Frankford',
	name:'town',
	value:'Frankford'
	},
	{
	label:'Georgetown',
	name:'town',
	value:'Georgetown'
	},
	{
	label:'Greenwood',
	name:'town',
	value:'Greenwood'
	},
	{
	label:'Henlopen Acres',
	name:'town',
	value:'Henlopen Acres'
	},
	{
	label:'Laurel',
	name:'town',
	value:'Laurel'
	},
	{
	label:'Lewes',
	name:'town',
	value:'Lewes'
	},
	{
	label:'Milford',
	name:'town',
	value:'Milford'
	},
	{
	label:'Millsboro',
	name:'town',
	value:'Millsboro'
	},
	{
	label:'Millville',
	name:'town',
	value:'Millville'
	},
	{
	label:'Milton',
	name:'town',
	value:'Milton'
	},
	{
	label:'Ocean View',
	name:'town',
	value:'Ocean View'
	},
	{
	label:'Rehoboth Beach',
	name:'town',
	value:'Rehoboth Beach'
	},
	{
	label:'Seaford',
	name:'town',
	value:'Seaford'
	},
	{
	label:'Selbyville',
	name:'town',
	value:'Selbyville'
	},
	{
	label:'Slaughter Beach',
	name:'town',
	value:'Slaughter Beach'
	},
	{
	label:'South Bethany',
	name:'town',
	value:'South Bethany'
	},
	];
	//add new options
	require(["dojo/ready", "dojo/dom-style", "dijit/registry"], function(ready, domStyle, registry){
		ready(function(){
			dijit.byId('townSelect').addOption(sussexTowns);
		});
	});
}

//
// hawaiiTowns.js
//

//alert("hawaii towns loaded");


// 
//Kalawao 
// 
function hawaiiKalawao(){
	//clear all previous options if the exist
	dijit.byId('townSelect').removeOption(dijit.byId('townSelect').getOptions());

	var kalawaoTowns = [
		{
		label:'Select A Town',
		name:'town',
		value:''
		},
		{
		label:'Kalaupapa',
		name:'town',
		value:'Kalaupapa'
		},
		{
		label:'Makanalua',
		name:'town',
		value:'Makanalua'
		},
		{
		label:'Kalawao',
		name:'town',
		value:'Kalawao'
		},
		{
		label:'Waikolu',
		name:'town',
		value:'Waikolu'
		}
	];
	//add new options
	require(["dojo/ready", "dojo/dom-style", "dijit/registry"], function(ready, domStyle, registry){
		ready(function(){
			dijit.byId('townSelect').addOption(kalawaoTowns);
		});
	});
}


// 
//Kauai
// 
function hawaiiKauai(){
	//clear all previous options if the exist
	dijit.byId('townSelect').removeOption(dijit.byId('townSelect').getOptions());

	var kauaiTowns = [
		{
		label:'Select A Town',
		name:'town',
		value:''
		},
		{
		label:'Anahola',
		name:'town',
		value:'Anahola'
		},
		{
		label:'Eleele',
		name:'town',
		value:'Eleele'
		},
		{
		label:'Hanalei',
		name:'town',
		value:'Hanalei'
		},
		{
		label:'Hanamaulu',
		name:'town',
		value:'Hanamaulu'
		},
		{
		label:'Hanapepe',
		name:'town',
		value:'Hanapepe'
		},
		{
		label:'Kalaheo',
		name:'town',
		value:'Kalaheo'
		},
		{
		label:'Kalihiwai',
		name:'town',
		value:'Kalihiwai'
		},
		{
		label:'Kapaa',
		name:'town',
		value:'Kapaa'
		},
		{
		label:'Kaumakani',
		name:'town',
		value:'Kaumakani'
		},
		{
		label:'Kekaha',
		name:'town',
		value:'Kekaha'
		},
		{
		label:'Kilauea',
		name:'town',
		value:'Kilauea'
		},
		{
		label:'Koloa',
		name:'town',
		value:'Koloa'
		},
		{
		label:'Lawai',
		name:'town',
		value:'Lawai'
		},
		{
		label:'Lihue',
		name:'town',
		value:'Lihue'
		},
		{
		label:'Omao',
		name:'town',
		value:'Omao'
		},
		{
		label:'Pakala Village',
		name:'town',
		value:'Pakala Village'
		},
		{
		label:'Poipu',
		name:'town',
		value:'Poipu'
		},
		{
		label:'Princeville',
		name:'town',
		value:'Princeville'
		},
		{
		label:'Puhi',
		name:'town',
		value:'Puhi'
		},
		{
		label:'Puuwai',
		name:'town',
		value:'Puuwai'
		},
		{
		label:'Wailua',
		name:'town',
		value:'Wailua'
		},
		{
		label:'Wailua Homesteads',
		name:'town',
		value:'Wailua Homesteads'
		},
		{
		label:'Waimea',
		name:'town',
		value:'Waimea'
		}
	];
	//add new options
	require(["dojo/ready", "dojo/dom-style", "dijit/registry"], function(ready, domStyle, registry){
		ready(function(){
		dijit.byId('townSelect').addOption(kauaiTowns);
		});
	});
}

// 
//Hawaii
// 
function hawaiiHawaii(){
	//clear all previous options if the exist
	dijit.byId('townSelect').removeOption(dijit.byId('townSelect').getOptions());

	var hawaiiTowns = [
		{
		label:'Select A Town',
		name:'town',
		value:''
		},
		{
		label:'Ainaloa',
		name:'town',
		value:'Ainaloa'
		},
		{
		label:'Captain Cook',
		name:'town',
		value:'Captain Cook'
		},
		{
		label:'Eden Roc',
		name:'town',
		value:'Eden Roc'
		},
		{
		label:'Fern Acres',
		name:'town',
		value:'Fern Acres'
		},
		{
		label:'Fern Forest',
		name:'town',
		value:'Fern Forest'
		},
		{
		label:'Halaula',
		name:'town',
		value:'Halaula'
		},
		{
		label:'Hawaiian Acres',
		name:'town',
		value:'Hawaiian Acres'
		},
		{
		label:'Hawaiian Beaches',
		name:'town',
		value:'Hawaiian Beaches'
		},
		{
		label:'Hawaiian Ocean View',
		name:'town',
		value:'Hawaiian Ocean View'
		},
		{
		label:'Hawaiian Paradise Park',
		name:'town',
		value:'Hawaiian Paradise Park'
		},
		{
		label:'Hawi',
		name:'town',
		value:'Hawi'
		},
		{
		label:'Hilo',
		name:'town',
		value:'Hilo'
		},
		{
		label:'Holualoa',
		name:'town',
		value:'Holualoa'
		},
		{
		label:'Honalo',
		name:'town',
		value:'Honalo'
		},
		{
		label:'Honaunau-Napoopoo',
		name:'town',
		value:'Honaunau-Napoopoo'
		},
		{
		label:'Honokaa',
		name:'town',
		value:'Honokaa'
		},
		{
		label:'Honomu',
		name:'town',
		value:'Honomu'
		},
		{
		label:'Kahaluu-Keauhou',
		name:'town',
		value:'Kahaluu-Keauhou'
		},
		{
		label:'Kailua',
		name:'town',
		value:'Kailua'
		},
		{
		label:'Kalaoa',
		name:'town',
		value:'Kalaoa'
		},
		{
		label:'Kapaau',
		name:'town',
		value:'Kapaau'
		},
		{
		label:'Keaau',
		name:'town',
		value:'Keaau'
		},
		{
		label:'Kealakekua',
		name:'town',
		value:'Kealakekua'
		},
		{
		label:'Keokea',
		name:'town',
		value:'Keokea'
		},
		{
		label:'Kukuihaele',
		name:'town',
		value:'Kukuihaele'
		},
		{
		label:'Kurtistown',
		name:'town',
		value:'Kurtistown'
		},
		{
		label:'Laupahoehoe',
		name:'town',
		value:'Laupahoehoe'
		},
		{
		label:'Leilani Estates',
		name:'town',
		value:'Leilani Estates'
		},
		{
		label:'Mountain View',
		name:'town',
		value:'Mountain View'
		},
		{
		label:'Naalehu',
		name:'town',
		value:'Naalehu'
		},
		{
		label:'Nanawale Estates',
		name:'town',
		value:'Nanawale Estates'
		},
		{
		label:'Orchidlands Estates',
		name:'town',
		value:'Orchidlands Estates'
		},
		{
		label:'Paauilo',
		name:'town',
		value:'Paauilo'
		},
		{
		label:'Pahala',
		name:'town',
		value:'Pahala'
		},
		{
		label:'Pahoa',
		name:'town',
		value:'Pahoa'
		},
		{
		label:'Papaikou',
		name:'town',
		value:'Papaikou'
		},
		{
		label:'Pepeekeo',
		name:'town',
		value:'Pepeekeo'
		},
		{
		label:'Paukaa',
		name:'town',
		value:'Paukaa'
		},
		{
		label:'Puako',
		name:'town',
		value:'Puako'
		},
		{
		label:'Volcano',
		name:'town',
		value:'Volcano'
		},
		{
		label:'Waikoloa Village',
		name:'town',
		value:'Waikoloa Village'
		},
		{
		label:'Waimea',
		name:'town',
		value:'Waimea'
		},
		{
		label:'Wainaku',
		name:'town',
		value:'Wainaku'
		}
	];
	//add new options
	require(["dojo/ready", "dojo/dom-style", "dijit/registry"], function(ready, domStyle, registry){
		ready(function(){
			dijit.byId('townSelect').addOption(hawaiiTowns);
		});
	});
}

// 
//Honolulu
// 
function hawaiiHonolulu(){
	//clear all previous options if the exist
	dijit.byId('townSelect').removeOption(dijit.byId('townSelect').getOptions());

	var honoluluTowns = [
		{
		label:'Select A Town',
		name:'town',
		value:''
		},
		{
		label:'Ahuimanu',
		name:'town',
		value:'Ahuimanu'
		},
		{
		label:'Aiea',
		name:'town',
		value:'Aiea'
		},
		{
		label:'Aina Haina',
		name:'town',
		value:'Aina Haina'
		},
		{
		label:'Barbers Point Housing',
		name:'town',
		value:'Barbers Point Housing'
		},
		{
		label:'Ewa Beach',
		name:'town',
		value:'Ewa Beach'
		},
		{
		label:'Ewa Gentry',
		name:'town',
		value:'Ewa Gentry'
		},
		{
		label:'Ewa Villages',
		name:'town',
		value:'Ewa Villages'
		},
		{
		label:'Halawa',
		name:'town',
		value:'Halawa'
		},
		{
		label:'Hale`iwa',
		name:'town',
		value:'Hale`iwa'
		},
		{
		label:'Hau`ula',
		name:'town',
		value:'Hau`ula'
		},
		{
		label:'Hawaii Kai',
		name:'town',
		value:'Hawaii Kai'
		},
		{
		label:'He`eia',
		name:'town',
		value:'He`eia'
		},
		{
		label:'Hickam Air Force Base',
		name:'town',
		value:'Hickam Air Force Base'
		},
		{
		label:'Honolulu',
		name:'town',
		value:'Honolulu'
		},
		{
		label:'Iroquois Point',
		name:'town',
		value:'Iroquois Point'
		},
		{
		label:'Ka`a`awa',
		name:'town',
		value:'Ka`a`awa'
		},
		{
		label:'Kahalu`u',
		name:'town',
		value:'Kahalu`u'
		},
		{
		label:'Kahuku',
		name:'town',
		value:'Kahuku'
		},
		{
		label:'Kailua',
		name:'town',
		value:'Kailua'
		},
		{
		label:'Kalaeloa',
		name:'town',
		value:'Kalaeloa'
		},
		{
		label:'Kane`ohe',
		name:'town',
		value:'Kane`ohe'
		},
		{
		label:'Kapolei',
		name:'town',
		value:'Kapolei'
		},
		{
		label:'Kawela Bay',
		name:'town',
		value:'Kawela Bay'
		},
		{
		label:'La`ie',
		name:'town',
		value:'La`ie'
		},
		{
		label:'Ma`ili',
		name:'town',
		value:'Ma`ili'
		},
		{
		label:'Makaha Valley',
		name:'town',
		value:'Makaha Valley'
		},
		{
		label:'Makaha',
		name:'town',
		value:'Makaha'
		},
		{
		label:'Makakilo',
		name:'town',
		value:'Makakilo'
		},
		{
		label:'Marine Corps Base Hawai`i',
		name:'town',
		value:'Marine Corps Base Hawai`i'
		},
		{
		label:'Maunawili',
		name:'town',
		value:'Maunawili'
		},
		{
		label:'Mililani Town',
		name:'town',
		value:'Mililani Town'
		},
		{
		label:'Mokule`ia',
		name:'town',
		value:'Mokule`ia'
		},
		{
		label:'Pauoa',
		name:'town',
		value:'Pauoa'
		},
		{
		label:'Nanakuli',
		name:'town',
		value:'Nanakuli'
		},
		{
		label:'Pearl City',
		name:'town',
		value:'Pearl City'
		},
		{
		label:'Punalu`u',
		name:'town',
		value:'Punalu`u'
		},
		{
		label:'Pupukea',
		name:'town',
		value:'Pupukea'
		},
		{
		label:'Schofield Barracks',
		name:'town',
		value:'Schofield Barracks'
		},
		{
		label:'Village Park',
		name:'town',
		value:'Village Park'
		},
		{
		label:'Wahiawa',
		name:'town',
		value:'Wahiawa'
		},
		{
		label:'Waiahole',
		name:'town',
		value:'Waiahole'
		},
		{
		label:'Waialua',
		name:'town',
		value:'Waialua'
		},
		{
		label:'Wai`anae',
		name:'town',
		value:'Wai`anae'
		},
		{
		label:'Waikane',
		name:'town',
		value:'Waikane'
		},
		{
		label:'Waimalu',
		name:'town',
		value:'Waimalu'
		},
		{
		label:'Waimanalo Beach',
		name:'town',
		value:'Waimanalo Beach'
		},
		{
		label:'Waimanalo',
		name:'town',
		value:'Waimanalo'
		},
		{
		label:'Waipahu',
		name:'town',
		value:'Waipahu'
		},
		{
		label:'Waipi`o Acres',
		name:'town',
		value:'Waipi`o Acres'
		},
		{
		label:'Waipi`o',
		name:'town',
		value:'Waipi`o'
		},
		{
		label:'Wheeler Army Airfield',
		name:'town',
		value:'Wheeler Army Airfield'
		},
		{
		label:'Whitmore Village',
		name:'town',
		value:'Whitmore Village'
		},
		{
		label:'Honolulu',
		name:'town',
		value:'Honolulu'
		},
		{
		label:'Kailua',
		name:'town',
		value:'Kailua'
		},
		{
		label:'Kane`ohe',
		name:'town',
		value:'Kane`ohe'
		},
		{
		label:'Waipahu',
		name:'town',
		value:'Waipahu'
		},
		{
		label:'Pearl City',
		name:'town',
		value:'Pearl City'
		},
		{
		label:'Waimalu',
		name:'town',
		value:'Waimalu'
		},
		{
		label:'Mililani Town',
		name:'town',
		value:'Mililani Town'
		},
		{
		label:'Kapolei',
		name:'town',
		value:'Kapolei'
		},
		{
		label:'Wahiawa',
		name:'town',
		value:'Wahiawa'
		},
		{
		label:'`Ewa Beach',
		name:'town',
		value:'`Ewa Beach'
		},
		{
		label:'Schofield Barracks',
		name:'town',
		value:'Schofield Barracks'
		},
		{
		label:'Halawa',
		name:'town',
		value:'Halawa'
		},
		{
		label:'Makakilo',
		name:'town',
		value:'Makakilo'
		},
		{
		label:'Marine Corps Base Hawai`i',
		name:'town',
		value:'Marine Corps Base Hawai`i'
		},
		{
		label:'Waipi`o',
		name:'town',
		value:'Waipi`o'
		},
		{
		label:'Nanakuli',
		name:'town',
		value:'Nanakuli'
		},
		{
		label:'Wai`anae',
		name:'town',
		value:'Wai`anae'
		},
		{
		label:'Royal Kunia',
		name:'town',
		value:'Royal Kunia'
		},
		{
		label:'`Aiea',
		name:'town',
		value:'`Aiea'
		},
		{
		label:'Ahuimanu',
		name:'town',
		value:'Ahuimanu'
		},
		{
		label:'Ma`ili',
		name:'town',
		value:'Ma`ili'
		},
		{
		label:'Hickam Air Force Base',
		name:'town',
		value:'Hickam Air Force Base'
		},
		{
		label:'Waipi`o Acres',
		name:'town',
		value:'Waipi`o Acres'
		},
		{
		label:'He`eia',
		name:'town',
		value:'He`eia'
		},
		{
		label:'`Ewa Gentry',
		name:'town',
		value:'`Ewa Gentry'
		},
		{
		label:'Maunawili',
		name:'town',
		value:'Maunawili'
		},
		{
		label:'`Ewa Villages',
		name:'town',
		value:'`Ewa Villages'
		},
		{
		label:'La`ie',
		name:'town',
		value:'La`ie'
		},
		{
		label:'Waimanalo Beach',
		name:'town',
		value:'Waimanalo Beach'
		},
		{
		label:'Pupukea',
		name:'town',
		value:'Pupukea'
		},
		{
		label:'Whitmore Village',
		name:'town',
		value:'Whitmore Village'
		},
		{
		label:'Waialua',
		name:'town',
		value:'Waialua'
		},
		{
		label:'Waimanalo',
		name:'town',
		value:'Waimanalo'
		},
		{
		label:'Hau`ula',
		name:'town',
		value:'Hau`ula'
		},
		{
		label:'Kahalu`u',
		name:'town',
		value:'Kahalu`u'
		},
		{
		label:'Wheeler Army Airfield',
		name:'town',
		value:'Wheeler Army Airfield'
		},
		{
		label:'Iroquois Point',
		name:'town',
		value:'Iroquois Point'
		},
		{
		label:'Hale`iwa',
		name:'town',
		value:'Hale`iwa'
		},
		{
		label:'Kahuku',
		name:'town',
		value:'Kahuku'
		}
	];
	//add new options
	require(["dojo/ready", "dojo/dom-style", "dijit/registry"], function(ready, domStyle, registry){
		ready(function(){
			dijit.byId('townSelect').addOption(honoluluTowns);
		});
	});
}


// 
//Maui
// 
function hawaiiMaui(){
	//clear all previous options if the exist
	dijit.byId('townSelect').removeOption(dijit.byId('townSelect').getOptions());

	var mauiTowns = [
	{
	label:'Select A Town',
	name:'town',
	value:''
	},
	{
	label:'Haiku-Pauwela',
	name:'town',
	value:'Haiku-Pauwela'
	},
	{
	label:'Haliimaile',
	name:'town',
	value:'Haliimaile'
	},
	{
	label:'Hana',
	name:'town',
	value:'Hana'
	},
	{
	label:'Kaanapali',
	name:'town',
	value:'Kaanapali'
	},
	{
	label:'Kahului',
	name:'town',
	value:'Kahului'
	},
	{
	label:'Kapalua',
	name:'town',
	value:'Kapalua'
	},
	{
	label:'Kihei',
	name:'town',
	value:'Kihei'
	},
	{
	label:'Lahaina',
	name:'town',
	value:'Lahaina'
	},
	{
	label:'Lanai City',
	name:'town',
	value:'Lanai City'
	},
	{
	label:' Maalaea',
	name:'town',
	value:' Maalaea'
	},
	{
	label:'Makawao',
	name:'town',
	value:'Makawao'
	},
	{
	label:'Makena',
	name:'town',
	value:'Makena'
	},
	{
	label:'Napili-Honokowai',
	name:'town',
	value:'Napili-Honokowai'
	},
	{
	label:'Paia',
	name:'town',
	value:'Paia'
	},
	{
	label:'Pukalani',
	name:'town',
	value:'Pukalani'
	},
	{
	label:'Waihee-Waiehu',
	name:'town',
	value:'Waihee-Waiehu'
	},
	{
	label:'Waikapu',
	name:'town',
	value:'Waikapu'
	},
	{
	label:'Wailea',
	name:'town',
	value:'Wailea'
	},
	{
	label:'Wailuku',
	name:'town',
	value:'Wailuku'
	}
	];
	//add new options
	require(["dojo/ready", "dojo/dom-style", "dijit/registry"], function(ready, domStyle, registry){
		ready(function(){
			dijit.byId('townSelect').addOption(mauiTowns);
		});
	});
}

// //
// // Maryland
// //
// // 
// //Harford
// // 
// function marylandHarford(){
	// //clear all previous options if the exist
	// dijit.byId('townSelect').removeOption(dijit.byId('townSelect').getOptions());

	// var harfordTowns = [
		// {
		// label:'Select A Town',
		// name:'town',
		// value:''
		// },
		// {
		// label:'Abingdon',
		// name:'town',
		// value:'Abingdon'
		// },
		// {
		// label:'Aberdeen'',
		// name:'town',
		// value:'Aberdeen'
		// },
		// {
		// label:'Aberdeen Proving Ground',
		// name:'town',
		// value:'APG'
		// },
		// {
		// label:'Bel Air',
		// name:'town',
		// value:'Bel Air'
		// },
		// {
		// label:'Belcamp',
		// name:'town',
		// value:'Belcamp'
		// },
		// {
		// label:'Benson',
		// name:'town',
		// value:'Benson'
		// },
		// {
		// label:'Havre de Grace',
		// name:'town',
		// value:'Havre de Grace'
		// },
		// {
		// label:'Cardiff',
		// name:'town',
		// value:'Cardiff'
		// },
		// {
		// label:'Castleton',
		// name:'town',
		// value:'Castleton'
		// },
		// {
		// label:'Conowingo',
		// name:'town',
		// value:'Conowingo'
		// },
		// {
		// label:'Churchville',
		// name:'town',
		// value:'Churchville'
		// },
		// {
		// label:'Darlington',
		// name:'town',
		// value:'Darlington'
		// },
		// {
		// label:'Dublin',
		// name:'town',
		// value:'Dublin'
		// },
		// {
		// label:'Edgewood',
		// name:'town',
		// value:'Edgewood'
		// },
		// {
		// label:'Fallston',
		// name:'town',
		// value:'Fallston'
		// },
		// {
		// label:'Forest Hill',
		// name:'town',
		// value:'Forest Hill'
		// },
		// {
		// label:'Gunpowder',
		// name:'town',
		// value:'Gunpowder'
		// },
		// {
		// label:'Hickory',
		// name:'town',
		// value:'Hickory'
		// },
		// {
		// label:'Jarrettsville',
		// name:'town',
		// value:'Jarrettsville'
		// },
		// {
		// label:'Joppa',
		// name:'town',
		// value:'Joppa'
		// },
		// {
		// label:'Joppatowne',
		// name:'town',
		// value:'Joppatowne'
		// },
		// {
		// label:'Kingsville',
		// name:'town',
		// value:'Kingsville'
		// },
		// {
		// label:'Level',
		// name:'town',
		// value:'Level'
		// },
		// {
		// label:'Norrisville',
		// name:'town',
		// value:'Norrisville'
		// },
		// {
		// label:'Perryman',
		// name:'town',
		// value:'Perryman'
		// },
		// {
		// label:'Pleasant Hills',
		// name:'town',
		// value:'Pleasant Hills'
		// },
		// {
		// label:'Pylesville',
		// name:'town',
		// value:'Pylesville'
		// },
		// {
		// label:'Riverside',
		// name:'town',
		// value:'Riverside'
		// },
		// {
		// label:'Street',
		// name:'town',
		// value:'Street'
		// },
		// {
		// label:'Whiteford',
		// name:'town',
		// value:'Whiteford'
		// },
		// {
		// label:'White Hall',
		// name:'town',
		// value:'White Hall'
		// }
// ];
// //add new options
// require(["dojo/ready", "dojo/dom-style", "dijit/registry"], function(ready, domStyle, registry){
	// ready(function(){
		// dijit.byId('townSelect').addOption(harfordTowns);
		// });
	// });
// }



//
// Massachusetts
//
function massBarnstable(){

	//clear all previous options if the exist
	dijit.byId('townSelect').removeOption(dijit.byId('townSelect').getOptions());

	var barnstableTowns = [
	{
	label:'Select A Town',
	name:'town',
	value:''
	},
	{
	label:'Barnstable',
	name:'town',
	value:'20'
	},
	{
	label:'Bourne',
	name:'town',
	value:'36'
	},
	{
	label:'Brewster',
	name:'town',
	value:'41'
	},
	{
	label:'Chatham',
	name:'town',
	value:'55'
	},
	{
	label:'Dennis',
	name:'town',
	value:'75'
	},
	{
	label:'Eastham',
	name:'town',
	value:'86'
	},
	{
	label:'Falmouth',
	name:'town',
	value:'96'
	},
	{
	label:'Harwich',
	name:'town',
	value:'126'
	},
	{
	label:'Mashpee',
	name:'town',
	value:'172'
	},
	{
	label:'Orleans',
	name:'town',
	value:'224'
	},
	{
	label:'Provincetown',
	name:'town',
	value:'242'
	},
	{
	label:'Sandwich',
	name:'town',
	value:'261'
	},
	{
	label:'Truro',
	name:'town',
	value:'300'
	},
	{
	label:'Wellfleet',
	name:'town',
	value:'318'
	},
	{
	label:'Yarmouth',
	name:'town',
	value:'351'
	}
	];
	//add new options
	require(["dojo/ready", "dojo/dom-style", "dijit/registry"], function(ready, domStyle, registry){
		ready(function(){
		dijit.byId('townSelect').addOption(barnstableTowns);
		});
	});	
	
}

//
//
// Berkshire county
//
function massBerkshire(){
	
	//clear all previous options if the exist
	dijit.byId('townSelect').removeOption(dijit.byId('townSelect').getOptions());
	
	//new options
	var berkshireTowns = [
	{
		label:'Select A Town',
		name:'town',
		value:''
	},
	{
		label:'Select A Town',
		name:'town',
		value:''
	},	
	{
		label:'Adams',
		name:'town',
		value:'4'
	},	
	{
		label:'Alford',
		name:'town',
		value:'6'
	},		
	{
		label:'Becket',
		name:'town',
		value:'22'
	},
	{
		label:'Cheshire',
		name:'town',
		value:'58'
	},
	{
		label:'Clarksburg',
		name:'town',
		value:'63'
	},
	{
		label:'Dalton',
		name:'town',
		value:'70'
	},
	{
		label:'Egremont',
		name:'town',
		value:'90'
	},
	{
		label:'Florida',
		name:'town',
		value:'98'
	},
	{
		label:'Great Barrington',
		name:'town',
		value:'113'
	},
	{
		label:'Hancock',
		name:'town',
		value:'121'
	},
	{
		label:'Hinsdale',
		name:'town',
		value:'132'
	},
	{
		label:'Lanesborough',
		name:'town',
		value:'148'
	},
	{
		label:'Lee',
		name:'town',
		value:'150'
	},
	{
		label:'Lenox',
		name:'town',
		value:'152'
	},
	{
		label:'Mount Washington',
		name:'town',
		value:'195'
	},
	{
		label:'New Ashford',
		name:'town',
		value:'200'
	},
	{
		label:'New Marlborough',
		name:'town',
		value:'203'
	},
	{
		label:'North Adams',
		name:'town',
		value:'209'
	},
	{
		label:'Otis',
		name:'town',
		value:'225'
	},
	{
		label:'Peru',
		name:'town',
		value:'233'
	},
	{
		label:'Pittsfield',
		name:'town',
		value:'236'
	},
	{
		label:'Richmond',
		name:'town',
		value:'249'
	},
	{
		label:'Sandsfield',
		name:'town',
		value:'260'
	},
	{
		label:'Savoy',
		name:'town',
		value:'263'
	},
	{
		label:'Sheffield',
		name:'town',
		value:'267'
	},
	{
		label:'Stockbridge',
		name:'town',
		value:'283'
	},
	{
		label:'Tyringham',
		name:'town',
		value:'302'
	},
	{
		label:'Washington',
		name:'town',
		value:'313'
	},
	{
		label:'West Stockbridge',
		name:'town',
		value:'326'
	},
	{
		label:'Williamstown',
		name:'town',
		value:'341'
	},
	{
		label:'Windsor',
		name:'town',
		value:'345'
	}
	];
	
	//add new options
	require(["dojo/ready", "dojo/dom-style", "dijit/registry"], function(ready, domStyle, registry){
		ready(function(){
			dijit.byId('townSelect').addOption(berkshireTowns);
			});
	});	
}

//
// Bristol County
//
function massBristol(){
	
	//clear all previous options if the exist
	dijit.byId('townSelect').removeOption(dijit.byId('townSelect').getOptions());
	
	//new options
	var bristolTowns = [
		{
		label:'Select A Town',
		name:'town',
		value:''
	},	
	{
		label:'Acushnet',
		name:'town',
		value:'3'
	},	
	{
		label:'Attleboro',
		name:'town',
		value:'16'
	},		
	{
		label:'Berkley',
		name:'town',
		value:'27'
	},
	{
		label:'Dartmouth',
		name:'town',
		value:'72'
	},
	{
		label:'Dighton',
		name:'town',
		value:'76'
	},
	{
		label:'Easton',
		name:'town',
		value:'88'
	},
	{
		label:'Fairhaven',
		name:'town',
		value:'94'
	},
	{
		label:'Fall River',
		name:'town',
		value:'95'
	},
	{
		label:'Freetown',
		name:'town',
		value:'102'
	},
	{
		label:'Mansfield',
		name:'town',
		value:'167'
	},
	{
		label:'New Bedford',
		name:'town',
		value:'201'
	},
	{
		label:'North Attleborough',
		name:'town',
		value:'211'
	},
	{
		label:'Norton',
		name:'town',
		value:'218'
	},
	{
		label:'Raynham',
		name:'town',
		value:'245'
	},
	{
		label:'Rehoboth',
		name:'town',
		value:'247'
	},
	{
		label:'Seekonk',
		name:'town',
		value:'265'
	},
	{
		label:'Somerset',
		name:'town',
		value:'273'
	},
	{
		label:'Swansea',
		name:'town',
		value:'292'
	},
	{
		label:'taunton',
		name:'town',
		value:'293'
	},
	{
		label:'Westpot',
		name:'town',
		value:'334'
	}
	];
	
	//add new options
	require(["dojo/ready", "dojo/dom-style", "dijit/registry"], function(ready, domStyle, registry){
		ready(function(){
			dijit.byId('townSelect').addOption(bristolTowns);
			});
	});	
}


//
// Dukes County
//
function massDukes(){
	//clear all previous options if the exist
	dijit.byId('townSelect').removeOption(dijit.byId('townSelect').getOptions());

	var dukesTowns = [
	{
		label:'Select A Town',
		name:'town',
		value:''
	},	
	{
	label:'Aquinnah',
	name:'town',
	value:'104'
	},
	{
	label:'Chilmark',
	name:'town',
	value:'62'
	},
	{
	label:'Edgartown',
	name:'town',
	value:'??'
	},
	{
	label:'Gosnold',
	name:'town',
	value:'109'
	},
	{
	label:'Oak Bluffs',
	name:'town',
	value:'221'
	},
	{
	label:'Tisbury',
	name:'town',
	value:'296'
	},
	{
	label:'West Tisbury',
	name:'town',
	value:'327'
	},
	];
	//add new options
	require(["dojo/ready", "dojo/dom-style", "dijit/registry"], function(ready, domStyle, registry){
		ready(function(){
			dijit.byId('townSelect').addOption(dukesTowns);
		});
	});
}

//
// Essex County
//
function massEssex(){
	//clear all previous options if the exist
	dijit.byId('townSelect').removeOption(dijit.byId('townSelect').getOptions());
	var towns = [
	{
		label:'Select A Town',
		name:'town',
		value:''
	},
	{
	label:'Amesbury',
	name:'town',
	value:'7'
	},
	{
	label:'Andover',
	name:'town',
	value:'9'
	},
	{
	label:'Beverly',
	name:'town',
	value:'30'
	},
	{
	label:'Boxford',
	name:'town',
	value:'38'
	},
	{
	label:'Danvers',
	name:'town',
	value:'71'
	},
	{
	label:'Essex',
	name:'town',
	value:'92'
	},
	{
	label:'Georgetown',
	name:'town',
	value:'105'
	},
	{
	label:'Gloucester',
	name:'town',
	value:'107'
	},
	{
	label:'Groveland',
	name:'town',
	value:'116'
	},
	{
	label:'Hamilton',
	name:'town',
	value:'119'
	},
	{
	label:'Haverhill',
	name:'town',
	value:'128'
	},
	{
	label:'Ipswich',
	name:'town',
	value:'144'
	},
	{
	label:'Lawrence ',
	name:'town',
	value:'149'
	},
	{
	label:'Lynn',
	name:'town',
	value:'163'
	},
	{
	label:'Lynnfield',
	name:'town',
	value:'164'
	},
	{
	label:'Manchester',
	name:'town',
	value:'166'
	},
	{
	label:'Marblehead',
	name:'town',
	value:'168'
	},
	{
	label:'Merrimac',
	name:'town',
	value:'180'
	},
	{
	label:'Methuen',
	name:'town',
	value:'181'
	},
	{
	label:'Middleton',
	name:'town',
	value:'184'
	},
	{
	label:'Nahant',
	name:'town',
	value:'196'
	},
	{
	label:'Newbury',
	name:'town',
	value:'205'
	},
	{
	label:'Newburyport',
	name:'town',
	value:'206'
	},
	{
	label:'North Andover',
	name:'town',
	value:'210'
	},
	{
	label:'Peabody',
	name:'town',
	value:'229'
	},
	{
	label:'Rockport',
	name:'town',
	value:'252'
	},
	{
	label:'Rowley',
	name:'town',
	value:'254'
	},
	{
	label:'Salem',
	name:'town',
	value:'258'
	},
	{
	label:'Salisbury',
	name:'town',
	value:'259'
	},
	{
	label:'Saugus',
	name:'town',
	value:'262'
	},
	{
	label:'Swampscott',
	name:'town',
	value:'291'
	},
	{
	label:'Topsfield',
	name:'town',
	value:'298'
	},
	{
	label:'Wenham',
	name:'town',
	value:'320'
	},
	{
	label:'West Newbury',
	name:'town',
	value:'324'
	}	
	];
	//add new options
	require(["dojo/ready", "dojo/dom-style", "dijit/registry"], function(ready, domStyle, registry){
		ready(function(){
			dijit.byId('townSelect').addOption(towns);
			});
	});	
	
}
//
// Franklin County
//
function massFranklin(){
	//clear all previous options if the exist
	dijit.byId('townSelect').removeOption(dijit.byId('townSelect').getOptions());
	
	var franklinTowns = [
	{
		label:'Select A Town',
		name:'town',
		value:''
	},	
	{
	label:'Ashfield',
	name:'town',
	value:'13'
	},
	{
	label:'Bernardston',
	name:'town',
	value:'29'
	},
	{
	label:'Buckland',
	name:'town',
	value:'47'
	},
	{
	label:'Charlemont',
	name:'town',
	value:'53'
	},
	{
	label:'Colrain',
	name:'town',
	value:'66'
	},
	{
	label:'Conway',
	name:'town',
	value:'68'
	},
	{
	label:'Deerfield',
	name:'town',
	value:'74'
	},
	{
	label:'Erving',
	name:'town',
	value:'91'
	},
	{
	label:'Gill',
	name:'town',
	value:'106'
	},
	{
	label:'Greenfield',
	name:'town',
	value:'114'
	},
	{
	label:'Hawley',
	name:'town',
	value:'129'
	},
	{
	label:'Heath',
	name:'town',
	value:'130'
	},
	{
	label:'Leverett',
	name:'town',
	value:'154'
	},
	{
	label:'Leyden',
	name:'town',
	value:'156'
	},
	{
	label:'Monroe',
	name:'town',
	value:'190'
	},
	{
	label:'Montague',
	name:'town',
	value:'192'
	},
	{
	label:'New Salem',
	name:'town',
	value:'204'
	},
	{
	label:'Northfield',
	name:'town',
	value:'217'
	},
	{
	label:'Orange',
	name:'town',
	value:'223'
	},
	{
	label:'Rowe',
	name:'town',
	value:'253'
	},
	{
	label:'Shelburne',
	name:'town',
	value:'268'
	},
	{
	label:'Shutesbury',
	name:'town',
	value:'272'
	},
	{
	label:'Sunderland',
	name:'town',
	value:'289'
	},
	{
	label:'Warwick',
	name:'town',
	value:'312'
	},
	{
	label:'Wendell',
	name:'town',
	value:'319'
	},
	{
	label:'Whately',
	name:'town',
	value:'337'
	},
	];
	//add new options
	require(["dojo/ready", "dojo/dom-style", "dijit/registry"], function(ready, domStyle, registry){
		ready(function(){
		dijit.byId('townSelect').addOption(franklinTowns);
		});
	});
}



//
// Hampden County
//
function massHampden(){
	//clear all previous options if the exist
	dijit.byId('townSelect').removeOption(dijit.byId('townSelect').getOptions());
	var hampdenTowns = [
	{
		label:'Select A Town',
		name:'town',
		value:''
	},	
	{
	label:'Agawam',
	name:'town',
	value:'5'
	},
	{
	label:'Blandford',
	name:'town',
	value:'33'
	},
	{
	label:'Brimfield',
	name:'town',
	value:'43'
	},
	{
	label:'Chester',
	name:'town',
	value:'59'
	},
	{
	label:'Chicopee',
	name:'town',
	value:'61'
	},
	{
	label:'East Longmeadow',
	name:'town',
	value:'85'
	},
	{
	label:'Granville',
	name:'town',
	value:'112'
	},
	{
	label:'Hampden',
	name:'town',
	value:'120'
	},
	{
	label:'Holland',
	name:'town',
	value:'135'
	},
	{
	label:'Holyoke',
	name:'town',
	value:'137'
	},
	{
	label:'Longmeadow',
	name:'town',
	value:'159'
	},
	{
	label:'Ludlow',
	name:'town',
	value:'161'
	},
	{
	label:'Monson',
	name:'town',
	value:'191'
	},
	{
	label:'Montgomery',
	name:'town',
	value:'194'
	},
	{
	label:'Palmer',
	name:'town',
	value:'227'
	},
	{
	label:'Russell',
	name:'town',
	value:'256'
	},
	{
	label:'Southwick',
	name:'town',
	value:'279'
	},
	{
	label:'Springfield ',
	name:'town',
	value:'281'
	},
	{
	label:'Tolland',
	name:'town',
	value:'297'
	},
	{
	label:'Wales',
	name:'town',
	value:'306'
	},
	{
	label:'West Springfield',
	name:'town',
	value:'325'
	},
	{
	label:'Westfield',
	name:'town',
	value:'329'
	},
	{
	label:'Wilbraham',
	name:'town',
	value:'339'
	}
	];
	//add new options
	require(["dojo/ready", "dojo/dom-style", "dijit/registry"], function(ready, domStyle, registry){
	ready(function(){
	dijit.byId('townSelect').addOption(hampdenTowns);
	});
	});
}

//
// Hampshire County
//
function massHampshire(){
	//clear all previous options if the exist
	dijit.byId('townSelect').removeOption(dijit.byId('townSelect').getOptions());
	var hampshireTowns = [
	{
		label:'Select A Town',
		name:'town',
		value:''
	},	
	{
	label:'Amherst',
	name:'town',
	value:'8'
	},
	{
	label:'Belchertown',
	name:'town',
	value:'24'
	},
	{
	label:'Chesterfield',
	name:'town',
	value:'60'
	},
	{
	label:'Cummington',
	name:'town',
	value:'69'
	},
	{
	label:'Easthampton',
	name:'town',
	value:'87'
	},
	{
	label:'Goshen',
	name:'town',
	value:'108'
	},
	{
	label:'Granby',
	name:'town',
	value:'111'
	},
	{
	label:'Hadley',
	name:'town',
	value:'117'
	},
	{
	label:'Hatfield',
	name:'town',
	value:'127'
	},
	{
	label:'Huntington',
	name:'town',
	value:'143'
	},
	{
	label:'Middlefield',
	name:'town',
	value:'183'
	},
	{
	label:'Northampton',
	name:'town',
	value:'214'
	},
	{
	label:'Pelham',
	name:'town',
	value:'230'
	},
	{
	label:'Plainfield',
	name:'town',
	value:'237'
	},
	{
	label:'South Hadley',
	name:'town',
	value:'275'
	},
	{
	label:'Southampton',
	name:'town',
	value:'276'
	},
	{
	label:'Ware',
	name:'town',
	value:'309'
	},
	{
	label:'Westhampton',
	name:'town',
	value:'331'
	},
	{
	label:'Williamsburg',
	name:'town',
	value:'340'
	},
	{
	label:'Worthington',
	name:'town',
	value:'349'
	}
	];
	//add new options
	require(["dojo/ready", "dojo/dom-style", "dijit/registry"], function(ready, domStyle, registry){
		ready(function(){
		dijit.byId('townSelect').addOption(hampshireTowns);
		});
	});
}

//
// Middlesex County
//
function massMiddlesex(){
	//clear all previous options if the exist
	dijit.byId('townSelect').removeOption(dijit.byId('townSelect').getOptions());
	var middlesexTowns = [
	{
		label:'Select A Town',
		name:'town',
		value:''
	},	
	{
	label:'Acton',
	name:'town',
	value:'2'
	},
	{
	label:'Arlington',
	name:'town',
	value:'10'
	},
	{
	label:'Ashby',
	name:'town',
	value:'12'
	},
	{
	label:'Ashland',
	name:'town',
	value:'14'
	},
	{
	label:'Ayer',
	name:'town',
	value:'19'
	},
	{
	label:'Bedford',
	name:'town',
	value:'23'
	},
	{
	label:'Belmont',
	name:'town',
	value:'26'
	},
	{
	label:'Billerica',
	name:'town',
	value:'31'
	},
	{
	label:'Boxborough',
	name:'town',
	value:'37'
	},
	{
	label:'Burlington',
	name:'town',
	value:'48'
	},
	{
	label:'Cambridge',
	name:'town',
	value:'49'
	},
	{
	label:'Carlisle',
	name:'town',
	value:'51'
	},
	{
	label:'Chelmsford',
	name:'town',
	value:'56'
	},
	{
	label:'Concord',
	name:'town',
	value:'67'
	},
	{
	label:'Dracut',
	name:'town',
	value:'79'
	},
	{
	label:'Dunstable',
	name:'town',
	value:'81'
	},
	{
	label:'Everett',
	name:'town',
	value:'93'
	},
	{
	label:'Framingham',
	name:'town',
	value:'100'
	},
	{
	label:'Groton',
	name:'town',
	value:'115'
	},
	{
	label:'Holliston',
	name:'town',
	value:'136'
	},
	{
	label:'Hopkinton',
	name:'town',
	value:'139'
	},
	{
	label:'Hudson',
	name:'town',
	value:'141'
	},
	{
	label:'Lexington',
	name:'town',
	value:'155'
	},
	{
	label:'Lincoln',
	name:'town',
	value:'157'
	},
	{
	label:'Littleton',
	name:'town',
	value:'158'
	},
	{
	label:'Lowell',
	name:'town',
	value:'160'
	},
	{
	label:'Malden',
	name:'town',
	value:'165'
	},
	{
	label:'Marlborough',
	name:'town',
	value:'170'
	},
	{
	label:'Maynard',
	name:'town',
	value:'174'
	},
	{
	label:'Medford',
	name:'town',
	value:'176'
	},
	{
	label:'Melrose',
	name:'town',
	value:'178'
	},
	{
	label:'Natick',
	name:'town',
	value:'198'
	},
	{
	label:'Newton',
	name:'town',
	value:'207'
	},
	{
	label:'North Reading',
	name:'town',
	value:'213'
	},
	{
	label:'Pepperell',
	name:'town',
	value:'232'
	},
	{
	label:'Reading',
	name:'town',
	value:'246'
	},
	{
	label:'Sherborn',
	name:'town',
	value:'269'
	},
	{
	label:'Shirley',
	name:'town',
	value:'270'
	},
	{
	label:'Somerville',
	name:'town',
	value:'274'
	},
	{
	label:'Stoneham',
	name:'town',
	value:'284'
	},
	{
	label:'Stow',
	name:'town',
	value:'286'
	},
	{
	label:'Sudbury',
	name:'town',
	value:'288'
	},
	{
	label:'Tewksbury',
	name:'town',
	value:'295'
	},
	{
	label:'Townsend',
	name:'town',
	value:'299'
	},
	{
	label:'Tyngsborough',
	name:'town',
	value:'301'
	},
	{
	label:'Wakefield',
	name:'town',
	value:'305'
	},
	{
	label:'Waltham',
	name:'town',
	value:'308'
	},
	{
	label:'Watertown',
	name:'town',
	value:'314'
	},
	{
	label:'Wayland',
	name:'town',
	value:'315'
	},
	{
	label:'Westford',
	name:'town',
	value:'330'
	},
	{
	label:'Weston',
	name:'town',
	value:'333'
	},
	{
	label:'Wilmington',
	name:'town',
	value:'342'
	},
	{
	label:'Winchester',
	name:'town',
	value:'344'
	},
	{
	label:'Woburn',
	name:'town',
	value:'347'
	}
	];
	//add new options
	require(["dojo/ready", "dojo/dom-style", "dijit/registry"], function(ready, domStyle, registry){
		ready(function(){
		dijit.byId('townSelect').addOption(middlesexTowns);
		});
	});
}



//
// Nantucket County
//
function massNantucket(){
	//clear all previous options if the exist
dijit.byId('townSelect').removeOption(dijit.byId('townSelect').getOptions());
	var nantucketTowns = [
	{
		label:'Select A Town',
		name:'town',
		value:''
	},	
	{
	label:'Nantucket',
	name:'town',
	value:'197'
	}
	];
	//add new options
	require(["dojo/ready", "dojo/dom-style", "dijit/registry"], function(ready, domStyle, registry){
		ready(function(){
			dijit.byId('townSelect').addOption(nantucketTowns);
		});
	});
}

//
// Norfolk County
//
function massNorfolk(){
	//clear all previous options if the exist
	dijit.byId('townSelect').removeOption(dijit.byId('townSelect').getOptions());
	
	var norfolkTowns = [
	{
		label:'Select A Town',
		name:'town',
		value:''
	},	
	{
	label:'Avon',
	name:'town',
	value:'18'
	},
	{
	label:'Bellingham',
	name:'town',
	value:'25'
	},
	{
	label:'Braintree',
	name:'town',
	value:'40'
	},
	{
	label:'Brookline',
	name:'town',
	value:'46'
	},
	{
	label:'Canton',
	name:'town',
	value:'50'
	},
	{
	label:'Cohasset',
	name:'town',
	value:'65'
	},
	{
	label:'Dedham',
	name:'town',
	value:'73'
	},
	{
	label:'Dover',
	name:'town',
	value:'78'
	},
	{
	label:'Foxborough',
	name:'town',
	value:'99'
	},
	{
	label:'Franklin',
	name:'town',
	value:'101'
	},
	{
	label:'Holbrook',
	name:'town',
	value:'133'
	},
	{
	label:'Medfield',
	name:'town',
	value:'175'
	},
	{
	label:'Medway',
	name:'town',
	value:'177'
	},
	{
	label:'Millis',
	name:'town',
	value:'187'
	},
	{
	label:'Milton',
	name:'town',
	value:'189'
	},
	{
	label:'Needham',
	name:'town',
	value:'199'
	},
	{
	label:'Norfolk',
	name:'town',
	value:'208'
	},
	{
	label:'Norwood',
	name:'town',
	value:'220'
	},
	{
	label:'Plainville',
	name:'town',
	value:'238'
	},
	{
	label:'Quincy',
	name:'town',
	value:'243'
	},
	{
	label:'Randolph',
	name:'town',
	value:'244'
	},
	{
	label:'Sharon',
	name:'town',
	value:'266'
	},
	{
	label:'Stoughton',
	name:'town',
	value:'285'
	},
	{
	label:'Walpole',
	name:'town',
	value:'307'
	},
	{
	label:'Wellesley',
	name:'town',
	value:'317'
	},
	{
	label:'Westwood',
	name:'town',
	value:'335'
	},
	{
	label:'Weymouth',
	name:'town',
	value:'336'
	},
	{
	label:'Wrentham',
	name:'town',
	value:'350'
	}
	];
	//add new options
	require(["dojo/ready", "dojo/dom-style", "dijit/registry"], function(ready, domStyle, registry){
		ready(function(){
			dijit.byId('townSelect').addOption(norfolkTowns);
		});
	});
}

//
// Plymouth County
//
function massPlymouth(){
	//clear all previous options if the exist
	dijit.byId('townSelect').removeOption(dijit.byId('townSelect').getOptions());
	
	var plymouthTowns = [
	{
		label:'Select A Town',
		name:'town',
		value:''
	},	
	{
	label:'Abington',
	name:'town',
	value:'1'
	},
	{
	label:'Bridgewater',
	name:'town',
	value:'42'
	},
	{
	label:'Brockton',
	name:'town',
	value:'44'
	},
	{
	label:'Carver',
	name:'town',
	value:'52'
	},
	{
	label:'Duxbury',
	name:'town',
	value:'82'
	},
	{
	label:'East Bridgewater',
	name:'town',
	value:'83'
	},
	{
	label:'Halifax',
	name:'town',
	value:'118'
	},
	{
	label:'Hanover',
	name:'town',
	value:'122'
	},
	{
	label:'Hanson',
	name:'town',
	value:'123'
	},
	{
	label:'Hingham',
	name:'town',
	value:'131'
	},
	{
	label:'Hull',
	name:'town',
	value:'142'
	},
	{
	label:'Kingston',
	name:'town',
	value:'145'
	},
	{
	label:'Lakeville',
	name:'town',
	value:'146'
	},
	{
	label:'Marion',
	name:'town',
	value:'169'
	},
	{
	label:'Marshfield',
	name:'town',
	value:'171'
	},
	{
	label:'Mattapoisett',
	name:'town',
	value:'173'
	},
	{
	label:'Middleborough',
	name:'town',
	value:'182'
	},
	{
	label:'Norwell',
	name:'town',
	value:'219'
	},
	{
	label:'Pembroke',
	name:'town',
	value:'231'
	},
	{
	label:'Plymouth',
	name:'town',
	value:'239'
	},
	{
	label:'Plympton',
	name:'town',
	value:'240'
	},
	{
	label:'Rochester',
	name:'town',
	value:'250'
	},
	{
	label:'Rockland',
	name:'town',
	value:'251'
	},
	{
	label:'Scituate',
	name:'town',
	value:'264'
	},
	{
	label:'Wareham',
	name:'town',
	value:'310'
	},
	{
	label:'West Bridgewater',
	name:'town',
	value:'322'
	},
	{
	label:'Whitman',
	name:'town',
	value:'338'
	}
	];
	//add new options
	require(["dojo/ready", "dojo/dom-style", "dijit/registry"], function(ready, domStyle, registry){
	ready(function(){
	dijit.byId('townSelect').addOption(plymouthTowns);
	});
	});
}



//
// Suffolk County
//
function massSuffolk(){
	//clear all previous options if the exist
	dijit.byId('townSelect').removeOption(dijit.byId('townSelect').getOptions());

	var suffolkTowns = [
	{
		label:'Select A Town',
		name:'town',
		value:''
	},	
	{
	label:'Boston',
	name:'town',
	value:'35'
	},
	{
	label:'Chelsea',
	name:'town',
	value:'57'
	},
	{
	label:'Revere',
	name:'town',
	value:'248'
	},
	{
	label:'Winthrop',
	name:'town',
	value:'346'
	}
	];
	//add new options
	require(["dojo/ready", "dojo/dom-style", "dijit/registry"], function(ready, domStyle, registry){
		ready(function(){
			dijit.byId('townSelect').addOption(suffolkTowns);
	});
	});
}


//
// Worcester County
//
function massWorcester(){
	//clear all previous options if the exist
	dijit.byId('townSelect').removeOption(dijit.byId('townSelect').getOptions());

	var worcesterTowns = [
	{
		label:'Select A Town',
		name:'town',
		value:''
	},	
	{
	label:'Ashburnham',
	name:'town',
	value:'11'
	},
	{
	label:'Athol',
	name:'town',
	value:'15'
	},
	{
	label:'Auburn',
	name:'town',
	value:'17'
	},
	{
	label:'Barre',
	name:'town',
	value:'21'
	},
	{
	label:'Berlin',
	name:'town',
	value:'28'
	},
	{
	label:'Blackstone',
	name:'town',
	value:'32'
	},
	{
	label:'Bolton',
	name:'town',
	value:'34'
	},
	{
	label:'Boylston',
	name:'town',
	value:'39'
	},
	{
	label:'Brookfield',
	name:'town',
	value:'45'
	},
	{
	label:'Charlton',
	name:'town',
	value:'54'
	},
	{
	label:'Clinton',
	name:'town',
	value:'64'
	},
	{
	label:'Douglas',
	name:'town',
	value:'77'
	},
	{
	label:'Dudley',
	name:'town',
	value:'80'
	},
	{
	label:'East Brookfield',
	name:'town',
	value:'84'
	},
	{
	label:'Fitchburg',
	name:'town',
	value:'97'
	},
	{
	label:'Gardner',
	name:'town',
	value:'103'
	},
	{
	label:'Grafton',
	name:'town',
	value:'110'
	},
	{
	label:'Hardwick',
	name:'town',
	value:'124'
	},
	{
	label:'Harvard',
	name:'town',
	value:'125'
	},
	{
	label:'Holden',
	name:'town',
	value:'134'
	},
	{
	label:'Hopedale',
	name:'town',
	value:'138'
	},
	{
	label:'Hubbardston',
	name:'town',
	value:'140'
	},
	{
	label:'Lancaster',
	name:'town',
	value:'147'
	},
	{
	label:'Leicester',
	name:'town',
	value:'151'
	},
	{
	label:'Leominster',
	name:'town',
	value:'153'
	},
	{
	label:'Lunenburg',
	name:'town',
	value:'162'
	},
	{
	label:'Mendon',
	name:'town',
	value:'179'
	},
	{
	label:'Milford',
	name:'town',
	value:'185'
	},
	{
	label:'Millbury',
	name:'town',
	value:'186'
	},
	{
	label:'Millville',
	name:'town',
	value:'188'
	},
	{
	label:'New Braintree',
	name:'town',
	value:'202'
	},
	{
	label:'North Brookfield',
	name:'town',
	value:'212'
	},
	{
	label:'Northborough',
	name:'town',
	value:'215'
	},
	{
	label:'Northbridge',
	name:'town',
	value:'216'
	},
	{
	label:'Oakham',
	name:'town',
	value:'222'
	},
	{
	label:'Oxford',
	name:'town',
	value:'226'
	},
	{
	label:'Paxton',
	name:'town',
	value:'228'
	},
	{
	label:'Petersham',
	name:'town',
	value:'234'
	},
	{
	label:'Phillipston',
	name:'town',
	value:'235'
	},
	{
	label:'Princeton',
	name:'town',
	value:'241'
	},
	{
	label:'Royalston',
	name:'town',
	value:'255'
	},
	{
	label:'Rutland',
	name:'town',
	value:'257'
	},
	{
	label:'Shrewsbury',
	name:'town',
	value:'271'
	},
	{
	label:'Southborough',
	name:'town',
	value:'277'
	},
	{
	label:'Southbridge',
	name:'town',
	value:'278'
	},
	{
	label:'Spencer',
	name:'town',
	value:'280'
	},
	{
	label:'Sterling',
	name:'town',
	value:'282'
	},
	{
	label:'Sturbridge',
	name:'town',
	value:'287'
	},
	{
	label:'Sutton',
	name:'town',
	value:'290'
	},
	{
	label:'Templeton',
	name:'town',
	value:'294'
	},
	{
	label:'Upton',
	name:'town',
	value:'303'
	},
	{
	label:'Uxbridge',
	name:'town',
	value:'304'
	},
	{
	label:'Warren',
	name:'town',
	value:'311'
	},
	{
	label:'Webster',
	name:'town',
	value:'316'
	},
	{
	label:'West Boylston',
	name:'town',
	value:'321'
	},
	{
	label:'West Brookfield',
	name:'town',
	value:'323'
	},
	{
	label:'Westborough',
	name:'town',
	value:'328'
	},
	{
	label:'Westminster',
	name:'town',
	value:'332'
	},
	{
	label:'Winchendon',
	name:'town',
	value:'343'
	},
	{
	label:'Worcester',
	name:'town',
	value:'348'
	}
	];
	//add new options
	require(["dojo/ready", "dojo/dom-style", "dijit/registry"], function(ready, domStyle, registry){
		ready(function(){
		dijit.byId('townSelect').addOption(worcesterTowns);
		});
	});
}



//
// newJerseyTowns.js
// contains functions to load the towns in each delaware county
//

//alert("NJ LOADED");
//
// Atlantic County
//
function newJerseyAtlantic(){
	//clear all previous options if the exist
	dijit.byId('townSelect').removeOption(dijit.byId('townSelect').getOptions());

	var atlanticTowns = [
	{
		label:'Select A Town',
		name:'town',
		value:''
	},	
{
label:'Absecon',
name:'town',
value:'101'
},
{
label:'Atlantic',
name:'town',
value:'102'
},
{
label:'Brigantine',
name:'town',
value:'103'
},
{
label:'Buena Vista Township',
name:'town',
value:'105'
},
{
label:'Buena Boro',
name:'town',
value:'104'
},
{
label:'Buena',
name:'town',
value:'104'
},
{
label:'Corbin',
name:'town',
value:'106'
},
{
label:'Egg Harbor',
name:'town',
value:'107'
},
{
label:'Egg Harbor Township',
name:'town',
value:'108'
},
{
label:'Estell Manor',
name:'town',
value:'109'
},
{
label:'Folsom',
name:'town',
value:'110'
},
{
label:'Galloway Township',
name:'town',
value:'111'
},
{
label:'Hamilton Township',
name:'town',
value:'112'
},
{
label:'Hammonton',
name:'town',
value:'113'
},
{
label:'Linwood',
name:'town',
value:'114'
},
{
label:'Longport',
name:'town',
value:'115'
},
{
label:'Margate',
name:'town',
value:'116'
},
{
label:'Mullica Township',
name:'town',
value:'117'
},
{
label:'Northfield',
name:'town',
value:'118'
},
{
label:'Pleasantville',
name:'town',
value:'119'
},
{
label:'Port Republic',
name:'town',
value:'120'
},
{
label:'Somers Point',
name:'town',
value:'121'
},
{
label:'Ventnor',
name:'town',
value:'122'
},
{
label:'Weymouth Township',
name:'town',
value:'123'
},
];
//add new options
require(["dojo/ready", "dojo/dom-style", "dijit/registry"], function(ready, domStyle, registry){
ready(function(){
dijit.byId('townSelect').addOption(atlanticTowns);
});
});
}

//
// Bergen
//
function newJerseyBergen(){
	//clear all previous options if the exist
	dijit.byId('townSelect').removeOption(dijit.byId('townSelect').getOptions());

	var bergenTowns = [
	{
		label:'Select A Town',
		name:'town',
		value:''
	},	
{
label:'Allendale Boro',
name:'town',
value:'201'
},
{
label:'Alpine Boro',
name:'town',
value:'202'
},
{
label:'Bergenfield Boro',
name:'town',
value:'203'
},
{
label:'Bogota Boro',
name:'town',
value:'204'
},
{
label:'Carlstadt Boro',
name:'town',
value:'205'
},
{
label:'Cliffside Park',
name:'town',
value:'206'
},
{
label:'Closter Boro',
name:'town',
value:'207'
},
{
label:'Cresskill Boro',
name:'town',
value:'208'
},
{
label:'Demarest Boro',
name:'town',
value:'209'
},
{
label:'Dumont Boro',
name:'town',
value:'210'
},
{
label:'Elmwood Park',
name:'town',
value:'211'
},
{
label:'E Rutherford',
name:'town',
value:'212'
},
{
label:'Edgewater Boro',
name:'town',
value:'213'
},
{
label:'Emerson Boro',
name:'town',
value:'214'
},
{
label:'Englewood City',
name:'town',
value:'215'
},
{
label:'Englewood Cliffs',
name:'town',
value:'216'
},
{
label:'Fairlawn Boro',
name:'town',
value:'217'
},
{
label:'Fairview Boro',
name:'town',
value:'218'
},
{
label:'Fort Lee',
name:'town',
value:'219'
},
{
label:'Franklin Lakes',
name:'town',
value:'220'
},
{
label:'Garfield City',
name:'town',
value:'221'
},
{
label:'Glen Rock',
name:'town',
value:'222'
},
{
label:'Hackensack City',
name:'town',
value:'223'
},
{
label:'Harrington Park',
name:'town',
value:'224'
},
{
label:'Hasbrouck Hghts',
name:'town',
value:'225'
},
{
label:'Haworth Boro',
name:'town',
value:'226'
},
{
label:'Hillsdale Boro',
name:'town',
value:'227'
},
{
label:'Hohokus Boro',
name:'town',
value:'228'
},
{
label:'Leonia Boro',
name:'town',
value:'229'
},
{
label:'Little Ferry',
name:'town',
value:'230'
},
{
label:'Lodi Boro',
name:'town',
value:'231'
},
{
label:'Lyndhurst Twp',
name:'town',
value:'232'
},
{
label:'Mahwah Twp',
name:'town',
value:'233'
},
{
label:'Maywood Boro',
name:'town',
value:'234'
},
{
label:'Midland Park',
name:'town',
value:'235'
},
{
label:'Montvale Boro',
name:'town',
value:'236'
},
{
label:'Moonachie Boro',
name:'town',
value:'237'
},
{
label:'New Milford',
name:'town',
value:'238'
},
{
label:'North Arlington',
name:'town',
value:'239'
},
{
label:'Northvale Boro',
name:'town',
value:'240'
},
{
label:'Norwood Boro',
name:'town',
value:'241'
},
{
label:'Oakland Boro',
name:'town',
value:'242'
},
{
label:'Old Tappan',
name:'town',
value:'243'
},
{
label:'Oradell Boro',
name:'town',
value:'244'
},
{
label:'Palisades Park',
name:'town',
value:'245'
},
{
label:'Paramus Boro',
name:'town',
value:'246'
},
{
label:'Park Ridge',
name:'town',
value:'247'
},
{
label:'Ramsey Boro',
name:'town',
value:'248'
},
{
label:'Ridgefield Boro',
name:'town',
value:'249'
},
{
label:'Ridgefield Park',
name:'town',
value:'250'
},
{
label:'Ridgewood Village',
name:'town',
value:'251'
},
{
label:'Riveredge Boro',
name:'town',
value:'252'
},
{
label:'Rivervale Twp',
name:'town',
value:'253'
},
{
label:'Rochelle Park',
name:'town',
value:'254'
},
{
label:'Rockleigh Boro',
name:'town',
value:'255'
},
{
label:'Rutherford Boro',
name:'town',
value:'256'
},
{
label:'Saddle Brook',
name:'town',
value:'257'
},
{
label:'Saddle River',
name:'town',
value:'258'
},
{
label:'So Hackensack',
name:'town',
value:'259'
},
{
label:'Teaneck Twp',
name:'town',
value:'260'
},
{
label:'Tenafly Boro',
name:'town',
value:'261'
},
{
label:'Teterboro Boro',
name:'town',
value:'262'
},
{
label:'Upper Saddle',
name:'town',
value:'263'
},
{
label:'Waldwick Boro',
name:'town',
value:'264'
},
{
label:'Wallington Boro',
name:'town',
value:'265'
},
{
label:'Washington Twp',
name:'town',
value:'266'
},
{
label:'Westwood Boro',
name:'town',
value:'267'
},
{
label:'Woodcliff Lake',
name:'town',
value:'268'
},
{
label:'Wood Ridge',
name:'town',
value:'269'
},
{
label:'Wyckoff Twp',
name:'town',
value:'270'
},
];
//add new options
require(["dojo/ready", "dojo/dom-style", "dijit/registry"], function(ready, domStyle, registry){
ready(function(){
dijit.byId('townSelect').addOption(bergenTowns);
});
});
}

//
// Burlington
//
function newJerseyBurlington(){
	//clear all previous options if the exist
	dijit.byId('townSelect').removeOption(dijit.byId('townSelect').getOptions());

	var burlingtonTowns = [
	{
		label:'Select A Town',
		name:'town',
		value:''
	},	
{
label:'Bass River',
name:'town',
value:'301'
},
{
label:'Beverly City',
name:'town',
value:'302'
},
{
label:'Bordentown City',
name:'town',
value:'303'
},
{
label:'Bordentown Twp',
name:'town',
value:'304'
},
{
label:'Burlington City',
name:'town',
value:'305'
},
{
label:'Burlington Twp',
name:'town',
value:'306'
},
{
label:'Chesterfield Twp',
name:'town',
value:'307'
},
{
label:'Cinnaminson Twp',
name:'town',
value:'308'
},
{
label:'Delanco Twp',
name:'town',
value:'309'
},
{
label:'Delran Twp',
name:'town',
value:'310'
},
{
label:'Eastampton Twp',
name:'town',
value:'311'
},
{
label:'Edgewater Park',
name:'town',
value:'312'
},
{
label:'Evesham Twp',
name:'town',
value:'313'
},
{
label:'Fieldsboro Boro',
name:'town',
value:'314'
},
{
label:'Florence Twp',
name:'town',
value:'315'
},
{
label:'Hainesport Twp',
name:'town',
value:'316'
},
{
label:'Lumberton Twp',
name:'town',
value:'317'
},
{
label:'Mansfield Twp',
name:'town',
value:'318'
},
{
label:'Maple Shade',
name:'town',
value:'319'
},
{
label:'Medford Twp',
name:'town',
value:'320'
},
{
label:'Medford Lakes',
name:'town',
value:'321'
},
{
label:'Moorestown Twp',
name:'town',
value:'322'
},
{
label:'Mt Holly',
name:'town',
value:'323'
},
{
label:'Mt Laurel',
name:'town',
value:'324'
},
{
label:'New Hanover',
name:'town',
value:'325'
},
{
label:'No Hanover',
name:'town',
value:'326'
},
{
label:'Palmyra Boro',
name:'town',
value:'327'
},
{
label:'Pemberton Boro',
name:'town',
value:'328'
},
{
label:'Pemberton Twp',
name:'town',
value:'329'
},
{
label:'Riverside Twp',
name:'town',
value:'330'
},
{
label:'Riverton Boro',
name:'town',
value:'331'
},
{
label:'Shamong Twp',
name:'town',
value:'332'
},
{
label:'Southampton Twp',
name:'town',
value:'333'
},
{
label:'Springfield Twp',
name:'town',
value:'334'
},
{
label:'Tabernacle Twp',
name:'town',
value:'335'
},
{
label:'Washington Twp',
name:'town',
value:'336'
},
{
label:'Westampton Twp',
name:'town',
value:'337'
},
{
label:'Willingboro Twp',
name:'town',
value:'338'
},
{
label:'Woodland Twp',
name:'town',
value:'339'
},
{
label:'Wrightstown Boro',
name:'town',
value:'340'
},
];
//add new options
require(["dojo/ready", "dojo/dom-style", "dijit/registry"], function(ready, domStyle, registry){
ready(function(){
dijit.byId('townSelect').addOption(burlingtonTowns);
});
});
}


//
// Camden
//
function newJerseyCamden(){
	//clear all previous options if the exist
	dijit.byId('townSelect').removeOption(dijit.byId('townSelect').getOptions());

	var CamdenTowns = [
	{
		label:'Select A Town',
		name:'town',
		value:''
	},	
{
label:'Audubon Boro',
name:'town',
value:'401'
},
{
label:'Audubon Park',
name:'town',
value:'402'
},
{
label:'Barrington Boro',
name:'town',
value:'403'
},
{
label:'Bellmawr Boro',
name:'town',
value:'404'
},
{
label:'Berlin Boro',
name:'town',
value:'405'
},
{
label:'Berlin Twp',
name:'town',
value:'406'
},
{
label:'Brooklawn Boro',
name:'town',
value:'407'
},
{
label:'Camden City',
name:'town',
value:'408'
},
{
label:'Cherry Hill',
name:'town',
value:'409'
},
{
label:'Chesilhurst Boro',
name:'town',
value:'410'
},
{
label:'Clementon Boro',
name:'town',
value:'411'
},
{
label:'Collingswood Boro',
name:'town',
value:'412'
},
{
label:'Gibbsboro Boro',
name:'town',
value:'413'
},
{
label:'Gloucester City',
name:'town',
value:'414'
},
{
label:'Gloucester Twp',
name:'town',
value:'415'
},
{
label:'Haddon Twp',
name:'town',
value:'416'
},
{
label:'Haddonfield Boro',
name:'town',
value:'417'
},
{
label:'Haddon Heights',
name:'town',
value:'418'
},
{
label:'Hi Nella',
name:'town',
value:'419'
},
{
label:'Laurel Springs',
name:'town',
value:'420'
},
{
label:'Lawnside Boro',
name:'town',
value:'421'
},
{
label:'Lindenwold Boro',
name:'town',
value:'422'
},
{
label:'Magnolia Boro',
name:'town',
value:'423'
},
{
label:'Merchantville Boro',
name:'town',
value:'424'
},
{
label:'Mount Ephraim',
name:'town',
value:'425'
},
{
label:'Oaklyn Boro',
name:'town',
value:'426'
},
{
label:'Pennsauken Twp',
name:'town',
value:'427'
},
{
label:'Pine Hill',
name:'town',
value:'428'
},
{
label:'Pine Valley',
name:'town',
value:'429'
},
{
label:'Runnemede Boro',
name:'town',
value:'430'
},
{
label:'Somerdale Boro',
name:'town',
value:'431'
},
{
label:'Stratford Boro',
name:'town',
value:'432'
},
{
label:'Tavistock Boro',
name:'town',
value:'433'
},
{
label:'Voorhees Twp',
name:'town',
value:'434'
},
{
label:'Waterford Twp',
name:'town',
value:'435'
},
{
label:'Winslow Twp',
name:'town',
value:'436'
},
{
label:'Woodlynne Boro',
name:'town',
value:'437'
},
];
//add new options
require(["dojo/ready", "dojo/dom-style", "dijit/registry"], function(ready, domStyle, registry){
ready(function(){
dijit.byId('townSelect').addOption(CamdenTowns);
});
});
}

//
// Cape May
//
function newJerseyCapeMay(){
	//clear all previous options if the exist
	dijit.byId('townSelect').removeOption(dijit.byId('townSelect').getOptions());

	var capemayTowns = [
	{
		label:'Select A Town',
		name:'town',
		value:''
	},	
{
label:'Avalon Boro',
name:'town',
value:'501'
},
{
label:'Cape May City',
name:'town',
value:'502'
},
{
label:'Cape May Point',
name:'town',
value:'503'
},
{
label:'Dennis Twp',
name:'town',
value:'504'
},
{
label:'Lower Twp',
name:'town',
value:'505'
},
{
label:'Middle Twp',
name:'town',
value:'506'
},
{
label:'North Wildwood',
name:'town',
value:'507'
},
{
label:'Ocean City',
name:'town',
value:'508'
},
{
label:'Sea Isle',
name:'town',
value:'509'
},
{
label:'Stone Harbor',
name:'town',
value:'510'
},
{
label:'Upper Twp',
name:'town',
value:'511'
},
{
label:'West Cape',
name:'town',
value:'512'
},
{
label:'West Wildwood',
name:'town',
value:'513'
},
{
label:'Wildwood City',
name:'town',
value:'514'
},
{
label:'Wildwood Crest',
name:'town',
value:'515'
},
{
label:'Woodbine Boro',
name:'town',
value:'516'
},
];
//add new options
require(["dojo/ready", "dojo/dom-style", "dijit/registry"], function(ready, domStyle, registry){
ready(function(){
dijit.byId('townSelect').addOption(capemayTowns);
});
});
}

//
// Cumberland
//
function newJerseyCumberland(){
	//clear all previous options if the exist
	dijit.byId('townSelect').removeOption(dijit.byId('townSelect').getOptions());

	var cumberlandTowns = [
	{
		label:'Select A Town',
		name:'town',
		value:''
	},	
{
label:'Bridgeton City',
name:'town',
value:'601'
},
{
label:'Commercial Twp',
name:'town',
value:'602'
},
{
label:'Deerfield Twp',
name:'town',
value:'603'
},
{
label:'Downe Twp',
name:'town',
value:'604'
},
{
label:'Fairfield Twp',
name:'town',
value:'605'
},
{
label:'Greenwich Twp',
name:'town',
value:'606'
},
{
label:'Hopewell Twp',
name:'town',
value:'607'
},
{
label:'Lawrence Twp',
name:'town',
value:'608'
},
{
label:'Maurice River',
name:'town',
value:'609'
},
{
label:'Millville City',
name:'town',
value:'610'
},
{
label:'Shiloh Boro',
name:'town',
value:'611'
},
{
label:'Stow Creek',
name:'town',
value:'612'
},
{
label:'Upper Deerfield',
name:'town',
value:'613'
},
{
label:'Vineland City',
name:'town',
value:'614'
},
];
//add new options
require(["dojo/ready", "dojo/dom-style", "dijit/registry"], function(ready, domStyle, registry){
ready(function(){
dijit.byId('townSelect').addOption(cumberlandTowns);
});
});
}

//
// Essex
//


function newJerseyEssex(){
	//clear all previous options if the exist
	dijit.byId('townSelect').removeOption(dijit.byId('townSelect').getOptions());

	var essexTowns = [
	{
		label:'Select A Town',
		name:'town',
		value:''
	},	
{
label:'Belleville Twp',
name:'town',
value:'701'
},
{
label:'Bloomfield Twp',
name:'town',
value:'702'
},
{
label:'Caldwell Boro',
name:'town',
value:'703'
},
{
label:'Cedar Grove',
name:'town',
value:'704'
},
{
label:'East Orange',
name:'town',
value:'705'
},
{
label:'Essex Fells',
name:'town',
value:'706'
},
{
label:'Fairfield Twp',
name:'town',
value:'707'
},
{
label:'Glen Ridge',
name:'town',
value:'708'
},
{
label:'Irvington Twp',
name:'town',
value:'709'
},
{
label:'Livingston Twp',
name:'town',
value:'710'
},
{
label:'Maplewood Twp',
name:'town',
value:'711'
},
{
label:'Millburn Twp',
name:'town',
value:'712'
},
{
label:'Montclair Twp',
name:'town',
value:'713'
},
{
label:'Newark City',
name:'town',
value:'714'
},
{
label:'North Caldwell',
name:'town',
value:'715'
},
{
label:'Nutley Twp',
name:'town',
value:'716'
},
{
label:'Orange City',
name:'town',
value:'717'
},
{
label:'Roseland Boro',
name:'town',
value:'718'
},
{
label:'South Orange',
name:'town',
value:'719'
},
{
label:'Verona Twp',
name:'town',
value:'720'
},
{
label:'West Caldwell',
name:'town',
value:'721'
},
{
label:'West Orange',
name:'town',
value:'722'
},
];
//add new options
require(["dojo/ready", "dojo/dom-style", "dijit/registry"], function(ready, domStyle, registry){
ready(function(){
dijit.byId('townSelect').addOption(essexTowns);
});
});
}

//
// Gloucester
//
function newJerseyGloucester(){
	//clear all previous options if the exist
	dijit.byId('townSelect').removeOption(dijit.byId('townSelect').getOptions());

	var gloucesterTowns = [
	{
		label:'Select A Town',
		name:'town',
		value:''
	},	
{
label:'Clayton Boro',
name:'town',
value:'801'
},
{
label:'Deptford Twp',
name:'town',
value:'802'
},
{
label:'East Greenwich',
name:'town',
value:'803'
},
{
label:'Elk Twp',
name:'town',
value:'804'
},
{
label:'Franklin Twp',
name:'town',
value:'805'
},
{
label:'Glassboro Boro',
name:'town',
value:'806'
},
{
label:'Greenwich Twp',
name:'town',
value:'807'
},
{
label:'Harrison Twp',
name:'town',
value:'808'
},
{
label:'Logan Twp',
name:'town',
value:'809'
},
{
label:'Mantua Twp',
name:'town',
value:'810'
},
{
label:'Monroe Twp',
name:'town',
value:'811'
},
{
label:'National Park',
name:'town',
value:'812'
},
{
label:'Newfield Boro',
name:'town',
value:'813'
},
{
label:'Paulsboro Boro',
name:'town',
value:'814'
},
{
label:'Pitman Boro',
name:'town',
value:'815'
},
{
label:'So Harrison',
name:'town',
value:'816'
},
{
label:'Swedesboro Boro',
name:'town',
value:'817'
},
{
label:'Washington Twp',
name:'town',
value:'818'
},
{
label:'Wenonah Boro',
name:'town',
value:'819'
},
{
label:'West Deptford',
name:'town',
value:'820'
},
{
label:'Westville Boro',
name:'town',
value:'821'
},
{
label:'Woodbury City',
name:'town',
value:'822'
},
{
label:'Woodbury Heights',
name:'town',
value:'823'
},
{
label:'Woolwich Twp',
name:'town',
value:'824'
}
];
//add new options
require(["dojo/ready", "dojo/dom-style", "dijit/registry"], function(ready, domStyle, registry){
ready(function(){
dijit.byId('townSelect').addOption(gloucesterTowns);
});
});
}

//
// Hudson
//
function newJerseyHudson(){
	//clear all previous options if the exist
	dijit.byId('townSelect').removeOption(dijit.byId('townSelect').getOptions());

	var hudsonTowns = [
	{
		label:'Select A Town',
		name:'town',
		value:''
	},	
{
label:'Bayonne City',
name:'town',
value:'901'
},
{
label:'East Newark',
name:'town',
value:'902'
},
{
label:'Guttenberg Town',
name:'town',
value:'903'
},
{
label:'Harrison Town',
name:'town',
value:'904'
},
{
label:'Hoboken City',
name:'town',
value:'905'
},
{
label:'Jersey City',
name:'town',
value:'906'
},
{
label:'Kearny Town',
name:'town',
value:'907'
},
{
label:'North Bergen',
name:'town',
value:'908'
},
{
label:'Secaucus Town',
name:'town',
value:'909'
},
{
label:'Union City',
name:'town',
value:'910'
},
{
label:'Weehawken Twp',
name:'town',
value:'911'
},
{
label:'West New',
name:'town',
value:'912'
},
];
//add new options
require(["dojo/ready", "dojo/dom-style", "dijit/registry"], function(ready, domStyle, registry){
ready(function(){
dijit.byId('townSelect').addOption(hudsonTowns);
});
});
}

//
//Hunterdon
//
function newJerseyHunterdon(){
	//clear all previous options if the exist
	dijit.byId('townSelect').removeOption(dijit.byId('townSelect').getOptions());

	var hunterdonTowns = [
	{
		label:'Select A Town',
		name:'town',
		value:''
	},	
{
label:'Alexandria Twp',
name:'town',
value:'1001'
},
{
label:'Bethlehem Twp',
name:'town',
value:'1002'
},
{
label:'Bloomsbury Boro',
name:'town',
value:'1003'
},
{
label:'Califon Boro',
name:'town',
value:'1004'
},
{
label:'Clinton Town',
name:'town',
value:'1005'
},
{
label:'Clinton Twp',
name:'town',
value:'1006'
},
{
label:'Delaware Twp',
name:'town',
value:'1007'
},
{
label:'East Amwell',
name:'town',
value:'1008'
},
{
label:'Flemington Boro',
name:'town',
value:'1009'
},
{
label:'Franklin Twp',
name:'town',
value:'1010'
},
{
label:'Frenchtown Boro',
name:'town',
value:'1011'
},
{
label:'Glen Gardner',
name:'town',
value:'1012'
},
{
label:'Hampton Boro',
name:'town',
value:'1013'
},
{
label:'High Bridge',
name:'town',
value:'1014'
},
{
label:'Holland Twp',
name:'town',
value:'1015'
},
{
label:'Kingwood Twp',
name:'town',
value:'1016'
},
{
label:'Lambertville City',
name:'town',
value:'1017'
},
{
label:'Lebanon Boro',
name:'town',
value:'1018'
},
{
label:'Lebanon Twp',
name:'town',
value:'1019'
},
{
label:'Milford Boro',
name:'town',
value:'1020'
},
{
label:'Raritan Twp',
name:'town',
value:'1021'
},
{
label:'Readington Twp',
name:'town',
value:'1022'
},
{
label:'Stockton Boro',
name:'town',
value:'1023'
},
{
label:'Tewksbury Twp',
name:'town',
value:'1024'
},
{
label:'Union Twp',
name:'town',
value:'1025'
},
{
label:'West Amwell',
name:'town',
value:'1026'
},
{
label:'East Windsor',
name:'town',
value:'1101'
},
];
//add new options
require(["dojo/ready", "dojo/dom-style", "dijit/registry"], function(ready, domStyle, registry){
ready(function(){
dijit.byId('townSelect').addOption(hunterdonTowns);
});
});
}

//
// Mercer
//
function newJerseyMercer(){
	//clear all previous options if the exist
	dijit.byId('townSelect').removeOption(dijit.byId('townSelect').getOptions());

	var mercerTowns = [
	{
		label:'Select A Town',
		name:'town',
		value:''
	},	
{
label:'Ewing Twp',
name:'town',
value:'1102'
},
{
label:'Hamilton Twp',
name:'town',
value:'1103'
},
{
label:'Hightstown Boro',
name:'town',
value:'1104'
},
{
label:'Hopewell Boro',
name:'town',
value:'1105'
},
{
label:'Hopewell Twp',
name:'town',
value:'1106'
},
{
label:'Lawrence Twp',
name:'town',
value:'1107'
},
{
label:'Pennington Boro',
name:'town',
value:'1108'
},
{
label:'Princeton Boro',
name:'town',
value:'1109'
},
{
label:'Princeton Twp',
name:'town',
value:'1110'
},
{
label:'Trenton City',
name:'town',
value:'1111'
},
{
label:'Robbinsville Twp',
name:'town',
value:'1112'
},
{
label:'West Windsor',
name:'town',
value:'1113'
},
];
//add new options
require(["dojo/ready", "dojo/dom-style", "dijit/registry"], function(ready, domStyle, registry){
ready(function(){
dijit.byId('townSelect').addOption(mercerTowns);
});
});
}

//
// Middlesex
//
function newJerseyMiddlesex(){
	//clear all previous options if the exist
	dijit.byId('townSelect').removeOption(dijit.byId('townSelect').getOptions());

	var middlesexTowns = [
	{
		label:'Select A Town',
		name:'town',
		value:''
	},	
	{
	label:'Carteret Boro',
	name:'town',
	value:'1201'
	},
	{
	label:'Cranbury Twp',
	name:'town',
	value:'1202'
	},
	{
	label:'Dunellen Boro',
	name:'town',
	value:'1203'
	},
	{
	label:'East Brunswick',
	name:'town',
	value:'1204'
	},
	{
	label:'Edison Twp',
	name:'town',
	value:'1205'
	},
	{
	label:'Helmetta Boro',
	name:'town',
	value:'1206'
	},
	{
	label:'Highland Park',
	name:'town',
	value:'1207'
	},
	{
	label:'Jamesburg Boro',
	name:'town',
	value:'1208'
	},
	{
	label:'Metuchen Boro',
	name:'town',
	value:'1209'
	},
	{
	label:'Middlesex Boro',
	name:'town',
	value:'1210'
	},
	{
	label:'Milltown Boro',
	name:'town',
	value:'1211'
	},
	{
	label:'Monroe Twp',
	name:'town',
	value:'1212'
	},
	{
	label:'New Brunswick',
	name:'town',
	value:'1213'
	},
	{
	label:'North Brunswick',
	name:'town',
	value:'1214'
	},
	{
	label:'Old Bridge',
	name:'town',
	value:'1215'
	},
	{
	label:'Perth Amboy',
	name:'town',
	value:'1216'
	},
	{
	label:'Piscataway Twp',
	name:'town',
	value:'1217'
	},
	{
	label:'Plainsboro Twp',
	name:'town',
	value:'1218'
	},
	{
	label:'Sayreville Boro',
	name:'town',
	value:'1219'
	},
	{
	label:'South Amboy',
	name:'town',
	value:'1220'
	},
	{
	label:'South Brunswick',
	name:'town',
	value:'1221'
	},
	{
	label:'South Plainfield',
	name:'town',
	value:'1222'
	},
	{
	label:'South River',
	name:'town',
	value:'1223'
	},
	{
	label:'Spotswood Boro',
	name:'town',
	value:'1224'
	},
	{
	label:'Woodbridge Twp',
	name:'town',
	value:'1225'
	},
	];
	//add new options
	require(["dojo/ready", "dojo/dom-style", "dijit/registry"], function(ready, domStyle, registry){
	ready(function(){
	dijit.byId('townSelect').addOption(middlesexTowns);
	});
	});
}

//
// Monmouth
//
function newJerseyMonmouth(){
	//clear all previous options if the exist
	dijit.byId('townSelect').removeOption(dijit.byId('townSelect').getOptions());

	var monmouthTowns = [
	{
		label:'Select A Town',
		name:'town',
		value:''
	},	
{
label:'ABERDEEN TWP',
name:'town',
value:'1301'
},
{
label:'ALLENHURST BORO',
name:'town',
value:'1302'
},
{
label:'ALLENTOWN BORO',
name:'town',
value:'1303'
},
{
label:'ASBURY PARK',
name:'town',
value:'1304'
},
{
label:'ATLANTIC HIGHLANDS',
name:'town',
value:'1305'
},
{
label:'AVON BY	THE',
name:'town',
value:'1306'
},
{
label:'BELMAR BORO',
name:'town',
value:'1307'
},
{
label:'BRADLEY BEACH',
name:'town',
value:'1308'
},
{
label:'BRIELLE BORO',
name:'town',
value:'1309'
},
{
label:'COLTS NECK',
name:'town',
value:'1310'
},
{
label:'DEAL BORO',
name:'town',
value:'1311'
},
{
label:'EATONTOWN BORO',
name:'town',
value:'1313'
},
{
label:'ENGLISHTOWN BORO',
name:'town',
value:'1313'
},
{
label:'FAIR HAVEN',
name:'town',
value:'1314'
},
{
label:'FARMINGDALE BORO',
name:'town',
value:'1315'
},
{
label:'FREEHOLD BORO',
name:'town',
value:'1316'
},
{
label:'FREEHOLD TWP',
name:'town',
value:'1317'
},
{
label:'HAZLET TWP',
name:'town',
value:'1318'
},
{
label:'HIGHLANDS BORO',
name:'town',
value:'1319'
},
{
label:'HOLMDEL TWP',
name:'town',
value:'1320'
},
{
label:'HOWELL TWP',
name:'town',
value:'1321'
},
{
label:'INTERLAKEN BORO',
name:'town',
value:'1322'
},
{
label:'KEANSBURG BORO',
name:'town',
value:'1323'
},
{
label:'KEYPORT BORO',
name:'town',
value:'1324'
},
{
label:'LITTLE SILVER',
name:'town',
value:'1325'
},
{
label:'LOCH ARBOUR',
name:'town',
value:'1326'
},
{
label:'LONG BRANCH',
name:'town',
value:'1327'
},
{
label:'MANALAPAN TWP',
name:'town',
value:'1328'
},
{
label:'MANASQUAN BORO',
name:'town',
value:'1329'
},
{
label:'MARLBORO TWP',
name:'town',
value:'1330'
},
{
label:'MATAWAN BORO',
name:'town',
value:'1331'
},
{
label:'MIDDLETOWN TWP',
name:'town',
value:'1332'
},
{
label:'MILLSTONE TWP',
name:'town',
value:'1333'
},
{
label:'MONMOUTH BEACH',
name:'town',
value:'1334'
},
{
label:'NEPTUNE TWP',
name:'town',
value:'1335'
},
{
label:'NEPTUNE CITY',
name:'town',
value:'1336'
},
{
label:'OCEAN TWP',
name:'town',
value:'1337'
},
{
label:'OCEANPORT BORO',
name:'town',
value:'1338'
},
{
label:'RED BANK',
name:'town',
value:'1339'
},
{
label:'ROOSEVELT BORO',
name:'town',
value:'1340'
},
{
label:'RUMSON BORO',
name:'town',
value:'1341'
},
{
label:'SEA BRIGHT',
name:'town',
value:'1342'
},
{
label:'SEA GIRT',
name:'town',
value:'1343'
},
{
label:'SHREWSBURY BORO',
name:'town',
value:'1344'
},
{
label:'SHREWSBURY TWP',
name:'town',
value:'1345'
},
{
label:'LAKE COMO',
name:'town',
value:'1346'
},
{
label:'SPRING LAKE',
name:'town',
value:'1347'
},
{
label:'SPRING LAKE',
name:'town',
value:'1348'
},
{
label:'TINTON FALLS',
name:'town',
value:'1349'
},
{
label:'UNION BEACH',
name:'town',
value:'1350'
},
{
label:'UPPER FREEHOLD',
name:'town',
value:'1351'
},
{
label:'WALL TWP',
name:'town',
value:'1352'
}
];
//add new options
require(["dojo/ready", "dojo/dom-style", "dijit/registry"], function(ready, domStyle, registry){
ready(function(){
dijit.byId('townSelect').addOption(monmouthTowns);
});
});
}

//
//Morris
//
function newJerseyMorris(){
	//clear all previous options if the exist
	dijit.byId('townSelect').removeOption(dijit.byId('townSelect').getOptions());

	var morrisTowns = [
	{
		label:'Select A Town',
		name:'town',
		value:''
	},	
{
label:'Boonton Town',
name:'town',
value:'1401'
},
{
label:'Boonton Twp',
name:'town',
value:'1402'
},
{
label:'Butler Boro',
name:'town',
value:'1403'
},
{
label:'Chatham Boro',
name:'town',
value:'1404'
},
{
label:'Chatham Twp',
name:'town',
value:'1405'
},
{
label:'Chester Boro',
name:'town',
value:'1406'
},
{
label:'Chester Twp',
name:'town',
value:'1407'
},
{
label:'Denville Twp',
name:'town',
value:'1408'
},
{
label:'Dover Town',
name:'town',
value:'1409'
},
{
label:'East Hanover',
name:'town',
value:'1410'
},
{
label:'Florham Park',
name:'town',
value:'1411'
},
{
label:'Hanover Twp',
name:'town',
value:'1412'
},
{
label:'Harding Twp',
name:'town',
value:'1413'
},
{
label:'Jefferson Twp',
name:'town',
value:'1414'
},
{
label:'Kinnelon Boro',
name:'town',
value:'1415'
},
{
label:'Lincoln Park',
name:'town',
value:'1416'
},
{
label:'Madison Boro',
name:'town',
value:'1417'
},
{
label:'Mendham Boro',
name:'town',
value:'1418'
},
{
label:'Mendham Twp',
name:'town',
value:'1419'
},
{
label:'Mine Hill',
name:'town',
value:'1420'
},
{
label:'Montville Twp',
name:'town',
value:'1421'
},
{
label:'Morris Twp',
name:'town',
value:'1422'
},
{
label:'Morris Plains',
name:'town',
value:'1423'
},
{
label:'Morristown Town',
name:'town',
value:'1424'
},
{
label:'Mountain Lakes',
name:'town',
value:'1425'
},
{
label:'Mount Arlington',
name:'town',
value:'1426'
},
{
label:'Mount Olive',
name:'town',
value:'1427'
},
{
label:'Netcong Boro',
name:'town',
value:'1428'
},
{
label:'Parsippany Tr',
name:'town',
value:'1429'
},
{
label:'Long Hill',
name:'town',
value:'1430'
},
{
label:'Pequannock Twp',
name:'town',
value:'1431'
},
{
label:'Randolph Twp',
name:'town',
value:'1432'
},
{
label:'Riverdale Boro',
name:'town',
value:'1433'
},
{
label:'Rockaway Boro',
name:'town',
value:'1434'
},
{
label:'Rockaway Twp',
name:'town',
value:'1435'
},
{
label:'Roxbury Twp',
name:'town',
value:'1436'
},
{
label:'Victory Gardens',
name:'town',
value:'1437'
},
{
label:'Washington Twp',
name:'town',
value:'1438'
},
{
label:'Wharton Boro',
name:'town',
value:'1439'
},
];
//add new options
require(["dojo/ready", "dojo/dom-style", "dijit/registry"], function(ready, domStyle, registry){
ready(function(){
dijit.byId('townSelect').addOption(morrisTowns);
});
});
}

//
// Ocean
//
function newJerseyOcean(){
	//clear all previous options if the exist
	dijit.byId('townSelect').removeOption(dijit.byId('townSelect').getOptions());

	var oceanTowns = [
	{
		label:'Select A Town',
		name:'town',
		value:''
	},	
{
label:'Boonton Town',
name:'town',
value:'1401'
},
{
label:'Boonton Twp',
name:'town',
value:'1402'
},
{
label:'Butler Boro',
name:'town',
value:'1403'
},
{
label:'Chatham Boro',
name:'town',
value:'1404'
},
{
label:'Chatham Twp',
name:'town',
value:'1405'
},
{
label:'Chester Boro',
name:'town',
value:'1406'
},
{
label:'Chester Twp',
name:'town',
value:'1407'
},
{
label:'Denville Twp',
name:'town',
value:'1408'
},
{
label:'Dover Town',
name:'town',
value:'1409'
},
{
label:'East Hanover',
name:'town',
value:'1410'
},
{
label:'Florham Park',
name:'town',
value:'1411'
},
{
label:'Hanover Twp',
name:'town',
value:'1412'
},
{
label:'Harding Twp',
name:'town',
value:'1413'
},
{
label:'Jefferson Twp',
name:'town',
value:'1414'
},
{
label:'Kinnelon Boro',
name:'town',
value:'1415'
},
{
label:'Lincoln Park',
name:'town',
value:'1416'
},
{
label:'Madison Boro',
name:'town',
value:'1417'
},
{
label:'Mendham Boro',
name:'town',
value:'1418'
},
{
label:'Mendham Twp',
name:'town',
value:'1419'
},
{
label:'Mine Hill',
name:'town',
value:'1420'
},
{
label:'Montville Twp',
name:'town',
value:'1421'
},
{
label:'Morris Twp',
name:'town',
value:'1422'
},
{
label:'Morris Plains',
name:'town',
value:'1423'
},
{
label:'Morristown Town',
name:'town',
value:'1424'
},
{
label:'Mountain Lakes',
name:'town',
value:'1425'
},
{
label:'Mount Arlington',
name:'town',
value:'1426'
},
{
label:'Mount Olive',
name:'town',
value:'1427'
},
{
label:'Netcong Boro',
name:'town',
value:'1428'
},
{
label:'Parsippany Tr',
name:'town',
value:'1429'
},
{
label:'Long Hill',
name:'town',
value:'1430'
},
{
label:'Pequannock Twp',
name:'town',
value:'1431'
},
{
label:'Randolph Twp',
name:'town',
value:'1432'
},
{
label:'Riverdale Boro',
name:'town',
value:'1433'
},
{
label:'Rockaway Boro',
name:'town',
value:'1434'
},
{
label:'Rockaway Twp',
name:'town',
value:'1435'
},
{
label:'Roxbury Twp',
name:'town',
value:'1436'
},
{
label:'Victory Gardens',
name:'town',
value:'1437'
},
{
label:'Washington Twp',
name:'town',
value:'1438'
},
{
label:'Wharton Boro',
name:'town',
value:'1439'
}
];
//add new options
require(["dojo/ready", "dojo/dom-style", "dijit/registry"], function(ready, domStyle, registry){
ready(function(){
dijit.byId('townSelect').addOption(oceanTowns);
});
});
}

//
// Passaic
//
function newJerseyPassaic(){
	//clear all previous options if the exist
	dijit.byId('townSelect').removeOption(dijit.byId('townSelect').getOptions());

	var passaicTowns = [
	{
		label:'Select A Town',
		name:'town',
		value:''
	},	
{
label:'Bloomingdale Boro',
name:'town',
value:'1601'
},
{
label:'Clifton City',
name:'town',
value:'1602'
},
{
label:'Haledon Boro',
name:'town',
value:'1603'
},
{
label:'Hawthorne Boro',
name:'town',
value:'1604'
},
{
label:'Little Falls',
name:'town',
value:'1605'
},
{
label:'North Haledon',
name:'town',
value:'1606'
},
{
label:'Passaic City',
name:'town',
value:'1607'
},
{
label:'Paterson City',
name:'town',
value:'1608'
},
{
label:'Pompton Lakes',
name:'town',
value:'1609'
},
{
label:'Prospect Park',
name:'town',
value:'1610'
},
{
label:'Ringwood Boro',
name:'town',
value:'1611'
},
{
label:'Totowa Boro',
name:'town',
value:'1612'
},
{
label:'Wanaque Boro',
name:'town',
value:'1613'
},
{
label:'Wayne Twp',
name:'town',
value:'1614'
},
{
label:'West Milford',
name:'town',
value:'1615'
},
{
label:'Woodland Park',
name:'town',
value:'1616'
},
];
//add new options
require(["dojo/ready", "dojo/dom-style", "dijit/registry"], function(ready, domStyle, registry){
ready(function(){
dijit.byId('townSelect').addOption(passaicTowns);
});
});
}

//
//Salem
//
function newJerseySalem(){
	//clear all previous options if the exist
	dijit.byId('townSelect').removeOption(dijit.byId('townSelect').getOptions());

	var salemTowns = [
	{
		label:'Select A Town',
		name:'town',
		value:''
	},	
{
label:'Alloway Township',
name:'town',
value:'1701'
},
{
label:'Carneys Point',
name:'town',
value:'1702'
},
{
label:'Elmer Boro',
name:'town',
value:'1703'
},
{
label:'Elsinboro Twp',
name:'town',
value:'1704'
},
{
label:'Lower Alloway',
name:'town',
value:'1705'
},
{
label:'Mannington Twp',
name:'town',
value:'1706'
},
{
label:'Oldmans Twp',
name:'town',
value:'1707'
},
{
label:'Penns Grove',
name:'town',
value:'1708'
},
{
label:'Pennsville Twp',
name:'town',
value:'1709'
},
{
label:'Pilesgrove Twp',
name:'town',
value:'1710'
},
{
label:'Pittsgrove Twp',
name:'town',
value:'1711'
},
{
label:'Quinton Twp',
name:'town',
value:'1712'
},
{
label:'Salem City',
name:'town',
value:'1713'
},
{
label:'Upper Pittsgrove',
name:'town',
value:'1714'
},
{
label:'Woodstown Boro',
name:'town',
value:'1715'
},
];
//add new options
require(["dojo/ready", "dojo/dom-style", "dijit/registry"], function(ready, domStyle, registry){
ready(function(){
dijit.byId('townSelect').addOption(salemTowns);
});
});
}

//
//Somerset
//
function newJerseySomerset(){
	//clear all previous options if the exist
	dijit.byId('townSelect').removeOption(dijit.byId('townSelect').getOptions());

	var somersetTowns = [
	{
		label:'Select A Town',
		name:'town',
		value:''
	},	
{
label:'Bedminster Twp',
name:'town',
value:'1801'
},
{
label:'Bernards Twp',
name:'town',
value:'1802'
},
{
label:'Bernardsville Boro',
name:'town',
value:'1803'
},
{
label:'Bound Brook',
name:'town',
value:'1804'
},
{
label:'Branchburg Twp',
name:'town',
value:'1805'
},
{
label:'Bridgewater Twp',
name:'town',
value:'1806'
},
{
label:'Far Hills',
name:'town',
value:'1807'
},
{
label:'Franklin Twp',
name:'town',
value:'1808'
},
{
label:'Green Brook',
name:'town',
value:'1809'
},
{
label:'Hillsborough Twp',
name:'town',
value:'1810'
},
{
label:'Manville Boro',
name:'town',
value:'1811'
},
{
label:'Millstone Boro',
name:'town',
value:'1812'
},
{
label:'Montgomery Twp',
name:'town',
value:'1813'
},
{
label:'North Plainfield',
name:'town',
value:'1814'
},
{
label:'Peapack Gladstone',
name:'town',
value:'1815'
},
{
label:'Raritan Boro',
name:'town',
value:'1816'
},
{
label:'Rocky Hill',
name:'town',
value:'1817'
},
{
label:'Somerville Boro',
name:'town',
value:'1818'
},
{
label:'So Bound',
name:'town',
value:'1819'
},
{
label:'Warren Twp',
name:'town',
value:'1820'
},
{
label:'Watchung Boro',
name:'town',
value:'1821'
},
];
//add new options
require(["dojo/ready", "dojo/dom-style", "dijit/registry"], function(ready, domStyle, registry){
ready(function(){
dijit.byId('townSelect').addOption(somersetTowns);
});
});
}

//
// Sussex
//
function newJerseySussex(){
	//clear all previous options if the exist
	dijit.byId('townSelect').removeOption(dijit.byId('townSelect').getOptions());

	var sussexTowns = [
	{
		label:'Select A Town',
		name:'town',
		value:''
	},	
{
label:'Andover Boro',
name:'town',
value:'1901'
},
{
label:'Andover Twp',
name:'town',
value:'1902'
},
{
label:'Branchville Boro',
name:'town',
value:'1903'
},
{
label:'Byram Twp',
name:'town',
value:'1904'
},
{
label:'Frankford Twp',
name:'town',
value:'1905'
},
{
label:'Franklin Boro',
name:'town',
value:'1906'
},
{
label:'Fredon Twp',
name:'town',
value:'1907'
},
{
label:'Green Twp',
name:'town',
value:'1908'
},
{
label:'Hamburg Boro',
name:'town',
value:'1909'
},
{
label:'Hampton Twp',
name:'town',
value:'1910'
},
{
label:'Hardyston Twp',
name:'town',
value:'1911'
},
{
label:'Hopatcong Boro',
name:'town',
value:'1912'
},
{
label:'Lafayette Twp',
name:'town',
value:'1913'
},
{
label:'Montague Twp',
name:'town',
value:'1914'
},
{
label:'Newton Town',
name:'town',
value:'1915'
},
{
label:'Ogdensburg Boro',
name:'town',
value:'1916'
},
{
label:'Sandyston Twp',
name:'town',
value:'1917'
},
{
label:'Sparta Twp',
name:'town',
value:'1918'
},
{
label:'Stanhope Boro',
name:'town',
value:'1919'
},
{
label:'Stillwater Twp',
name:'town',
value:'1920'
},
{
label:'Sussex Boro',
name:'town',
value:'1921'
},
{
label:'Vernon Twp',
name:'town',
value:'1922'
},
{
label:'Walpack Twp',
name:'town',
value:'1923'
},
{
label:'Wantage Twp',
name:'town',
value:'1924'
},
];
//add new options
require(["dojo/ready", "dojo/dom-style", "dijit/registry"], function(ready, domStyle, registry){
ready(function(){
dijit.byId('townSelect').addOption(sussexTowns);
});
});
}

// 
//Union
// 
function newJerseyUnion(){
	//clear all previous options if the exist
	dijit.byId('townSelect').removeOption(dijit.byId('townSelect').getOptions());

	var unionTowns = [
	{
		label:'Select A Town',
		name:'town',
		value:''
	},	
{
label:'Berkeley Heights',
name:'town',
value:'2001'
},
{
label:'Clark Twp',
name:'town',
value:'2002'
},
{
label:'Cranford Twp',
name:'town',
value:'2003'
},
{
label:'Elizabeth City',
name:'town',
value:'2004'
},
{
label:'Fanwood Boro',
name:'town',
value:'2005'
},
{
label:'Garwood Boro',
name:'town',
value:'2006'
},
{
label:'Hillside Twp',
name:'town',
value:'2007'
},
{
label:'Kenilworth Boro',
name:'town',
value:'2008'
},
{
label:'Linden City',
name:'town',
value:'2009'
},
{
label:'Mountainside Boro',
name:'town',
value:'2010'
},
{
label:'New Providence',
name:'town',
value:'2011'
},
{
label:'Plainfield City',
name:'town',
value:'2012'
},
{
label:'Rahway City',
name:'town',
value:'2013'
},
{
label:'Roselle Boro',
name:'town',
value:'2014'
},
{
label:'Roselle Park',
name:'town',
value:'2015'
},
{
label:'Scotch Plains',
name:'town',
value:'2016'
},
{
label:'Springfield Twp',
name:'town',
value:'2017'
},
{
label:'Summit City',
name:'town',
value:'2018'
},
{
label:'Union Twp',
name:'town',
value:'2019'
},
{
label:'Westfield Town',
name:'town',
value:'2020'
},
{
label:'Winfield Twp',
name:'town',
value:'2021'
},
];
//add new options
require(["dojo/ready", "dojo/dom-style", "dijit/registry"], function(ready, domStyle, registry){
ready(function(){
dijit.byId('townSelect').addOption(unionTowns);
});
});
}

// 
//Warren
// 
function newJerseyWarren(){
	//clear all previous options if the exist
	dijit.byId('townSelect').removeOption(dijit.byId('townSelect').getOptions());

	var warrenTowns = [
	{
		label:'Select A Town',
		name:'town',
		value:''
	},	
{
label:'Allamuchy Twp',
name:'town',
value:'2101'
},
{
label:'Alpha Boro',
name:'town',
value:'2102'
},
{
label:'Belvidere Town',
name:'town',
value:'2103'
},
{
label:'Blairstown Twp',
name:'town',
value:'2104'
},
{
label:'Franklin Twp',
name:'town',
value:'2105'
},
{
label:'Frelinghuysen Twp',
name:'town',
value:'2106'
},
{
label:'Greenwich Twp',
name:'town',
value:'2107'
},
{
label:'Hackettstown Town',
name:'town',
value:'2108'
},
{
label:'Hardwick Twp',
name:'town',
value:'2109'
},
{
label:'Harmony Twp',
name:'town',
value:'2110'
},
{
label:'Hope Twp',
name:'town',
value:'2111'
},
{
label:'Independence Twp',
name:'town',
value:'2112'
},
{
label:'Knowlton Twp',
name:'town',
value:'2113'
},
{
label:'Liberty Twp',
name:'town',
value:'2114'
},
{
label:'Lopatcong Twp',
name:'town',
value:'2115'
},
{
label:'Mansfield Twp',
name:'town',
value:'2116'
},
{
label:'Oxford Twp',
name:'town',
value:'2117'
},
{
label:'Phillipsburg Town',
name:'town',
value:'2119'
},
{
label:'Pohatcong Twp',
name:'town',
value:'2120'
},
{
label:'Washington Boro',
name:'town',
value:'2121'
},
{
label:'Washington Twp',
name:'town',
value:'2122'
},
{
label:'White Twp',
name:'town',
value:'2123'
},
];
//add new options
require(["dojo/ready", "dojo/dom-style", "dijit/registry"], function(ready, domStyle, registry){
ready(function(){
dijit.byId('townSelect').addOption(warrenTowns);
});
});
}
