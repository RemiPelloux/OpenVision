var DESCRIPTORS = require("./module-3724.js");
var call = require("./module-9565.js");
var propertyIsEnumerableModule = require("./module-8773.js");
var createPropertyDescriptor = require("./module-6980.js");
var toIndexedObject = require("./module-5397.js");
var toPropertyKey = require("./module-6969.js");
var hasOwn = require("./module-9297.js");
var IE8_DOM_DEFINE = require("./module-5917.js");
var $getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
exports.f = DESCRIPTORS ? $getOwnPropertyDescriptor : function getOwnPropertyDescriptor(O, P) {
    O = toIndexedObject(O);
    P = toPropertyKey(P);
    if (IE8_DOM_DEFINE) try {
        return $getOwnPropertyDescriptor(O, P);
    } catch (error) {}
    if (hasOwn(O, P)) return createPropertyDescriptor(!call(propertyIsEnumerableModule.f, O, P), O[P]);
};
