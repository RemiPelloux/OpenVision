var DESCRIPTORS = require("./module-3724.js");
var V8_PROTOTYPE_DEFINE_BUG = require("./module-8686.js");
var definePropertyModule = require("./module-4913.js");
var anObject = require("./module-8551.js");
var toIndexedObject = require("./module-5397.js");
var objectKeys = require("./module-1072.js");
exports.f = DESCRIPTORS && !V8_PROTOTYPE_DEFINE_BUG ? Object.defineProperties : function defineProperties(O, Properties) {
    anObject(O);
    var props = toIndexedObject(Properties);
    var keys = objectKeys(Properties);
    var length = keys.length;
    var index = 0;
    var key;
    while(length > index)definePropertyModule.f(O, key = keys[index++], props[key]);
    return O;
};
