function initMap() {
    var cathy = {lat: 40.444232, lng: -79.9532455};
    var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 16,
    center: cathy
    });

    var mainMarker = new google.maps.Marker({
        position: cathy,
        map: map
    });
    
    var iconBase = 'https://maps.google.com/mapfiles/kml/shapes/';
    var parkingIcon = iconBase + 'parking_lot_maps.png';
    var markers = [
        {
            position: {lat: 40.4437522, lng: -79.9539867},
            icon: parkingIcon,
            map: map
        },
        
        {
            position: {lat: 40.4401225, lng: -79.9581734},
            icon: parkingIcon,
            map: map
        },
        
        {
            position: {lat: 40.4450575, lng: -79.9640718},
            icon: parkingIcon,
            map: map
        },
        
        {
            position: {lat: 40.4468472, lng: -79.9653321},
            icon: parkingIcon,
            map: map
        },
        
        {
            position: {lat: 40.4443704, lng: -79.9556305},
            icon: parkingIcon,
            map: map
        },
        
        {
            position: {lat: 40.4465382, lng: -79.9526929},
            icon: parkingIcon,
            map: map
        }
        
    ];
    
    for (i = 0; i < markers.length; i++)
        {
            new google.maps.Marker(markers[i]);
        }
    

    
}