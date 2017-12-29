function initMap() {
  var uluru = {lat: 40.4442567, lng: -79.9533034};
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 16,
    center: uluru
  });
  var marker = new google.maps.Marker({
    position: uluru,
    map: map
  });
}