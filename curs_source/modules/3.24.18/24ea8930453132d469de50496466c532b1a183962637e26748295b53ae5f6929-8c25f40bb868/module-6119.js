var shared = require("./module-5745.js");
var uid = require("./module-3392.js");
var keys = shared("keys");
module.exports = function(key) {
    return keys[key] || (keys[key] = uid(key));
};
