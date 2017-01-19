//JavaScript for restaurants and cuisine
//Prototype1: End Points

$(function () {
    function getRestaurants(id) {
        $.ajax({
          
            url: 'http://prototype2.alex.lb-bat-dev-01.livebookings.lan/restaurant',//Hooks to live data
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
                    $('#restaurantList').append('<li>' + list[i].Name + '</li>');
                }
            }
        });
    }


    $('.cuisine-menu input').each(function (i, v) {//set up  an event delegation
        var id = this.id.substr(this.id.length - 1);
        $(this).click(function (e) {
            getRestaurants(id);
        });
    });

});




