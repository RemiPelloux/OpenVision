"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.makeJsonFormat = void 0;
const t = require("./module-3098.js"), s = require("./module-1498.js"), o = require("./module-9526.js"), r = require("./module-1802.js"), i = require("./module-1771.js"), A = require("./module-8803.js"), l = require("./module-2212.js"), c = require("./module-1455.js"), m = require("./module-1455.js"), d = require("./module-3408.js"), g = require("./module-2706.js"), u = {
    ignoreUnknownFields: !1
}, E = {
    emitDefaultValues: !1,
    enumAsInteger: !1,
    useProtoFieldName: !1,
    prettySpaces: 0
};
function p(e) {
    return e ? Object.assign(Object.assign({}, u), e) : u;
}
function T(e) {
    return e ? Object.assign(Object.assign({}, E), e) : E;
}
const k = Symbol(), I = Symbol();
function h(e) {
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
function _(e, n, a, s, o) {
    let r = a.localName;
    if (a.repeated) {
        if ((0, t.assert)("map" != a.kind), null === n) return;
        if (!Array.isArray(n)) throw new Error(`cannot decode field ${o.typeName}.${a.name} from JSON: ${h(n)}`);
        const i = e[r];
        for (const e of n){
            if (null === e) throw new Error(`cannot decode field ${o.typeName}.${a.name} from JSON: ${h(e)}`);
            switch(a.kind){
                case "message":
                    i.push(a.T.fromJson(e, s));
                    break;
                case "enum":
                    const n = B(a.T, e, s.ignoreUnknownFields, !0);
                    n !== I && i.push(n);
                    break;
                case "scalar":
                    try {
                        i.push(f(a.T, e, a.L, !0));
                    } catch (n) {
                        let t = `cannot decode field ${o.typeName}.${a.name} from JSON: ${h(e)}`;
                        throw n instanceof Error && n.message.length > 0 && (t += `: ${n.message}`), new Error(t);
                    }
            }
        }
    } else if ("map" == a.kind) {
        if (null === n) return;
        if ("object" != typeof n || Array.isArray(n)) throw new Error(`cannot decode field ${o.typeName}.${a.name} from JSON: ${h(n)}`);
        const t = e[r];
        for (const [e, r] of Object.entries(n)){
            if (null === r) throw new Error(`cannot decode field ${o.typeName}.${a.name} from JSON: map value null`);
            let i;
            try {
                i = C(a.K, e);
            } catch (e) {
                let t = `cannot decode map key for field ${o.typeName}.${a.name} from JSON: ${h(n)}`;
                throw e instanceof Error && e.message.length > 0 && (t += `: ${e.message}`), new Error(t);
            }
            switch(a.V.kind){
                case "message":
                    t[i] = a.V.T.fromJson(r, s);
                    break;
                case "enum":
                    const e = B(a.V.T, r, s.ignoreUnknownFields, !0);
                    e !== I && (t[i] = e);
                    break;
                case "scalar":
                    try {
                        t[i] = f(a.V.T, r, d.LongType.BIGINT, !0);
                    } catch (e) {
                        let t = `cannot decode map value for field ${o.typeName}.${a.name} from JSON: ${h(n)}`;
                        throw e instanceof Error && e.message.length > 0 && (t += `: ${e.message}`), new Error(t);
                    }
            }
        }
    } else switch(a.oneof && (e = e[a.oneof.localName] = {
        case: r
    }, r = "value"), a.kind){
        case "message":
            const t = a.T;
            if (null === n && "google.protobuf.Value" != t.typeName) return;
            let i = e[r];
            (0, g.isMessage)(i) ? i.fromJson(n, s) : (e[r] = i = t.fromJson(n, s), t.fieldWrapper && !a.oneof && (e[r] = t.fieldWrapper.unwrapField(i)));
            break;
        case "enum":
            const l = B(a.T, n, s.ignoreUnknownFields, !1);
            switch(l){
                case k:
                    (0, A.clearField)(a, e);
                    break;
                case I:
                    break;
                default:
                    e[r] = l;
            }
            break;
        case "scalar":
            try {
                const t = f(a.T, n, a.L, !1);
                if (t === k) (0, A.clearField)(a, e);
                else e[r] = t;
            } catch (e) {
                let t = `cannot decode field ${o.typeName}.${a.name} from JSON: ${h(n)}`;
                throw e instanceof Error && e.message.length > 0 && (t += `: ${e.message}`), new Error(t);
            }
    }
}
function C(e, n) {
    if (e === d.ScalarType.BOOL) switch(n){
        case "true":
            n = !0;
            break;
        case "false":
            n = !1;
    }
    return f(e, n, d.LongType.BIGINT, !0).toString();
}
function f(e, n, a, r) {
    if (null === n) return r ? (0, c.scalarZeroValue)(e, a) : k;
    switch(e){
        case d.ScalarType.DOUBLE:
        case d.ScalarType.FLOAT:
            if ("NaN" === n) return Number.NaN;
            if ("Infinity" === n) return Number.POSITIVE_INFINITY;
            if ("-Infinity" === n) return Number.NEGATIVE_INFINITY;
            if ("" === n) break;
            if ("string" == typeof n && n.trim().length !== n.length) break;
            if ("string" != typeof n && "number" != typeof n) break;
            const r = Number(n);
            if (Number.isNaN(r)) break;
            if (!Number.isFinite(r)) break;
            return e == d.ScalarType.FLOAT && (0, t.assertFloat32)(r), r;
        case d.ScalarType.INT32:
        case d.ScalarType.FIXED32:
        case d.ScalarType.SFIXED32:
        case d.ScalarType.SINT32:
        case d.ScalarType.UINT32:
            let i;
            if ("number" == typeof n ? i = n : "string" == typeof n && n.length > 0 && n.trim().length === n.length && (i = Number(n)), void 0 === i) break;
            return e == d.ScalarType.UINT32 || e == d.ScalarType.FIXED32 ? (0, t.assertUInt32)(i) : (0, t.assertInt32)(i), i;
        case d.ScalarType.INT64:
        case d.ScalarType.SFIXED64:
        case d.ScalarType.SINT64:
            if ("number" != typeof n && "string" != typeof n) break;
            const A = s.protoInt64.parse(n);
            return a ? A.toString() : A;
        case d.ScalarType.FIXED64:
        case d.ScalarType.UINT64:
            if ("number" != typeof n && "string" != typeof n) break;
            const l = s.protoInt64.uParse(n);
            return a ? l.toString() : l;
        case d.ScalarType.BOOL:
            if ("boolean" != typeof n) break;
            return n;
        case d.ScalarType.STRING:
            if ("string" != typeof n) break;
            try {
                encodeURIComponent(n);
            } catch (e) {
                throw new Error("invalid UTF8");
            }
            return n;
        case d.ScalarType.BYTES:
            if ("" === n) return new Uint8Array(0);
            if ("string" != typeof n) break;
            return o.protoBase64.dec(n);
    }
    throw new Error;
}
function B(e, n, a, t) {
    if (null === n) return "google.protobuf.NullValue" == e.typeName ? 0 : t ? e.values[0].no : k;
    switch(typeof n){
        case "number":
            if (Number.isInteger(n)) return n;
            break;
        case "string":
            const t = e.findName(n);
            if (void 0 !== t) return t.no;
            if (a) return I;
    }
    throw new Error(`cannot decode enum ${e.typeName} from JSON: ${h(n)}`);
}
function Q(e) {
    return !(!e.repeated && "map" != e.kind) || !e.oneof && "message" != e.kind && !e.opt && !e.req;
}
function y(e, n, a) {
    if ("map" == e.kind) {
        (0, t.assert)("object" == typeof n && null != n);
        const s = {}, o = Object.entries(n);
        switch(e.V.kind){
            case "scalar":
                for (const [n, a] of o)s[n.toString()] = N(e.V.T, a);
                break;
            case "message":
                for (const [e, n] of o)s[e.toString()] = n.toJson(a);
                break;
            case "enum":
                const n = e.V.T;
                for (const [e, t] of o)s[e.toString()] = R(n, t, a.enumAsInteger);
        }
        return a.emitDefaultValues || o.length > 0 ? s : void 0;
    }
    if (e.repeated) {
        (0, t.assert)(Array.isArray(n));
        const s = [];
        switch(e.kind){
            case "scalar":
                for(let a = 0; a < n.length; a++)s.push(N(e.T, n[a]));
                break;
            case "enum":
                for(let t = 0; t < n.length; t++)s.push(R(e.T, n[t], a.enumAsInteger));
                break;
            case "message":
                for(let e = 0; e < n.length; e++)s.push(n[e].toJson(a));
        }
        return a.emitDefaultValues || s.length > 0 ? s : void 0;
    }
    switch(e.kind){
        case "scalar":
            return N(e.T, n);
        case "enum":
            return R(e.T, n, a.enumAsInteger);
        case "message":
            return (0, l.wrapField)(e.T, n).toJson(a);
    }
}
function R(e, n, a) {
    var s;
    if ((0, t.assert)("number" == typeof n), "google.protobuf.NullValue" == e.typeName) return null;
    if (a) return n;
    const o = e.findNumber(n);
    return null !== (s = null == o ? void 0 : o.name) && void 0 !== s ? s : n;
}
function N(e, n) {
    switch(e){
        case d.ScalarType.INT32:
        case d.ScalarType.SFIXED32:
        case d.ScalarType.SINT32:
        case d.ScalarType.FIXED32:
        case d.ScalarType.UINT32:
            return (0, t.assert)("number" == typeof n), n;
        case d.ScalarType.FLOAT:
        case d.ScalarType.DOUBLE:
            return (0, t.assert)("number" == typeof n), Number.isNaN(n) ? "NaN" : n === Number.POSITIVE_INFINITY ? "Infinity" : n === Number.NEGATIVE_INFINITY ? "-Infinity" : n;
        case d.ScalarType.STRING:
            return (0, t.assert)("string" == typeof n), n;
        case d.ScalarType.BOOL:
            return (0, t.assert)("boolean" == typeof n), n;
        case d.ScalarType.UINT64:
        case d.ScalarType.FIXED64:
        case d.ScalarType.INT64:
        case d.ScalarType.SFIXED64:
        case d.ScalarType.SINT64:
            return (0, t.assert)("bigint" == typeof n || "string" == typeof n || "number" == typeof n), n.toString();
        case d.ScalarType.BYTES:
            return (0, t.assert)(n instanceof Uint8Array), o.protoBase64.enc(n);
    }
}
exports.makeJsonFormat = function() {
    return {
        makeReadOptions: p,
        makeWriteOptions: T,
        readMessage (e, n, a, t) {
            if (null == n || Array.isArray(n) || "object" != typeof n) throw new Error(`cannot decode message ${e.typeName} from JSON: ${h(n)}`);
            t = null != t ? t : new e;
            const s = new Map, o = a.typeRegistry;
            for (const [A, l] of Object.entries(n)){
                const n = e.fields.findJsonName(A);
                if (n) {
                    if (n.oneof) {
                        if (null === l && "scalar" == n.kind) continue;
                        const a = s.get(n.oneof);
                        if (void 0 !== a) throw new Error(`cannot decode message ${e.typeName} from JSON: multiple keys for oneof "${n.oneof.name}" present: "${a}", "${A}"`);
                        s.set(n.oneof, A);
                    }
                    _(t, l, n, a, e);
                } else {
                    let n = !1;
                    if ((null == o ? void 0 : o.findExtension) && A.startsWith("[") && A.endsWith("]")) {
                        const s = o.findExtension(A.substring(1, A.length - 1));
                        if (s && s.extendee.typeName == e.typeName) {
                            n = !0;
                            const [e, o] = (0, r.createExtensionContainer)(s);
                            _(e, l, s.field, a, s), (0, i.setExtension)(t, s, o(), a);
                        }
                    }
                    if (!n && !a.ignoreUnknownFields) throw new Error(`cannot decode message ${e.typeName} from JSON: key "${A}" is unknown`);
                }
            }
            return t;
        },
        writeMessage (e, n) {
            const a = e.getType(), t = {};
            let s;
            try {
                for (s of a.fields.byNumber()){
                    if (!(0, A.isFieldSet)(s, e)) {
                        if (s.req) throw "required field not set";
                        if (!n.emitDefaultValues) continue;
                        if (!Q(s)) continue;
                    }
                    const a = y(s, s.oneof ? e[s.oneof.localName].value : e[s.localName], n);
                    void 0 !== a && (t[n.useProtoFieldName ? s.name : s.jsonName] = a);
                }
                const o = n.typeRegistry;
                if (null == o ? void 0 : o.findExtensionFor) for (const s of a.runtime.bin.listUnknownFields(e)){
                    const r = o.findExtensionFor(a.typeName, s.no);
                    if (r && (0, i.hasExtension)(e, r)) {
                        const a = (0, i.getExtension)(e, r, n), s = y(r.field, a, n);
                        void 0 !== s && (t[r.field.jsonName] = s);
                    }
                }
            } catch (e) {
                const n = s ? `cannot encode field ${a.typeName}.${s.name} to JSON` : `cannot encode message ${a.typeName} to JSON`, t = e instanceof Error ? e.message : String(e);
                throw new Error(n + (t.length > 0 ? `: ${t}` : ""));
            }
            return t;
        },
        readScalar: (e, n, a)=>f(e, n, null != a ? a : d.LongType.BIGINT, !0),
        writeScalar (e, n, a) {
            if (void 0 !== n) return a || (0, m.isScalarZeroValue)(e, n) ? N(e, n) : void 0;
        },
        debug: h
    };
};
