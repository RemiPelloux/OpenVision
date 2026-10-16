"use strict";
const { types: n } = require("./module-9023.js"), { hasOwn: s, toUSVString: i } = require("./module-8116.js"), o = {
    converters: {},
    util: {},
    errors: {}
};
o.errors.exception = function(t) {
    return new TypeError(`${t.header}: ${t.message}`);
}, o.errors.conversionFailed = function(t) {
    const e = 1 === t.types.length ? "" : " one of", r = `${t.argument} could not be converted to${e}: ${t.types.join(", ")}.`;
    return o.errors.exception({
        header: t.prefix,
        message: r
    });
}, o.errors.invalidArgument = function(t) {
    return o.errors.exception({
        header: t.prefix,
        message: `"${t.value}" is an invalid ${t.type}.`
    });
}, o.brandCheck = function(t, e, r = void 0) {
    if (!1 === r?.strict || t instanceof e) return t?.[Symbol.toStringTag] === e.prototype[Symbol.toStringTag];
    throw new TypeError("Illegal invocation");
}, o.argumentLengthCheck = function({ length: t }, e, r) {
    if (t < e) throw o.errors.exception({
        message: `${e} argument${1 !== e ? "s" : ""} required, but${t ? " only" : ""} ${t} found.`,
        ...r
    });
}, o.illegalConstructor = function() {
    throw o.errors.exception({
        header: "TypeError",
        message: "Illegal constructor"
    });
}, o.util.Type = function(t) {
    switch(typeof t){
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
            return null === t ? "Null" : "Object";
    }
}, o.util.ConvertToInt = function(t, e, r, n = {}) {
    let s, i;
    64 === e ? (s = Math.pow(2, 53) - 1, i = "unsigned" === r ? 0 : Math.pow(-2, 53) + 1) : "unsigned" === r ? (i = 0, s = Math.pow(2, e) - 1) : (i = Math.pow(-2, e) - 1, s = Math.pow(2, e - 1) - 1);
    let a = Number(t);
    if (0 === a && (a = 0), !0 === n.enforceRange) {
        if (Number.isNaN(a) || a === Number.POSITIVE_INFINITY || a === Number.NEGATIVE_INFINITY) throw o.errors.exception({
            header: "Integer conversion",
            message: `Could not convert ${t} to an integer.`
        });
        if (a = o.util.IntegerPart(a), a < i || a > s) throw o.errors.exception({
            header: "Integer conversion",
            message: `Value must be between ${i}-${s}, got ${a}.`
        });
        return a;
    }
    return Number.isNaN(a) || !0 !== n.clamp ? Number.isNaN(a) || 0 === a && Object.is(0, a) || a === Number.POSITIVE_INFINITY || a === Number.NEGATIVE_INFINITY ? 0 : (a = o.util.IntegerPart(a), a %= Math.pow(2, e), "signed" === r && a >= Math.pow(2, e) - 1 ? a - Math.pow(2, e) : a) : (a = Math.min(Math.max(a, i), s), a = Math.floor(a) % 2 == 0 ? Math.floor(a) : Math.ceil(a), a);
}, o.util.IntegerPart = function(t) {
    const e = Math.floor(Math.abs(t));
    return t < 0 ? -1 * e : e;
}, o.sequenceConverter = function(t) {
    return (e)=>{
        if ("Object" !== o.util.Type(e)) throw o.errors.exception({
            header: "Sequence",
            message: `Value of type ${o.util.Type(e)} is not an Object.`
        });
        const r = e?.[Symbol.iterator]?.(), n = [];
        if (void 0 === r || "function" != typeof r.next) throw o.errors.exception({
            header: "Sequence",
            message: "Object is not an iterator."
        });
        for(;;){
            const { done: e, value: s } = r.next();
            if (e) break;
            n.push(t(s));
        }
        return n;
    };
}, o.recordConverter = function(t, e) {
    return (r)=>{
        if ("Object" !== o.util.Type(r)) throw o.errors.exception({
            header: "Record",
            message: `Value of type ${o.util.Type(r)} is not an Object.`
        });
        const s = {};
        if (!n.isProxy(r)) {
            const n = Object.keys(r);
            for (const i of n){
                const n = t(i), o = e(r[i]);
                s[n] = o;
            }
            return s;
        }
        const i = Reflect.ownKeys(r);
        for (const n of i){
            const i = Reflect.getOwnPropertyDescriptor(r, n);
            if (i?.enumerable) {
                const i = t(n), o = e(r[n]);
                s[i] = o;
            }
        }
        return s;
    };
}, o.interfaceConverter = function(t) {
    return (e, r = {})=>{
        if (!1 !== r.strict && !(e instanceof t)) throw o.errors.exception({
            header: t.name,
            message: `Expected ${e} to be an instance of ${t.name}.`
        });
        return e;
    };
}, o.dictionaryConverter = function(t) {
    return (e)=>{
        const r = o.util.Type(e), n = {};
        if ("Null" === r || "Undefined" === r) return n;
        if ("Object" !== r) throw o.errors.exception({
            header: "Dictionary",
            message: `Expected ${e} to be one of: Null, Undefined, Object.`
        });
        for (const r of t){
            const { key: t, defaultValue: i, required: a, converter: u } = r;
            if (!0 === a && !s(e, t)) throw o.errors.exception({
                header: "Dictionary",
                message: `Missing required key "${t}".`
            });
            let c = e[t];
            const l = s(r, "defaultValue");
            if (l && null !== c && (c = c ?? i), a || l || void 0 !== c) {
                if (c = u(c), r.allowedValues && !r.allowedValues.includes(c)) throw o.errors.exception({
                    header: "Dictionary",
                    message: `${c} is not an accepted type. Expected one of ${r.allowedValues.join(", ")}.`
                });
                n[t] = c;
            }
        }
        return n;
    };
}, o.nullableConverter = function(t) {
    return (e)=>null === e ? e : t(e);
}, o.converters.DOMString = function(t, e = {}) {
    if (null === t && e.legacyNullToEmptyString) return "";
    if ("symbol" == typeof t) throw new TypeError("Could not convert argument of type symbol to string.");
    return String(t);
}, o.converters.ByteString = function(t) {
    const e = o.converters.DOMString(t);
    for(let t = 0; t < e.length; t++)if (e.charCodeAt(t) > 255) throw new TypeError(`Cannot convert argument to a ByteString because the character at index ${t} has a value of ${e.charCodeAt(t)} which is greater than 255.`);
    return e;
}, o.converters.USVString = i, o.converters.boolean = function(t) {
    return Boolean(t);
}, o.converters.any = function(t) {
    return t;
}, o.converters["long long"] = function(t) {
    return o.util.ConvertToInt(t, 64, "signed");
}, o.converters["unsigned long long"] = function(t) {
    return o.util.ConvertToInt(t, 64, "unsigned");
}, o.converters["unsigned long"] = function(t) {
    return o.util.ConvertToInt(t, 32, "unsigned");
}, o.converters["unsigned short"] = function(t, e) {
    return o.util.ConvertToInt(t, 16, "unsigned", e);
}, o.converters.ArrayBuffer = function(t, e = {}) {
    if ("Object" !== o.util.Type(t) || !n.isAnyArrayBuffer(t)) throw o.errors.conversionFailed({
        prefix: `${t}`,
        argument: `${t}`,
        types: [
            "ArrayBuffer"
        ]
    });
    if (!1 === e.allowShared && n.isSharedArrayBuffer(t)) throw o.errors.exception({
        header: "ArrayBuffer",
        message: "SharedArrayBuffer is not allowed."
    });
    return t;
}, o.converters.TypedArray = function(t, e, r = {}) {
    if ("Object" !== o.util.Type(t) || !n.isTypedArray(t) || t.constructor.name !== e.name) throw o.errors.conversionFailed({
        prefix: `${e.name}`,
        argument: `${t}`,
        types: [
            e.name
        ]
    });
    if (!1 === r.allowShared && n.isSharedArrayBuffer(t.buffer)) throw o.errors.exception({
        header: "ArrayBuffer",
        message: "SharedArrayBuffer is not allowed."
    });
    return t;
}, o.converters.DataView = function(t, e = {}) {
    if ("Object" !== o.util.Type(t) || !n.isDataView(t)) throw o.errors.exception({
        header: "DataView",
        message: "Object is not a DataView."
    });
    if (!1 === e.allowShared && n.isSharedArrayBuffer(t.buffer)) throw o.errors.exception({
        header: "ArrayBuffer",
        message: "SharedArrayBuffer is not allowed."
    });
    return t;
}, o.converters.BufferSource = function(t, e = {}) {
    if (n.isAnyArrayBuffer(t)) return o.converters.ArrayBuffer(t, e);
    if (n.isTypedArray(t)) return o.converters.TypedArray(t, t.constructor);
    if (n.isDataView(t)) return o.converters.DataView(t, e);
    throw new TypeError(`Could not convert ${t} to a BufferSource.`);
}, o.converters["sequence<ByteString>"] = o.sequenceConverter(o.converters.ByteString), o.converters["sequence<sequence<ByteString>>"] = o.sequenceConverter(o.converters["sequence<ByteString>"]), o.converters["record<ByteString, ByteString>"] = o.recordConverter(o.converters.ByteString, o.converters.ByteString), module.exports = {
    webidl: o
};
