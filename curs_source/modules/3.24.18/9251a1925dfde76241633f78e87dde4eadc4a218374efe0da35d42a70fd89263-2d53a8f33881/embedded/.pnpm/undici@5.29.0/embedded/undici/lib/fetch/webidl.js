import { require_util2 } from "./util.js";
var __wakaru_require_webidl_cache;
export function require_webidl() {
if (__wakaru_require_webidl_cache) return __wakaru_require_webidl_cache.exports;
var exports2 = {};
var module2 = { exports: exports2 };
__wakaru_require_webidl_cache = module2;
"use strict";
var { types: types3 } = require("util");
var { hasOwn, toUSVString } = require_util2();
var webidl = {};
webidl.converters = {};
webidl.util = {};
webidl.errors = {};
webidl.errors.exception = function(message) {
    return new TypeError(`${message.header}: ${message.message}`);
};
webidl.errors.conversionFailed = function(context2) {
    const plural = context2.types.length === 1 ? "" : " one of";
    const message = `${context2.argument} could not be converted to${plural}: ${context2.types.join(", ")}.`;
    return webidl.errors.exception({
        header: context2.prefix,
        message
    });
};
webidl.errors.invalidArgument = function(context2) {
    return webidl.errors.exception({
        header: context2.prefix,
        message: `"${context2.value}" is an invalid ${context2.type}.`
    });
};
webidl.brandCheck = function(V2, I2, opts = void 0) {
    if (opts?.strict !== false && !(V2 instanceof I2)) {
        throw new TypeError("Illegal invocation");
    } else {
        return V2?.[Symbol.toStringTag] === I2.prototype[Symbol.toStringTag];
    }
};
webidl.argumentLengthCheck = function({ length }, min, ctx) {
    if (length < min) {
        throw webidl.errors.exception({
            message: `${min} argument${min !== 1 ? "s" : ""} required, but${length ? " only" : ""} ${length} found.`,
            ...ctx
        });
    }
};
webidl.illegalConstructor = function() {
    throw webidl.errors.exception({
        header: "TypeError",
        message: "Illegal constructor"
    });
};
webidl.util.Type = function(V2) {
    switch(typeof V2){
        case "undefined":
            return "Undefined";
        case "boolean":
            return "Boolean";
        case "string":
            return "String";
        case "symbol":
            return "Symbol";
        case "number":
            return "Number";
        case "bigint":
            return "BigInt";
        case "function":
        case "object":
            {
                if (V2 === null) {
                    return "Null";
                }
                return "Object";
            }
    }
};
webidl.util.ConvertToInt = function(V2, bitLength, signedness, opts = {}) {
    let upperBound;
    let lowerBound;
    if (bitLength === 64) {
        upperBound = Math.pow(2, 53) - 1;
        if (signedness === "unsigned") {
            lowerBound = 0;
        } else {
            lowerBound = Math.pow(-2, 53) + 1;
        }
    } else if (signedness === "unsigned") {
        lowerBound = 0;
        upperBound = Math.pow(2, bitLength) - 1;
    } else {
        lowerBound = Math.pow(-2, bitLength) - 1;
        upperBound = Math.pow(2, bitLength - 1) - 1;
    }
    let x = Number(V2);
    if (x === 0) {
        x = 0;
    }
    if (opts.enforceRange === true) {
        if (Number.isNaN(x) || x === Number.POSITIVE_INFINITY || x === Number.NEGATIVE_INFINITY) {
            throw webidl.errors.exception({
                header: "Integer conversion",
                message: `Could not convert ${V2} to an integer.`
            });
        }
        x = webidl.util.IntegerPart(x);
        if (x < lowerBound || x > upperBound) {
            throw webidl.errors.exception({
                header: "Integer conversion",
                message: `Value must be between ${lowerBound}-${upperBound}, got ${x}.`
            });
        }
        return x;
    }
    if (!Number.isNaN(x) && opts.clamp === true) {
        x = Math.min(Math.max(x, lowerBound), upperBound);
        if (Math.floor(x) % 2 === 0) {
            x = Math.floor(x);
        } else {
            x = Math.ceil(x);
        }
        return x;
    }
    if (Number.isNaN(x) || x === 0 && Object.is(0, x) || x === Number.POSITIVE_INFINITY || x === Number.NEGATIVE_INFINITY) {
        return 0;
    }
    x = webidl.util.IntegerPart(x);
    x = x % Math.pow(2, bitLength);
    if (signedness === "signed" && x >= Math.pow(2, bitLength) - 1) {
        return x - Math.pow(2, bitLength);
    }
    return x;
};
webidl.util.IntegerPart = function(n) {
    const r = Math.floor(Math.abs(n));
    if (n < 0) {
        return -1 * r;
    }
    return r;
};
webidl.sequenceConverter = function(converter) {
    return (V2)=>{
        if (webidl.util.Type(V2) !== "Object") {
            throw webidl.errors.exception({
                header: "Sequence",
                message: `Value of type ${webidl.util.Type(V2)} is not an Object.`
            });
        }
        const method = V2?.[Symbol.iterator]?.();
        const seq2 = [];
        if (method === void 0 || typeof method.next !== "function") {
            throw webidl.errors.exception({
                header: "Sequence",
                message: "Object is not an iterator."
            });
        }
        while(true){
            const { done, value } = method.next();
            if (done) {
                break;
            }
            seq2.push(converter(value));
        }
        return seq2;
    };
};
webidl.recordConverter = function(keyConverter, valueConverter) {
    return (O2)=>{
        if (webidl.util.Type(O2) !== "Object") {
            throw webidl.errors.exception({
                header: "Record",
                message: `Value of type ${webidl.util.Type(O2)} is not an Object.`
            });
        }
        const result = {};
        if (!types3.isProxy(O2)) {
            const keys2 = Object.keys(O2);
            for (const key of keys2){
                const typedKey = keyConverter(key);
                const typedValue = valueConverter(O2[key]);
                result[typedKey] = typedValue;
            }
            return result;
        }
        const keys = Reflect.ownKeys(O2);
        for (const key of keys){
            const desc = Reflect.getOwnPropertyDescriptor(O2, key);
            if (desc?.enumerable) {
                const typedKey = keyConverter(key);
                const typedValue = valueConverter(O2[key]);
                result[typedKey] = typedValue;
            }
        }
        return result;
    };
};
webidl.interfaceConverter = function(i) {
    return (V2, opts = {})=>{
        if (opts.strict !== false && !(V2 instanceof i)) {
            throw webidl.errors.exception({
                header: i.name,
                message: `Expected ${V2} to be an instance of ${i.name}.`
            });
        }
        return V2;
    };
};
webidl.dictionaryConverter = function(converters) {
    return (dictionary)=>{
        const type2 = webidl.util.Type(dictionary);
        const dict = {};
        if (type2 === "Null" || type2 === "Undefined") {
            return dict;
        } else if (type2 !== "Object") {
            throw webidl.errors.exception({
                header: "Dictionary",
                message: `Expected ${dictionary} to be one of: Null, Undefined, Object.`
            });
        }
        for (const options2 of converters){
            const { key, defaultValue, required: required2, converter } = options2;
            if (required2 === true) {
                if (!hasOwn(dictionary, key)) {
                    throw webidl.errors.exception({
                        header: "Dictionary",
                        message: `Missing required key "${key}".`
                    });
                }
            }
            let value = dictionary[key];
            const hasDefault = hasOwn(options2, "defaultValue");
            if (hasDefault && value !== null) {
                value = value ?? defaultValue;
            }
            if (required2 || hasDefault || value !== void 0) {
                value = converter(value);
                if (options2.allowedValues && !options2.allowedValues.includes(value)) {
                    throw webidl.errors.exception({
                        header: "Dictionary",
                        message: `${value} is not an accepted type. Expected one of ${options2.allowedValues.join(", ")}.`
                    });
                }
                dict[key] = value;
            }
        }
        return dict;
    };
};
webidl.nullableConverter = function(converter) {
    return (V2)=>{
        if (V2 === null) {
            return V2;
        }
        return converter(V2);
    };
};
webidl.converters.DOMString = function(V2, opts = {}) {
    if (V2 === null && opts.legacyNullToEmptyString) {
        return "";
    }
    if (typeof V2 === "symbol") {
        throw new TypeError("Could not convert argument of type symbol to string.");
    }
    return String(V2);
};
webidl.converters.ByteString = function(V2) {
    const x = webidl.converters.DOMString(V2);
    for(let index = 0; index < x.length; index++){
        if (x.charCodeAt(index) > 255) {
            throw new TypeError(`Cannot convert argument to a ByteString because the character at index ${index} has a value of ${x.charCodeAt(index)} which is greater than 255.`);
        }
    }
    return x;
};
webidl.converters.USVString = toUSVString;
webidl.converters.boolean = function(V2) {
    const x = Boolean(V2);
    return x;
};
webidl.converters.any = function(V2) {
    return V2;
};
webidl.converters["long long"] = function(V2) {
    const x = webidl.util.ConvertToInt(V2, 64, "signed");
    return x;
};
webidl.converters["unsigned long long"] = function(V2) {
    const x = webidl.util.ConvertToInt(V2, 64, "unsigned");
    return x;
};
webidl.converters["unsigned long"] = function(V2) {
    const x = webidl.util.ConvertToInt(V2, 32, "unsigned");
    return x;
};
webidl.converters["unsigned short"] = function(V2, opts) {
    const x = webidl.util.ConvertToInt(V2, 16, "unsigned", opts);
    return x;
};
webidl.converters.ArrayBuffer = function(V2, opts = {}) {
    if (webidl.util.Type(V2) !== "Object" || !types3.isAnyArrayBuffer(V2)) {
        throw webidl.errors.conversionFailed({
            prefix: `${V2}`,
            argument: `${V2}`,
            types: [
                "ArrayBuffer"
            ]
        });
    }
    if (opts.allowShared === false && types3.isSharedArrayBuffer(V2)) {
        throw webidl.errors.exception({
            header: "ArrayBuffer",
            message: "SharedArrayBuffer is not allowed."
        });
    }
    return V2;
};
webidl.converters.TypedArray = function(V2, T, opts = {}) {
    if (webidl.util.Type(V2) !== "Object" || !types3.isTypedArray(V2) || V2.constructor.name !== T.name) {
        throw webidl.errors.conversionFailed({
            prefix: `${T.name}`,
            argument: `${V2}`,
            types: [
                T.name
            ]
        });
    }
    if (opts.allowShared === false && types3.isSharedArrayBuffer(V2.buffer)) {
        throw webidl.errors.exception({
            header: "ArrayBuffer",
            message: "SharedArrayBuffer is not allowed."
        });
    }
    return V2;
};
webidl.converters.DataView = function(V2, opts = {}) {
    if (webidl.util.Type(V2) !== "Object" || !types3.isDataView(V2)) {
        throw webidl.errors.exception({
            header: "DataView",
            message: "Object is not a DataView."
        });
    }
    if (opts.allowShared === false && types3.isSharedArrayBuffer(V2.buffer)) {
        throw webidl.errors.exception({
            header: "ArrayBuffer",
            message: "SharedArrayBuffer is not allowed."
        });
    }
    return V2;
};
webidl.converters.BufferSource = function(V2, opts = {}) {
    if (types3.isAnyArrayBuffer(V2)) {
        return webidl.converters.ArrayBuffer(V2, opts);
    }
    if (types3.isTypedArray(V2)) {
        return webidl.converters.TypedArray(V2, V2.constructor);
    }
    if (types3.isDataView(V2)) {
        return webidl.converters.DataView(V2, opts);
    }
    throw new TypeError(`Could not convert ${V2} to a BufferSource.`);
};
webidl.converters["sequence<ByteString>"] = webidl.sequenceConverter(webidl.converters.ByteString);
webidl.converters["sequence<sequence<ByteString>>"] = webidl.sequenceConverter(webidl.converters["sequence<ByteString>"]);
webidl.converters["record<ByteString, ByteString>"] = webidl.recordConverter(webidl.converters.ByteString, webidl.converters.ByteString);
module2.exports = {
    webidl
};

return module2.exports;
}
