//
// File to set the settings of and intialize the Pagination
// paginationSettings.js
//
var pagination_options = {
  num_edge_entries: 2,
  num_display_entries: 6,
  callback: pageselectCallback,
  items_per_page:10
}
function pageselectCallback(page_index, jq){
  var items_per_page = pagination_options.items_per_page;
  var offset = page_index * items_per_page;
  
	//Print the results to resultsList
	//Make a table
	resultsTable = document.createElement("TABLE");
	
	var start = offset
	var end = offset + items_per_page;
	if( replyJson.length < end){
		end = replyJson.length;
	} 
	
	//printResults.js
	printResults(replyJson,start,end);
	
  $('#Searchresult').empty().append(resultsTable);
  
  return false;
}

function initPagination() {
  var num_entries = replyJson.length;
	//alert(num_entries);
	
  // Create pagination element
  $("#Pagination").pagination(num_entries, pagination_options);
}