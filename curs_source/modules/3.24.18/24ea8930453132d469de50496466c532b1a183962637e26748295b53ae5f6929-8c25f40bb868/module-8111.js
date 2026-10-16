var $ = require("./module-6518.js");
var globalThis2 = require("./module-4576.js");
var anInstance = require("./module-679.js");
var anObject = require("./module-8551.js");
var isCallable = require("./module-4901.js");
var getPrototypeOf = require("./module-2787.js");
var defineBuiltInAccessor = require("./module-2106.js");
var createProperty = require("./module-4659.js");
var fails = require("./module-9039.js");
var hasOwn = require("./module-9297.js");
var wellKnownSymbol = require("./module-8227.js");
var IteratorPrototype = require("./module-7657.js").IteratorPrototype;
var DESCRIPTORS = require("./module-3724.js");
var IS_PURE = require("./module-6395.js");
var CONSTRUCTOR = "constructor";
var ITERATOR = "Iterator";
var TO_STRING_TAG = wellKnownSymbol("toStringTag");
var $TypeError = TypeError;
var NativeIterator = globalThis2[ITERATOR];
var FORCED = IS_PURE || !isCallable(NativeIterator) || NativeIterator.prototype !== IteratorPrototype || !fails(function() {
    NativeIterator({});
});
var IteratorConstructor = function Iterator2() {
    anInstance(this, IteratorPrototype);
    if (getPrototypeOf(this) === IteratorPrototype) throw new $TypeError("Abstract class Iterator not directly constructable");
};
var defineIteratorPrototypeAccessor = function(key, value) {
    if (DESCRIPTORS) {
        defineBuiltInAccessor(IteratorPrototype, key, {
            configurable: true,
            get: function() {
                return value;
            },
            set: function(replacement) {
                anObject(this);
                if (this === IteratorPrototype) throw new $TypeError("You can't redefine this property");
                if (hasOwn(this, key)) this[key] = replacement;
                else createProperty(this, key, replacement);
            }
        });
    } else IteratorPrototype[key] = value;
};
if (!hasOwn(IteratorPrototype, TO_STRING_TAG)) defineIteratorPrototypeAccessor(TO_STRING_TAG, ITERATOR);
if (FORCED || !hasOwn(IteratorPrototype, CONSTRUCTOR) || IteratorPrototype[CONSTRUCTOR] === Object) {
    defineIteratorPrototypeAccessor(CONSTRUCTOR, IteratorConstructor);
}
IteratorConstructor.prototype = IteratorPrototype;
$({
    global: true,
    constructor: true,
    forced: FORCED
}, {
    Iterator: IteratorConstructor
});
