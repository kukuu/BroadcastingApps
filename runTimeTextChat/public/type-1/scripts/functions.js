// file: scripts/site/functions.js
(function (window) {
    'use strict';

    var
        localStorage = window.localStorage,
        navigator = window.navigator;

    window.BAT = {
        support: (function () {
            return {
                localStorage: 'undefined' !== typeof localStorage
            };
        }(window)),
        browser: {
            agent: function () {
                var
                    ua = navigator.userAgent;

                if (ua.indexOf('MSIE') !== -1) {
                    return 'Internet Explorer';
                }

                if (ua.indexOf('Firefox') !== -1) {
                    return 'Firefox';
                }

                if (ua.indexOf('Chrome') !== -1) {
                    return 'Chrome';
                }

                if (ua.indexOf('Safari') !== -1) {
                    if (ua.indexOf('Android') !== -1) {
                        return 'Android';
                    }

                    return 'Safari';
                }

                return 'not yet identified';
            },
            language: function () {
                return (navigator.language
                    || navigator.userLanguage
                    || navigator.browserLanguage
                    || navigator.systemLanguage).toLowerCase();
            },
            ua: function () {
                return navigator.userAgent;
            }
        },
        storage: {
            retrieve: function (key) {
                return localStorage.getItem('BATProfile_' + key.toLowerCase());
            },
            store: function (key, value) {
                key = key.toLowerCase();

                if (window.BAT.support.localStorage) {
                    try {
                        return localStorage.setItem('BATProfile_' + key, value);
                    } catch (e) {
                        if (e.message.indexOf('QUOTA') !== -1) {
                            window.console.warn('Unable to save data for: ' + key);
                        }
                    }
                }
            }
        }
    };
}(this));
