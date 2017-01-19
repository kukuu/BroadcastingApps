
//Application currently driven by custom (local JSON) JSON. 
// URL: Prototype1/alex/lb-bat-dev-01.livebookings.lan   
//Server Request:Type 1:../cuisine?max=4   
 //Type 2:../restaurant?cuisine=2&max=4

$.fn.alpha = function () {
  
    $("#nav-menu-1").click(function (event) {
        $.getJSON('scripts/mock/indian.json', function (jd) {
                $('#profile').html('<h4 class="dod">Deal of the day</h4>');
                $('#profile').append('<p> Menu : ' + jd.menu + '</p>');
                $('#profile').append('<p>Price : ' + jd.price + '</p>');
                $('#profile').append('<p> Type: ' + jd.type + '</p>');
               // $('#geo-location').append('<p> name: ' + jd.name + '</p>');
                $('#geo-location').append('<p> City: ' + jd.location + '</p>');
                $('#geo-location').append('<p> Longitude: ' + jd.longitude + '</p>');
                $('#geo-location').append('<p> Latitude: ' + jd.latitude + '</p>');
               
        });
        
    });

   /* $("#nav-menu-2").click(function (event) {
        $.getJSON('scripts/chinese.json', function (jd) {
            $('#profile').html('<h4 class="dod">Deal of the day</h4>');
            $('#profile').append('<p> Menu : ' + jd.menu + '</p>');
            $('#profile').append('<p>Price : ' + jd.price + '</p>');
            $('#profile').append('<p> Type: ' + jd.type + '</p>');
            $('#geo-location').append('<p> City: ' + jd.location + '</p>');
            $('#geo-location').append('<p> Longitude: ' + jd.longitude + '</p>');
            $('#geo-location').append('<p> Latitude: ' + jd.latitude + '</p>');
        });
    });

    $("#nav-menu-3").click(function (event) {
        $.getJSON('scripts/italian.json', function (jd) {
            $('#profile').html('<p class="dod">Deal of the day</p>');
            $('#profile').append('<p> Menu : ' + jd.menu + '</p>');
            $('#profile').append('<p>Price : ' + jd.price + '</p>');
            $('#profile').append('<p> Type: ' + jd.type + '</p>');

        });
    });

    $("#nav-menu-4").click(function (event) {
        $.getJSON('scripts/thai.json', function (jd) {
            $('#profile').html('<p> Menu : ' + jd.menu + '</p>');
            $('#profile').append('<p>Price : ' + jd.price + '</p>');
            $('#profile').append('<p> Type: ' + jd.type + '</p>');
            $('#geo-location').append('<p> City: ' + jd.location + '</p>');
            $('#geo-location').append('<p> Longitude: ' + jd.longitude + '</p>');
            $('#geo-location').append('<p> Latitude: ' + jd.latitude + '</p>');
        });
    });*/
    
};

