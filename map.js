let map;

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 49.25254717117441, lng: -123.11153465927006 },
    zoom: 12,
  });
}

