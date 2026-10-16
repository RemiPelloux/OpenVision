"use strict";
const { types: r, inspect: s } = require(57975), { markAsUncloneable: o } = require(75919), { toUSVString: n } = require("./module-55201.js"), i = {
    converters: {},
    util: {},
    errors: {}
};
i.errors.exception = function(A) {
    return new TypeError(`${A.header}: ${A.message}`);
}, i.errors.conversionFailed = function(A) {
    const e = 1 === A.types.length ? "" : " one of", t = `${A.argument} could not be converted to${e}: ${A.types.join(", ")}.`;
    return i.errors.exception({
        header: A.prefix,
        message: t
    });
}, i.errors.invalidArgument = function(A) {
    return i.errors.exception({
        header: A.prefix,
        message: `"${A.value}" is an invalid ${A.type}.`
    });
}, i.brandCheck = function(A, e, t) {
    if (!1 !== t?.strict) {
        if (!(A instanceof e)) {
            const A = new TypeError("Illegal invocation");
            throw A.code = "ERR_INVALID_THIS", A;
        }
    } else if (A?.[Symbol.toStringTag] !== e.prototype[Symbol.toStringTag]) {
        const A = new TypeError("Illegal invocation");
        throw A.code = "ERR_INVALID_THIS", A;
    }
}, i.argumentLengthCheck = function({ length: A }, e, t) {
    if (A < e) throw i.errors.exception({
        message: `${e} argument${1 !== e ? "s" : ""} required, but${A ? " only" : ""} ${A} found.`,
        header: t
    });
}, i.illegalConstructor = function() {
    throw i.errors.exception({
        header: "TypeError",
        message: "Illegal constructor"
    });
}, i.util.Type = function(A) {
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
}, i.util.markAsUncloneable = o || (()=>{}), i.util.ConvertToInt = function(A, e, t, r) {
    let s, o;
    64 === e ? (s = Math.pow(2, 53) - 1, o = "unsigned" === t ? 0 : Math.pow(-2, 53) + 1) : "unsigned" === t ? (o = 0, s = Math.pow(2, e) - 1) : (o = Math.pow(-2, e) - 1, s = Math.pow(2, e - 1) - 1);
    let n = Number(A);
    if (0 === n && (n = 0), !0 === r?.enforceRange) {
        if (Number.isNaN(n) || n === Number.POSITIVE_INFINITY || n === Number.NEGATIVE_INFINITY) throw i.errors.exception({
            header: "Integer conversion",
            message: `Could not convert ${i.util.Stringify(A)} to an integer.`
        });
        if (n = i.util.IntegerPart(n), n < o || n > s) throw i.errors.exception({
            header: "Integer conversion",
            message: `Value must be between ${o}-${s}, got ${n}.`
        });
        return n;
    }
    return Number.isNaN(n) || !0 !== r?.clamp ? Number.isNaN(n) || 0 === n && Object.is(0, n) || n === Number.POSITIVE_INFINITY || n === Number.NEGATIVE_INFINITY ? 0 : (n = i.util.IntegerPart(n), n %= Math.pow(2, e), "signed" === t && n >= Math.pow(2, e) - 1 ? n - Math.pow(2, e) : n) : (n = Math.min(Math.max(n, o), s), n = Math.floor(n) % 2 == 0 ? Math.floor(n) : Math.ceil(n), n);
}, i.util.IntegerPart = function(A) {
    const e = Math.floor(Math.abs(A));
    return A < 0 ? -1 * e : e;
}, i.util.Stringify = function(A) {
    switch(i.util.Type(A)){
        case "Symbol":
            return `Symbol(${A.description})`;
        case "Object":
            return s(A);
        case "String":
            return `"${A}"`;
        default:
            return `${A}`;
    }
}, i.sequenceConverter = function(A) {
    return (e, t, r, s)=>{
        if ("Object" !== i.util.Type(e)) throw i.errors.exception({
            header: t,
            message: `${r} (${i.util.Stringify(e)}) is not iterable.`
        });
        const o = "function" == typeof s ? s() : e?.[Symbol.iterator]?.(), n = [];
        let a = 0;
        if (void 0 === o || "function" != typeof o.next) throw i.errors.exception({
            header: t,
            message: `${r} is not iterable.`
        });
        for(;;){
            const { done: e, value: s } = o.next();
            if (e) break;
            n.push(A(s, t, `${r}[${a++}]`));
        }
        return n;
    };
}, i.recordConverter = function(A, e) {
    return (t, s, o)=>{
        if ("Object" !== i.util.Type(t)) throw i.errors.exception({
            header: s,
            message: `${o} ("${i.util.Type(t)}") is not an Object.`
        });
        const n = {};
        if (!r.isProxy(t)) {
            const r = [
                ...Object.getOwnPropertyNames(t),
                ...Object.getOwnPropertySymbols(t)
            ];
            for (const i of r){
                const r = A(i, s, o), a = e(t[i], s, o);
                n[r] = a;
            }
            return n;
        }
        const a = Reflect.ownKeys(t);
        for (const r of a){
            const i = Reflect.getOwnPropertyDescriptor(t, r);
            if (i?.enumerable) {
                const i = A(r, s, o), a = e(t[r], s, o);
                n[i] = a;
            }
        }
        return n;
    };
}, i.interfaceConverter = function(A) {
    return (e, t, r, s)=>{
        if (!1 !== s?.strict && !(e instanceof A)) throw i.errors.exception({
            header: t,
            message: `Expected ${r} ("${i.util.Stringify(e)}") to be an instance of ${A.name}.`
        });
        return e;
    };
}, i.dictionaryConverter = function(A) {
    return (e, t, r)=>{
        const s = i.util.Type(e), o = {};
        if ("Null" === s || "Undefined" === s) return o;
        if ("Object" !== s) throw i.errors.exception({
            header: t,
            message: `Expected ${e} to be one of: Null, Undefined, Object.`
        });
        for (const s of A){
            const { key: A, defaultValue: n, required: a, converter: Q } = s;
            if (!0 === a && !Object.hasOwn(e, A)) throw i.errors.exception({
                header: t,
                message: `Missing required key "${A}".`
            });
            let g = e[A];
            const E = Object.hasOwn(s, "defaultValue");
            if (E && null !== g && (g ??= n()), a || E || void 0 !== g) {
                if (g = Q(g, t, `${r}.${A}`), s.allowedValues && !s.allowedValues.includes(g)) throw i.errors.exception({
                    header: t,
                    message: `${g} is not an accepted type. Expected one of ${s.allowedValues.join(", ")}.`
                });
                o[A] = g;
            }
        }
        return o;
    };
}, i.nullableConverter = function(A) {
    return (e, t, r)=>null === e ? e : A(e, t, r);
}, i.converters.DOMString = function(A, e, t, r) {
    if (null === A && r?.legacyNullToEmptyString) return "";
    if ("symbol" == typeof A) throw i.errors.exception({
        header: e,
        message: `${t} is a symbol, which cannot be converted to a DOMString.`
    });
    return String(A);
}, i.converters.ByteString = function(A, e, t) {
    const r = i.converters.DOMString(A, e, t);
    for(let A = 0; A < r.length; A++)if (r.charCodeAt(A) > 255) throw new TypeError(`Cannot convert argument to a ByteString because the character at index ${A} has a value of ${r.charCodeAt(A)} which is greater than 255.`);
    return r;
}, i.converters.USVString = n, i.converters.boolean = function(A) {
    return Boolean(A);
}, i.converters.any = function(A) {
    return A;
}, i.converters["long long"] = function(A, e, t) {
    return i.util.ConvertToInt(A, 64, "signed", void 0, e, t);
}, i.converters["unsigned long long"] = function(A, e, t) {
    return i.util.ConvertToInt(A, 64, "unsigned", void 0, e, t);
}, i.converters["unsigned long"] = function(A, e, t) {
    return i.util.ConvertToInt(A, 32, "unsigned", void 0, e, t);
}, i.converters["unsigned short"] = function(A, e, t, r) {
    return i.util.ConvertToInt(A, 16, "unsigned", r, e, t);
}, i.converters.ArrayBuffer = function(A, e, t, s) {
    if ("Object" !== i.util.Type(A) || !r.isAnyArrayBuffer(A)) throw i.errors.conversionFailed({
        prefix: e,
        argument: `${t} ("${i.util.Stringify(A)}")`,
        types: [
            "ArrayBuffer"
        ]
    });
    if (!1 === s?.allowShared && r.isSharedArrayBuffer(A)) throw i.errors.exception({
        header: "ArrayBuffer",
        message: "SharedArrayBuffer is not allowed."
    });
    if (A.resizable || A.growable) throw i.errors.exception({
        header: "ArrayBuffer",
        message: "Received a resizable ArrayBuffer."
    });
    return A;
}, i.converters.TypedArray = function(A, e, t, s, o) {
    if ("Object" !== i.util.Type(A) || !r.isTypedArray(A) || A.constructor.name !== e.name) throw i.errors.conversionFailed({
        prefix: t,
        argument: `${s} ("${i.util.Stringify(A)}")`,
        types: [
            e.name
        ]
    });
    if (!1 === o?.allowShared && r.isSharedArrayBuffer(A.buffer)) throw i.errors.exception({
        header: "ArrayBuffer",
        message: "SharedArrayBuffer is not allowed."
    });
    if (A.buffer.resizable || A.buffer.growable) throw i.errors.exception({
        header: "ArrayBuffer",
        message: "Received a resizable ArrayBuffer."
    });
    return A;
}, i.converters.DataView = function(A, e, t, s) {
    if ("Object" !== i.util.Type(A) || !r.isDataView(A)) throw i.errors.exception({
        header: e,
        message: `${t} is not a DataView.`
    });
    if (!1 === s?.allowShared && r.isSharedArrayBuffer(A.buffer)) throw i.errors.exception({
        header: "ArrayBuffer",
        message: "SharedArrayBuffer is not allowed."
    });
    if (A.buffer.resizable || A.buffer.growable) throw i.errors.exception({
        header: "ArrayBuffer",
        message: "Received a resizable ArrayBuffer."
    });
    return A;
}, i.converters.BufferSource = function(A, e, t, s) {
    if (r.isAnyArrayBuffer(A)) return i.converters.ArrayBuffer(A, e, t, {
        ...s,
        allowShared: !1
    });
    if (r.isTypedArray(A)) return i.converters.TypedArray(A, A.constructor, e, t, {
        ...s,
        allowShared: !1
    });
    if (r.isDataView(A)) return i.converters.DataView(A, e, t, {
        ...s,
        allowShared: !1
    });
    throw i.errors.conversionFailed({
        prefix: e,
        argument: `${t} ("${i.util.Stringify(A)}")`,
        types: [
            "BufferSource"
        ]
    });
}, i.converters["sequence<ByteString>"] = i.sequenceConverter(i.converters.ByteString), i.converters["sequence<sequence<ByteString>>"] = i.sequenceConverter(i.converters["sequence<ByteString>"]), i.converters["record<ByteString, ByteString>"] = i.recordConverter(i.converters.ByteString, i.converters.ByteString), module.exports = {
    webidl: i
};
