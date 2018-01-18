var map1;
var map2;
var map3;

function initMap() {

    var mapStyles = [{"featureType":"water","elementType":"geometry","stylers":[{"color":"#e9e9e9"},{"lightness":17}]},{"featureType":"landscape","elementType":"geometry","stylers":[{"color":"#f5f5f5"},{"lightness":20}]},{"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"color":"#ffffff"},{"lightness":17}]},{"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"color":"#ffffff"},{"lightness":29},{"weight":0.2}]},{"featureType":"road.arterial","elementType":"geometry","stylers":[{"color":"#ffffff"},{"lightness":18}]},{"featureType":"road.local","elementType":"geometry","stylers":[{"color":"#ffffff"},{"lightness":16}]},{"featureType":"poi","elementType":"geometry","stylers":[{"color":"#f5f5f5"},{"lightness":21}]},{"featureType":"poi.park","elementType":"geometry","stylers":[{"color":"#dedede"},{"lightness":21}]},{"elementType":"labels.text.stroke","stylers":[{"visibility":"on"},{"color":"#ffffff"},{"lightness":16}]},{"elementType":"labels.text.fill","stylers":[{"saturation":36},{"color":"#333333"},{"lightness":40}]},{"elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"transit","elementType":"geometry","stylers":[{"color":"#f2f2f2"},{"lightness":19}]},{"featureType":"administrative","elementType":"geometry.fill","stylers":[{"color":"#fefefe"},{"lightness":20}]},{"featureType":"administrative","elementType":"geometry.stroke","stylers":[{"color":"#fefefe"},{"lightness":17},{"weight":1.2}]}];

    if (document.getElementById('map1')) {
        map1 = new google.maps.Map(document.getElementById('map1'), {
            center: {lat: 55.672288, lng: 37.848493},
            zoom: 14,
            zoomControl: true,
            mapTypeControl: false,
            streetViewControl: false,
            scrollwheel: true
        });

        google.maps.event.addDomListener(window, 'resize', function () {
            var center1 = map1.getCenter();
            google.maps.event.trigger(map1, 'resize');
            map1.setCenter(center1);
        });

        map1.setOptions({styles: mapStyles});
    }

    if (document.getElementById('map2')) {
        map2 = new google.maps.Map(document.getElementById('map2'), {
            center: {lat: 55.672288, lng: 37.848493},
            zoom: 14,
            //disableDefaultUI: true,
            zoomControl: true,
            mapTypeControl: false,
            streetViewControl: false,
            scrollwheel: false
        });

        google.maps.event.addDomListener(window, 'resize', function () {
            var center2 = map2.getCenter();
            google.maps.event.trigger(map2, 'resize');
            map2.setCenter(center2);
        });

        map2.setOptions({styles: mapStyles});
    }

    if (document.getElementById('map3')) {
        map3 = new google.maps.Map(document.getElementById('map3'), {
            center: {lat: 55.672288, lng: 37.848493},
            zoom: 14,
            zoomControl: false,
            mapTypeControl: false,
            streetViewControl: false,
            scrollwheel: false
        });

        google.maps.event.addDomListener(window, 'resize', function () {
            var center3 = map3.getCenter();
            google.maps.event.trigger(map3, 'resize');
            map3.setCenter(center3);
        });

        map3.setOptions({styles: mapStyles});
    }

    var geomarkDark = {
        url: '/img/pin.png',
        size: new google.maps.Size(60, 69)
    };

    var markOffice1 = new google.maps.Marker({
        position: {lat: 55.672288, lng: 37.848493},
        map: map1,
        icon: geomarkDark,
        title: 'Тут'
    });

    var markOffice2 = new google.maps.Marker({
        position: {lat: 55.672288, lng: 37.848493},
        map: map2,
        icon: geomarkDark,
        title: 'Тут'
    });

    var markOffice3 = new google.maps.Marker({
        position: {lat: 55.672288, lng: 37.848493},
        map: map3,
        icon: geomarkDark,
        title: 'Тут'
    });
}

initMap();