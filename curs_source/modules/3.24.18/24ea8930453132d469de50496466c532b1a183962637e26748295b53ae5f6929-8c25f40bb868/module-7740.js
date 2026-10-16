var hasOwn = require("./module-9297.js");
var ownKeys = require("./module-5031.js");
var getOwnPropertyDescriptorModule = require("./module-7347.js");
var definePropertyModule = require("./module-4913.js");
module.exports = function(target, source, exceptions) {
    var keys = ownKeys(source);
    var defineProperty = definePropertyModule.f;
    var getOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;
    for(var i = 0; i < keys.length; i++){
        var key = keys[i];
        if (!hasOwn(target, key) && !(exceptions && hasOwn(exceptions, key))) {
            defineProperty(target, key, getOwnPropertyDescriptor(source, key));
        }
    }
};
