var DESCRIPTORS = require("./module-3724.js");
var definePropertyModule = require("./module-4913.js");
var createPropertyDescriptor = require("./module-6980.js");
module.exports = function(object, key, value) {
    if (DESCRIPTORS) definePropertyModule.f(object, key, createPropertyDescriptor(0, value));
    else object[key] = value;
};
