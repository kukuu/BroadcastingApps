(function (window) {
    'use strict';

    var
        $ = window.jQuery,
        prefix = '/scripts/site/mock/mockjax-';

    $.mockjax(function (settings) {
        var
            dataType = settings.dataType,
            proxy = prefix + settings.url + '.js';


        if (dataType !== 'json') {
            return false;
        }

        switch (settings.url) {
        case 'cuisine':
            return {
                dataType: dataType,
                proxy: proxy
            };

        case 'restaurant':
            if (settings.data.cuisineId !== 0) {
                switch (settings.data.cuisineId) {
                case 1:
                case 2:
                case 3:
                case 4:
                    proxy = proxy.replace(/(\.js)$/, '-cuisine' + settings.data.cuisineId + '$1');
                    break;
                }
            }

            return {
                dataType: dataType,
                proxy: proxy
            };

        default:
            return false;
        }
    });
}(this));