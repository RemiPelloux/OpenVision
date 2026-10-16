"use strict";
const { types: n } = require("./module-9023.js"), { hasOwn: r, toUSVString: o } = require("./module-5728.js"), s = {
    converters: {},
    util: {},
    errors: {}
};
s.errors.exception = function(e) {
    return new TypeError(`${e.header}: ${e.message}`);
}, s.errors.conversionFailed = function(e) {
    const A = 1 === e.types.length ? "" : " one of", t = `${e.argument} could not be converted to${A}: ${e.types.join(", ")}.`;
    return s.errors.exception({
        header: e.prefix,
        message: t
    });
}, s.errors.invalidArgument = function(e) {
    return s.errors.exception({
        header: e.prefix,
        message: `"${e.value}" is an invalid ${e.type}.`
    });
}, s.brandCheck = function(e, A, t = void 0) {
    if (!1 === t?.strict || e instanceof A) return e?.[Symbol.toStringTag] === A.prototype[Symbol.toStringTag];
    throw new TypeError("Illegal invocation");
}, s.argumentLengthCheck = function({ length: e }, A, t) {
    if (e < A) throw s.errors.exception({
        message: `${A} argument${1 !== A ? "s" : ""} required, but${e ? " only" : ""} ${e} found.`,
        ...t
    });
}, s.illegalConstructor = function() {
    throw s.errors.exception({
        header: "TypeError",
        message: "Illegal constructor"
    });
}, s.util.Type = function(e) {
    switch(typeof e){
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
            return null === e ? "Null" : "Object";
    }
}, s.util.ConvertToInt = function(e, A, t, n = {}) {
    let r, o;
    64 === A ? (r = Math.pow(2, 53) - 1, o = "unsigned" === t ? 0 : Math.pow(-2, 53) + 1) : "unsigned" === t ? (o = 0, r = Math.pow(2, A) - 1) : (o = Math.pow(-2, A) - 1, r = Math.pow(2, A - 1) - 1);
    let a = Number(e);
    if (0 === a && (a = 0), !0 === n.enforceRange) {
        if (Number.isNaN(a) || a === Number.POSITIVE_INFINITY || a === Number.NEGATIVE_INFINITY) throw s.errors.exception({
            header: "Integer conversion",
            message: `Could not convert ${e} to an integer.`
        });
        if (a = s.util.IntegerPart(a), a < o || a > r) throw s.errors.exception({
            header: "Integer conversion",
            message: `Value must be between ${o}-${r}, got ${a}.`
        });
        return a;
    }
    return Number.isNaN(a) || !0 !== n.clamp ? Number.isNaN(a) || 0 === a && Object.is(0, a) || a === Number.POSITIVE_INFINITY || a === Number.NEGATIVE_INFINITY ? 0 : (a = s.util.IntegerPart(a), a %= Math.pow(2, A), "signed" === t && a >= Math.pow(2, A) - 1 ? a - Math.pow(2, A) : a) : (a = Math.min(Math.max(a, o), r), a = Math.floor(a) % 2 == 0 ? Math.floor(a) : Math.ceil(a), a);
}, s.util.IntegerPart = function(e) {
    const A = Math.floor(Math.abs(e));
    return e < 0 ? -1 * A : A;
}, s.sequenceConverter = function(e) {
    return (A)=>{
        if ("Object" !== s.util.Type(A)) throw s.errors.exception({
            header: "Sequence",
            message: `Value of type ${s.util.Type(A)} is not an Object.`
        });
        const t = A?.[Symbol.iterator]?.(), n = [];
        if (void 0 === t || "function" != typeof t.next) throw s.errors.exception({
            header: "Sequence",
            message: "Object is not an iterator."
        });
        for(;;){
            const { done: A, value: r } = t.next();
            if (A) break;
            n.push(e(r));
        }
        return n;
    };
}, s.recordConverter = function(e, A) {
    return (t)=>{
        if ("Object" !== s.util.Type(t)) throw s.errors.exception({
            header: "Record",
            message: `Value of type ${s.util.Type(t)} is not an Object.`
        });
        const r = {};
        if (!n.isProxy(t)) {
            const n = Object.keys(t);
            for (const o of n){
                const n = e(o), s = A(t[o]);
                r[n] = s;
            }
            return r;
        }
        const o = Reflect.ownKeys(t);
        for (const n of o){
            const o = Reflect.getOwnPropertyDescriptor(t, n);
            if (o?.enumerable) {
                const o = e(n), s = A(t[n]);
                r[o] = s;
            }
        }
        return r;
    };
}, s.interfaceConverter = function(e) {
    return (A, t = {})=>{
        if (!1 !== t.strict && !(A instanceof e)) throw s.errors.exception({
            header: e.name,
            message: `Expected ${A} to be an instance of ${e.name}.`
        });
        return A;
    };
}, s.dictionaryConverter = function(e) {
    return (A)=>{
        const t = s.util.Type(A), n = {};
        if ("Null" === t || "Undefined" === t) return n;
        if ("Object" !== t) throw s.errors.exception({
            header: "Dictionary",
            message: `Expected ${A} to be one of: Null, Undefined, Object.`
        });
        for (const t of e){
            const { key: e, defaultValue: o, required: a, converter: i } = t;
            if (!0 === a && !r(A, e)) throw s.errors.exception({
                header: "Dictionary",
                message: `Missing required key "${e}".`
            });
            let c = A[e];
            const l = r(t, "defaultValue");
            if (l && null !== c && (c = c ?? o), a || l || void 0 !== c) {
                if (c = i(c), t.allowedValues && !t.allowedValues.includes(c)) throw s.errors.exception({
                    header: "Dictionary",
                    message: `${c} is not an accepted type. Expected one of ${t.allowedValues.join(", ")}.`
                });
                n[e] = c;
            }
        }
        return n;
    };
}, s.nullableConverter = function(e) {
    return (A)=>null === A ? A : e(A);
}, s.converters.DOMString = function(e, A = {}) {
    if (null === e && A.legacyNullToEmptyString) return "";
    if ("symbol" == typeof e) throw new TypeError("Could not convert argument of type symbol to string.");
    return String(e);
}, s.converters.ByteString = function(e) {
    const A = s.converters.DOMString(e);
    for(let e = 0; e < A.length; e++)if (A.charCodeAt(e) > 255) throw new TypeError(`Cannot convert argument to a ByteString because the character at index ${e} has a value of ${A.charCodeAt(e)} which is greater than 255.`);
    return A;
}, s.converters.USVString = o, s.converters.boolean = function(e) {
    return Boolean(e);
}, s.converters.any = function(e) {
    return e;
}, s.converters["long long"] = function(e) {
    return s.util.ConvertToInt(e, 64, "signed");
}, s.converters["unsigned long long"] = function(e) {
    return s.util.ConvertToInt(e, 64, "unsigned");
}, s.converters["unsigned long"] = function(e) {
    return s.util.ConvertToInt(e, 32, "unsigned");
}, s.converters["unsigned short"] = function(e, A) {
    return s.util.ConvertToInt(e, 16, "unsigned", A);
}, s.converters.ArrayBuffer = function(e, A = {}) {
    if ("Object" !== s.util.Type(e) || !n.isAnyArrayBuffer(e)) throw s.errors.conversionFailed({
        prefix: `${e}`,
        argument: `${e}`,
        types: [
            "ArrayBuffer"
        ]
    });
    if (!1 === A.allowShared && n.isSharedArrayBuffer(e)) throw s.errors.exception({
        header: "ArrayBuffer",
        message: "SharedArrayBuffer is not allowed."
    });
    return e;
}, s.converters.TypedArray = function(e, A, t = {}) {
    if ("Object" !== s.util.Type(e) || !n.isTypedArray(e) || e.constructor.name !== A.name) throw s.errors.conversionFailed({
        prefix: `${A.name}`,
        argument: `${e}`,
        types: [
            A.name
        ]
    });
    if (!1 === t.allowShared && n.isSharedArrayBuffer(e.buffer)) throw s.errors.exception({
        header: "ArrayBuffer",
        message: "SharedArrayBuffer is not allowed."
    });
    return e;
}, s.converters.DataView = function(e, A = {}) {
    if ("Object" !== s.util.Type(e) || !n.isDataView(e)) throw s.errors.exception({
        header: "DataView",
        message: "Object is not a DataView."
    });
    if (!1 === A.allowShared && n.isSharedArrayBuffer(e.buffer)) throw s.errors.exception({
        header: "ArrayBuffer",
        message: "SharedArrayBuffer is not allowed."
    });
    return e;
}, s.converters.BufferSource = function(e, A = {}) {
    if (n.isAnyArrayBuffer(e)) return s.converters.ArrayBuffer(e, A);
    if (n.isTypedArray(e)) return s.converters.TypedArray(e, e.constructor);
    if (n.isDataView(e)) return s.converters.DataView(e, A);
    throw new TypeError(`Could not convert ${e} to a BufferSource.`);
}, s.converters["sequence<ByteString>"] = s.sequenceConverter(s.converters.ByteString), s.converters["sequence<sequence<ByteString>>"] = s.sequenceConverter(s.converters["sequence<ByteString>"]), s.converters["record<ByteString, ByteString>"] = s.recordConverter(s.converters.ByteString, s.converters.ByteString), module.exports = {
    webidl: s
};
