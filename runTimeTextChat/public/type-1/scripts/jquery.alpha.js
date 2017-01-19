//JavaScript for restaurants and cuisine
//Prototype1: End Points

$.fn.alpha = function () {
    function getRestaurants(id) {
        $.ajax({

            url: 'http://restfulapi.alastair.lb-bat-dev-01.livebookings.lan/restaurant',//Hooks to live data
            data: {
                cuisineId: id,
                max: 5
            },
            dataType: "jsonp",
            jsonp: 'jsoncallback',
            beforeSend: function () {
                $('#restaurant').html('Loading...');
            },
            timeout: 6000,
            success: function (response) {
                $('#restaurant').html('')
               .append('<h4>Restaurants:</h4><ul id="restaurantList">');

                var list = response;//Add a response property

                for (var i = 0; i < list.length; i++) {
                    $('#restaurantList').append('<li><a href="#">' + list[i].name + '</a></li>');
                }
            }
        });
    }


    $('.cuisine-menu input').each(function (i, v) {//set up  an event delegation
        var id = this.id.substr(this.id.length - 1);
        $(this).click(function (e) {
            getRestaurants(id);
            document.getElementById("intro").innerHTML = getProfileHTML() + "<p>" + this.value + "</p>";
        });
    });

    function getProfileHTML() {
        var userProp;

        userProp = "<strong>Browser CodeName: </strong>" + navigator.appCodeName + "<br />";
        userProp += "<strong>Browser Name: </strong>" + navigator.appName + "<br />";
        userProp += "<strong>Browser Version: </strong>" + navigator.appVersion + "<br />";
        userProp += "<strong>Cookies Enabled: </strong>" + navigator.cookieEnabled + "<br />";
        userProp += "<strong>Platform: </strong>" + navigator.platform + "<br />";
        userProp += "<strong>User-agent header: </strong>" + navigator.userAgent + "<br />";
        userProp += "<strong>User-agent language: </strong>" + navigator.language + "<br />";
        return userProp;
    }

    document.getElementById("intro").innerHTML = getProfileHTML();

    

    return this;
};
