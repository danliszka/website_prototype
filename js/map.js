function initMap() {
    var cathy = {lat: 40.4442567, lng: -79.9533034};
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
            position: {lat: 40.4442567, lng: -79.9554277},
            icon: parkingIcon,
            map: map
        },
        
        {
            position: {lat: 40.4442812, lng: -79.9625624},
            icon: parkingIcon,
            map: map
        },
        
        {
            position: {lat: 40.4447547, lng: -79.9632275},
            icon: parkingIcon,
            map: map
        },
        
        {
            position: {lat: 40.4402688, lng: -79.9589307},
            icon: parkingIcon,
            map: map
        },
        
        {
            position: {lat: 40.4431556, lng: -79.9553481},
            icon: parkingIcon,
            map: map
        },
        
        {
            position: {lat: 40.4453594, lng: -79.9533105},
            icon: parkingIcon,
            map: map
        }
        
    ];
    
    for (i = 0; i < markers.length; i++)
        {
            new google.maps.Marker(markers[i]);
        }
    

    
}