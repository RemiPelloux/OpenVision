var DESCRIPTORS = require("./module-3724.js");
var definePropertyModule = require("./module-4913.js");
var createPropertyDescriptor = require("./module-6980.js");
module.exports = DESCRIPTORS ? function(object, key, value) {
    return definePropertyModule.f(object, key, createPropertyDescriptor(1, value));
} : function(object, key, value) {
    object[key] = value;
    return object;
};
