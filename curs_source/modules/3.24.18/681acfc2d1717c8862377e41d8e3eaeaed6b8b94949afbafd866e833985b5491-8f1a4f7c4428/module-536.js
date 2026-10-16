"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.makeJsonFormat = void 0;
const n = require("./module-3098.js"), r = require("./module-1498.js"), o = require("./module-9526.js"), s = require("./module-1802.js"), i = require("./module-1771.js"), a = require("./module-8803.js"), c = require("./module-2212.js"), l = require("./module-1455.js"), u = require("./module-1455.js"), g = require("./module-3408.js"), E = require("./module-2706.js"), h = {
    ignoreUnknownFields: !1
}, d = {
    emitDefaultValues: !1,
    enumAsInteger: !1,
    useProtoFieldName: !1,
    prettySpaces: 0
};
function I(e) {
    return e ? Object.assign(Object.assign({}, h), e) : h;
}
function B(e) {
    return e ? Object.assign(Object.assign({}, d), e) : d;
}
const Q = Symbol(), f = Symbol();
function C(e) {
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
function p(e, t, A, r, o) {
    let s = A.localName;
    if (A.repeated) {
        if ((0, n.assert)("map" != A.kind), null === t) return;
        if (!Array.isArray(t)) throw new Error(`cannot decode field ${o.typeName}.${A.name} from JSON: ${C(t)}`);
        const i = e[s];
        for (const e of t){
            if (null === e) throw new Error(`cannot decode field ${o.typeName}.${A.name} from JSON: ${C(e)}`);
            switch(A.kind){
                case "message":
                    i.push(A.T.fromJson(e, r));
                    break;
                case "enum":
                    const t = w(A.T, e, r.ignoreUnknownFields, !0);
                    t !== f && i.push(t);
                    break;
                case "scalar":
                    try {
                        i.push(y(A.T, e, A.L, !0));
                    } catch (t) {
                        let n = `cannot decode field ${o.typeName}.${A.name} from JSON: ${C(e)}`;
                        throw t instanceof Error && t.message.length > 0 && (n += `: ${t.message}`), new Error(n);
                    }
            }
        }
    } else if ("map" == A.kind) {
        if (null === t) return;
        if ("object" != typeof t || Array.isArray(t)) throw new Error(`cannot decode field ${o.typeName}.${A.name} from JSON: ${C(t)}`);
        const n = e[s];
        for (const [e, s] of Object.entries(t)){
            if (null === s) throw new Error(`cannot decode field ${o.typeName}.${A.name} from JSON: map value null`);
            let i;
            try {
                i = m(A.K, e);
            } catch (e) {
                let n = `cannot decode map key for field ${o.typeName}.${A.name} from JSON: ${C(t)}`;
                throw e instanceof Error && e.message.length > 0 && (n += `: ${e.message}`), new Error(n);
            }
            switch(A.V.kind){
                case "message":
                    n[i] = A.V.T.fromJson(s, r);
                    break;
                case "enum":
                    const e = w(A.V.T, s, r.ignoreUnknownFields, !0);
                    e !== f && (n[i] = e);
                    break;
                case "scalar":
                    try {
                        n[i] = y(A.V.T, s, g.LongType.BIGINT, !0);
                    } catch (e) {
                        let n = `cannot decode map value for field ${o.typeName}.${A.name} from JSON: ${C(t)}`;
                        throw e instanceof Error && e.message.length > 0 && (n += `: ${e.message}`), new Error(n);
                    }
            }
        }
    } else switch(A.oneof && (e = e[A.oneof.localName] = {
        case: s
    }, s = "value"), A.kind){
        case "message":
            const n = A.T;
            if (null === t && "google.protobuf.Value" != n.typeName) return;
            let i = e[s];
            (0, E.isMessage)(i) ? i.fromJson(t, r) : (e[s] = i = n.fromJson(t, r), n.fieldWrapper && !A.oneof && (e[s] = n.fieldWrapper.unwrapField(i)));
            break;
        case "enum":
            const c = w(A.T, t, r.ignoreUnknownFields, !1);
            switch(c){
                case Q:
                    (0, a.clearField)(A, e);
                    break;
                case f:
                    break;
                default:
                    e[s] = c;
            }
            break;
        case "scalar":
            try {
                const n = y(A.T, t, A.L, !1);
                if (n === Q) (0, a.clearField)(A, e);
                else e[s] = n;
            } catch (e) {
                let n = `cannot decode field ${o.typeName}.${A.name} from JSON: ${C(t)}`;
                throw e instanceof Error && e.message.length > 0 && (n += `: ${e.message}`), new Error(n);
            }
    }
}
function m(e, t) {
    if (e === g.ScalarType.BOOL) switch(t){
        case "true":
            t = !0;
            break;
        case "false":
            t = !1;
    }
    return y(e, t, g.LongType.BIGINT, !0).toString();
}
function y(e, t, A, s) {
    if (null === t) return s ? (0, l.scalarZeroValue)(e, A) : Q;
    switch(e){
        case g.ScalarType.DOUBLE:
        case g.ScalarType.FLOAT:
            if ("NaN" === t) return Number.NaN;
            if ("Infinity" === t) return Number.POSITIVE_INFINITY;
            if ("-Infinity" === t) return Number.NEGATIVE_INFINITY;
            if ("" === t) break;
            if ("string" == typeof t && t.trim().length !== t.length) break;
            if ("string" != typeof t && "number" != typeof t) break;
            const s = Number(t);
            if (Number.isNaN(s)) break;
            if (!Number.isFinite(s)) break;
            return e == g.ScalarType.FLOAT && (0, n.assertFloat32)(s), s;
        case g.ScalarType.INT32:
        case g.ScalarType.FIXED32:
        case g.ScalarType.SFIXED32:
        case g.ScalarType.SINT32:
        case g.ScalarType.UINT32:
            let i;
            if ("number" == typeof t ? i = t : "string" == typeof t && t.length > 0 && t.trim().length === t.length && (i = Number(t)), void 0 === i) break;
            return e == g.ScalarType.UINT32 || e == g.ScalarType.FIXED32 ? (0, n.assertUInt32)(i) : (0, n.assertInt32)(i), i;
        case g.ScalarType.INT64:
        case g.ScalarType.SFIXED64:
        case g.ScalarType.SINT64:
            if ("number" != typeof t && "string" != typeof t) break;
            const a = r.protoInt64.parse(t);
            return A ? a.toString() : a;
        case g.ScalarType.FIXED64:
        case g.ScalarType.UINT64:
            if ("number" != typeof t && "string" != typeof t) break;
            const c = r.protoInt64.uParse(t);
            return A ? c.toString() : c;
        case g.ScalarType.BOOL:
            if ("boolean" != typeof t) break;
            return t;
        case g.ScalarType.STRING:
            if ("string" != typeof t) break;
            try {
                encodeURIComponent(t);
            } catch (e) {
                throw new Error("invalid UTF8");
            }
            return t;
        case g.ScalarType.BYTES:
            if ("" === t) return new Uint8Array(0);
            if ("string" != typeof t) break;
            return o.protoBase64.dec(t);
    }
    throw new Error;
}
function w(e, t, A, n) {
    if (null === t) return "google.protobuf.NullValue" == e.typeName ? 0 : n ? e.values[0].no : Q;
    switch(typeof t){
        case "number":
            if (Number.isInteger(t)) return t;
            break;
        case "string":
            const n = e.findName(t);
            if (void 0 !== n) return n.no;
            if (A) return f;
    }
    throw new Error(`cannot decode enum ${e.typeName} from JSON: ${C(t)}`);
}
function k(e) {
    return !(!e.repeated && "map" != e.kind) || !e.oneof && "message" != e.kind && !e.opt && !e.req;
}
function b(e, t, A) {
    if ("map" == e.kind) {
        (0, n.assert)("object" == typeof t && null != t);
        const r = {}, o = Object.entries(t);
        switch(e.V.kind){
            case "scalar":
                for (const [t, A] of o)r[t.toString()] = T(e.V.T, A);
                break;
            case "message":
                for (const [e, t] of o)r[e.toString()] = t.toJson(A);
                break;
            case "enum":
                const t = e.V.T;
                for (const [e, n] of o)r[e.toString()] = N(t, n, A.enumAsInteger);
        }
        return A.emitDefaultValues || o.length > 0 ? r : void 0;
    }
    if (e.repeated) {
        (0, n.assert)(Array.isArray(t));
        const r = [];
        switch(e.kind){
            case "scalar":
                for(let A = 0; A < t.length; A++)r.push(T(e.T, t[A]));
                break;
            case "enum":
                for(let n = 0; n < t.length; n++)r.push(N(e.T, t[n], A.enumAsInteger));
                break;
            case "message":
                for(let e = 0; e < t.length; e++)r.push(t[e].toJson(A));
        }
        return A.emitDefaultValues || r.length > 0 ? r : void 0;
    }
    switch(e.kind){
        case "scalar":
            return T(e.T, t);
        case "enum":
            return N(e.T, t, A.enumAsInteger);
        case "message":
            return (0, c.wrapField)(e.T, t).toJson(A);
    }
}
function N(e, t, A) {
    var r;
    if ((0, n.assert)("number" == typeof t), "google.protobuf.NullValue" == e.typeName) return null;
    if (A) return t;
    const o = e.findNumber(t);
    return null !== (r = null == o ? void 0 : o.name) && void 0 !== r ? r : t;
}
function T(e, t) {
    switch(e){
        case g.ScalarType.INT32:
        case g.ScalarType.SFIXED32:
        case g.ScalarType.SINT32:
        case g.ScalarType.FIXED32:
        case g.ScalarType.UINT32:
            return (0, n.assert)("number" == typeof t), t;
        case g.ScalarType.FLOAT:
        case g.ScalarType.DOUBLE:
            return (0, n.assert)("number" == typeof t), Number.isNaN(t) ? "NaN" : t === Number.POSITIVE_INFINITY ? "Infinity" : t === Number.NEGATIVE_INFINITY ? "-Infinity" : t;
        case g.ScalarType.STRING:
            return (0, n.assert)("string" == typeof t), t;
        case g.ScalarType.BOOL:
            return (0, n.assert)("boolean" == typeof t), t;
        case g.ScalarType.UINT64:
        case g.ScalarType.FIXED64:
        case g.ScalarType.INT64:
        case g.ScalarType.SFIXED64:
        case g.ScalarType.SINT64:
            return (0, n.assert)("bigint" == typeof t || "string" == typeof t || "number" == typeof t), t.toString();
        case g.ScalarType.BYTES:
            return (0, n.assert)(t instanceof Uint8Array), o.protoBase64.enc(t);
    }
}
exports.makeJsonFormat = function() {
    return {
        makeReadOptions: I,
        makeWriteOptions: B,
        readMessage (e, t, A, n) {
            if (null == t || Array.isArray(t) || "object" != typeof t) throw new Error(`cannot decode message ${e.typeName} from JSON: ${C(t)}`);
            n = null != n ? n : new e;
            const r = new Map, o = A.typeRegistry;
            for (const [a, c] of Object.entries(t)){
                const t = e.fields.findJsonName(a);
                if (t) {
                    if (t.oneof) {
                        if (null === c && "scalar" == t.kind) continue;
                        const A = r.get(t.oneof);
                        if (void 0 !== A) throw new Error(`cannot decode message ${e.typeName} from JSON: multiple keys for oneof "${t.oneof.name}" present: "${A}", "${a}"`);
                        r.set(t.oneof, a);
                    }
                    p(n, c, t, A, e);
                } else {
                    let t = !1;
                    if ((null == o ? void 0 : o.findExtension) && a.startsWith("[") && a.endsWith("]")) {
                        const r = o.findExtension(a.substring(1, a.length - 1));
                        if (r && r.extendee.typeName == e.typeName) {
                            t = !0;
                            const [e, o] = (0, s.createExtensionContainer)(r);
                            p(e, c, r.field, A, r), (0, i.setExtension)(n, r, o(), A);
                        }
                    }
                    if (!t && !A.ignoreUnknownFields) throw new Error(`cannot decode message ${e.typeName} from JSON: key "${a}" is unknown`);
                }
            }
            return n;
        },
        writeMessage (e, t) {
            const A = e.getType(), n = {};
            let r;
            try {
                for (r of A.fields.byNumber()){
                    if (!(0, a.isFieldSet)(r, e)) {
                        if (r.req) throw "required field not set";
                        if (!t.emitDefaultValues) continue;
                        if (!k(r)) continue;
                    }
                    const A = b(r, r.oneof ? e[r.oneof.localName].value : e[r.localName], t);
                    void 0 !== A && (n[t.useProtoFieldName ? r.name : r.jsonName] = A);
                }
                const o = t.typeRegistry;
                if (null == o ? void 0 : o.findExtensionFor) for (const r of A.runtime.bin.listUnknownFields(e)){
                    const s = o.findExtensionFor(A.typeName, r.no);
                    if (s && (0, i.hasExtension)(e, s)) {
                        const A = (0, i.getExtension)(e, s, t), r = b(s.field, A, t);
                        void 0 !== r && (n[s.field.jsonName] = r);
                    }
                }
            } catch (e) {
                const t = r ? `cannot encode field ${A.typeName}.${r.name} to JSON` : `cannot encode message ${A.typeName} to JSON`, n = e instanceof Error ? e.message : String(e);
                throw new Error(t + (n.length > 0 ? `: ${n}` : ""));
            }
            return n;
        },
        readScalar: (e, t, A)=>y(e, t, null != A ? A : g.LongType.BIGINT, !0),
        writeScalar (e, t, A) {
            if (void 0 !== t) return A || (0, u.isScalarZeroValue)(e, t) ? T(e, t) : void 0;
        },
        debug: C
    };
};
