// JavaScript source code
//Mobile Feature detection:

			tests = {
			    run : function() {
			        // define the feature tests that we wish to run
			        var features = [	{"label":"touch", test:this.supportsTouch()},
									 	{"label":"local storage", "test": this.supportsLocalStorage()},
									 	{"label":"canvas", "test": this.supportsCanvas()},
									 	{"label":"video", "test": this.supportsVideo()},
									 	{"label":"h264 Baseline", "test": this.supportsH264BaselineVideo()},
									 	{"label":"Ogg Theora", "test": this.supportsOggTheoraVideo()},
									 	{"label":"WebM", "test": this.supportsWebMVideo()},
									 	{"label":"web workers", "test": this.supportsWebWorkers()},
									 	{"label":"app cache", "test": this.supportsAppCache()},
									 	{"label":"geo-location", "test": this.supportsGeoLocation()},
									 	{"label":"microdata API", "test": this.supportsMicrodataAPI()}	];
			        // iterate through the defined feature tests and display the results in #js-features list
			        for (var _test in features) {
			            this.displayResults('js-features', features[_test].label, features[_test].test);
			        }
					
			        // define the objects we wish to inspect
			        var objects = [ "navigator", "screen"];
			        // iterate through the defined object inspections and display the results in #js-objects list
			        for (var _obj in objects) {
			            var object = window[objects[_obj]];
			            for (var _prop in object) {
			                this.displayResults('js-objects', objects[_obj] + "." + _prop, object[_prop]);
			            }
			        }
			    },
			    // help function that takes an element #id along with a key/value pair to append as dt/dd elements respectively
			    displayResults : function(id, key, value) {
			        var _dt = document.createElement('dt');
			        _dt.appendChild(document.createTextNode(key + ":"));
			        var _dd = document.createElement('dd');
			        _dd.appendChild(document.createTextNode(value));
			        var _results = document.getElementById(id);
			        if (_results) {
			            _results.appendChild(_dt);
			            _results.appendChild(_dd);
			        }
			    },
			    // feature test for HTML5 local storage support
			    supportsLocalStorage : function() {
			        return !!(('localStorage' in window) && window['localStorage']);
			    },
			    // feature test for HTML5 touch event support
			    supportsTouch: function() {
			        return !!(('createTouch' in document) && document['createTouch']);
			    },
			    // feature test for HTML5 canvas support
			    supportsCanvas : function() {
			        return !!document.createElement('canvas').getContext;
			    },
			    // feature test for HTML5 video support
			    supportsVideo : function() {
			        return !!document.createElement('video').canPlayType;
			    },
			    // feature test for H264Baseline format and codec support within HTML5 video
			    supportsH264BaselineVideo : function() {
			        if (!this.supportsVideo()) { return false; }
			        var v = document.createElement("video");
			        return v.canPlayType('video/mp4; codecs="avc1.42E01E, mp4a.40.2"') || "probably not";
			    },
			    // feature test for OggTheora format and codec support within HTML5 video
			    supportsOggTheoraVideo : function() {
			        if (!this.supportsVideo()) { return false; };
			        var v = document.createElement("video");
			        return v.canPlayType('video/ogg; codecs="theora, vorbis"') || "probably not";
			    },
			    // feature test for WebM format and codec support within HTML5 video
			    supportsWebMVideo : function() {
			        if (!this.supportsVideo()) { return false; };
			        var v = document.createElement("video");
			        return v.canPlayType('video/webm; codecs="vp8, vorbis"')  || "probably not";
			    },
			    // feature test for HTML5 web workers support
			    supportsWebWorkers : function() {
			        return !!window.Worker;
			    },
			    // feature test for HTML5 app cache support
			    supportsAppCache : function() {
			        return !!window.applicationCache;
			    },
			    // feature test for HTML5 geo-location support
			    supportsGeoLocation : function() {
			        return !!navigator.geolocation;
			    },
			    // feature test for HTML5 microdata support
			    supportsMicrodataAPI : function() {
			        return !!document.getItems;
			    }
			}
