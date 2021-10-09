/////////////////////////////////google map
// NB google map has been generated with my own key...

function initialize() {
  //initMap();
  initAutocomplete();
}
var map, marker;
/*
function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
      center: {
        lat: -34.397,
        lng: 150.644
      },
      zoom: 8
    });
}*/
var placeSearch, autocomplete;
var componentForm = {
  street_number: 'short_name',
  route: 'long_name',
  locality: 'long_name',
  administrative_area_level_1: 'short_name',
  country: 'long_name',
  postal_code: 'short_name'
};

function initAutocomplete() {
  autocomplete = new google.maps.places.Autocomplete(
    (document.getElementById('autocomplete')), {
      types: ['geocode']
    });

  autocomplete.addListener('place_changed', fillInAddress);
}

function fillInAddress() {
    var place = autocomplete.getPlace();
    if (place.geometry.viewport) {
        map.fitBounds(place.geometry.viewport);
    } 
    else{
        map.setCenter(place.geometry.location);
        map.setZoom(17);
    }
    if (!marker) {
        marker = new google.maps.Marker({
            map: map,
            anchorPoint: new google.maps.Point(0, -29)
        });
    } 
    else marker.setMap(null);
    marker.setOptions({
        position: place.geometry.location,
        map: map
    });
    for (var component in componentForm) {
        document.getElementById(component).value = '';
        document.getElementById(component).disabled = false;
    }
    for (var i = 0; i < place.address_components.length; i++) {
    var addressType = place.address_components[i].types[0];
    if (componentForm[addressType]) {
        var val = place.address_components[i][componentForm[addressType]];
        document.getElementById(addressType).value = val;
    }
  }
}

function geolocate() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
      var geolocation = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
      };
      var circle = new google.maps.Circle({
        center: geolocation,
        radius: position.coords.accuracy
      });
      autocomplete.setBounds(circle.getBounds());
    });
  }
}