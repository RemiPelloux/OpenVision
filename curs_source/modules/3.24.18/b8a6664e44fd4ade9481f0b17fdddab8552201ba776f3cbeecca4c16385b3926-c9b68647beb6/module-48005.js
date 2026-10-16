"use strict";
const { types: r } = require(39023), { hasOwn: s, toUSVString: o } = require("./module-75728.js"), n = {
    converters: {},
    util: {},
    errors: {}
};
n.errors.exception = function(A) {
    return new TypeError(`${A.header}: ${A.message}`);
}, n.errors.conversionFailed = function(A) {
    const e = 1 === A.types.length ? "" : " one of", t = `${A.argument} could not be converted to${e}: ${A.types.join(", ")}.`;
    return n.errors.exception({
        header: A.prefix,
        message: t
    });
}, n.errors.invalidArgument = function(A) {
    return n.errors.exception({
        header: A.prefix,
        message: `"${A.value}" is an invalid ${A.type}.`
    });
}, n.brandCheck = function(A, e, t = void 0) {
    if (!1 === t?.strict || A instanceof e) return A?.[Symbol.toStringTag] === e.prototype[Symbol.toStringTag];
    throw new TypeError("Illegal invocation");
}, n.argumentLengthCheck = function({ length: A }, e, t) {
    if (A < e) throw n.errors.exception({
        message: `${e} argument${1 !== e ? "s" : ""} required, but${A ? " only" : ""} ${A} found.`,
        ...t
    });
}, n.illegalConstructor = function() {
    throw n.errors.exception({
        header: "TypeError",
        message: "Illegal constructor"
    });
}, n.util.Type = function(A) {
    switch(typeof A){
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
            return null === A ? "Null" : "Object";
    }
}, n.util.ConvertToInt = function(A, e, t, r = {}) {
    let s, o;
    64 === e ? (s = Math.pow(2, 53) - 1, o = "unsigned" === t ? 0 : Math.pow(-2, 53) + 1) : "unsigned" === t ? (o = 0, s = Math.pow(2, e) - 1) : (o = Math.pow(-2, e) - 1, s = Math.pow(2, e - 1) - 1);
    let i = Number(A);
    if (0 === i && (i = 0), !0 === r.enforceRange) {
        if (Number.isNaN(i) || i === Number.POSITIVE_INFINITY || i === Number.NEGATIVE_INFINITY) throw n.errors.exception({
            header: "Integer conversion",
            message: `Could not convert ${A} to an integer.`
        });
        if (i = n.util.IntegerPart(i), i < o || i > s) throw n.errors.exception({
            header: "Integer conversion",
            message: `Value must be between ${o}-${s}, got ${i}.`
        });
        return i;
    }
    return Number.isNaN(i) || !0 !== r.clamp ? Number.isNaN(i) || 0 === i && Object.is(0, i) || i === Number.POSITIVE_INFINITY || i === Number.NEGATIVE_INFINITY ? 0 : (i = n.util.IntegerPart(i), i %= Math.pow(2, e), "signed" === t && i >= Math.pow(2, e) - 1 ? i - Math.pow(2, e) : i) : (i = Math.min(Math.max(i, o), s), i = Math.floor(i) % 2 == 0 ? Math.floor(i) : Math.ceil(i), i);
}, n.util.IntegerPart = function(A) {
    const e = Math.floor(Math.abs(A));
    return A < 0 ? -1 * e : e;
}, n.sequenceConverter = function(A) {
    return (e)=>{
        if ("Object" !== n.util.Type(e)) throw n.errors.exception({
            header: "Sequence",
            message: `Value of type ${n.util.Type(e)} is not an Object.`
        });
        const t = e?.[Symbol.iterator]?.(), r = [];
        if (void 0 === t || "function" != typeof t.next) throw n.errors.exception({
            header: "Sequence",
            message: "Object is not an iterator."
        });
        for(;;){
            const { done: e, value: s } = t.next();
            if (e) break;
            r.push(A(s));
        }
        return r;
    };
}, n.recordConverter = function(A, e) {
    return (t)=>{
        if ("Object" !== n.util.Type(t)) throw n.errors.exception({
            header: "Record",
            message: `Value of type ${n.util.Type(t)} is not an Object.`
        });
        const s = {};
        if (!r.isProxy(t)) {
            const r = Object.keys(t);
            for (const o of r){
                const r = A(o), n = e(t[o]);
                s[r] = n;
            }
            return s;
        }
        const o = Reflect.ownKeys(t);
        for (const r of o){
            const o = Reflect.getOwnPropertyDescriptor(t, r);
            if (o?.enumerable) {
                const o = A(r), n = e(t[r]);
                s[o] = n;
            }
        }
        return s;
    };
}, n.interfaceConverter = function(A) {
    return (e, t = {})=>{
        if (!1 !== t.strict && !(e instanceof A)) throw n.errors.exception({
            header: A.name,
            message: `Expected ${e} to be an instance of ${A.name}.`
        });
        return e;
    };
}, n.dictionaryConverter = function(A) {
    return (e)=>{
        const t = n.util.Type(e), r = {};
        if ("Null" === t || "Undefined" === t) return r;
        if ("Object" !== t) throw n.errors.exception({
            header: "Dictionary",
            message: `Expected ${e} to be one of: Null, Undefined, Object.`
        });
        for (const t of A){
            const { key: A, defaultValue: o, required: i, converter: E } = t;
            if (!0 === i && !s(e, A)) throw n.errors.exception({
                header: "Dictionary",
                message: `Missing required key "${A}".`
            });
            let Q = e[A];
            const g = s(t, "defaultValue");
            if (g && null !== Q && (Q = Q ?? o), i || g || void 0 !== Q) {
                if (Q = E(Q), t.allowedValues && !t.allowedValues.includes(Q)) throw n.errors.exception({
                    header: "Dictionary",
                    message: `${Q} is not an accepted type. Expected one of ${t.allowedValues.join(", ")}.`
                });
                r[A] = Q;
            }
        }
        return r;
    };
}, n.nullableConverter = function(A) {
    return (e)=>null === e ? e : A(e);
}, n.converters.DOMString = function(A, e = {}) {
    if (null === A && e.legacyNullToEmptyString) return "";
    if ("symbol" == typeof A) throw new TypeError("Could not convert argument of type symbol to string.");
    return String(A);
}, n.converters.ByteString = function(A) {
    const e = n.converters.DOMString(A);
    for(let A = 0; A < e.length; A++)if (e.charCodeAt(A) > 255) throw new TypeError(`Cannot convert argument to a ByteString because the character at index ${A} has a value of ${e.charCodeAt(A)} which is greater than 255.`);
    return e;
}, n.converters.USVString = o, n.converters.boolean = function(A) {
    return Boolean(A);
}, n.converters.any = function(A) {
    return A;
}, n.converters["long long"] = function(A) {
    return n.util.ConvertToInt(A, 64, "signed");
}, n.converters["unsigned long long"] = function(A) {
    return n.util.ConvertToInt(A, 64, "unsigned");
}, n.converters["unsigned long"] = function(A) {
    return n.util.ConvertToInt(A, 32, "unsigned");
}, n.converters["unsigned short"] = function(A, e) {
    return n.util.ConvertToInt(A, 16, "unsigned", e);
}, n.converters.ArrayBuffer = function(A, e = {}) {
    if ("Object" !== n.util.Type(A) || !r.isAnyArrayBuffer(A)) throw n.errors.conversionFailed({
        prefix: `${A}`,
        argument: `${A}`,
        types: [
            "ArrayBuffer"
        ]
    });
    if (!1 === e.allowShared && r.isSharedArrayBuffer(A)) throw n.errors.exception({
        header: "ArrayBuffer",
        message: "SharedArrayBuffer is not allowed."
    });
    return A;
}, n.converters.TypedArray = function(A, e, t = {}) {
    if ("Object" !== n.util.Type(A) || !r.isTypedArray(A) || A.constructor.name !== e.name) throw n.errors.conversionFailed({
        prefix: `${e.name}`,
        argument: `${A}`,
        types: [
            e.name
        ]
    });
    if (!1 === t.allowShared && r.isSharedArrayBuffer(A.buffer)) throw n.errors.exception({
        header: "ArrayBuffer",
        message: "SharedArrayBuffer is not allowed."
    });
    return A;
}, n.converters.DataView = function(A, e = {}) {
    if ("Object" !== n.util.Type(A) || !r.isDataView(A)) throw n.errors.exception({
        header: "DataView",
        message: "Object is not a DataView."
    });
    if (!1 === e.allowShared && r.isSharedArrayBuffer(A.buffer)) throw n.errors.exception({
        header: "ArrayBuffer",
        message: "SharedArrayBuffer is not allowed."
    });
    return A;
}, n.converters.BufferSource = function(A, e = {}) {
    if (r.isAnyArrayBuffer(A)) return n.converters.ArrayBuffer(A, e);
    if (r.isTypedArray(A)) return n.converters.TypedArray(A, A.constructor);
    if (r.isDataView(A)) return n.converters.DataView(A, e);
    throw new TypeError(`Could not convert ${A} to a BufferSource.`);
}, n.converters["sequence<ByteString>"] = n.sequenceConverter(n.converters.ByteString), n.converters["sequence<sequence<ByteString>>"] = n.sequenceConverter(n.converters["sequence<ByteString>"]), n.converters["record<ByteString, ByteString>"] = n.recordConverter(n.converters.ByteString, n.converters.ByteString), module.exports = {
    webidl: n
};
