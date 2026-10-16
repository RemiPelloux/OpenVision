"use strict";
const { types: t } = require("./module-9023.js"), { hasOwn: s, toUSVString: o } = require("./module-5728.js"), r = {
    converters: {},
    util: {},
    errors: {}
};
r.errors.exception = function(e) {
    return new TypeError(`${e.header}: ${e.message}`);
}, r.errors.conversionFailed = function(e) {
    const a = 1 === e.types.length ? "" : " one of", n = `${e.argument} could not be converted to${a}: ${e.types.join(", ")}.`;
    return r.errors.exception({
        header: e.prefix,
        message: n
    });
}, r.errors.invalidArgument = function(e) {
    return r.errors.exception({
        header: e.prefix,
        message: `"${e.value}" is an invalid ${e.type}.`
    });
}, r.brandCheck = function(e, a, n = void 0) {
    if (!1 === n?.strict || e instanceof a) return e?.[Symbol.toStringTag] === a.prototype[Symbol.toStringTag];
    throw new TypeError("Illegal invocation");
}, r.argumentLengthCheck = function({ length: e }, a, n) {
    if (e < a) throw r.errors.exception({
        message: `${a} argument${1 !== a ? "s" : ""} required, but${e ? " only" : ""} ${e} found.`,
        ...n
    });
}, r.illegalConstructor = function() {
    throw r.errors.exception({
        header: "TypeError",
        message: "Illegal constructor"
    });
}, r.util.Type = function(e) {
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
}, r.util.ConvertToInt = function(e, a, n, t = {}) {
    let s, o;
    64 === a ? (s = Math.pow(2, 53) - 1, o = "unsigned" === n ? 0 : Math.pow(-2, 53) + 1) : "unsigned" === n ? (o = 0, s = Math.pow(2, a) - 1) : (o = Math.pow(-2, a) - 1, s = Math.pow(2, a - 1) - 1);
    let i = Number(e);
    if (0 === i && (i = 0), !0 === t.enforceRange) {
        if (Number.isNaN(i) || i === Number.POSITIVE_INFINITY || i === Number.NEGATIVE_INFINITY) throw r.errors.exception({
            header: "Integer conversion",
            message: `Could not convert ${e} to an integer.`
        });
        if (i = r.util.IntegerPart(i), i < o || i > s) throw r.errors.exception({
            header: "Integer conversion",
            message: `Value must be between ${o}-${s}, got ${i}.`
        });
        return i;
    }
    return Number.isNaN(i) || !0 !== t.clamp ? Number.isNaN(i) || 0 === i && Object.is(0, i) || i === Number.POSITIVE_INFINITY || i === Number.NEGATIVE_INFINITY ? 0 : (i = r.util.IntegerPart(i), i %= Math.pow(2, a), "signed" === n && i >= Math.pow(2, a) - 1 ? i - Math.pow(2, a) : i) : (i = Math.min(Math.max(i, o), s), i = Math.floor(i) % 2 == 0 ? Math.floor(i) : Math.ceil(i), i);
}, r.util.IntegerPart = function(e) {
    const a = Math.floor(Math.abs(e));
    return e < 0 ? -1 * a : a;
}, r.sequenceConverter = function(e) {
    return (a)=>{
        if ("Object" !== r.util.Type(a)) throw r.errors.exception({
            header: "Sequence",
            message: `Value of type ${r.util.Type(a)} is not an Object.`
        });
        const n = a?.[Symbol.iterator]?.(), t = [];
        if (void 0 === n || "function" != typeof n.next) throw r.errors.exception({
            header: "Sequence",
            message: "Object is not an iterator."
        });
        for(;;){
            const { done: a, value: s } = n.next();
            if (a) break;
            t.push(e(s));
        }
        return t;
    };
}, r.recordConverter = function(e, a) {
    return (n)=>{
        if ("Object" !== r.util.Type(n)) throw r.errors.exception({
            header: "Record",
            message: `Value of type ${r.util.Type(n)} is not an Object.`
        });
        const s = {};
        if (!t.isProxy(n)) {
            const t = Object.keys(n);
            for (const o of t){
                const t = e(o), r = a(n[o]);
                s[t] = r;
            }
            return s;
        }
        const o = Reflect.ownKeys(n);
        for (const t of o){
            const o = Reflect.getOwnPropertyDescriptor(n, t);
            if (o?.enumerable) {
                const o = e(t), r = a(n[t]);
                s[o] = r;
            }
        }
        return s;
    };
}, r.interfaceConverter = function(e) {
    return (a, n = {})=>{
        if (!1 !== n.strict && !(a instanceof e)) throw r.errors.exception({
            header: e.name,
            message: `Expected ${a} to be an instance of ${e.name}.`
        });
        return a;
    };
}, r.dictionaryConverter = function(e) {
    return (a)=>{
        const n = r.util.Type(a), t = {};
        if ("Null" === n || "Undefined" === n) return t;
        if ("Object" !== n) throw r.errors.exception({
            header: "Dictionary",
            message: `Expected ${a} to be one of: Null, Undefined, Object.`
        });
        for (const n of e){
            const { key: e, defaultValue: o, required: i, converter: l } = n;
            if (!0 === i && !s(a, e)) throw r.errors.exception({
                header: "Dictionary",
                message: `Missing required key "${e}".`
            });
            let d = a[e];
            const m = s(n, "defaultValue");
            if (m && null !== d && (d = d ?? o), i || m || void 0 !== d) {
                if (d = l(d), n.allowedValues && !n.allowedValues.includes(d)) throw r.errors.exception({
                    header: "Dictionary",
                    message: `${d} is not an accepted type. Expected one of ${n.allowedValues.join(", ")}.`
                });
                t[e] = d;
            }
        }
        return t;
    };
}, r.nullableConverter = function(e) {
    return (a)=>null === a ? a : e(a);
}, r.converters.DOMString = function(e, a = {}) {
    if (null === e && a.legacyNullToEmptyString) return "";
    if ("symbol" == typeof e) throw new TypeError("Could not convert argument of type symbol to string.");
    return String(e);
}, r.converters.ByteString = function(e) {
    const a = r.converters.DOMString(e);
    for(let e = 0; e < a.length; e++)if (a.charCodeAt(e) > 255) throw new TypeError(`Cannot convert argument to a ByteString because the character at index ${e} has a value of ${a.charCodeAt(e)} which is greater than 255.`);
    return a;
}, r.converters.USVString = o, r.converters.boolean = function(e) {
    return Boolean(e);
}, r.converters.any = function(e) {
    return e;
}, r.converters["long long"] = function(e) {
    return r.util.ConvertToInt(e, 64, "signed");
}, r.converters["unsigned long long"] = function(e) {
    return r.util.ConvertToInt(e, 64, "unsigned");
}, r.converters["unsigned long"] = function(e) {
    return r.util.ConvertToInt(e, 32, "unsigned");
}, r.converters["unsigned short"] = function(e, a) {
    return r.util.ConvertToInt(e, 16, "unsigned", a);
}, r.converters.ArrayBuffer = function(e, a = {}) {
    if ("Object" !== r.util.Type(e) || !t.isAnyArrayBuffer(e)) throw r.errors.conversionFailed({
        prefix: `${e}`,
        argument: `${e}`,
        types: [
            "ArrayBuffer"
        ]
    });
    if (!1 === a.allowShared && t.isSharedArrayBuffer(e)) throw r.errors.exception({
        header: "ArrayBuffer",
        message: "SharedArrayBuffer is not allowed."
    });
    return e;
}, r.converters.TypedArray = function(e, a, n = {}) {
    if ("Object" !== r.util.Type(e) || !t.isTypedArray(e) || e.constructor.name !== a.name) throw r.errors.conversionFailed({
        prefix: `${a.name}`,
        argument: `${e}`,
        types: [
            a.name
        ]
    });
    if (!1 === n.allowShared && t.isSharedArrayBuffer(e.buffer)) throw r.errors.exception({
        header: "ArrayBuffer",
        message: "SharedArrayBuffer is not allowed."
    });
    return e;
}, r.converters.DataView = function(e, a = {}) {
    if ("Object" !== r.util.Type(e) || !t.isDataView(e)) throw r.errors.exception({
        header: "DataView",
        message: "Object is not a DataView."
    });
    if (!1 === a.allowShared && t.isSharedArrayBuffer(e.buffer)) throw r.errors.exception({
        header: "ArrayBuffer",
        message: "SharedArrayBuffer is not allowed."
    });
    return e;
}, r.converters.BufferSource = function(e, a = {}) {
    if (t.isAnyArrayBuffer(e)) return r.converters.ArrayBuffer(e, a);
    if (t.isTypedArray(e)) return r.converters.TypedArray(e, e.constructor);
    if (t.isDataView(e)) return r.converters.DataView(e, a);
    throw new TypeError(`Could not convert ${e} to a BufferSource.`);
}, r.converters["sequence<ByteString>"] = r.sequenceConverter(r.converters.ByteString), r.converters["sequence<sequence<ByteString>>"] = r.sequenceConverter(r.converters["sequence<ByteString>"]), r.converters["record<ByteString, ByteString>"] = r.recordConverter(r.converters.ByteString, r.converters.ByteString), module.exports = {
    webidl: r
};
