var map = (function() {
    var map;

    var markers;
    var bounds;


    function plotMarkers(m){
        markers = [];
        bounds = new google.maps.LatLngBounds();
        initMap();
        m.forEach(function (marker) {
            alert(marker)
            var position = new google.maps.LatLng(marker.location.latitude, marker.location.longitude);

            markers.push(
                new google.maps.Marker({
                    position: position,
                    map: map,
                    animation: google.maps.Animation.DROP
                })
            );

            bounds.extend(position);
        });

        map.fitBounds(bounds);
    }

    var initMap = function() {
        map = new google.maps.Map(document.getElementById("map-container-google-1"), {
            center: { lat: -34.397, lng: 150.644 },
            zoom: 5
        });
    };

    return {
        init: function() {
            initMap();
        },
        plotMarkers:plotMarkers
    };
})();