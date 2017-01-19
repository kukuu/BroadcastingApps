// JavaScript source code


	

// shirt.js
define({
    color: "black",
    size : "large"
});

// logger.js
define(function (require) {
    var shirt = require("./shirt");

    return {
        logTheShirt: function () {
            console.log("color: " + shirt.color + ", size: " + shirt.size);
        }
    };
});

// main.js
define(function (require) {
    var shirt = require("./shirt");
    var logger = require("./logger");

    alert("Shirt color is: " + shirt.color);
    logger.logTheShirt();
});



<script data-main="../js/main" src="../js/require.js"></script>


