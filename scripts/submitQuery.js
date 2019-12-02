//
//Submit Query: funtion for sending the query using AJAX
//
	
function submitQuery(){
	
	//clear the results box before printing or reprinting results
	//clear the results info box as well
	$('#Searchresult').empty();
	$('#infoTable').empty();
	
	// //
	// // clear any KML layers if they exist
	// //
	// //
	// clearParcelKml();
	// clearRoadKml();
	// clearThematicOverlaysKml();
	
	// //Clear the map of pushpins
	// var kmlObjectList = ge.getFeatures().getChildNodes();
	// if(pushpinList.length > 0){
		// for(i = 0; i < pushpinList.length; i++){
			// ge.getFeatures().removeChild(pushpinList[i]);
		// }
	// }
	
	//Show the progress bar
	$( "#progress" ).show();

	replyJson = example			
	resultsHandle.innerHTML = " RESULTS: " + example.length;
			
	//hide the progress bar
	$( "#progress" ).hide();
			
	//Call tha pagination js files 
	initPagination();

	
	// //Then send AJAX request to the query handler which will return a json
	// $.ajax({
	  // url: 'query',
	  // data: $('#queryParams').serialize(),
	  // dataType: 'json',
	  // success: function(replyTable) {
		// if(replyTable == null){
			// resultsHandle.innerHTML = "Query NULL";
			// //hide the progress bar
			// $( "#progress" ).hide();
		// }else if(replyTable.length == 0){
			// resultsHandle.innerHTML = "QUERY RETURNED 0 RESULTS ";
			// infoTable.innerHTML = "QUERY RETURNED 0 RESULTS ";
			// $( "#progress" ).hide();
		// }else{
			
			// replyJson = replyTable
			
			// resultsHandle.innerHTML = " RESULTS: " + replyTable.length;
			
			// //hide the progress bar
			// $( "#progress" ).hide();
			
			// //Call tha pagination js files 
			// initPagination();

			// $('#informationBar').changeToResults();

		
			// }
	  // }
	// });
}
