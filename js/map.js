let map;
let markers = [];
const locations = {
  location1: { lat: 40.7128, lng: -74.0060 },
  location2: { lat: 34.0522, lng: -118.2437 },
  location3: { lat: 41.8781, lng: -87.6298 },
  location4: { lat: 29.7604, lng: -95.3698 },
  location5: { lat: 33.4484, lng: -112.0740 },
  location6: { lat: 39.7392, lng: -104.9903 },
  location7: { lat: 47.6062, lng: -122.3321 },
  location8: { lat: 25.7617, lng: -80.1918 },
};

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: locations.location1,
    zoom: 10,
  });

  addMarker(locations.location1);
}

function addMarker(location) {
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