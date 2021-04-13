let map;

function initMap() {
  const map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 49.25254717117441, lng: -123.11153465927006 },
    zoom: 12,
    mapTypeControl: false,
    streetViewControl: false
  });
  const geocoder = new google.maps.Geocoder();
  document.getElementById("submit").addEventListener("click", () => {
    geocodeAddress(geocoder, map);
  });
  new google.maps.Marker({
    position: { lat: 49.3382351, lng: -123.1053874 },
    map,
    title: "32 Books & Gallery",
  });
  new google.maps.Marker({
    position: { lat: 49.1702239, lng: -122.5803431 },
    map,
    title: "Wendel's Bookstore & Cafe",
  });
  new google.maps.Marker({
    position: { lat: 49.2651678, lng: -122.7777308 },
    map,
    title: "Western Sky Books",
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

function geocodeAddress(geocoder, resultsMap) {
  const address = document.getElementById("address").value;
  geocoder.geocode({ address: address }, (results, status) => {
    if (status === "OK") {
      resultsMap.setCenter(results[0].geometry.location);
      new google.maps.Marker({
        map: resultsMap,
        position: results[0].geometry.location,
      });
    } else {
      alert("Geocode was not successful for the following reason: " + status);
    }
  });
}
