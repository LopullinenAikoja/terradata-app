//
// Wetland KML Objects
//
// wetlandLayerKmlObjects.js
//	This kml object will hold all the parcel kml files
//

//
// Name = STATE + '_' + Naming Convention of that state
//
// Example: Massachusetts Abington would be 'MA_P001'
//

//alert("wetlands kml objects loaded");

var wetlandLayerKmlObjects = {
	'DE_WKent':null,
	'DE_WSussex':null,
	'DE_WNewCastle':null,
	'HI_WMaui':null,
	'HI_Molokai':null,
	'MA_W001':null,
	'MA_W002':null,
	'MA_W003':null,
	'MA_W004':null,
	'MA_W005':null,
	'MA_W006':null,
	'MA_W007':null,
	'MA_W008':null,
	'MA_W009':null, 
	'MA_W010':null,
	'MA_W011':null,
	'MA_W012':null,
	'MA_W013':null,
	'MA_W014':null,
	'MA_W015':null,
	'MA_W016':null,
	'MA_W017':null,
	'MA_W018':null,
	'MA_W019':null,
	'MA_W020':null,
	'MA_W021':null,
	'MA_W022':null,
	'MA_W023':null,
	'MA_W024':null,
	'MA_W025':null,
	'MA_W026':null,
	'MA_W027':null,
	'MA_W028':null,
	'MA_W029':null,
	'MA_W030':null,
	'MA_W031':null,
	'MA_W032':null,
	'MA_W033':null,
	'MA_W034':null,
	'MA_W035':null,
	'MA_W036':null,
	'MA_W037':null,
	'MA_W038':null,
	'MA_W039':null,
	'MA_W040':null,
	'MA_W041':null,
	'MA_W042':null,
	'MA_W043':null,
	'MA_W044':null,
	'MA_W045':null,
	'MA_W046':null,
	'MA_W047':null,
	'MA_W048':null,
	'MA_W049':null,
	'MA_W050':null,
	'MA_W051':null,
	'MA_W052':null,
	'MA_W053':null,
	'MA_W054':null,
	'MA_W055':null,
	'MA_W056':null,
	'MA_W057':null,
	'MA_W058':null,
	'MA_W059':null,
	'MA_W060':null,
	'MA_W061':null,
	'MA_W062':null,
	'MA_W063':null,
	'MA_W064':null,
	'MA_W065':null,
	'MA_W066':null,
	'MA_W067':null,
	'MA_W068':null,
	'MA_W069':null,
	'MA_W070':null,
	'MA_W071':null,
	'MA_W072':null,
	'MA_W073':null,
	'MA_W074':null,
	'MA_W075':null,
	'MA_W076':null,
	'MA_W077':null,
	'MA_W078':null,
	'MA_W079':null,
	'MA_W080':null,
	'MA_W081':null,
	'MA_W082':null,
	'MA_W083':null,
	'MA_W084':null,
	'MA_W085':null,
	'MA_W086':null,
	'MA_W087':null,
	'MA_W088':null,
	'MA_W089':null,
	'MA_W090':null,
	'MA_W091':null,
	'MA_W092':null,
	'MA_W093':null,
	'MA_W094':null,
	'MA_W095':null,
	'MA_W096':null,
	'MA_W097':null,
	'MA_W098':null,
	'MA_W099':null,
	'MA_W100':null,
	'MA_W101':null,
	'MA_W102':null,
	'MA_W103':null,
	'MA_W104':null,
	'MA_W105':null,
	'MA_W106':null,
	'MA_W107':null,
	'MA_W108':null,
	'MA_W109':null,
	'MA_W110':null,
	'MA_W111':null,
	'MA_W112':null,
	'MA_W113':null,
	'MA_W114':null,
	'MA_W115':null,
	'MA_W116':null,
	'MA_W117':null,
	'MA_W118':null,
	'MA_W119':null,
	'MA_W120':null,
	'MA_W121':null,
	'MA_W122':null,
	'MA_W123':null,
	'MA_W124':null,
	'MA_W125':null,
	'MA_W126':null,
	'MA_W127':null,
	'MA_W128':null,
	'MA_W129':null,
	'MA_W130':null,
	'MA_W131':null,
	'MA_W132':null,
	'MA_W133':null,
	'MA_W134':null,
	'MA_W135':null,
	'MA_W136':null,
	'MA_W137':null,
	'MA_W138':null,
	'MA_W139':null,
	'MA_W140':null,
	'MA_W141':null,
	'MA_W142':null,
	'MA_W143':null,
	'MA_W144':null,
	'MA_W145':null,
	'MA_W146':null,
	'MA_W147':null,
	'MA_W148':null,
	'MA_W149':null,
	'MA_W150':null,
	'MA_W151':null,
	'MA_W152':null,
	'MA_W153':null,
	'MA_W154':null,
	'MA_W155':null,
	'MA_W156':null,
	'MA_W157':null,
	'MA_W158':null,
	'MA_W159':null,
	'MA_W160':null,
	'MA_W161':null,
	'MA_W162':null,
	'MA_W163':null,
	'MA_W164':null,
	'MA_W165':null,
	'MA_W166':null,
	'MA_W167':null,
	'MA_W168':null,
	'MA_W169':null,
	'MA_W170':null,
	'MA_W171':null,
	'MA_W172':null,
	'MA_W173':null,
	'MA_W174':null,
	'MA_W175':null,
	'MA_W176':null,
	'MA_W177':null,
	'MA_W178':null,
	'MA_W179':null,
	'MA_W180':null,
	'MA_W181':null,
	'MA_W182':null,
	'MA_W183':null,
	'MA_W184':null,
	'MA_W185':null,
	'MA_W186':null,
	'MA_W187':null,
	'MA_W188':null,
	'MA_W189':null,
	'MA_W190':null,
	'MA_W191':null,
	'MA_W192':null,
	'MA_W193':null,
	'MA_W194':null,
	'MA_W195':null,
	'MA_W196':null,
	'MA_W197':null,
	'MA_W198':null,
	'MA_W199':null,
	'MA_W200':null,
	'MA_W201':null,
	'MA_W202':null,
	'MA_W203':null,
	'MA_W204':null,
	'MA_W205':null,
	'MA_W206':null,
	'MA_W207':null,
	'MA_W208':null,
	'MA_W209':null,
	'MA_W210':null,
	'MA_W211':null,
	'MA_W212':null,
	'MA_W213':null,
	'MA_W214':null,
	'MA_W215':null,
	'MA_W216':null,
	'MA_W217':null,
	'MA_W218':null,
	'MA_W219':null,
	'MA_W220':null,
	'MA_W221':null,
	'MA_W222':null,
	'MA_W223':null,
	'MA_W224':null,
	'MA_W225':null,
	'MA_W226':null,
	'MA_W227':null,
	'MA_W228':null,
	'MA_W229':null,
	'MA_W230':null,
	'MA_W231':null,
	'MA_W232':null,
	'MA_W233':null,
	'MA_W234':null,
	'MA_W235':null,
	'MA_W236':null,
	'MA_W237':null,
	'MA_W238':null,
	'MA_W239':null,
	'MA_W240':null,
	'MA_W241':null,
	'MA_W242':null,
	'MA_W243':null,
	'MA_W244':null,
	'MA_W245':null,
	'MA_W246':null,
	'MA_W247':null,
	'MA_W248':null,
	'MA_W249':null,
	'MA_W250':null,
	'MA_W251':null,
	'MA_W252':null,
	'MA_W253':null,
	'MA_W254':null,
	'MA_W255':null,
	'MA_W256':null,
	'MA_W257':null,
	'MA_W258':null,
	'MA_W259':null,
	'MA_W260':null,
	'MA_W261':null,
	'MA_W262':null,
	'MA_W263':null,
	'MA_W264':null,
	'MA_W265':null,
	'MA_W266':null,
	'MA_W267':null,
	'MA_W268':null,
	'MA_W269':null,
	'MA_W270':null,
	'MA_W271':null,
	'MA_W272':null,
	'MA_W273':null,
	'MA_W274':null,
	'MA_W275':null,
	'MA_W276':null,
	'MA_W277':null,
	'MA_W278':null,
	'MA_W279':null,
	'MA_W280':null,
	'MA_W281':null,
	'MA_W282':null,
	'MA_W283':null,
	'MA_W284':null,
	'MA_W285':null,
	'MA_W286':null,
	'MA_W287':null,
	'MA_W288':null,
	'MA_W289':null,
	'MA_W290':null,
	'MA_W291':null,
	'MA_W292':null,
	'MA_W293':null,
	'MA_W294':null,
	'MA_W295':null,
	'MA_W296':null,
	'MA_W297':null,
	'MA_W298':null,
	'MA_W299':null,
	'MA_W300':null,
	'MA_W301':null,
	'MA_W302':null,
	'MA_W303':null,
	'MA_W304':null,
	'MA_W305':null,
	'MA_W306':null,
	'MA_W307':null,
	'MA_W308':null,
	'MA_W309':null,
	'MA_W310':null,
	'MA_W311':null,
	'MA_W312':null,
	'MA_W313':null,
	'MA_W314':null,
	'MA_W315':null,
	'MA_W316':null,
	'MA_W317':null,
	'MA_W318':null,
	'MA_W319':null,
	'MA_W320':null,
	'MA_W321':null,
	'MA_W322':null,
	'MA_W323':null,
	'MA_W324':null,
	'MA_W325':null,
	'MA_W326':null,
	'MA_W327':null,
	'MA_W328':null,
	'MA_W329':null,
	'MA_W330':null,
	'MA_W331':null,
	'MA_W332':null,
	'MA_W333':null,
	'MA_W334':null,
	'MA_W335':null,
	'MA_W336':null,
	'MA_W337':null,
	'MA_W338':null,
	'MA_W339':null,
	'MA_W340':null,
	'MA_W341':null,
	'MA_W342':null,
	'MA_W343':null,
	'MA_W344':null,
	'MA_W345':null,
	'MA_W346':null,
	'MA_W347':null,
	'MA_W348':null,
	'MA_W349':null,
	'MA_W350':null,
	'MA_W351':null,
	'NJ_W01':null,
	'NJ_W02':null,
	'NJ_W03':null,
	'NJ_W04':null,
	'NJ_W05':null,
	'NJ_W06':null,
	'NJ_W07':null,
	'NJ_W08':null,
	'NJ_W09':null,
	'NJ_W10':null,
	'NJ_W11':null,
	'NJ_W12':null,
	'NJ_W13':null,
	'NJ_W14':null,
	'NJ_W15':null,
	'NJ_W16':null,
	'NJ_W17':null,
	'NJ_W18':null,
	'NJ_W19':null,
	'NJ_W20':null,
	'NJ_W21':null,
	'test':null
};