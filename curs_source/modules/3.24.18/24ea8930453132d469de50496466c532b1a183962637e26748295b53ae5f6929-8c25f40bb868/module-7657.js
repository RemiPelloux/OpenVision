var fails = require("./module-9039.js");
var isCallable = require("./module-4901.js");
var isObject = require("./module-34.js");
var create = require("./module-2360.js");
var getPrototypeOf = require("./module-2787.js");
var defineBuiltIn = require("./module-6840.js");
var wellKnownSymbol = require("./module-8227.js");
var IS_PURE = require("./module-6395.js");
var ITERATOR = wellKnownSymbol("iterator");
var BUGGY_SAFARI_ITERATORS = false;
var IteratorPrototype, PrototypeOfArrayIteratorPrototype, arrayIterator;
if ([].keys) {
    arrayIterator = [].keys();
    if (!("next" in arrayIterator)) BUGGY_SAFARI_ITERATORS = true;
    else {
        PrototypeOfArrayIteratorPrototype = getPrototypeOf(getPrototypeOf(arrayIterator));
        if (PrototypeOfArrayIteratorPrototype !== Object.prototype) IteratorPrototype = PrototypeOfArrayIteratorPrototype;
    }
}
var NEW_ITERATOR_PROTOTYPE = !isObject(IteratorPrototype) || fails(function() {
    var test = {};
    return IteratorPrototype[ITERATOR].call(test) !== test;
});
if (NEW_ITERATOR_PROTOTYPE) IteratorPrototype = {};
else if (IS_PURE) IteratorPrototype = create(IteratorPrototype);
if (!isCallable(IteratorPrototype[ITERATOR])) {
    defineBuiltIn(IteratorPrototype, ITERATOR, function() {
        return this;
    });
}
module.exports = {
    IteratorPrototype,
    BUGGY_SAFARI_ITERATORS
};
