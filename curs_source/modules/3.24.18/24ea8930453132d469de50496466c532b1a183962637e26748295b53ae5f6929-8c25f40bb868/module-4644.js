var NATIVE_ARRAY_BUFFER = require("./module-7811.js");
var DESCRIPTORS = require("./module-3724.js");
var globalThis2 = require("./module-4576.js");
var isCallable = require("./module-4901.js");
var isObject = require("./module-34.js");
var hasOwn = require("./module-9297.js");
var classof = require("./module-6955.js");
var tryToString = require("./module-6823.js");
var createNonEnumerableProperty = require("./module-6699.js");
var defineBuiltIn = require("./module-6840.js");
var defineBuiltInAccessor = require("./module-2106.js");
var isPrototypeOf = require("./module-1625.js");
var getPrototypeOf = require("./module-2787.js");
var setPrototypeOf = require("./module-2967.js");
var wellKnownSymbol = require("./module-8227.js");
var uid = require("./module-3392.js");
var InternalStateModule = require("./module-1181.js");
var enforceInternalState = InternalStateModule.enforce;
var getInternalState = InternalStateModule.get;
var Int8Array2 = globalThis2.Int8Array;
var Int8ArrayPrototype = Int8Array2 && Int8Array2.prototype;
var Uint8ClampedArray2 = globalThis2.Uint8ClampedArray;
var Uint8ClampedArrayPrototype = Uint8ClampedArray2 && Uint8ClampedArray2.prototype;
var TypedArray = Int8Array2 && getPrototypeOf(Int8Array2);
var TypedArrayPrototype = Int8ArrayPrototype && getPrototypeOf(Int8ArrayPrototype);
var ObjectPrototype = Object.prototype;
var TypeError2 = globalThis2.TypeError;
var TO_STRING_TAG = wellKnownSymbol("toStringTag");
var TYPED_ARRAY_TAG = uid("TYPED_ARRAY_TAG");
var TYPED_ARRAY_CONSTRUCTOR = "TypedArrayConstructor";
var NATIVE_ARRAY_BUFFER_VIEWS = NATIVE_ARRAY_BUFFER && !!setPrototypeOf && classof(globalThis2.opera) !== "Opera";
var TYPED_ARRAY_TAG_REQUIRED = false;
var NAME, Constructor, Prototype;
var TypedArrayConstructorsList = {
    Int8Array: 1,
    Uint8Array: 1,
    Uint8ClampedArray: 1,
    Int16Array: 2,
    Uint16Array: 2,
    Int32Array: 4,
    Uint32Array: 4,
    Float32Array: 4,
    Float64Array: 8
};
var BigIntArrayConstructorsList = {
    BigInt64Array: 8,
    BigUint64Array: 8
};
var isView = function isView2(it) {
    if (!isObject(it)) return false;
    var klass = classof(it);
    return klass === "DataView" || hasOwn(TypedArrayConstructorsList, klass) || hasOwn(BigIntArrayConstructorsList, klass);
};
var getTypedArrayConstructor = function(it) {
    var proto = getPrototypeOf(it);
    if (!isObject(proto)) return;
    var state = getInternalState(proto);
    return state && hasOwn(state, TYPED_ARRAY_CONSTRUCTOR) ? state[TYPED_ARRAY_CONSTRUCTOR] : getTypedArrayConstructor(proto);
};
var isTypedArray = function(it) {
    if (!isObject(it)) return false;
    var klass = classof(it);
    return hasOwn(TypedArrayConstructorsList, klass) || hasOwn(BigIntArrayConstructorsList, klass);
};
var aTypedArray = function(it) {
    if (isTypedArray(it)) return it;
    throw new TypeError2("Target is not a typed array");
};
var aTypedArrayConstructor = function(C) {
    if (isCallable(C) && (!setPrototypeOf || isPrototypeOf(TypedArray, C))) return C;
    throw new TypeError2(tryToString(C) + " is not a typed array constructor");
};
var exportTypedArrayMethod = function(KEY, property, forced, options) {
    if (!DESCRIPTORS) return;
    if (forced) for(var ARRAY in TypedArrayConstructorsList){
        var TypedArrayConstructor = globalThis2[ARRAY];
        if (TypedArrayConstructor && hasOwn(TypedArrayConstructor.prototype, KEY)) try {
            delete TypedArrayConstructor.prototype[KEY];
        } catch (error) {
            try {
                TypedArrayConstructor.prototype[KEY] = property;
            } catch (error2) {}
        }
    }
    if (!TypedArrayPrototype[KEY] || forced) {
        defineBuiltIn(TypedArrayPrototype, KEY, forced ? property : NATIVE_ARRAY_BUFFER_VIEWS && Int8ArrayPrototype[KEY] || property, options);
    }
};
var exportTypedArrayStaticMethod = function(KEY, property, forced) {
    var ARRAY, TypedArrayConstructor;
    if (!DESCRIPTORS) return;
    if (setPrototypeOf) {
        if (forced) for(ARRAY in TypedArrayConstructorsList){
            TypedArrayConstructor = globalThis2[ARRAY];
            if (TypedArrayConstructor && hasOwn(TypedArrayConstructor, KEY)) try {
                delete TypedArrayConstructor[KEY];
            } catch (error) {}
        }
        if (!TypedArray[KEY] || forced) {
            try {
                return defineBuiltIn(TypedArray, KEY, forced ? property : NATIVE_ARRAY_BUFFER_VIEWS && TypedArray[KEY] || property);
            } catch (error) {}
        } else return;
    }
    for(ARRAY in TypedArrayConstructorsList){
        TypedArrayConstructor = globalThis2[ARRAY];
        if (TypedArrayConstructor && (!TypedArrayConstructor[KEY] || forced)) {
            defineBuiltIn(TypedArrayConstructor, KEY, property);
        }
    }
};
for(NAME in TypedArrayConstructorsList){
    Constructor = globalThis2[NAME];
    Prototype = Constructor && Constructor.prototype;
    if (Prototype) enforceInternalState(Prototype)[TYPED_ARRAY_CONSTRUCTOR] = Constructor;
    else NATIVE_ARRAY_BUFFER_VIEWS = false;
}
for(NAME in BigIntArrayConstructorsList){
    Constructor = globalThis2[NAME];
    Prototype = Constructor && Constructor.prototype;
    if (Prototype) enforceInternalState(Prototype)[TYPED_ARRAY_CONSTRUCTOR] = Constructor;
}
if (!NATIVE_ARRAY_BUFFER_VIEWS || !isCallable(TypedArray) || TypedArray === Function.prototype) {
    TypedArray = function TypedArray2() {
        throw new TypeError2("Incorrect invocation");
    };
    if (NATIVE_ARRAY_BUFFER_VIEWS) for(NAME in TypedArrayConstructorsList){
        if (globalThis2[NAME]) setPrototypeOf(globalThis2[NAME], TypedArray);
    }
}
if (!NATIVE_ARRAY_BUFFER_VIEWS || !TypedArrayPrototype || TypedArrayPrototype === ObjectPrototype) {
    TypedArrayPrototype = TypedArray.prototype;
    if (NATIVE_ARRAY_BUFFER_VIEWS) for(NAME in TypedArrayConstructorsList){
        if (globalThis2[NAME]) setPrototypeOf(globalThis2[NAME].prototype, TypedArrayPrototype);
    }
}
if (NATIVE_ARRAY_BUFFER_VIEWS && getPrototypeOf(Uint8ClampedArrayPrototype) !== TypedArrayPrototype) {
    setPrototypeOf(Uint8ClampedArrayPrototype, TypedArrayPrototype);
}
if (DESCRIPTORS && !hasOwn(TypedArrayPrototype, TO_STRING_TAG)) {
    TYPED_ARRAY_TAG_REQUIRED = true;
    defineBuiltInAccessor(TypedArrayPrototype, TO_STRING_TAG, {
        configurable: true,
        get: function() {
            return isObject(this) ? this[TYPED_ARRAY_TAG] : void 0;
        }
    });
    for(NAME in TypedArrayConstructorsList)if (globalThis2[NAME]) {
        createNonEnumerableProperty(globalThis2[NAME], TYPED_ARRAY_TAG, NAME);
    }
}
module.exports = {
    NATIVE_ARRAY_BUFFER_VIEWS,
    TYPED_ARRAY_TAG: TYPED_ARRAY_TAG_REQUIRED && TYPED_ARRAY_TAG,
    aTypedArray,
    aTypedArrayConstructor,
    exportTypedArrayMethod,
    exportTypedArrayStaticMethod,
    getTypedArrayConstructor,
    isView,
    isTypedArray,
    TypedArray,
    TypedArrayPrototype
};
