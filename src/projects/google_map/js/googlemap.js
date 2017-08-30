// Global Scopes
'use strict';

var map;

var markers = [];

// Error function for Google Map API
function errorMsg() {
    window.alert("Error: Failed to retrieve Google Map API.");
}
// Error handle for all other api and json files
function errorHandle(jqXHR, exception) {
    if (jqXHR.status === 0) {
        window.alert('Not connect.\n Verify Network.');
    } else if (jqXHR.status == 404) {
        window.alert('Requested API not found. [404]');
    } else if (jqXHR.status == 500) {
        window.alert('Internal Server Error [500].');
    } else if (exception === 'parsererror') {
        window.alert('Requested JSON parse failed.');
    } else if (exception === 'timeout') {
        window.alert('Time out error.');
    } else if (exception === 'abort') {
        window.alert('Ajax request aborted.');
    } else {
        window.alert('Uncaught Error.\n' + jqXHR.responseText);
    }
}

// Google Map
function initMap() {
    // Global --> Init scope
    var largeInfoWindow = new google.maps.InfoWindow();
    var icon = new google.maps.MarkerImage(
        "http://chart.apis.google.com/chart?chst=d_map_pin_letter&chld=%E2%80%A2|ffc26d",
        null, /* size is determined at runtime */
        null, /* origin is 0,0 */
        null, /* anchor is bottom center of the scaled image */
        new google.maps.Size(25, 42)
    );

    // Global --> Init scope --> Map style Json scope
    // Google Map style json file attached
    $.getJSON("/js/json/mapstyle.json", function(styleJson) {
            map = new google.maps.Map(document.getElementById('map'), {
                // Focused location (Florence, Italy) based on geocode (lat/lng)
                center: {
                    lat: 43.7645257,
                    lng: 11.2461242
                },
                /* How detailed the location focus is (zoom) maximum level is 21
                higher the number the more focused the zoom is*/
                zoom: 15,
                // Refrains from zooming map when scrolled
                scrollwheel: false,
                // Hides the feature of terrain, satelllite etc view
                mapTypeControl: false,
                // Changes style according to the the json file
                styles: styleJson,
            });
        })
        .fail(errorHandle); //error handle for Google Map style json

    // Global --> Init scope --> Location Json scope
    // Map locations json attached
    var locations = $.getJSON("js/json/location.json", function(locationJson) {
        // Loop each marker in array of locations
        for (var i = 0; i < locationJson.length; i++) {
            // Getting position from array
            var position = locationJson[i].location;
            var title = locationJson[i].title;
            // for streetview in infowindow.setContent
            var positionLat = position.lat;
            var positionLng = position.lng;

            // Creating markers
            var marker = new google.maps.Marker({
                map: map,
                position: position,
                title: title,
                positionLat: positionLat,
                positionLng: positionLng,
                animation: google.maps.Animation.DROP,
                id: i
            });
            markers.push(marker);
        }

        // Global --> Init scope --> Location Json scope --> Knockout MarkersConnect
        // Knockout JS: Model
        var MarkersConnect = function(data, marker) {
            var self = this;
            self.title = ko.observable(data.title);
            self.posLat = ko.observable(data.positionLat);
            self.posLng = ko.observable(data.positionLng);
            self.marker = marker;
            self.posLoc = ko.computed(function() {
                return self.posLat() + ", " + self.posLng();
            });
        };

        // Global --> Init scope --> Location Json scope --> Knockout ViewModel
        // View Model: Connect each marker listing to corresponding marker on map
        var ViewModel = function(data) {
            var self = this;
            // Array of markers
            self.markerList = ko.observableArray([]);
            markers.forEach(function(markerItem, i) { //second argument is for marker index
                self.markerList.push(new MarkersConnect(markerItem, markers[i]));
            });

            // Filtering list and markers
            self.filter = ko.observable(''); // Binded to search input
            self.filterLoc = ko.computed(function(location) {
                if (!self.filter()) { //if input box is empty
                    self.markerList().forEach(function(loc){
                        return loc.marker.setVisible(true);
                    });
                    return self.markerList();
                } else { //input found, match to marker with similar title
                    return ko.utils.arrayFilter(self.markerList(), function(loc) {
                        var match = loc.title().toLowerCase().indexOf(self.filter().toLowerCase()) !== -1;
                        loc.marker.setVisible(match);
                        return match;
                    });
                }
            });

            // Info Window, plus 3rd party API from Foursquare
            self.fourSquare = ko.computed(function() {
                return "https://api.foursquare.com/v2/venues/search?ll=" + marker.positionLat + ',' + marker.positionLng + "&client_id=H0SH2MXEAJ30R0BAPIG20BBXXDDANVI3MTOX2HKPNOEBTEJ5&client_secret=DPJZKXA0EFQORW2HCE53UF1TSST0AP414TFFWAWMW1W3KYXA&v=20170719";
            });
            $.getJSON(self.fourSquare()).done(function(fourJson) {
                self.fullAddress = ko.observable(fourJson.response.venues[0].location.formattedAddress);
                // Check to make sure infowindow is not already opened on this marker
                function populateInfoWindow(marker, infowindow) {
                    if (infowindow.marker != marker) {
                        infowindow.marker = marker;
                        // Img src based on lat lng of location (street view)
                        infowindow.setContent('<img src="' + 'https://maps.googleapis.com/maps/api/streetview?size=180x130&location=' + marker.positionLat + ',' + marker.positionLng + '&fov=90&heading=235&pitch=10' + '" alt="Street View">' + '<div>' + '<strong>' + marker.title + '</strong>' + '</div>' + '<div>' + marker.positionLat + ', ' + marker.positionLng + '</div>' + '<div class="locAdress">' + self.fullAddress() + '</div>');
                        infowindow.open(map, marker);
                        // Make sure the marker property is cleared if the infowindow is closed
                        infowindow.addListener('closeclick', function() {
                            infowindow.marker = null;
                            marker.setIcon(null);
                            map.setZoom(15);
                        });
                    }
                }
                // Looped marker event - infowindow and marker color
                for (var i = 0; i < markers.length; i++) {
                    markers[i].addListener('click', markerExecute);
                }

                function markerExecute() { //combining two functions for looped event
                    populateInfoWindow(this, largeInfoWindow);
                    markerColor(this, icon);
                }

                // Click: Connect markers list (on menu) to marker icons on map
                self.setMarker = function(clickedMarker) {
                    populateInfoWindow(clickedMarker.marker, largeInfoWindow);
                    markerColor(clickedMarker.marker, icon);
                };
            })
            .fail(errorHandle); //foursquare error handle

            // Open close menu - on left side of page
            self.isClose = ko.observable(false); //attached to container css
            // function attached to option tab - for click
            self.closeList = function(){ //toggles container
                if (self.isClose()) {
                    self.isClose(false);
                } else {
                    self.isClose(true);
                }
            };
        };
        ko.applyBindings(new ViewModel());
    })
    .fail(errorHandle); //error handle for Map locations json
}

// Change marker color function
function markerColor(marker, changecolor) {
    (function() {
        for (var i = 0; i < markers.length; i++) {
            markers[i].setIcon(null);
        }
    })();
    if (changecolor.marker != marker) {
        marker.setIcon(changecolor);
        map.setZoom(17);
    }
}
