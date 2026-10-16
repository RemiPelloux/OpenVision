var NATIVE_WEAK_MAP = require("./module-8622.js");
var globalThis2 = require("./module-4576.js");
var isObject = require("./module-34.js");
var createNonEnumerableProperty = require("./module-6699.js");
var hasOwn = require("./module-9297.js");
var shared = require("./module-7629.js");
var sharedKey = require("./module-6119.js");
var hiddenKeys = require("./module-421.js");
var OBJECT_ALREADY_INITIALIZED = "Object already initialized";
var TypeError2 = globalThis2.TypeError;
var WeakMap2 = globalThis2.WeakMap;
var set, get, has;
var enforce = function(it) {
    return has(it) ? get(it) : set(it, {});
};
var getterFor = function(TYPE) {
    return function(it) {
        var state;
        if (!isObject(it) || (state = get(it)).type !== TYPE) {
            throw new TypeError2("Incompatible receiver, " + TYPE + " required");
        }
        return state;
    };
};
if (NATIVE_WEAK_MAP || shared.state) {
    var store = shared.state || (shared.state = new WeakMap2());
    store.get = store.get;
    store.has = store.has;
    store.set = store.set;
    set = function(it, metadata) {
        if (store.has(it)) throw new TypeError2(OBJECT_ALREADY_INITIALIZED);
        metadata.facade = it;
        store.set(it, metadata);
        return metadata;
    };
    get = function(it) {
        return store.get(it) || {};
    };
    has = function(it) {
        return store.has(it);
    };
} else {
    var STATE = sharedKey("state");
    hiddenKeys[STATE] = true;
    set = function(it, metadata) {
        if (hasOwn(it, STATE)) throw new TypeError2(OBJECT_ALREADY_INITIALIZED);
        metadata.facade = it;
        createNonEnumerableProperty(it, STATE, metadata);
        return metadata;
    };
    get = function(it) {
        return hasOwn(it, STATE) ? it[STATE] : {};
    };
    has = function(it) {
        return hasOwn(it, STATE);
    };
}
module.exports = {
    set,
    get,
    has,
    enforce,
    getterFor
};
