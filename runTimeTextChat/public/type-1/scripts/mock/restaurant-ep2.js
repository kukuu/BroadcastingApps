//JavaScript for restaurants
//Prototype1: End Point 2

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
                $('#profile').html('Loading...');
            },
            timeout: 6000,
            success: function (response) {
                $('#profile').html('')
               .append('<h4 class="dod">Deal of the day - on offer</h4><ul id="dodList">');
                var list = response;//Add a response property
                for (var i = 0; i < list.length; i++) {
                    $('dodList').append('<li>' + list[i].Description + '</li>');
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




