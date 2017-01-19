var epgapp = angular.module('appEPG', []);

          epgapp.controller('epgCtrl', ['$scope',
            function($scope) {
              var vm = this;

              vm.data = [{
                
                category: "Sci-Fi",
                playtrailler: "play trailler",
                buy:"$2.00",
                name: "Liars All",
                start: '3pm',
                end: '4.45pm',
                runningstart:"1pm",
                runningend:"2.45pm",
                duration:"3 mins",
                thumbIcon:"gallery/src/images/liars-all.png",
                icons:"ICONS",
                ad:"AD",
                episode:"Liars All",
                label:"New",
                newEpisode:"NEW",
                summary:"Comming soon",
                twitIcon:"https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTYyyt0AK3wpXDIXGDPQNUNZVQeFCBOPPavT6eZGwhOFWCUPCNl",
                title: "oneTitle",
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                year: "2013",
                img: "http://static.hdw.eweb4.com/media/wp_400/1/5/42735.jpg",
                trailler:"type-1/images/thumbnails/cafe-des-amis-london-1.jpg",
                program: 1
              }, {
                
                
                category:"Comedy",
                playtrailler: "play trailler",
                buy:"$2.00",
                name: "Sherlock",
                start: '1pm',
                end: '2.45pm',
                runningstart:"11pm",
                runningend:"2.45am",
                duration:"2 mins",
                thumbIcon:"gallery/src/images/band-of-brothers.png",
                icons:"ICONS",
                ad:"AD",
                episode:"Sherlock",
                label:"Sherlock",
                newEpisode:"New",
                summary:"Comming soon",
                twitIcon:"https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTYyyt0AK3wpXDIXGDPQNUNZVQeFCBOPPavT6eZGwhOFWCUPCNl",
                title: "twoTitle",
                description: "Quisque pulvinar libero sed eros ornare",
                year: "2014",
                img: "http://static.hdw.eweb4.com/media/wp_400/1/1/8519.jpg",
                trailler:"type-1/images/thumbnails/oxo-tower-london-1.jpg",
                program: 2
              }, {
                category:"Thriller",
                playtrailler: "play trailler",
                buy:"$2.00",
                name: "Black Swan",
                start: '6pm',
                end: '9.45pm',
                runningstart:"9pm",
                runningend:"12.45pm",
                duration:"1 min",
                thumbIcon:"gallery/src/images/blackswan.jpeg",
                icons:"ICONS",
                ad:"AD",
                episode:"Black Swan",
                label:"",
                newEpisode:"New",
                summary:"Comming soon",
                twitIcon:"https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTYyyt0AK3wpXDIXGDPQNUNZVQeFCBOPPavT6eZGwhOFWCUPCNl",
                title: "threeTitle",
                description: "Cras accumsan massa vitae tortor vehicula .",
                year: "2015",
                img: "http://static.hdw.eweb4.com/media/wp_400/1/5/43326.jpg",
                trailler:"type-1/images/thumbnails/the-ritz-restaurant-london-1.jpg",
                program: 3
              }, {
                category:"Drama",
                playtrailler: "play trailler",
                buy:"$2.00",
                name: "Inception",
                start: '6pm',
                end: '9.45pm',
                runningstart:"1pm",
                runningend:"2.45pm",
                duration:"5 mins",
                thumbIcon:"gallery/src/images/inception.jpeg",
                icons:"ICONS",
                ad:"AD",
                episode:"Inception",
                label:"",
                newEpisode:"New",
                summary:"Comming soon",
                twitIcon:"https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTYyyt0AK3wpXDIXGDPQNUNZVQeFCBOPPavT6eZGwhOFWCUPCNl",
                title: "FourTitle",
                description: "Suspendisse vitae mattis magna.",
                year: "2011",
                img: "http://static.hdw.eweb4.com/media/wp_400/1/5/42413.jpg",
                trailler:"type-1/images/thumbnails/tuttons-london-1.jpg",
                program: 4
              }, {
                    category:"Drama",
                    playtrailler: "play trailler",
                    buy:"$2.00",
                    name: 'Alice In Wonderland',
                    start: '6pm',
                    end: '9.45pm',
                    runningstart:"1pm",
                    runningend:"2.45pm",
                    duration:"7 mins",
                    thumbIcon:"gallery/src/images/aliceinwonderland.jpeg",
                    icons:"ICONS",
                    ad:"AD",
                    episode:"Alice In Wonderland",
                    label:"",
                    newEpisode:"New",
                    summary:"Comming soon",
                    twitIcon:"https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTYyyt0AK3wpXDIXGDPQNUNZVQeFCBOPPavT6eZGwhOFWCUPCNl",
                    trailler:"type-1/images/thumbnails/cafe-des-amis-london-1.jpg",
                    program: 5
            },{
                    category:"Comedy",
                    playtrailler: "play trailler",
                    buy:"$2.00",
                    name: 'True Grit',
                    start: '6pm',
                    end: '9.45pm',
                    runningstart:"1pm",
                    runningend:"2.45pm",
                    duration:"4 mins",
                    thumbIcon:"gallery/src/images/truegrit.jpeg",
                    icons:"ICONS",
                    ad:"AD",
                    episode:"True Grit",
                    label:"",
                    newEpisode:"New",
                    summary:"Comming soon",
                    twitIcon:"https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTYyyt0AK3wpXDIXGDPQNUNZVQeFCBOPPavT6eZGwhOFWCUPCNl",
                    trailler:"type-1/images/thumbnails/asia-de-cuba-london-1.jpg",
                    program: 6
            },{
                    category:"Thriller",
                    playtrailler: "play trailler",
                    buy:"$2.00",
                    name: 'Harry Porter...',
                    start: '6pm',
                    end: '9.45pm',
                    runningstart:"9am",
                    runningend:"12.45pm",
                    duration:"2 mins",
                    thumbIcon:"gallery/src/images/hpandthedealthyhallo.jpeg",
                    icons:"ICONS",
                    ad:"AD",
                    episode:"Harry Porter...",
                    label:"",
                    newEpisode:"New",
                    summary:"Comming soon",
                    twitIcon:"https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTYyyt0AK3wpXDIXGDPQNUNZVQeFCBOPPavT6eZGwhOFWCUPCNl",
                    trailler:"type-1/images/thumbnails/cafe-des-amis-london-1.jpg",
                    program: 7
            },{
                    category:"Sci-Fi",
                    playtrailler: "play trailler",
                    buy:"$2.00",
                    name: 'Iron Man 2',
                    start: '6pm',
                    end: '9.45pm',
                    runningstart:"1pm",
                    runningend:"2.45pm",
                    duration:"10 mins",
                    thumbIcon:"gallery/src/images/ironman2.jpeg",
                    icons:"ICONS",
                    ad:"AD",
                    episode:"Iron Man 2",
                    label:"",
                    newEpisode:"New",
                    summary:"Comming soon",
                    twitIcon:"https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTYyyt0AK3wpXDIXGDPQNUNZVQeFCBOPPavT6eZGwhOFWCUPCNl",
                    trailler:"type-1/images/thumbnails/oxo-tower-london-1.jpg",
                    program: 8
            },{
                    category:"Drama",
                    playtrailler: "play trailler",
                    buy:"$2.00",
                    name: 'Scot Pilgrim',
                    start: '6pm',
                    end: '9.45pm',
                    runningstart:"1pm",
                    runningend:"2.45pm",
                    duration:"30 secs",
                    thumbIcon:"gallery/src/images/scotpilgrim.jpeg",
                    icons:"ICONS",
                    ad:"AD",
                    episode:"Scot Pilgrim",
                    label:"",
                    newEpisode:"New",
                    summary:"Comming soon",
                    twitIcon:"https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTYyyt0AK3wpXDIXGDPQNUNZVQeFCBOPPavT6eZGwhOFWCUPCNl",
                    trailler:"type-1/images/thumbnails/the-ritz-restaurant-london-1.jpg",
                    program: 9
            },{
                    category:"Sci-Fi",
                    playtrailler: "play trailler",
                    buy:"$2.00",
                    name: 'Shutter Island',
                    start: '6pm',
                    end: '9.45pm',
                    runningstart:"10am",
                    runningend:"11.45am",
                    duration:"3 mins",
                    thumbIcon:"gallery/src/images/shutter-island.jpeg",
                    icons:"ICONS",
                    ad:"AD",
                    episode:"Shutter Island",
                    label:"",
                    newEpisode:"New",
                    summary:"Comming soon",
                    twitIcon:"https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTYyyt0AK3wpXDIXGDPQNUNZVQeFCBOPPavT6eZGwhOFWCUPCNl",
                    trailler:"type-1/images/thumbnails/the-ritz-restaurant-london-1.jpg",
                    program: 10
            },{
                    category:"Thriller",
                    playtrailler: "play trailler",
                    buy:"$2.00",
                    name: '127 Hours',
                    start: '6pm',
                    end: '9.45pm',
                    runningstart:"1pm",
                    runningend:"2.45pm",
                    duration:"2 mins",
                    thumbIcon:"gallery/src/images/127hours.jpeg",
                    icons:"ICONS",
                    ad:"AD",
                    episode:"127 Hours",
                    label:"",
                    newEpisode:"New",
                    summary:"Comming soon",
                    twitIcon:"https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTYyyt0AK3wpXDIXGDPQNUNZVQeFCBOPPavT6eZGwhOFWCUPCNl",
                    trailler:"type-1/images/thumbnails/tuttons-london-1.jpg",
                    program: 11
            },{
                    category:"Comedy",
                    playtrailler: "play trailler",
                    buy:"$2.00",
                    name: 'Kick Ass',
                    start: '6pm',
                    end: '9.45pm',
                    runningstart:"10am",
                    runningend:"3.45pm",
                    duration:"1 min",
                    thumbIcon:"gallery/src/images/kickass.jpeg",
                    icons:"ICONS",
                    ad:"AD",
                    episode:"Kick Ass",
                    label:"",
                    newEpisode:"New",
                    summary:"Comming soon",
                    twitIcon:"https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTYyyt0AK3wpXDIXGDPQNUNZVQeFCBOPPavT6eZGwhOFWCUPCNl",
                    trailler:"type-1/images/thumbnails/tuttons-london-1.jpg",
                    program: 12
            } ,{
                    
                    category:"Thriller",
                    playtrailler: "play trailler",
                    buy:"$2.00",
                    name: 'The Fighter',
                    start: '6pm',
                    end: '9.45pm',
                    runningstart:"1pm",
                    runningend:"2.45pm",
                    duration:"4 mins",
                    thumbIcon:"gallery/src/images/thefighter.jpeg",
                    icons:"ICONS",
                    ad:"AD",
                    episode:"The Fighter",
                    label:"",
                    newEpisode:"New",
                    summary:"Comming soon",
                    twitIcon:"https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTYyyt0AK3wpXDIXGDPQNUNZVQeFCBOPPavT6eZGwhOFWCUPCNl",
                    trailler:"type-1/images/thumbnails/cafe-des-amis-london-1.jpg",
                    program: 13
            }, {
                    category:"Thriller",
                    playtrailler: "play trailler",
                    buy:"$2.00",
                    name: 'Winters Bone',
                    start: '6pm',
                    end: '9.45pm',
                    runningstart:"1pm",
                    runningend:"2.45pm",
                    duration:"4 mins",
                    thumbIcon:"gallery/src/images/wintersbone.jpeg",
                    icons:"ICONS",
                    ad:"AD",
                    episode:"Winters Bone",
                    label:"",
                    newEpisode:"New",
                    summary:"Comming soon",
                    twitIcon:"https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTYyyt0AK3wpXDIXGDPQNUNZVQeFCBOPPavT6eZGwhOFWCUPCNl",
                    trailler:"type-1/images/thumbnails/the-ritz-restaurant-london-1.jpg",
                    program: 14
            },{
                    category:"Sci-Fi",
                    playtrailler: "play trailler",
                    buy:"$2.00",
                    name: 'Town',
                    start: '6pm',
                    end: '9.45pm',
                    runningstart:"10am",
                    runningend:"3.45pm",
                    duration:"5 mins",
                    thumbIcon:"gallery/src/images/town.jpeg",
                    icons:"ICONS",
                    ad:"AD",
                    episode:"Town",
                    label:"",
                    newEpisode:"New",
                    summary:"Comming soon",
                    twitIcon:"https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTYyyt0AK3wpXDIXGDPQNUNZVQeFCBOPPavT6eZGwhOFWCUPCNl",
                    trailler:"type-1/images/thumbnails/the-ritz-restaurant-london-1.jpg",
                    program: 15
            },{
                    category:"Comedy",
                    playtrailler: "play trailler",
                    buy:"$2.00",
                    name: 'Let Me In',
                    start: '6pm',
                    end: '9.45pm',
                    runningstart:"1pm",
                    runningend:"2.45pm",
                    duration:"20 sec",
                    thumbIcon:"gallery/src/images/letmein.jpeg",
                    icons:"ICONS",
                    ad:"AD",
                    episode:"Let Me In",
                    label:"",
                    newEpisode:"New",
                    summary:"Comming soon",
                    twitIcon:"https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTYyyt0AK3wpXDIXGDPQNUNZVQeFCBOPPavT6eZGwhOFWCUPCNl",
                    trailler:"type-1/images/thumbnails/the-ritz-restaurant-london-1.jpg",
                    program: 16
            },{
                    category:"Thriller",
                    playtrailler: "play trailler",
                    buy:"$2.00",
                    name: 'Despicable Me',
                    start: '6pm',
                    end: '9.45pm',
                    runningstart:"10am",
                    runningend:"3.45pm",
                    duration:"15 mins",
                    thumbIcon:"gallery/src/images/despicableme.jpeg",
                    icons:"ICONS",
                    ad:"AD",
                    episode:"Despicable Me",
                    label:"",
                    newEpisode:"New",
                    summary:"Comming soon",
                    twitIcon:"type-1/images/thumbnails/the-ritz-restaurant-london-1.jpghttps://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTYyyt0AK3wpXDIXGDPQNUNZVQeFCBOPPavT6eZGwhOFWCUPCNl",
                    trailler:"type-1/images/thumbnails/the-ritz-restaurant-london-1.jpg",
                    program: 17
            },{
                    category:"Sci-Fi",
                    playtrailler: "play trailler",
                    buy:"$2.00",
                    name: 'Blue Valentine',
                    start: '6pm',
                    end: '9.45pm',
                    runningstart:"1pm",
                    runningend:"2.45pm",
                    duration:"13 mins",
                    thumbIcon:"gallery/src/images/bluevalentine.jpeg",
                    icons:"ICONS",
                    ad:"AD",
                    episode:"Blue Valentine",
                    label:"",
                    newEpisode:"New",
                    summary:"CComming soon",
                    twitIcon:"https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTYyyt0AK3wpXDIXGDPQNUNZVQeFCBOPPavT6eZGwhOFWCUPCNl",
                    trailler:"type-1/images/thumbnails/cafe-des-amis-london-1.jpg",
                    program: 18
            },{
                    category:"Comedy",
                    playtrailler: "play trailler",
                    buy:"$2.00",
                    name: 'Eclipse',
                    start: '6pm',
                    end: '9.45pm',
                    runningstart:"10am",
                    runningend:"3.45pm",
                    duration:"3 mins",
                    thumbIcon:"gallery/src/images/eclipse.jpeg",
                    icons:"ICONS",
                    ad:"AD",
                    episode:"Eclipse",
                    label:"",
                    newEpisode:"New",
                    summary:"Comming soon",
                    twitIcon:"https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTYyyt0AK3wpXDIXGDPQNUNZVQeFCBOPPavT6eZGwhOFWCUPCNl",
                    trailler:"type-1/images/thumbnails/cafe-des-amis-london-1.jpg",
                    program: 19
            }];

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
    //var slideCarousel = document.getElementById('carousel-on-now');

    // create a simple instance
    // by default, it only adds horizontal recognizers
   // var sc = new Hammer(slideCarousel);
    
    // listen to panright and panleft touch events
   // sc.on("panright", function(ev) {
    //    $('#carousel-on-now').carousel('prev');
    //});
    //sc.on("panleft", function(ev) {
     //   $('#carousel-on-now').carousel('next'); 
    //});
      }
    ]);