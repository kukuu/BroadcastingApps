// JavaScript source code
$(".cuisine-buttons").click(function (event) {
    $.getJSON('scripts/cuisines.json', function (jd) {
        $('#profile').html('<p> Menu : ' + jd.menuin + '</p>');
        $('#profile').append('<p>Price : ' + jd.pricein + '</p>');
        $('#profile').append('<p> Type: ' + jd.typein + '</p>');

        $('#profile').html('<p> Menu : ' + jd.menuch + '</p>');
        $('#profile').append('<p>Price : ' + jd.pricech + '</p>');
        $('#profile').append('<p> Type: ' + jd.typech + '</p>');

        $('#profile').html('<p> Menu : ' + jd.menuit + '</p>');
        $('#profile').append('<p>Price : ' + jd.priceit + '</p>');
        $('#profile').append('<p> Type: ' + jd.typeit + '</p>');

        $('#profile').html('<p> Menu : ' + jd.menuth + '</p>');
        $('#profile').append('<p>Price : ' + jd.priceth + '</p>');
        $('#profile').append('<p> Type: ' + jd.typeth + '</p>');

    });


});

