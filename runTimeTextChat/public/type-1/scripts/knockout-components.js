// file: scripts/site/knockout-components.js
(function (window) {
    'use strict';

    var
        body = window.document.body,
        bat = window.BAT,
        ko = window.ko,
        navigator = window.navigator,
        $ = window.jQuery,
        myCuisineModel,
        myLocationModel,
        myProfileModel,
        myRestaurantListModel;

    Function.prototype.inherits = function (ParentClassOrObject) {
        if (ParentClassOrObject.constructor === Function) { // Normal Inheritance
            this.prototype = new ParentClassOrObject();
            this.prototype.constructor = this;
            this.prototype.parent = ParentClassOrObject.prototype;
        } else { // Pure Virtual Inheritance
            this.prototype = ParentClassOrObject;
            this.prototype.constructor = this;
            this.prototype.parent = ParentClassOrObject;
        }

        return this;
    };

    function IModel() {
        this.applyBindings = function () {
            ko.applyBindings(this, this.query);
        };

        this.getItems = function (data, url, success) {
            $.ajax({
                data: data,
                dataType: 'json',
                url: url,
                success: success
            });
        };

        this.map = function (name, defaults, data) {
            var
                prop;

            this.query = '.component.' + name.toLowerCase();

            if ('undefined' === typeof defaults) {
                return;
            }

            for (prop in defaults) {
                if (defaults.hasOwnProperty(prop)) {
                    this[prop] = ko.observable(data && data.hasOwnProperty(prop) ? data[prop] : defaults[prop]);
                }
            }
        };

        this.refresh = function () {
            if (this.hasOwnProperty('items')) {
                this.items.removeAll();
            }

            this.init();
        };
    }

    /**
     * @constructor
     * @param {Number} id id of cuisine
     * @param {String} name name of cuisine
     */
    function CuisineItem(id, name) {
        this.id = id;
        this.name = name;
    }

    /**
     * @constructor
     * @param {Number} latitude latitude of location (degrees), default 0
     * @param {Number} longitude longitude of position (degrees), default 0
     * @param {bool?} enableHighAccuracy if true, tries to obtain best results, default false
     * @param {Number?} maximumAge time before location is considered stale (s), default 0
     * @param {Number?} altitude altitude of position (in m), default 0 (sea level)
     * @param {Number?} accuracy accuracy of position (in m), default 
     */
    function LocationItem(latitude, longitude, enableHighAccuracy, maximumAge, altitude, accuracy) {
        this.latitude = isNaN(latitude) ? 0 : latitude;
        this.longitude = isNaN(longitude) ? 0 : longitude;
        this.enableHighAccuracy = !!enableHighAccuracy;
        this.maximumAge = isNaN(maximumAge) ? 0 : maximumAge;
        this.altitude = isNaN(altitude) ? 0 : altitude;
        this.accuracy = isNaN(accuracy) ? 0 : accuracy;
        this.timestamp = +new Date(); // last time we received a position
    }

    /**
     * @constructor
     * @param {String} name name of item
     * @param {Object} item contents of item
     */
    function ProfileItem(name, item) {
        this.name = name;
        this.item = item;
    }

    /**
     * @constructor
     * @param {Number} id id of restaurant
     * @param {String} name name of restaurant
     * @param {String} description description of restaurant
     */
    function RestaurantListItem(id, name, description) {
        this.id = id;
        this.name = name;
        this.description = description;
    }

    /**
     * @constructor
     * @param {String} query querySelector for component
     */
    function ProfileModel(query) {
        var
            that = this;

        this.addItem = function (name, item, store) {
            var
                currentItem = that.getItem(name),
                newItem = new ProfileItem(name, item);

            if (null !== currentItem) {
                that.items.replace(currentItem, newItem);
            } else {
                that.items.push(newItem);
            }

            if (store) {
                bat.storage.store(name, JSON.stringify(item));
            }
        };

        this.getItem = function (name) {
            var
                counter,
                items,
                length;

            items = that.items();
            length = items.length;
            for (counter = 0; counter < length; counter += 1) {
                if (items[counter].name === name) {
                    return items[counter];
                }
            }

            return null;
        };

        this.init = function () {
            var
                temp = bat.storage.retrieve('cuisine');

            this.addItem('UA', { name: bat.browser.ua() });
            this.addItem('Language', { name: bat.browser.language() });
            this.addItem('Browser', { name: bat.browser.agent() });

            if (null !== temp) {
                temp = JSON.parse(temp);
                this.addItem('Cuisine', new CuisineItem(temp.id, temp.name));
            }
        };

        this.items = ko.observableArray();

        this.map(query);
    }
    ProfileModel.inherits(IModel);

    /**
     * @constructor
     * @param {String} query querySelector for component
     */
    function CuisineModel(query) {
        var
            that = this;

        this.init = function () {
            this.getItems({
                max: 4
            }, 'cuisine', function (json) {
                var
                    counter,
                    item,
                    length = json.length;

                for (counter = 0; counter < length; counter += 1) {
                    item = json[counter];
                    that.items.push(new CuisineItem(item.id, item.name));
                }
            });
        };

        this.items = ko.observableArray();

        this.setCuisine = function (cuisine) {
            that.profile.addItem('Cuisine', cuisine, true);
            that.restaurantlist.refresh();
        };

        this.map(query, new CuisineItem(0, ''));
    }
    CuisineModel.inherits(IModel);

    /**
     * @constructor
     * @param {String} query querySelector for component
     */
    function LocationModel(query) {
        var
            that = this;

        this.init = function () {
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(that.positionFound, that.positionError, {
                    enableHighAccuracy: that.location.enableHighAccuracy,
                    maximumAge: that.location.maximumAge,
                    timeout: 60000
                });
            }
        };

        this.location = new LocationItem(0, 0, false, 600);
        this.latlng = ko.computed(function () {
            var
                location = that.location;

            return location.latitude !== 0 && location.longitude !== 0 ? location.latitude + ', ' + location.longitude : 'Unknown';
        });

        this.map(query, this.location);
    }
    LocationModel.inherits(IModel);
    LocationModel.prototype.positionFound = function (position) {
        var
            coords = position.coords,
            location = this.location,
            prop;

        for (prop in coords) {
            if (coords.hasOwnProperty(prop)) {
                if (location.hasOwnProperty(prop)) {
                    location[prop] = coords[prop];
                } else {
                    window.console.warn(prop + ' was returned but not handled');
                }
            }
        }

        location.timestamp = position.timestamp || +new Date();
    };
    LocationModel.prototype.positionError = function (error) {
        var
            location = this.location;

        location.timestamp = +new Date();

        window.console.log(error);
    };

    /**
     * @constructor
     * @param {String} query querySelector for component
     */
    function RestaurantListModel(query) {
        var
            that = this;

        this.init = function () {
            var
                cuisine = this.profile.getItem('Cuisine') || 0,
                cuisineId,
                location = this.profile.getItem('Location') || new LocationItem(0, 0);

            if (0 !== cuisine) {
                cuisineId = cuisine.item.id;
            }

            this.getItems({
                cuisineId: cuisineId,
                location: location,
                max: 5
            }, 'restaurant', function (json) {
                var
                    counter,
                    item,
                    length = json.length;

                for (counter = 0; counter < length; counter += 1) {
                    item = json[counter];
                    that.items.push(new RestaurantListItem(item.id, item.name, item.description));
                }
            });
        };

        this.items = ko.observableArray();

        this.setRestaurant = function (restaurant) {
            that.profile.addItem('Restaurant', restaurant);
        };

        this.map(query, new RestaurantListItem(0, '', ''));
    }
    RestaurantListModel.inherits(IModel);

    /**
     * Implementation
     */
    function init() {
        myProfileModel = new ProfileModel('profile');
        ko.applyBindings(myProfileModel, body.querySelector(myProfileModel.query));

        myCuisineModel = new CuisineModel('cuisine');
        ko.applyBindings(myCuisineModel, body.querySelector(myCuisineModel.query));

        myLocationModel = new LocationModel('location');
        ko.applyBindings(myLocationModel, body.querySelector(myLocationModel.query));

        myRestaurantListModel = new RestaurantListModel('restaurantlist');
        ko.applyBindings(myRestaurantListModel, body.querySelector(myRestaurantListModel.query));

        myProfileModel.init();

        myCuisineModel.profile = myProfileModel;
        myCuisineModel.restaurantlist = myRestaurantListModel;
        myCuisineModel.init();

        myLocationModel.profile = myProfileModel;
        myLocationModel.init();

        myRestaurantListModel.profile = myProfileModel;
        myRestaurantListModel.init();
    }

    init();
}(this));
