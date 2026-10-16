"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.makeJsonFormat = void 0;
const t = require("./module-3098.js"), s = require("./module-1498.js"), o = require("./module-9526.js"), r = require("./module-1802.js"), i = require("./module-1771.js"), l = require("./module-8803.js"), d = require("./module-2212.js"), m = require("./module-1455.js"), c = require("./module-1455.js"), p = require("./module-3408.js"), A = require("./module-2706.js"), u = {
    ignoreUnknownFields: !1
}, g = {
    emitDefaultValues: !1,
    enumAsInteger: !1,
    useProtoFieldName: !1,
    prettySpaces: 0
};
function T(e) {
    return e ? Object.assign(Object.assign({}, u), e) : u;
}
function h(e) {
    return e ? Object.assign(Object.assign({}, g), e) : g;
}
const k = Symbol(), _ = Symbol();
function E(e) {
    if (null === e) return "null";
    switch(typeof e){
        case "object":
            return Array.isArray(e) ? "array" : "object";
        case "string":
            return e.length > 100 ? "string" : `"${e.split('"').join('\\"')}"`;
        default:
            return String(e);
    }
}
function f(e, a, n, s, o) {
    let r = n.localName;
    if (n.repeated) {
        if ((0, t.assert)("map" != n.kind), null === a) return;
        if (!Array.isArray(a)) throw new Error(`cannot decode field ${o.typeName}.${n.name} from JSON: ${E(a)}`);
        const i = e[r];
        for (const e of a){
            if (null === e) throw new Error(`cannot decode field ${o.typeName}.${n.name} from JSON: ${E(e)}`);
            switch(n.kind){
                case "message":
                    i.push(n.T.fromJson(e, s));
                    break;
                case "enum":
                    const a = v(n.T, e, s.ignoreUnknownFields, !0);
                    a !== _ && i.push(a);
                    break;
                case "scalar":
                    try {
                        i.push(I(n.T, e, n.L, !0));
                    } catch (a) {
                        let t = `cannot decode field ${o.typeName}.${n.name} from JSON: ${E(e)}`;
                        throw a instanceof Error && a.message.length > 0 && (t += `: ${a.message}`), new Error(t);
                    }
            }
        }
    } else if ("map" == n.kind) {
        if (null === a) return;
        if ("object" != typeof a || Array.isArray(a)) throw new Error(`cannot decode field ${o.typeName}.${n.name} from JSON: ${E(a)}`);
        const t = e[r];
        for (const [e, r] of Object.entries(a)){
            if (null === r) throw new Error(`cannot decode field ${o.typeName}.${n.name} from JSON: map value null`);
            let i;
            try {
                i = C(n.K, e);
            } catch (e) {
                let t = `cannot decode map key for field ${o.typeName}.${n.name} from JSON: ${E(a)}`;
                throw e instanceof Error && e.message.length > 0 && (t += `: ${e.message}`), new Error(t);
            }
            switch(n.V.kind){
                case "message":
                    t[i] = n.V.T.fromJson(r, s);
                    break;
                case "enum":
                    const e = v(n.V.T, r, s.ignoreUnknownFields, !0);
                    e !== _ && (t[i] = e);
                    break;
                case "scalar":
                    try {
                        t[i] = I(n.V.T, r, p.LongType.BIGINT, !0);
                    } catch (e) {
                        let t = `cannot decode map value for field ${o.typeName}.${n.name} from JSON: ${E(a)}`;
                        throw e instanceof Error && e.message.length > 0 && (t += `: ${e.message}`), new Error(t);
                    }
            }
        }
    } else switch(n.oneof && (e = e[n.oneof.localName] = {
        case: r
    }, r = "value"), n.kind){
        case "message":
            const t = n.T;
            if (null === a && "google.protobuf.Value" != t.typeName) return;
            let i = e[r];
            (0, A.isMessage)(i) ? i.fromJson(a, s) : (e[r] = i = t.fromJson(a, s), t.fieldWrapper && !n.oneof && (e[r] = t.fieldWrapper.unwrapField(i)));
            break;
        case "enum":
            const d = v(n.T, a, s.ignoreUnknownFields, !1);
            switch(d){
                case k:
                    (0, l.clearField)(n, e);
                    break;
                case _:
                    break;
                default:
                    e[r] = d;
            }
            break;
        case "scalar":
            try {
                const t = I(n.T, a, n.L, !1);
                if (t === k) (0, l.clearField)(n, e);
                else e[r] = t;
            } catch (e) {
                let t = `cannot decode field ${o.typeName}.${n.name} from JSON: ${E(a)}`;
                throw e instanceof Error && e.message.length > 0 && (t += `: ${e.message}`), new Error(t);
            }
    }
}
function C(e, a) {
    if (e === p.ScalarType.BOOL) switch(a){
        case "true":
            a = !0;
            break;
        case "false":
            a = !1;
    }
    return I(e, a, p.LongType.BIGINT, !0).toString();
}
function I(e, a, n, r) {
    if (null === a) return r ? (0, m.scalarZeroValue)(e, n) : k;
    switch(e){
        case p.ScalarType.DOUBLE:
        case p.ScalarType.FLOAT:
            if ("NaN" === a) return Number.NaN;
            if ("Infinity" === a) return Number.POSITIVE_INFINITY;
            if ("-Infinity" === a) return Number.NEGATIVE_INFINITY;
            if ("" === a) break;
            if ("string" == typeof a && a.trim().length !== a.length) break;
            if ("string" != typeof a && "number" != typeof a) break;
            const r = Number(a);
            if (Number.isNaN(r)) break;
            if (!Number.isFinite(r)) break;
            return e == p.ScalarType.FLOAT && (0, t.assertFloat32)(r), r;
        case p.ScalarType.INT32:
        case p.ScalarType.FIXED32:
        case p.ScalarType.SFIXED32:
        case p.ScalarType.SINT32:
        case p.ScalarType.UINT32:
            let i;
            if ("number" == typeof a ? i = a : "string" == typeof a && a.length > 0 && a.trim().length === a.length && (i = Number(a)), void 0 === i) break;
            return e == p.ScalarType.UINT32 || e == p.ScalarType.FIXED32 ? (0, t.assertUInt32)(i) : (0, t.assertInt32)(i), i;
        case p.ScalarType.INT64:
        case p.ScalarType.SFIXED64:
        case p.ScalarType.SINT64:
            if ("number" != typeof a && "string" != typeof a) break;
            const l = s.protoInt64.parse(a);
            return n ? l.toString() : l;
        case p.ScalarType.FIXED64:
        case p.ScalarType.UINT64:
            if ("number" != typeof a && "string" != typeof a) break;
            const d = s.protoInt64.uParse(a);
            return n ? d.toString() : d;
        case p.ScalarType.BOOL:
            if ("boolean" != typeof a) break;
            return a;
        case p.ScalarType.STRING:
            if ("string" != typeof a) break;
            try {
                encodeURIComponent(a);
            } catch (e) {
                throw new Error("invalid UTF8");
            }
            return a;
        case p.ScalarType.BYTES:
            if ("" === a) return new Uint8Array(0);
            if ("string" != typeof a) break;
            return o.protoBase64.dec(a);
    }
    throw new Error;
}
function v(e, a, n, t) {
    if (null === a) return "google.protobuf.NullValue" == e.typeName ? 0 : t ? e.values[0].no : k;
    switch(typeof a){
        case "number":
            if (Number.isInteger(a)) return a;
            break;
        case "string":
            const t = e.findName(a);
            if (void 0 !== t) return t.no;
            if (n) return _;
    }
    throw new Error(`cannot decode enum ${e.typeName} from JSON: ${E(a)}`);
}
function y(e) {
    return !(!e.repeated && "map" != e.kind) || !e.oneof && "message" != e.kind && !e.opt && !e.req;
}
function S(e, a, n) {
    if ("map" == e.kind) {
        (0, t.assert)("object" == typeof a && null != a);
        const s = {}, o = Object.entries(a);
        switch(e.V.kind){
            case "scalar":
                for (const [a, n] of o)s[a.toString()] = N(e.V.T, n);
                break;
            case "message":
                for (const [e, a] of o)s[e.toString()] = a.toJson(n);
                break;
            case "enum":
                const a = e.V.T;
                for (const [e, t] of o)s[e.toString()] = R(a, t, n.enumAsInteger);
        }
        return n.emitDefaultValues || o.length > 0 ? s : void 0;
    }
    if (e.repeated) {
        (0, t.assert)(Array.isArray(a));
        const s = [];
        switch(e.kind){
            case "scalar":
                for(let n = 0; n < a.length; n++)s.push(N(e.T, a[n]));
                break;
            case "enum":
                for(let t = 0; t < a.length; t++)s.push(R(e.T, a[t], n.enumAsInteger));
                break;
            case "message":
                for(let e = 0; e < a.length; e++)s.push(a[e].toJson(n));
        }
        return n.emitDefaultValues || s.length > 0 ? s : void 0;
    }
    switch(e.kind){
        case "scalar":
            return N(e.T, a);
        case "enum":
            return R(e.T, a, n.enumAsInteger);
        case "message":
            return (0, d.wrapField)(e.T, a).toJson(n);
    }
}
function R(e, a, n) {
    var s;
    if ((0, t.assert)("number" == typeof a), "google.protobuf.NullValue" == e.typeName) return null;
    if (n) return a;
    const o = e.findNumber(a);
    return null !== (s = null == o ? void 0 : o.name) && void 0 !== s ? s : a;
}
function N(e, a) {
    switch(e){
        case p.ScalarType.INT32:
        case p.ScalarType.SFIXED32:
        case p.ScalarType.SINT32:
        case p.ScalarType.FIXED32:
        case p.ScalarType.UINT32:
            return (0, t.assert)("number" == typeof a), a;
        case p.ScalarType.FLOAT:
        case p.ScalarType.DOUBLE:
            return (0, t.assert)("number" == typeof a), Number.isNaN(a) ? "NaN" : a === Number.POSITIVE_INFINITY ? "Infinity" : a === Number.NEGATIVE_INFINITY ? "-Infinity" : a;
        case p.ScalarType.STRING:
            return (0, t.assert)("string" == typeof a), a;
        case p.ScalarType.BOOL:
            return (0, t.assert)("boolean" == typeof a), a;
        case p.ScalarType.UINT64:
        case p.ScalarType.FIXED64:
        case p.ScalarType.INT64:
        case p.ScalarType.SFIXED64:
        case p.ScalarType.SINT64:
            return (0, t.assert)("bigint" == typeof a || "string" == typeof a || "number" == typeof a), a.toString();
        case p.ScalarType.BYTES:
            return (0, t.assert)(a instanceof Uint8Array), o.protoBase64.enc(a);
    }
}
exports.makeJsonFormat = function() {
    return {
        makeReadOptions: T,
        makeWriteOptions: h,
        readMessage (e, a, n, t) {
            if (null == a || Array.isArray(a) || "object" != typeof a) throw new Error(`cannot decode message ${e.typeName} from JSON: ${E(a)}`);
            t = null != t ? t : new e;
            const s = new Map, o = n.typeRegistry;
            for (const [l, d] of Object.entries(a)){
                const a = e.fields.findJsonName(l);
                if (a) {
                    if (a.oneof) {
                        if (null === d && "scalar" == a.kind) continue;
                        const n = s.get(a.oneof);
                        if (void 0 !== n) throw new Error(`cannot decode message ${e.typeName} from JSON: multiple keys for oneof "${a.oneof.name}" present: "${n}", "${l}"`);
                        s.set(a.oneof, l);
                    }
                    f(t, d, a, n, e);
                } else {
                    let a = !1;
                    if ((null == o ? void 0 : o.findExtension) && l.startsWith("[") && l.endsWith("]")) {
                        const s = o.findExtension(l.substring(1, l.length - 1));
                        if (s && s.extendee.typeName == e.typeName) {
                            a = !0;
                            const [e, o] = (0, r.createExtensionContainer)(s);
                            f(e, d, s.field, n, s), (0, i.setExtension)(t, s, o(), n);
                        }
                    }
                    if (!a && !n.ignoreUnknownFields) throw new Error(`cannot decode message ${e.typeName} from JSON: key "${l}" is unknown`);
                }
            }
            return t;
        },
        writeMessage (e, a) {
            const n = e.getType(), t = {};
            let s;
            try {
                for (s of n.fields.byNumber()){
                    if (!(0, l.isFieldSet)(s, e)) {
                        if (s.req) throw "required field not set";
                        if (!a.emitDefaultValues) continue;
                        if (!y(s)) continue;
                    }
                    const n = S(s, s.oneof ? e[s.oneof.localName].value : e[s.localName], a);
                    void 0 !== n && (t[a.useProtoFieldName ? s.name : s.jsonName] = n);
                }
                const o = a.typeRegistry;
                if (null == o ? void 0 : o.findExtensionFor) for (const s of n.runtime.bin.listUnknownFields(e)){
                    const r = o.findExtensionFor(n.typeName, s.no);
                    if (r && (0, i.hasExtension)(e, r)) {
                        const n = (0, i.getExtension)(e, r, a), s = S(r.field, n, a);
                        void 0 !== s && (t[r.field.jsonName] = s);
                    }
                }
            } catch (e) {
                const a = s ? `cannot encode field ${n.typeName}.${s.name} to JSON` : `cannot encode message ${n.typeName} to JSON`, t = e instanceof Error ? e.message : String(e);
                throw new Error(a + (t.length > 0 ? `: ${t}` : ""));
            }
            return t;
        },
        readScalar: (e, a, n)=>I(e, a, null != n ? n : p.LongType.BIGINT, !0),
        writeScalar (e, a, n) {
            if (void 0 !== a) return n || (0, c.isScalarZeroValue)(e, a) ? N(e, a) : void 0;
        },
        debug: E
    };
};
