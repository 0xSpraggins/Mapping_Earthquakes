// Add console.log to check to see if our code is working.
console.log("working");

// Create the map object with center at the San Francisco airport.
let map = L.map('mapid').setView([37.6213, -122.3790], 5);

// Coordinates for each point to be used in the polyline.
let line = [
	// San Francisco Airport
	[37.6213, -122.3790],
	// Austin-Bergstrom Airport
	[30.1975, -97.6664],
	// Chicago O'Hare Airport
	[41.9742, -87.9073],
	// Toronto Pearson Airport
	[43.6777, -79.6248],
	// John F. Kennedy Airport
	[40.6413, -73.7781],

  ];

// Create a polyline using the line coordinates and make the line black.
L.polyline(line, {
	color: "Blue",
	dashArray: "5,10",
	opacity: .5,
	weight: 4,
 }).addTo(map);

// We create the tile layer that will be the background of our map.
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/dark-v10/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
	maxZoom: 18,
	id: 'mapbox.streets',
	accessToken: API_KEY
});
// Then we add our 'graymap' tile layer to the map.
streets.addTo(map);

