 $(document).ready(function() {
		      $("#nav-menu-1").click(function(event){
		          $.getJSON('scripts/indian.json', function(jd) {
		             $('#profile').html('<p> Menu : ' + jd.menu + '</p>');
		             $('#profile').append('<p>Price : ' + jd.price+ '</p>');
		             $('#profile').append('<p> Type: ' + jd.type+ '</p>');
		          });
		      });
			  
			  $("#nav-menu-2").click(function(event){
		          $.getJSON('scripts/chinese.json', function(jd) {
		             $('#profile').html('<p> Menu : ' + jd.menu + '</p>');
		             $('#profile').append('<p>Price : ' + jd.price+ '</p>');
		             $('#profile').append('<p> Type: ' + jd.type+ '</p>');
		          });
		      });
			  
			  $("#nav-menu-3").click(function(event){
		          $.getJSON('scripts/italian.json', function(jd) {
		             $('#profile').html('<p> Menu : ' + jd.menu + '</p>');
		             $('#profile').append('<p>Price : ' + jd.price+ '</p>');
		             $('#profile').append('<p> Type: ' + jd.type+ '</p>');
		          });
		      });
			  
			  $("#nav-menu-4").click(function(event){
		          $.getJSON('scripts/thai.json', function(jd) {
		             $('#profile').html('<p> Menu : ' + jd.menu + '</p>');
		             $('#profile').append('<p>Price : ' + jd.price+ '</p>');
		             $('#profile').append('<p> Type: ' + jd.type+ '</p>');
		          });
		      });
			  
			   $('#showTerms').click(function(){
               		$('#terms').dialog({modal:true});   
           		});
			  
		   });
		   
