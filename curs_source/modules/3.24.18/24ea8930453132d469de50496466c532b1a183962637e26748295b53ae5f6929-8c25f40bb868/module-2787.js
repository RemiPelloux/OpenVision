var hasOwn = require("./module-9297.js");
var isCallable = require("./module-4901.js");
var toObject = require("./module-8981.js");
var sharedKey = require("./module-6119.js");
var CORRECT_PROTOTYPE_GETTER = require("./module-2211.js");
var IE_PROTO = sharedKey("IE_PROTO");
var $Object = Object;
var ObjectPrototype = $Object.prototype;
module.exports = CORRECT_PROTOTYPE_GETTER ? $Object.getPrototypeOf : function(O) {
    var object = toObject(O);
    if (hasOwn(object, IE_PROTO)) return object[IE_PROTO];
    var constructor = object.constructor;
    if (isCallable(constructor) && object instanceof constructor) {
        return constructor.prototype;
    }
    return object instanceof $Object ? ObjectPrototype : null;
};
