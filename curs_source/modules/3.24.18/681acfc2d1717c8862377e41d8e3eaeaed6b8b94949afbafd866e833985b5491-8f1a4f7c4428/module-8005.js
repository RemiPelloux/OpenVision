"use strict";
const { types: n } = require("./module-9023.js"), { hasOwn: r, toUSVString: o } = require("./module-5728.js"), s = {
    converters: {},
    util: {},
    errors: {}
};
s.errors.exception = function(e) {
    return new TypeError(`${e.header}: ${e.message}`);
}, s.errors.conversionFailed = function(e) {
    const t = 1 === e.types.length ? "" : " one of", A = `${e.argument} could not be converted to${t}: ${e.types.join(", ")}.`;
    return s.errors.exception({
        header: e.prefix,
        message: A
    });
}, s.errors.invalidArgument = function(e) {
    return s.errors.exception({
        header: e.prefix,
        message: `"${e.value}" is an invalid ${e.type}.`
    });
}, s.brandCheck = function(e, t, A = void 0) {
    if (!1 === A?.strict || e instanceof t) return e?.[Symbol.toStringTag] === t.prototype[Symbol.toStringTag];
    throw new TypeError("Illegal invocation");
}, s.argumentLengthCheck = function({ length: e }, t, A) {
    if (e < t) throw s.errors.exception({
        message: `${t} argument${1 !== t ? "s" : ""} required, but${e ? " only" : ""} ${e} found.`,
        ...A
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
}, s.util.ConvertToInt = function(e, t, A, n = {}) {
    let r, o;
    64 === t ? (r = Math.pow(2, 53) - 1, o = "unsigned" === A ? 0 : Math.pow(-2, 53) + 1) : "unsigned" === A ? (o = 0, r = Math.pow(2, t) - 1) : (o = Math.pow(-2, t) - 1, r = Math.pow(2, t - 1) - 1);
    let i = Number(e);
    if (0 === i && (i = 0), !0 === n.enforceRange) {
        if (Number.isNaN(i) || i === Number.POSITIVE_INFINITY || i === Number.NEGATIVE_INFINITY) throw s.errors.exception({
            header: "Integer conversion",
            message: `Could not convert ${e} to an integer.`
        });
        if (i = s.util.IntegerPart(i), i < o || i > r) throw s.errors.exception({
            header: "Integer conversion",
            message: `Value must be between ${o}-${r}, got ${i}.`
        });
        return i;
    }
    return Number.isNaN(i) || !0 !== n.clamp ? Number.isNaN(i) || 0 === i && Object.is(0, i) || i === Number.POSITIVE_INFINITY || i === Number.NEGATIVE_INFINITY ? 0 : (i = s.util.IntegerPart(i), i %= Math.pow(2, t), "signed" === A && i >= Math.pow(2, t) - 1 ? i - Math.pow(2, t) : i) : (i = Math.min(Math.max(i, o), r), i = Math.floor(i) % 2 == 0 ? Math.floor(i) : Math.ceil(i), i);
}, s.util.IntegerPart = function(e) {
    const t = Math.floor(Math.abs(e));
    return e < 0 ? -1 * t : t;
}, s.sequenceConverter = function(e) {
    return (t)=>{
        if ("Object" !== s.util.Type(t)) throw s.errors.exception({
            header: "Sequence",
            message: `Value of type ${s.util.Type(t)} is not an Object.`
        });
        const A = t?.[Symbol.iterator]?.(), n = [];
        if (void 0 === A || "function" != typeof A.next) throw s.errors.exception({
            header: "Sequence",
            message: "Object is not an iterator."
        });
        for(;;){
            const { done: t, value: r } = A.next();
            if (t) break;
            n.push(e(r));
        }
        return n;
    };
}, s.recordConverter = function(e, t) {
    return (A)=>{
        if ("Object" !== s.util.Type(A)) throw s.errors.exception({
            header: "Record",
            message: `Value of type ${s.util.Type(A)} is not an Object.`
        });
        const r = {};
        if (!n.isProxy(A)) {
            const n = Object.keys(A);
            for (const o of n){
                const n = e(o), s = t(A[o]);
                r[n] = s;
            }
            return r;
        }
        const o = Reflect.ownKeys(A);
        for (const n of o){
            const o = Reflect.getOwnPropertyDescriptor(A, n);
            if (o?.enumerable) {
                const o = e(n), s = t(A[n]);
                r[o] = s;
            }
        }
        return r;
    };
}, s.interfaceConverter = function(e) {
    return (t, A = {})=>{
        if (!1 !== A.strict && !(t instanceof e)) throw s.errors.exception({
            header: e.name,
            message: `Expected ${t} to be an instance of ${e.name}.`
        });
        return t;
    };
}, s.dictionaryConverter = function(e) {
    return (t)=>{
        const A = s.util.Type(t), n = {};
        if ("Null" === A || "Undefined" === A) return n;
        if ("Object" !== A) throw s.errors.exception({
            header: "Dictionary",
            message: `Expected ${t} to be one of: Null, Undefined, Object.`
        });
        for (const A of e){
            const { key: e, defaultValue: o, required: i, converter: a } = A;
            if (!0 === i && !r(t, e)) throw s.errors.exception({
                header: "Dictionary",
                message: `Missing required key "${e}".`
            });
            let c = t[e];
            const l = r(A, "defaultValue");
            if (l && null !== c && (c = c ?? o), i || l || void 0 !== c) {
                if (c = a(c), A.allowedValues && !A.allowedValues.includes(c)) throw s.errors.exception({
                    header: "Dictionary",
                    message: `${c} is not an accepted type. Expected one of ${A.allowedValues.join(", ")}.`
                });
                n[e] = c;
            }
        }
        return n;
    };
}, s.nullableConverter = function(e) {
    return (t)=>null === t ? t : e(t);
}, s.converters.DOMString = function(e, t = {}) {
    if (null === e && t.legacyNullToEmptyString) return "";
    if ("symbol" == typeof e) throw new TypeError("Could not convert argument of type symbol to string.");
    return String(e);
}, s.converters.ByteString = function(e) {
    const t = s.converters.DOMString(e);
    for(let e = 0; e < t.length; e++)if (t.charCodeAt(e) > 255) throw new TypeError(`Cannot convert argument to a ByteString because the character at index ${e} has a value of ${t.charCodeAt(e)} which is greater than 255.`);
    return t;
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
}, s.converters["unsigned short"] = function(e, t) {
    return s.util.ConvertToInt(e, 16, "unsigned", t);
}, s.converters.ArrayBuffer = function(e, t = {}) {
    if ("Object" !== s.util.Type(e) || !n.isAnyArrayBuffer(e)) throw s.errors.conversionFailed({
        prefix: `${e}`,
        argument: `${e}`,
        types: [
            "ArrayBuffer"
        ]
    });
    if (!1 === t.allowShared && n.isSharedArrayBuffer(e)) throw s.errors.exception({
        header: "ArrayBuffer",
        message: "SharedArrayBuffer is not allowed."
    });
    return e;
}, s.converters.TypedArray = function(e, t, A = {}) {
    if ("Object" !== s.util.Type(e) || !n.isTypedArray(e) || e.constructor.name !== t.name) throw s.errors.conversionFailed({
        prefix: `${t.name}`,
        argument: `${e}`,
        types: [
            t.name
        ]
    });
    if (!1 === A.allowShared && n.isSharedArrayBuffer(e.buffer)) throw s.errors.exception({
        header: "ArrayBuffer",
        message: "SharedArrayBuffer is not allowed."
    });
    return e;
}, s.converters.DataView = function(e, t = {}) {
    if ("Object" !== s.util.Type(e) || !n.isDataView(e)) throw s.errors.exception({
        header: "DataView",
        message: "Object is not a DataView."
    });
    if (!1 === t.allowShared && n.isSharedArrayBuffer(e.buffer)) throw s.errors.exception({
        header: "ArrayBuffer",
        message: "SharedArrayBuffer is not allowed."
    });
    return e;
}, s.converters.BufferSource = function(e, t = {}) {
    if (n.isAnyArrayBuffer(e)) return s.converters.ArrayBuffer(e, t);
    if (n.isTypedArray(e)) return s.converters.TypedArray(e, e.constructor);
    if (n.isDataView(e)) return s.converters.DataView(e, t);
    throw new TypeError(`Could not convert ${e} to a BufferSource.`);
}, s.converters["sequence<ByteString>"] = s.sequenceConverter(s.converters.ByteString), s.converters["sequence<sequence<ByteString>>"] = s.sequenceConverter(s.converters["sequence<ByteString>"]), s.converters["record<ByteString, ByteString>"] = s.recordConverter(s.converters.ByteString, s.converters.ByteString), module.exports = {
    webidl: s
};
