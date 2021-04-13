let map;

function initMap() {
  const map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 49.25254717117441, lng: -123.11153465927006 },
    zoom: 12,
    mapTypeControl: false,
    streetViewControl: false
  });
  new google.maps.Marker({
    position: { lat: 49.2635013, lng: -123.1029005 },
    map,
    title: "Pulpfiction Books",
  });
  new google.maps.Marker({
    position: { lat: 49.2637373, lng: -123.1600937 },
    map,
    title: "Tanglewood Books",
  });
}
