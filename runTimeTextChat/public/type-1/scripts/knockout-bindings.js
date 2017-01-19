// file: scripts/site/knockout-components.js
(function (window) {
    'use strict';

    var
        ko = window.ko;

    ko.bindingHandlers.cuisineClassName = {
        init: function (element, valueAccessor) {
            element.className = valueAccessor().toLowerCase();
        }
    };

}(this));