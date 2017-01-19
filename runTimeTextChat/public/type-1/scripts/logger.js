// JavaScript source code

// logger.js
define(function (require) {
    var shirt = require("./shirt");

    return {
        logTheShirt: function () {
            //console.log("color: " + shirt.color + ", size: " + shirt.size);
            document.write("Menu  is " + shirt.menu + ", and  price is " + shirt.price)
            //$('p #attach').append('My Location');
        }
    };
});


