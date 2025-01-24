// Initialize map and set default location
let map;
let markers = [];
const locations = {
  location1: { lat: 40.7128, lng: -74.0060 }, // New York
  location2: { lat: 34.0522, lng: -118.2437 }, // Los Angeles
  location3: { lat: 41.8781, lng: -87.6298 }, // Chicago
  location4: { lat: 29.7604, lng: -95.3698 }, // Houston
  location5: { lat: 33.4484, lng: -112.0740 }, // Phoenix
  location6: { lat: 39.7392, lng: -104.9903 }, // Denver
  location7: { lat: 47.6062, lng: -122.3321 }, // Seattle
  location8: { lat: 25.7617, lng: -80.1918 }, // Miami
};

function initMap() {
  // Set default map center and zoom level
  map = new google.maps.Map(document.getElementById("map"), {
    center: locations.location1,
    zoom: 10,
  });

  // Add a default marker
  addMarker(locations.location1);
}

// Add a marker to the map
function addMarker(location) {
  // Clear existing markers
  markers.forEach(marker => marker.setMap(null));
  markers = [];

  const marker = new google.maps.Marker({
    position: location,
    map: map,
  });

  markers.push(marker);
}

function showLocation(locationKey) {
  const location = locations[locationKey];
  if (location) {
    map.setCenter(location);
    map.setZoom(10);
    addMarker(location);
  } else {
    alert("Location not found!");
  }
}