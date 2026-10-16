"use strict";
const { types: a } = require("./module-9023.js"), { hasOwn: s, toUSVString: o } = require("./module-5728.js"), r = {
    converters: {},
    util: {},
    errors: {}
};
r.errors.exception = function(e) {
    return new TypeError(`${e.header}: ${e.message}`);
}, r.errors.conversionFailed = function(e) {
    const n = 1 === e.types.length ? "" : " one of", t = `${e.argument} could not be converted to${n}: ${e.types.join(", ")}.`;
    return r.errors.exception({
        header: e.prefix,
        message: t
    });
}, r.errors.invalidArgument = function(e) {
    return r.errors.exception({
        header: e.prefix,
        message: `"${e.value}" is an invalid ${e.type}.`
    });
}, r.brandCheck = function(e, n, t = void 0) {
    if (!1 === t?.strict || e instanceof n) return e?.[Symbol.toStringTag] === n.prototype[Symbol.toStringTag];
    throw new TypeError("Illegal invocation");
}, r.argumentLengthCheck = function({ length: e }, n, t) {
    if (e < n) throw r.errors.exception({
        message: `${n} argument${1 !== n ? "s" : ""} required, but${e ? " only" : ""} ${e} found.`,
        ...t
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
}, r.util.ConvertToInt = function(e, n, t, a = {}) {
    let s, o;
    64 === n ? (s = Math.pow(2, 53) - 1, o = "unsigned" === t ? 0 : Math.pow(-2, 53) + 1) : "unsigned" === t ? (o = 0, s = Math.pow(2, n) - 1) : (o = Math.pow(-2, n) - 1, s = Math.pow(2, n - 1) - 1);
    let i = Number(e);
    if (0 === i && (i = 0), !0 === a.enforceRange) {
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
    return Number.isNaN(i) || !0 !== a.clamp ? Number.isNaN(i) || 0 === i && Object.is(0, i) || i === Number.POSITIVE_INFINITY || i === Number.NEGATIVE_INFINITY ? 0 : (i = r.util.IntegerPart(i), i %= Math.pow(2, n), "signed" === t && i >= Math.pow(2, n) - 1 ? i - Math.pow(2, n) : i) : (i = Math.min(Math.max(i, o), s), i = Math.floor(i) % 2 == 0 ? Math.floor(i) : Math.ceil(i), i);
}, r.util.IntegerPart = function(e) {
    const n = Math.floor(Math.abs(e));
    return e < 0 ? -1 * n : n;
}, r.sequenceConverter = function(e) {
    return (n)=>{
        if ("Object" !== r.util.Type(n)) throw r.errors.exception({
            header: "Sequence",
            message: `Value of type ${r.util.Type(n)} is not an Object.`
        });
        const t = n?.[Symbol.iterator]?.(), a = [];
        if (void 0 === t || "function" != typeof t.next) throw r.errors.exception({
            header: "Sequence",
            message: "Object is not an iterator."
        });
        for(;;){
            const { done: n, value: s } = t.next();
            if (n) break;
            a.push(e(s));
        }
        return a;
    };
}, r.recordConverter = function(e, n) {
    return (t)=>{
        if ("Object" !== r.util.Type(t)) throw r.errors.exception({
            header: "Record",
            message: `Value of type ${r.util.Type(t)} is not an Object.`
        });
        const s = {};
        if (!a.isProxy(t)) {
            const a = Object.keys(t);
            for (const o of a){
                const a = e(o), r = n(t[o]);
                s[a] = r;
            }
            return s;
        }
        const o = Reflect.ownKeys(t);
        for (const a of o){
            const o = Reflect.getOwnPropertyDescriptor(t, a);
            if (o?.enumerable) {
                const o = e(a), r = n(t[a]);
                s[o] = r;
            }
        }
        return s;
    };
}, r.interfaceConverter = function(e) {
    return (n, t = {})=>{
        if (!1 !== t.strict && !(n instanceof e)) throw r.errors.exception({
            header: e.name,
            message: `Expected ${n} to be an instance of ${e.name}.`
        });
        return n;
    };
}, r.dictionaryConverter = function(e) {
    return (n)=>{
        const t = r.util.Type(n), a = {};
        if ("Null" === t || "Undefined" === t) return a;
        if ("Object" !== t) throw r.errors.exception({
            header: "Dictionary",
            message: `Expected ${n} to be one of: Null, Undefined, Object.`
        });
        for (const t of e){
            const { key: e, defaultValue: o, required: i, converter: A } = t;
            if (!0 === i && !s(n, e)) throw r.errors.exception({
                header: "Dictionary",
                message: `Missing required key "${e}".`
            });
            let c = n[e];
            const l = s(t, "defaultValue");
            if (l && null !== c && (c = c ?? o), i || l || void 0 !== c) {
                if (c = A(c), t.allowedValues && !t.allowedValues.includes(c)) throw r.errors.exception({
                    header: "Dictionary",
                    message: `${c} is not an accepted type. Expected one of ${t.allowedValues.join(", ")}.`
                });
                a[e] = c;
            }
        }
        return a;
    };
}, r.nullableConverter = function(e) {
    return (n)=>null === n ? n : e(n);
}, r.converters.DOMString = function(e, n = {}) {
    if (null === e && n.legacyNullToEmptyString) return "";
    if ("symbol" == typeof e) throw new TypeError("Could not convert argument of type symbol to string.");
    return String(e);
}, r.converters.ByteString = function(e) {
    const n = r.converters.DOMString(e);
    for(let e = 0; e < n.length; e++)if (n.charCodeAt(e) > 255) throw new TypeError(`Cannot convert argument to a ByteString because the character at index ${e} has a value of ${n.charCodeAt(e)} which is greater than 255.`);
    return n;
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
}, r.converters["unsigned short"] = function(e, n) {
    return r.util.ConvertToInt(e, 16, "unsigned", n);
}, r.converters.ArrayBuffer = function(e, n = {}) {
    if ("Object" !== r.util.Type(e) || !a.isAnyArrayBuffer(e)) throw r.errors.conversionFailed({
        prefix: `${e}`,
        argument: `${e}`,
        types: [
            "ArrayBuffer"
        ]
    });
    if (!1 === n.allowShared && a.isSharedArrayBuffer(e)) throw r.errors.exception({
        header: "ArrayBuffer",
        message: "SharedArrayBuffer is not allowed."
    });
    return e;
}, r.converters.TypedArray = function(e, n, t = {}) {
    if ("Object" !== r.util.Type(e) || !a.isTypedArray(e) || e.constructor.name !== n.name) throw r.errors.conversionFailed({
        prefix: `${n.name}`,
        argument: `${e}`,
        types: [
            n.name
        ]
    });
    if (!1 === t.allowShared && a.isSharedArrayBuffer(e.buffer)) throw r.errors.exception({
        header: "ArrayBuffer",
        message: "SharedArrayBuffer is not allowed."
    });
    return e;
}, r.converters.DataView = function(e, n = {}) {
    if ("Object" !== r.util.Type(e) || !a.isDataView(e)) throw r.errors.exception({
        header: "DataView",
        message: "Object is not a DataView."
    });
    if (!1 === n.allowShared && a.isSharedArrayBuffer(e.buffer)) throw r.errors.exception({
        header: "ArrayBuffer",
        message: "SharedArrayBuffer is not allowed."
    });
    return e;
}, r.converters.BufferSource = function(e, n = {}) {
    if (a.isAnyArrayBuffer(e)) return r.converters.ArrayBuffer(e, n);
    if (a.isTypedArray(e)) return r.converters.TypedArray(e, e.constructor);
    if (a.isDataView(e)) return r.converters.DataView(e, n);
    throw new TypeError(`Could not convert ${e} to a BufferSource.`);
}, r.converters["sequence<ByteString>"] = r.sequenceConverter(r.converters.ByteString), r.converters["sequence<sequence<ByteString>>"] = r.sequenceConverter(r.converters["sequence<ByteString>"]), r.converters["record<ByteString, ByteString>"] = r.recordConverter(r.converters.ByteString, r.converters.ByteString), module.exports = {
    webidl: r
};
