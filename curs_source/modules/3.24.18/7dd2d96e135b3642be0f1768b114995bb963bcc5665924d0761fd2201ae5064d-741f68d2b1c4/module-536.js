"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.makeJsonFormat = void 0;
const a = require("./module-3098.js"), s = require("./module-1498.js"), o = require("./module-9526.js"), r = require("./module-1802.js"), i = require("./module-1771.js"), A = require("./module-8803.js"), c = require("./module-2212.js"), l = require("./module-1455.js"), d = require("./module-1455.js"), m = require("./module-3408.js"), u = require("./module-2706.js"), g = {
    ignoreUnknownFields: !1
}, p = {
    emitDefaultValues: !1,
    enumAsInteger: !1,
    useProtoFieldName: !1,
    prettySpaces: 0
};
function E(e) {
    return e ? Object.assign(Object.assign({}, g), e) : g;
}
function h(e) {
    return e ? Object.assign(Object.assign({}, p), e) : p;
}
const T = Symbol(), k = Symbol();
function f(e) {
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
function _(e, n, t, s, o) {
    let r = t.localName;
    if (t.repeated) {
        if ((0, a.assert)("map" != t.kind), null === n) return;
        if (!Array.isArray(n)) throw new Error(`cannot decode field ${o.typeName}.${t.name} from JSON: ${f(n)}`);
        const i = e[r];
        for (const e of n){
            if (null === e) throw new Error(`cannot decode field ${o.typeName}.${t.name} from JSON: ${f(e)}`);
            switch(t.kind){
                case "message":
                    i.push(t.T.fromJson(e, s));
                    break;
                case "enum":
                    const n = y(t.T, e, s.ignoreUnknownFields, !0);
                    n !== k && i.push(n);
                    break;
                case "scalar":
                    try {
                        i.push(C(t.T, e, t.L, !0));
                    } catch (n) {
                        let a = `cannot decode field ${o.typeName}.${t.name} from JSON: ${f(e)}`;
                        throw n instanceof Error && n.message.length > 0 && (a += `: ${n.message}`), new Error(a);
                    }
            }
        }
    } else if ("map" == t.kind) {
        if (null === n) return;
        if ("object" != typeof n || Array.isArray(n)) throw new Error(`cannot decode field ${o.typeName}.${t.name} from JSON: ${f(n)}`);
        const a = e[r];
        for (const [e, r] of Object.entries(n)){
            if (null === r) throw new Error(`cannot decode field ${o.typeName}.${t.name} from JSON: map value null`);
            let i;
            try {
                i = I(t.K, e);
            } catch (e) {
                let a = `cannot decode map key for field ${o.typeName}.${t.name} from JSON: ${f(n)}`;
                throw e instanceof Error && e.message.length > 0 && (a += `: ${e.message}`), new Error(a);
            }
            switch(t.V.kind){
                case "message":
                    a[i] = t.V.T.fromJson(r, s);
                    break;
                case "enum":
                    const e = y(t.V.T, r, s.ignoreUnknownFields, !0);
                    e !== k && (a[i] = e);
                    break;
                case "scalar":
                    try {
                        a[i] = C(t.V.T, r, m.LongType.BIGINT, !0);
                    } catch (e) {
                        let a = `cannot decode map value for field ${o.typeName}.${t.name} from JSON: ${f(n)}`;
                        throw e instanceof Error && e.message.length > 0 && (a += `: ${e.message}`), new Error(a);
                    }
            }
        }
    } else switch(t.oneof && (e = e[t.oneof.localName] = {
        case: r
    }, r = "value"), t.kind){
        case "message":
            const a = t.T;
            if (null === n && "google.protobuf.Value" != a.typeName) return;
            let i = e[r];
            (0, u.isMessage)(i) ? i.fromJson(n, s) : (e[r] = i = a.fromJson(n, s), a.fieldWrapper && !t.oneof && (e[r] = a.fieldWrapper.unwrapField(i)));
            break;
        case "enum":
            const c = y(t.T, n, s.ignoreUnknownFields, !1);
            switch(c){
                case T:
                    (0, A.clearField)(t, e);
                    break;
                case k:
                    break;
                default:
                    e[r] = c;
            }
            break;
        case "scalar":
            try {
                const a = C(t.T, n, t.L, !1);
                if (a === T) (0, A.clearField)(t, e);
                else e[r] = a;
            } catch (e) {
                let a = `cannot decode field ${o.typeName}.${t.name} from JSON: ${f(n)}`;
                throw e instanceof Error && e.message.length > 0 && (a += `: ${e.message}`), new Error(a);
            }
    }
}
function I(e, n) {
    if (e === m.ScalarType.BOOL) switch(n){
        case "true":
            n = !0;
            break;
        case "false":
            n = !1;
    }
    return C(e, n, m.LongType.BIGINT, !0).toString();
}
function C(e, n, t, r) {
    if (null === n) return r ? (0, l.scalarZeroValue)(e, t) : T;
    switch(e){
        case m.ScalarType.DOUBLE:
        case m.ScalarType.FLOAT:
            if ("NaN" === n) return Number.NaN;
            if ("Infinity" === n) return Number.POSITIVE_INFINITY;
            if ("-Infinity" === n) return Number.NEGATIVE_INFINITY;
            if ("" === n) break;
            if ("string" == typeof n && n.trim().length !== n.length) break;
            if ("string" != typeof n && "number" != typeof n) break;
            const r = Number(n);
            if (Number.isNaN(r)) break;
            if (!Number.isFinite(r)) break;
            return e == m.ScalarType.FLOAT && (0, a.assertFloat32)(r), r;
        case m.ScalarType.INT32:
        case m.ScalarType.FIXED32:
        case m.ScalarType.SFIXED32:
        case m.ScalarType.SINT32:
        case m.ScalarType.UINT32:
            let i;
            if ("number" == typeof n ? i = n : "string" == typeof n && n.length > 0 && n.trim().length === n.length && (i = Number(n)), void 0 === i) break;
            return e == m.ScalarType.UINT32 || e == m.ScalarType.FIXED32 ? (0, a.assertUInt32)(i) : (0, a.assertInt32)(i), i;
        case m.ScalarType.INT64:
        case m.ScalarType.SFIXED64:
        case m.ScalarType.SINT64:
            if ("number" != typeof n && "string" != typeof n) break;
            const A = s.protoInt64.parse(n);
            return t ? A.toString() : A;
        case m.ScalarType.FIXED64:
        case m.ScalarType.UINT64:
            if ("number" != typeof n && "string" != typeof n) break;
            const c = s.protoInt64.uParse(n);
            return t ? c.toString() : c;
        case m.ScalarType.BOOL:
            if ("boolean" != typeof n) break;
            return n;
        case m.ScalarType.STRING:
            if ("string" != typeof n) break;
            try {
                encodeURIComponent(n);
            } catch (e) {
                throw new Error("invalid UTF8");
            }
            return n;
        case m.ScalarType.BYTES:
            if ("" === n) return new Uint8Array(0);
            if ("string" != typeof n) break;
            return o.protoBase64.dec(n);
    }
    throw new Error;
}
function y(e, n, t, a) {
    if (null === n) return "google.protobuf.NullValue" == e.typeName ? 0 : a ? e.values[0].no : T;
    switch(typeof n){
        case "number":
            if (Number.isInteger(n)) return n;
            break;
        case "string":
            const a = e.findName(n);
            if (void 0 !== a) return a.no;
            if (t) return k;
    }
    throw new Error(`cannot decode enum ${e.typeName} from JSON: ${f(n)}`);
}
function B(e) {
    return !(!e.repeated && "map" != e.kind) || !e.oneof && "message" != e.kind && !e.opt && !e.req;
}
function Q(e, n, t) {
    if ("map" == e.kind) {
        (0, a.assert)("object" == typeof n && null != n);
        const s = {}, o = Object.entries(n);
        switch(e.V.kind){
            case "scalar":
                for (const [n, t] of o)s[n.toString()] = R(e.V.T, t);
                break;
            case "message":
                for (const [e, n] of o)s[e.toString()] = n.toJson(t);
                break;
            case "enum":
                const n = e.V.T;
                for (const [e, a] of o)s[e.toString()] = v(n, a, t.enumAsInteger);
        }
        return t.emitDefaultValues || o.length > 0 ? s : void 0;
    }
    if (e.repeated) {
        (0, a.assert)(Array.isArray(n));
        const s = [];
        switch(e.kind){
            case "scalar":
                for(let t = 0; t < n.length; t++)s.push(R(e.T, n[t]));
                break;
            case "enum":
                for(let a = 0; a < n.length; a++)s.push(v(e.T, n[a], t.enumAsInteger));
                break;
            case "message":
                for(let e = 0; e < n.length; e++)s.push(n[e].toJson(t));
        }
        return t.emitDefaultValues || s.length > 0 ? s : void 0;
    }
    switch(e.kind){
        case "scalar":
            return R(e.T, n);
        case "enum":
            return v(e.T, n, t.enumAsInteger);
        case "message":
            return (0, c.wrapField)(e.T, n).toJson(t);
    }
}
function v(e, n, t) {
    var s;
    if ((0, a.assert)("number" == typeof n), "google.protobuf.NullValue" == e.typeName) return null;
    if (t) return n;
    const o = e.findNumber(n);
    return null !== (s = null == o ? void 0 : o.name) && void 0 !== s ? s : n;
}
function R(e, n) {
    switch(e){
        case m.ScalarType.INT32:
        case m.ScalarType.SFIXED32:
        case m.ScalarType.SINT32:
        case m.ScalarType.FIXED32:
        case m.ScalarType.UINT32:
            return (0, a.assert)("number" == typeof n), n;
        case m.ScalarType.FLOAT:
        case m.ScalarType.DOUBLE:
            return (0, a.assert)("number" == typeof n), Number.isNaN(n) ? "NaN" : n === Number.POSITIVE_INFINITY ? "Infinity" : n === Number.NEGATIVE_INFINITY ? "-Infinity" : n;
        case m.ScalarType.STRING:
            return (0, a.assert)("string" == typeof n), n;
        case m.ScalarType.BOOL:
            return (0, a.assert)("boolean" == typeof n), n;
        case m.ScalarType.UINT64:
        case m.ScalarType.FIXED64:
        case m.ScalarType.INT64:
        case m.ScalarType.SFIXED64:
        case m.ScalarType.SINT64:
            return (0, a.assert)("bigint" == typeof n || "string" == typeof n || "number" == typeof n), n.toString();
        case m.ScalarType.BYTES:
            return (0, a.assert)(n instanceof Uint8Array), o.protoBase64.enc(n);
    }
}
exports.makeJsonFormat = function() {
    return {
        makeReadOptions: E,
        makeWriteOptions: h,
        readMessage (e, n, t, a) {
            if (null == n || Array.isArray(n) || "object" != typeof n) throw new Error(`cannot decode message ${e.typeName} from JSON: ${f(n)}`);
            a = null != a ? a : new e;
            const s = new Map, o = t.typeRegistry;
            for (const [A, c] of Object.entries(n)){
                const n = e.fields.findJsonName(A);
                if (n) {
                    if (n.oneof) {
                        if (null === c && "scalar" == n.kind) continue;
                        const t = s.get(n.oneof);
                        if (void 0 !== t) throw new Error(`cannot decode message ${e.typeName} from JSON: multiple keys for oneof "${n.oneof.name}" present: "${t}", "${A}"`);
                        s.set(n.oneof, A);
                    }
                    _(a, c, n, t, e);
                } else {
                    let n = !1;
                    if ((null == o ? void 0 : o.findExtension) && A.startsWith("[") && A.endsWith("]")) {
                        const s = o.findExtension(A.substring(1, A.length - 1));
                        if (s && s.extendee.typeName == e.typeName) {
                            n = !0;
                            const [e, o] = (0, r.createExtensionContainer)(s);
                            _(e, c, s.field, t, s), (0, i.setExtension)(a, s, o(), t);
                        }
                    }
                    if (!n && !t.ignoreUnknownFields) throw new Error(`cannot decode message ${e.typeName} from JSON: key "${A}" is unknown`);
                }
            }
            return a;
        },
        writeMessage (e, n) {
            const t = e.getType(), a = {};
            let s;
            try {
                for (s of t.fields.byNumber()){
                    if (!(0, A.isFieldSet)(s, e)) {
                        if (s.req) throw "required field not set";
                        if (!n.emitDefaultValues) continue;
                        if (!B(s)) continue;
                    }
                    const t = Q(s, s.oneof ? e[s.oneof.localName].value : e[s.localName], n);
                    void 0 !== t && (a[n.useProtoFieldName ? s.name : s.jsonName] = t);
                }
                const o = n.typeRegistry;
                if (null == o ? void 0 : o.findExtensionFor) for (const s of t.runtime.bin.listUnknownFields(e)){
                    const r = o.findExtensionFor(t.typeName, s.no);
                    if (r && (0, i.hasExtension)(e, r)) {
                        const t = (0, i.getExtension)(e, r, n), s = Q(r.field, t, n);
                        void 0 !== s && (a[r.field.jsonName] = s);
                    }
                }
            } catch (e) {
                const n = s ? `cannot encode field ${t.typeName}.${s.name} to JSON` : `cannot encode message ${t.typeName} to JSON`, a = e instanceof Error ? e.message : String(e);
                throw new Error(n + (a.length > 0 ? `: ${a}` : ""));
            }
            return a;
        },
        readScalar: (e, n, t)=>C(e, n, null != t ? t : m.LongType.BIGINT, !0),
        writeScalar (e, n, t) {
            if (void 0 !== n) return t || (0, d.isScalarZeroValue)(e, n) ? R(e, n) : void 0;
        },
        debug: f
    };
};
