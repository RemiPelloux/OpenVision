var globalThis2 = require("./module-4576.js");
var getOwnPropertyDescriptor = require("./module-7347.js").f;
var createNonEnumerableProperty = require("./module-6699.js");
var defineBuiltIn = require("./module-6840.js");
var defineGlobalProperty = require("./module-9433.js");
var copyConstructorProperties = require("./module-7740.js");
var isForced = require("./module-2796.js");
module.exports = function(options, source) {
    var TARGET = options.target;
    var GLOBAL = options.global;
    var STATIC = options.stat;
    var FORCED, target, key, targetProperty, sourceProperty, descriptor;
    if (GLOBAL) {
        target = globalThis2;
    } else if (STATIC) {
        target = globalThis2[TARGET] || defineGlobalProperty(TARGET, {});
    } else {
        target = globalThis2[TARGET] && globalThis2[TARGET].prototype;
    }
    if (target) for(key in source){
        sourceProperty = source[key];
        if (options.dontCallGetSet) {
            descriptor = getOwnPropertyDescriptor(target, key);
            targetProperty = descriptor && descriptor.value;
        } else targetProperty = target[key];
        FORCED = isForced(GLOBAL ? key : TARGET + (STATIC ? "." : "#") + key, options.forced);
        if (!FORCED && targetProperty !== void 0) {
            if (typeof sourceProperty == typeof targetProperty) continue;
            copyConstructorProperties(sourceProperty, targetProperty);
        }
        if (options.sham || targetProperty && targetProperty.sham) {
            createNonEnumerableProperty(sourceProperty, "sham", true);
        }
        defineBuiltIn(target, key, sourceProperty, options);
    }
};
