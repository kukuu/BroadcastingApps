

    
// This script is used by the  AMD module  
$.fn.beta = function () {

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
    function handle_success(position) {
        var useMock = true,
            coords = {
            latitude: useMock ? 53.960502 : position.coords.latitude,
            longitude: useMock ? -2.017765 : position.coords.longitude,
            accuracy: position.coords.accuracy
        };

        handle_geolocation_query(position);
        getOffers(coords);
    }
    function handle_geolocation_query(position) {
        var text = "<strong>Latitude:</strong>" + position.coords.latitude + "<br/>" +
                   "<strong>Longitude: </strong>" + position.coords.longitude + "<br/>" +
                   "<strong>Accuracy: </strong>" + position.coords.accuracy + "m<br/>";
        jQuery("#intro").append(text);

    }

    //To start the process we need to add the code that calls the watchPosition() API like the code below:
    function initiate_watchlocation() {
        if (watchProcess == null) {
            watchProcess = navigator.geolocation.watchPosition(handle_success, handle_errors);
        }
    }

    //To stop the process we need to add the code that calls the clearWatch() API like the code below:

    function stop_watchlocation() {
        if (watchProcess != null) {
            navigator.geolocation.clearWatch(watchProcess);
            watchProcess = null;
        }
    }


    function getOffers(coords) {
        var
            postData = coords ? {
                latitude: coords.latitude,
                longitude: coords.longitude
            } : null;
        $.ajax({

            url: 'http://restfulapi.alastair.lb-bat-dev-01.livebookings.lan/offer',//Hooks to live data
            data: postData,
            dataType: "jsonp",
            jsonp: 'jsoncallback',
            beforeSend: function () {
                $('#offers').html('Loading...');
            },
            timeout: 6000,
            success: function (response) {
                $('#offers').html('')
               .append('<h4>Lucky dip ==):</h4><ul id="offerList">');

                var list = response;//Add a response property

                for (var i = 0; i < list.length; i++) {
                    $('#offerList').append('<li><a href="#"> <span class="dod-menu">Menu:</span>' + list[i].name + '</a></li>');
                }

            }

     

        });


        
    }

    /*

          $('ul#offferList li a').each(function (i, v) {//set up  an event delegation
            var id = this.id.substr(this.id.length - 1);
            $(this).click(function (e) {
                getOffers(id);
                document.getElementById("intro").innerHTML = "<p>" + this.value + "</p>";
            });
        });
      */

    





    return this;
}; 






