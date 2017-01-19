//JavaScript for restaurants
//Prototype1; End Point 2
    $(document).ready(function () {
      $('#nav-menu-1').click(function () {
          $.getJSON('scripts/mock/indian-cuisine.json', { id: 2 },
           function (data) {
			  $('#restaurant').html('<p> Name : ' + data.name + '</p>');
			  $('#restaurant').append('<p> Description: ' + data.description + '</p>');
			 
           });
       });
    });
