// JavaScript source code for Geo-location
jQuery(window).ready(function () {
    jQuery("#btnInit").click(initiate_watchlocation);
    jQuery("#btnStop").click(stop_watchlocation);
});
var watchProcess = null;
function initiate_watchlocation() {
}

function stop_watchlocation() {
}

function handle_errors(error) {
    switch (error.code) {
        case error.PERMISSION_DENIED: alert("user did not share geolocation data");
            break;
        case error.POSITION_UNAVAILABLE: alert("could not detect current position");
            break;
        case error.TIMEOUT: alert("retrieving position timedout");
            break;
        default: alert("unknown error");
            break;
    }
}
function handle_geolocation_query(position) {
    var
        useMock = true,
        coords = {
            latitude: useMock ? 51.502585 : position.coords.latitude,
            longitude: useMock ? -0.116193 : position.coords.longitude,
            accuracy: position.coords.accuracy
        };

    var text = "<strong>Latitude:</strong>" + coords.latitude + "<br/>" +
               "<strong>Longitude: </strong>" + coords.longitude + "<br/>" +
               "<strong>Accuracy: </strong>" + coords.accuracy + "m<br/>";
    jQuery("#info").html(text);
    
}

//To start the process we need to add the code that calls the watchPosition() API like the code below:
function initiate_watchlocation() {
    if (watchProcess == null) {
        watchProcess = navigator.geolocation.watchPosition(handle_geolocation_query, handle_errors);
    }
}

//To stop the process we need to add the code that calls the clearWatch() API like the code below:

function stop_watchlocation() {
    if (watchProcess != null) {
        navigator.geolocation.clearWatch(watchProcess);
        watchProcess = null;
    }
}

//Finally, we handle displaying the map and additional data (e.g. position, accuracy) like this