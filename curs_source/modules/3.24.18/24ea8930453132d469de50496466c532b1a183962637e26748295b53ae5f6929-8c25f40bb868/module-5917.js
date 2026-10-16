var DESCRIPTORS = require("./module-3724.js");
var fails = require("./module-9039.js");
var createElement = require("./module-4055.js");
module.exports = !DESCRIPTORS && !fails(function() {
    return Object.defineProperty(createElement("div"), "a", {
        get: function() {
            return 7;
        }
    }).a !== 7;
});
