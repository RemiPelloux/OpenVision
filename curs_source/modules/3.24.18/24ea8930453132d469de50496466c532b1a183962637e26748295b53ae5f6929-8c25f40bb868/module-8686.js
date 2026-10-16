var DESCRIPTORS = require("./module-3724.js");
var fails = require("./module-9039.js");
module.exports = DESCRIPTORS && fails(function() {
    return Object.defineProperty(function() {}, "prototype", {
        value: 42,
        writable: false
    }).prototype !== 42;
});
