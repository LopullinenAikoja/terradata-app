//
// function to put a placemark for every property in the results table
//
function pinMap(prop){
		// Create the placemark.
		var placemark = ge.createPlacemark('');
		placemark.setName(prop.parcelAddress);

		// // Define a custom icon.
		// //remove/comment this out if you just want the yellow pushpin back
		// var icon = ge.createIcon('');
		// icon.setHref('http://maps.google.com/mapfiles/kml/paddle/red-circle.png');
		// var style = ge.createStyle('');
		// style.getIconStyle().setIcon(icon);
		// style.getIconStyle().setScale(5.0);
		// placemark.setStyleSelector(style);
		
		// Set the placemark's location.  
		var point = ge.createPoint('');
		
		//alert(Number(prop.latitude));
		
		point.setLatitude(Number(prop.latitude));
		point.setLongitude(Number(prop.longitude));
		
		placemark.setGeometry(point);
		
		// Add the placemark to Earth.
		ge.getFeatures().appendChild(placemark);
		
		//push to pushpinList
		pushpinList.push(placemark);

}