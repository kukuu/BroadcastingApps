var epgapp = angular.module('appEPG', []);

          epgapp.controller('epgCtrl', ['$scope',
            function($scope) {
              var vm = this;

              vm.data = [{
                
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
                summary:"Curabitur vulputate, ligula lacinia scelerisque tempor, lacus lacus ornare ante, ac egestas est urna sit amet arcu. Class aptent taciti sociosqu.",
                twitIcon:"https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTYyyt0AK3wpXDIXGDPQNUNZVQeFCBOPPavT6eZGwhOFWCUPCNl",
                title: "oneTitle",
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                year: "2013",
                img: "http://static.hdw.eweb4.com/media/wp_400/1/5/42735.jpg",
                program: 1
              }, {
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
                summary:"S4 Ep.0 The Abominable Bride. Sherlock Holmes and Doctor Watson investigate a mysterious ghostly bride. We've been here before - but what if this wasn't the modern day but the late Victorian period?  What if the world's most famous consulting detective and his best friend lived in Baker Street of steam trains, hansome cabs, top hats and a frock coat? Welcome to Sherlock in 1895!",
                twitIcon:"https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTYyyt0AK3wpXDIXGDPQNUNZVQeFCBOPPavT6eZGwhOFWCUPCNl",
                title: "twoTitle",
                description: "Quisque pulvinar libero sed eros ornare",
                year: "2014",
                img: "http://static.hdw.eweb4.com/media/wp_400/1/1/8519.jpg",
                program: 2
              }, {
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
                summary:"Curabitur vulputate, ligula lacinia scelerisque tempor, lacus lacus ornare ante, ac egestas est urna sit amet arcu. Class aptent taciti sociosqu.",
                twitIcon:"https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTYyyt0AK3wpXDIXGDPQNUNZVQeFCBOPPavT6eZGwhOFWCUPCNl",
                title: "threeTitle",
                description: "Cras accumsan massa vitae tortor vehicula .",
                year: "2015",
                img: "http://static.hdw.eweb4.com/media/wp_400/1/5/43326.jpg",
                program: 3
              }, {
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
                summary:"Curabitur vulputate, ligula lacinia scelerisque tempor, lacus lacus ornare ante, ac egestas est urna sit amet arcu. Class aptent taciti sociosqu.",
                twitIcon:"https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTYyyt0AK3wpXDIXGDPQNUNZVQeFCBOPPavT6eZGwhOFWCUPCNl",
                title: "FourTitle",
                description: "Suspendisse vitae mattis magna.",
                year: "2011",
                img: "http://static.hdw.eweb4.com/media/wp_400/1/5/42413.jpg",
                program: 4
              }, {
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
                    summary:"Curabitur vulputate, ligula lacinia scelerisque tempor, lacus lacus ornare ante, ac egestas est urna sit amet arcu. Class aptent taciti sociosqu.",
                    twitIcon:"https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTYyyt0AK3wpXDIXGDPQNUNZVQeFCBOPPavT6eZGwhOFWCUPCNl",
                     thingy: 5
            },{
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
                    summary:"Curabitur vulputate, ligula lacinia scelerisque tempor, lacus lacus ornare ante, ac egestas est urna sit amet arcu. Class aptent taciti sociosqu.",
                    twitIcon:"https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTYyyt0AK3wpXDIXGDPQNUNZVQeFCBOPPavT6eZGwhOFWCUPCNl",
                     program: 6
            },{
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
                    summary:"Curabitur vulputate, ligula lacinia scelerisque tempor, lacus lacus ornare ante, ac egestas est urna sit amet arcu. Class aptent taciti sociosqu.",
                    twitIcon:"https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTYyyt0AK3wpXDIXGDPQNUNZVQeFCBOPPavT6eZGwhOFWCUPCNl",
                     program: 7
            },{
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
                    summary:"Curabitur vulputate, ligula lacinia scelerisque tempor, lacus lacus ornare ante, ac egestas est urna sit amet arcu. Class aptent taciti sociosqu.",
                    twitIcon:"https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTYyyt0AK3wpXDIXGDPQNUNZVQeFCBOPPavT6eZGwhOFWCUPCNl",
                     program: 8
            },{
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
                    summary:"Curabitur vulputate, ligula lacinia scelerisque tempor, lacus lacus ornare ante, ac egestas est urna sit amet arcu. Class aptent taciti sociosqu.",
                    twitIcon:"https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTYyyt0AK3wpXDIXGDPQNUNZVQeFCBOPPavT6eZGwhOFWCUPCNl",
                     program: 9
            },{
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
                    summary:"Curabitur vulputate, ligula lacinia scelerisque tempor, lacus lacus ornare ante, ac egestas est urna sit amet arcu. Class aptent taciti sociosqu.",
                    twitIcon:"https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTYyyt0AK3wpXDIXGDPQNUNZVQeFCBOPPavT6eZGwhOFWCUPCNl",
                     program: 10
            },{
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
                    summary:"Curabitur vulputate, ligula lacinia scelerisque tempor, lacus lacus ornare ante, ac egestas est urna sit amet arcu. Class aptent taciti sociosqu.",
                    twitIcon:"https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTYyyt0AK3wpXDIXGDPQNUNZVQeFCBOPPavT6eZGwhOFWCUPCNl",
                     program: 11
            },{
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
                    summary:"Curabitur vulputate, ligula lacinia scelerisque tempor, lacus lacus ornare ante, ac egestas est urna sit amet arcu. Class aptent taciti sociosqu.",
                    twitIcon:"https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTYyyt0AK3wpXDIXGDPQNUNZVQeFCBOPPavT6eZGwhOFWCUPCNl",
                     program: 12
            } ,{
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
                    summary:"Curabitur vulputate, ligula lacinia scelerisque tempor, lacus lacus ornare ante, ac egestas est urna sit amet arcu. Class aptent taciti sociosqu.",
                    twitIcon:"https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTYyyt0AK3wpXDIXGDPQNUNZVQeFCBOPPavT6eZGwhOFWCUPCNl",
                     program: 13
            }, {
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
                    summary:"Curabitur vulputate, ligula lacinia scelerisque tempor, lacus lacus ornare ante, ac egestas est urna sit amet arcu. Class aptent taciti sociosqu.",
                    twitIcon:"https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTYyyt0AK3wpXDIXGDPQNUNZVQeFCBOPPavT6eZGwhOFWCUPCNl",
                     program: 14
            },{
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
                    summary:"Curabitur vulputate, ligula lacinia scelerisque tempor, lacus lacus ornare ante, ac egestas est urna sit amet arcu. Class aptent taciti sociosqu.",
                    twitIcon:"https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTYyyt0AK3wpXDIXGDPQNUNZVQeFCBOPPavT6eZGwhOFWCUPCNl",
                     program: 15
            },{
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
                    summary:"Curabitur vulputate, ligula lacinia scelerisque tempor, lacus lacus ornare ante, ac egestas est urna sit amet arcu. Class aptent taciti sociosqu.",
                    twitIcon:"https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTYyyt0AK3wpXDIXGDPQNUNZVQeFCBOPPavT6eZGwhOFWCUPCNl",
                     program: 16
            },{
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
                    summary:"Curabitur vulputate, ligula lacinia scelerisque tempor, lacus lacus ornare ante, ac egestas est urna sit amet arcu. Class aptent taciti sociosqu.",
                    twitIcon:"https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTYyyt0AK3wpXDIXGDPQNUNZVQeFCBOPPavT6eZGwhOFWCUPCNl",
                     program: 17
            },{
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
                    summary:"Curabitur vulputate, ligula lacinia scelerisque tempor, lacus lacus ornare ante, ac egestas est urna sit amet arcu. Class aptent taciti sociosqu.",
                    twitIcon:"https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTYyyt0AK3wpXDIXGDPQNUNZVQeFCBOPPavT6eZGwhOFWCUPCNl",
                     program: 18
            },{
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
                    summary:"Curabitur vulputate, ligula lacinia scelerisque tempor, lacus lacus ornare ante, ac egestas est urna sit amet arcu. Class aptent taciti sociosqu.",
                    twitIcon:"https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTYyyt0AK3wpXDIXGDPQNUNZVQeFCBOPPavT6eZGwhOFWCUPCNl",
                     program: 19
            }];
      }
    ]);