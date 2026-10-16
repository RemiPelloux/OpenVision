"use strict";
const { types: n } = require("./module-39023.js"), { hasOwn: s, toUSVString: o } = require("./module-98116.js"), i = {
    converters: {},
    util: {},
    errors: {}
};
i.errors.exception = function(e) {
    return new TypeError(`${e.header}: ${e.message}`);
}, i.errors.conversionFailed = function(e) {
    const t = 1 === e.types.length ? "" : " one of", r = `${e.argument} could not be converted to${t}: ${e.types.join(", ")}.`;
    return i.errors.exception({
        header: e.prefix,
        message: r
    });
}, i.errors.invalidArgument = function(e) {
    return i.errors.exception({
        header: e.prefix,
        message: `"${e.value}" is an invalid ${e.type}.`
    });
}, i.brandCheck = function(e, t, r = void 0) {
    if (!1 === r?.strict || e instanceof t) return e?.[Symbol.toStringTag] === t.prototype[Symbol.toStringTag];
    throw new TypeError("Illegal invocation");
}, i.argumentLengthCheck = function({ length: e }, t, r) {
    if (e < t) throw i.errors.exception({
        message: `${t} argument${1 !== t ? "s" : ""} required, but${e ? " only" : ""} ${e} found.`,
        ...r
    });
}, i.illegalConstructor = function() {
    throw i.errors.exception({
        header: "TypeError",
        message: "Illegal constructor"
    });
}, i.util.Type = function(e) {
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
}, i.util.ConvertToInt = function(e, t, r, n = {}) {
    let s, o;
    64 === t ? (s = Math.pow(2, 53) - 1, o = "unsigned" === r ? 0 : Math.pow(-2, 53) + 1) : "unsigned" === r ? (o = 0, s = Math.pow(2, t) - 1) : (o = Math.pow(-2, t) - 1, s = Math.pow(2, t - 1) - 1);
    let a = Number(e);
    if (0 === a && (a = 0), !0 === n.enforceRange) {
        if (Number.isNaN(a) || a === Number.POSITIVE_INFINITY || a === Number.NEGATIVE_INFINITY) throw i.errors.exception({
            header: "Integer conversion",
            message: `Could not convert ${e} to an integer.`
        });
        if (a = i.util.IntegerPart(a), a < o || a > s) throw i.errors.exception({
            header: "Integer conversion",
            message: `Value must be between ${o}-${s}, got ${a}.`
        });
        return a;
    }
    return Number.isNaN(a) || !0 !== n.clamp ? Number.isNaN(a) || 0 === a && Object.is(0, a) || a === Number.POSITIVE_INFINITY || a === Number.NEGATIVE_INFINITY ? 0 : (a = i.util.IntegerPart(a), a %= Math.pow(2, t), "signed" === r && a >= Math.pow(2, t) - 1 ? a - Math.pow(2, t) : a) : (a = Math.min(Math.max(a, o), s), a = Math.floor(a) % 2 == 0 ? Math.floor(a) : Math.ceil(a), a);
}, i.util.IntegerPart = function(e) {
    const t = Math.floor(Math.abs(e));
    return e < 0 ? -1 * t : t;
}, i.sequenceConverter = function(e) {
    return (t)=>{
        if ("Object" !== i.util.Type(t)) throw i.errors.exception({
            header: "Sequence",
            message: `Value of type ${i.util.Type(t)} is not an Object.`
        });
        const r = t?.[Symbol.iterator]?.(), n = [];
        if (void 0 === r || "function" != typeof r.next) throw i.errors.exception({
            header: "Sequence",
            message: "Object is not an iterator."
        });
        for(;;){
            const { done: t, value: s } = r.next();
            if (t) break;
            n.push(e(s));
        }
        return n;
    };
}, i.recordConverter = function(e, t) {
    return (r)=>{
        if ("Object" !== i.util.Type(r)) throw i.errors.exception({
            header: "Record",
            message: `Value of type ${i.util.Type(r)} is not an Object.`
        });
        const s = {};
        if (!n.isProxy(r)) {
            const n = Object.keys(r);
            for (const o of n){
                const n = e(o), i = t(r[o]);
                s[n] = i;
            }
            return s;
        }
        const o = Reflect.ownKeys(r);
        for (const n of o){
            const o = Reflect.getOwnPropertyDescriptor(r, n);
            if (o?.enumerable) {
                const o = e(n), i = t(r[n]);
                s[o] = i;
            }
        }
        return s;
    };
}, i.interfaceConverter = function(e) {
    return (t, r = {})=>{
        if (!1 !== r.strict && !(t instanceof e)) throw i.errors.exception({
            header: e.name,
            message: `Expected ${t} to be an instance of ${e.name}.`
        });
        return t;
    };
}, i.dictionaryConverter = function(e) {
    return (t)=>{
        const r = i.util.Type(t), n = {};
        if ("Null" === r || "Undefined" === r) return n;
        if ("Object" !== r) throw i.errors.exception({
            header: "Dictionary",
            message: `Expected ${t} to be one of: Null, Undefined, Object.`
        });
        for (const r of e){
            const { key: e, defaultValue: o, required: a, converter: c } = r;
            if (!0 === a && !s(t, e)) throw i.errors.exception({
                header: "Dictionary",
                message: `Missing required key "${e}".`
            });
            let l = t[e];
            const u = s(r, "defaultValue");
            if (u && null !== l && (l = l ?? o), a || u || void 0 !== l) {
                if (l = c(l), r.allowedValues && !r.allowedValues.includes(l)) throw i.errors.exception({
                    header: "Dictionary",
                    message: `${l} is not an accepted type. Expected one of ${r.allowedValues.join(", ")}.`
                });
                n[e] = l;
            }
        }
        return n;
    };
}, i.nullableConverter = function(e) {
    return (t)=>null === t ? t : e(t);
}, i.converters.DOMString = function(e, t = {}) {
    if (null === e && t.legacyNullToEmptyString) return "";
    if ("symbol" == typeof e) throw new TypeError("Could not convert argument of type symbol to string.");
    return String(e);
}, i.converters.ByteString = function(e) {
    const t = i.converters.DOMString(e);
    for(let e = 0; e < t.length; e++)if (t.charCodeAt(e) > 255) throw new TypeError(`Cannot convert argument to a ByteString because the character at index ${e} has a value of ${t.charCodeAt(e)} which is greater than 255.`);
    return t;
}, i.converters.USVString = o, i.converters.boolean = function(e) {
    return Boolean(e);
}, i.converters.any = function(e) {
    return e;
}, i.converters["long long"] = function(e) {
    return i.util.ConvertToInt(e, 64, "signed");
}, i.converters["unsigned long long"] = function(e) {
    return i.util.ConvertToInt(e, 64, "unsigned");
}, i.converters["unsigned long"] = function(e) {
    return i.util.ConvertToInt(e, 32, "unsigned");
}, i.converters["unsigned short"] = function(e, t) {
    return i.util.ConvertToInt(e, 16, "unsigned", t);
}, i.converters.ArrayBuffer = function(e, t = {}) {
    if ("Object" !== i.util.Type(e) || !n.isAnyArrayBuffer(e)) throw i.errors.conversionFailed({
        prefix: `${e}`,
        argument: `${e}`,
        types: [
            "ArrayBuffer"
        ]
    });
    if (!1 === t.allowShared && n.isSharedArrayBuffer(e)) throw i.errors.exception({
        header: "ArrayBuffer",
        message: "SharedArrayBuffer is not allowed."
    });
    return e;
}, i.converters.TypedArray = function(e, t, r = {}) {
    if ("Object" !== i.util.Type(e) || !n.isTypedArray(e) || e.constructor.name !== t.name) throw i.errors.conversionFailed({
        prefix: `${t.name}`,
        argument: `${e}`,
        types: [
            t.name
        ]
    });
    if (!1 === r.allowShared && n.isSharedArrayBuffer(e.buffer)) throw i.errors.exception({
        header: "ArrayBuffer",
        message: "SharedArrayBuffer is not allowed."
    });
    return e;
}, i.converters.DataView = function(e, t = {}) {
    if ("Object" !== i.util.Type(e) || !n.isDataView(e)) throw i.errors.exception({
        header: "DataView",
        message: "Object is not a DataView."
    });
    if (!1 === t.allowShared && n.isSharedArrayBuffer(e.buffer)) throw i.errors.exception({
        header: "ArrayBuffer",
        message: "SharedArrayBuffer is not allowed."
    });
    return e;
}, i.converters.BufferSource = function(e, t = {}) {
    if (n.isAnyArrayBuffer(e)) return i.converters.ArrayBuffer(e, t);
    if (n.isTypedArray(e)) return i.converters.TypedArray(e, e.constructor);
    if (n.isDataView(e)) return i.converters.DataView(e, t);
    throw new TypeError(`Could not convert ${e} to a BufferSource.`);
}, i.converters["sequence<ByteString>"] = i.sequenceConverter(i.converters.ByteString), i.converters["sequence<sequence<ByteString>>"] = i.sequenceConverter(i.converters["sequence<ByteString>"]), i.converters["record<ByteString, ByteString>"] = i.recordConverter(i.converters.ByteString, i.converters.ByteString), module.exports = {
    webidl: i
};
