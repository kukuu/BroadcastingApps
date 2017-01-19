var routerApp = angular.module('routerApp', ['ui.router']);

routerApp.config(function($stateProvider, $urlRouterProvider) {
    
    $urlRouterProvider.otherwise('/home');
    
    $stateProvider
        
        // HOME STATES AND NESTED VIEWS ========================================
        .state('home', {
            url: '/home',
            templateUrl: 'partial-home.html',
            
            views: {
                '': { templateUrl: 'partial-home.html' },
                'carouselOnNow@home': { //ui-view value in partial-home.html::columnTwo
                    //templateUrl: 'table-data.html',
                     templateUrl: 'carousel-on-now.html',
                    controller: 'carousel-on-now'
                }
            }
        })
        
        // nested list with just some random string data
        .state('home.paragraph', {
            url: '/paragraph',
            template: 'I could surely do with a drink right now.'
        })
        
        // ABOUT PAGE AND MULTIPLE NAMED VIEWS =================================
        .state('live', {
            url: '/live',
            views: {
                '': { templateUrl: 'partial-live.html' },
                'columnOne@live': { //ui-view value in partial-live.html::columnOne
                    templateUrl: 'on-now.html' 
                },
                'columnTwo@live': { //ui-view value in partial-live.html::columnTwo
                    templateUrl: 'table-data.html',
                    controller: 'carousel-on-now'
                }
            }
            
        });
        
});

routerApp.controller("carousel-on-now", ["$scope", "$window", function($scope, $window) {
		
		// Loads the right array format for the scope depending on screen size on page load event
		$scope.$watch(function(){
			return $window.innerWidth;
		}, function(value) {
			if($window.innerWidth < 768)
   				$scope.slides = slidesXS;
   			else if($window.innerWidth > 768 && window.screen.width < 992)
   				$scope.slides = slidesSM;
   			else if($window.innerWidth > 992)	
   				$scope.slides = slidesMD;
		});
		
		/* Loads the right array format for the scope depending on screen size on page resize */
		$(window).resize(function(){
			console.log(window.innerWidth);
    		$scope.$apply(function(){
       			if($window.innerWidth < 768)
       				$scope.slides = slidesXS;
       			else if($window.innerWidth > 768 && window.screen.width < 992)
       				$scope.slides = slidesSM;
       			else if($window.innerWidth > 992)	
       				$scope.slides = slidesMD;
    		});
		});
		
		/* 
			Scope array structure for small screen sizes  (< 768px)
			Loads one item per group (slide)
		*/
	    var slidesXS = [{
			group: [
				{
					item: [
						{   
						    id: 1,  
						    image: "https://placehold.it/300?text=Breaking+Bad", 
						    title: "Breaking Bad", 
						    time: "10PM-11PM", 
						    channel: "https://placehold.it/50?text=FOX"}
					]
				},{
					item: [
						{   
						    id: 2,  
						    image: "https://placehold.it/300?text=Band+of+Brothers", 
						    title: "Band of Brothers", 
						    time: "10PM-11PM", 
						    channel: "https://placehold.it/50?text=Sky 1"}
					]
				},{
					item: [
						{   
						    id: 3,  
						    image: "https://placehold.it/300?text=BBC+News", 
						    title: "BBC News", 
						    time: "10PM-10.25PM", 
						    channel: "https://placehold.it/50?text=BBC ONE"}
					]
				},{
					item: [
						{   
						    id: 4,  
			    			image: "https://placehold.it/300?text=The+Big+Bang+Theory", 
			    			title: "The Big Bang Theory", 
			    			time: "10PM-10.30PM", 
			    			channel: "https://placehold.it/50?text=Channel 4"}
					]
				},{
					item: [
						{   
						    id: 5,  
						    image: "https://placehold.it/300?text=The+Amazing+Spiderman", 
			    			title: "The Amazing Spiderman", 
			    			time: "10PM-10.45PM", 
			    			channel: "https://placehold.it/50?text=FOX"}
					]
				},{
					item: [
						{   
						    id: 6,  
						    image: "https://placehold.it/300?text=Narcos", 
						    title: "Narcos", 
						    time: "10PM-11PM", 
						    channel: "https://placehold.it/50?text=Netflix"}
					]
				},{
					item: [
						{   
						    id: 7, 
						    image: "https://placehold.it/300?text=Game+of+Thrones", 
						    title: "Game of Thrones", 
						    time: "10PM-10.25PM", 
						    channel: "https://placehold.it/50?text=Channel 4"}
					]
				},{
					item: [
						{   
						    id: 8, 
						    image: "https://placehold.it/300?text=The+Walking+Dead", 
						    title: "The Walking Dead", 
						    time: "11PM-11.30PM", 
						    channel: "https://placehold.it/50?text=FOX"}
					]
				}
			]
		}];
	    
		
		/* 
			Scope array structure for medium screen sizes (> 768px and < 992px) 
			Loads three items per group (slide)
		*/
	    var slidesSM = [{
			group: [
				{
					item: [
						{   
						    id: 1,  
						    image: "https://placehold.it/300?text=Breaking+Bad", 
						    title: "Breaking Bad", 
						    time: "10PM-11PM", 
						    channel: "https://placehold.it/50?text=FOX"},
						{   
						    id: 2,  
						    image: "https://placehold.it/300?text=Band+of+Brothers", 
						    title: "Band of Brothers", 
						    time: "10PM-11PM", 
						    channel: "https://placehold.it/50?text=Sky 1"},
						{   
						    id: 3,  
						    image: "https://placehold.it/300?text=BBC+News", 
						    title: "BBC News", 
						    time: "10PM-10.25PM", 
						    channel: "https://placehold.it/50?text=BBC ONE"}
					]
				},{
					item: [
						
						{   
						    id: 4,  
			    			image: "https://placehold.it/300?text=The+Big+Bang+Theory", 
			    			title: "The Big Bang Theory", 
			    			time: "10PM-10.30PM", 
			    			channel: "https://placehold.it/50?text=Channel 4"},
			
						{   
						    id: 5,  
						    image: "https://placehold.it/300?text=The+Amazing+Spiderman", 
			    			title: "The Amazing Spiderman", 
			    			time: "10PM-10.45PM", 
			    			channel: "https://placehold.it/50?text=FOX"},
						{   
						    id: 6,  
						    image: "https://placehold.it/300?text=Narcos", 
						    title: "Narcos", 
						    time: "10PM-11PM", 
						    channel: "https://placehold.it/50?text=Netflix"}
					]
				},{
					item: [
						{   
						    id: 7, 
						    image: "https://placehold.it/300?text=Game+of+Thrones", 
						    title: "Game of Thrones", 
						    time: "10PM-10.25PM", 
						    channel: "https://placehold.it/50?text=Channel 4"},
						{   
						    id: 8, 
						    image: "https://placehold.it/300?text=The+Walking+Dead", 
						    title: "The Walking Dead", 
						    time: "11PM-11.30PM", 
						    channel: "https://placehold.it/50?text=FOX"}
					]
				}
			]
		}];
	    
		
		/* 
			Scope array structure for large screen sizes (> 992px)  
			Loads four items per group (slide)
		*/
		var slidesMD = [{
			group: [
				{
					item: [
						{   
						    id: 1,  
						    image: "https://placehold.it/300?text=Breaking+Bad", 
						    title: "Breaking Bad", 
						    time: "10PM-11PM", 
						    channel: "https://placehold.it/50?text=FOX"},
						{
						    id: 2,  
						    image: "https://placehold.it/300?text=Band+of+Brothers", 
						    title: "Band of Brothers", 
						    time: "10PM-11PM", 
						    channel: "https://placehold.it/50?text=Sky 1"},
						{
						    id: 3,  
						    image: "https://placehold.it/300?text=BBC+News", 
						    title: "BBC News", 
						    time: "10PM-10.25PM", 
						    channel: "https://placehold.it/50?text=BBC ONE"},
						{
						    id: 4,  
			    			image: "https://placehold.it/300?text=The+Big+Bang+Theory", 
			    			title: "The Big Bang Theory", 
			    			time: "10PM-10.30PM", 
			    			channel: "https://placehold.it/50?text=Channel 4"}
				    ]
				},{
					item: [
						{
						    id: 5,  
						    image: "https://placehold.it/300?text=The+Amazing+Spiderman", 
			    			title: "The Amazing Spiderman", 
			    			time: "10PM-10.45PM", 
			    			channel: "https://placehold.it/50?text=FOX"},
						{
						    id: 6,  
						    image: "https://placehold.it/300?text=Narcos", 
						    title: "Narcos", 
						    time: "10PM-11PM", 
						    channel: "https://placehold.it/50?text=Netflix"},
						{
						    id: 7, 
						    image: "https://placehold.it/300?text=Game+of+Thrones", 
						    title: "Game of Thrones", 
						    time: "10PM-10.25PM", 
						    channel: "https://placehold.it/50?text=Channel 4"},
						{
						    id: 8, 
						    image: "https://placehold.it/300?text=The+Walking+Dead", 
						    title: "The Walking Dead", 
						    time: "11PM-11.30PM", 
						    channel: "https://placehold.it/50?text=FOX"}
				    ]
				}
			]
		}];
	}]);

	// HammerJs implementation
	var slideCarousel = document.getElementById('carousel-on-now');

	// create a simple instance
	// by default, it only adds horizontal recognizers
	var sc = new Hammer(slideCarousel);
	
	// listen to panright and panleft touch events
	sc.on("panright", function(ev) {
	    $('#carousel-on-now').carousel('prev');
	});
	sc.on("panleft", function(ev) {
	    $('#carousel-on-now').carousel('next'); 
	});