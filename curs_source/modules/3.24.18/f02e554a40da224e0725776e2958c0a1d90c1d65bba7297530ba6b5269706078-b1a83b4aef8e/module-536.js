"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.makeJsonFormat = void 0;
const n = require("./module-3098.js"), s = require("./module-1498.js"), i = require("./module-9526.js"), o = require("./module-1802.js"), a = require("./module-1771.js"), u = require("./module-8803.js"), c = require("./module-2212.js"), l = require("./module-1455.js"), m = require("./module-1455.js"), d = require("./module-3408.js"), f = require("./module-2706.js"), p = {
    ignoreUnknownFields: !1
}, h = {
    emitDefaultValues: !1,
    enumAsInteger: !1,
    useProtoFieldName: !1,
    prettySpaces: 0
};
function g(t) {
    return t ? Object.assign(Object.assign({}, p), t) : p;
}
function A(t) {
    return t ? Object.assign(Object.assign({}, h), t) : h;
}
const _ = Symbol(), y = Symbol();
function w(t) {
    if (null === t) return "null";
    switch(typeof t){
        case "object":
            return Array.isArray(t) ? "array" : "object";
        case "string":
            return t.length > 100 ? "string" : `"${t.split('"').join('\\"')}"`;
        default:
            return String(t);
    }
}
function S(t, e, r, s, i) {
    let o = r.localName;
    if (r.repeated) {
        if ((0, n.assert)("map" != r.kind), null === e) return;
        if (!Array.isArray(e)) throw new Error(`cannot decode field ${i.typeName}.${r.name} from JSON: ${w(e)}`);
        const a = t[o];
        for (const t of e){
            if (null === t) throw new Error(`cannot decode field ${i.typeName}.${r.name} from JSON: ${w(t)}`);
            switch(r.kind){
                case "message":
                    a.push(r.T.fromJson(t, s));
                    break;
                case "enum":
                    const e = E(r.T, t, s.ignoreUnknownFields, !0);
                    e !== y && a.push(e);
                    break;
                case "scalar":
                    try {
                        a.push(B(r.T, t, r.L, !0));
                    } catch (e) {
                        let n = `cannot decode field ${i.typeName}.${r.name} from JSON: ${w(t)}`;
                        throw e instanceof Error && e.message.length > 0 && (n += `: ${e.message}`), new Error(n);
                    }
            }
        }
    } else if ("map" == r.kind) {
        if (null === e) return;
        if ("object" != typeof e || Array.isArray(e)) throw new Error(`cannot decode field ${i.typeName}.${r.name} from JSON: ${w(e)}`);
        const n = t[o];
        for (const [t, o] of Object.entries(e)){
            if (null === o) throw new Error(`cannot decode field ${i.typeName}.${r.name} from JSON: map value null`);
            let a;
            try {
                a = J(r.K, t);
            } catch (t) {
                let n = `cannot decode map key for field ${i.typeName}.${r.name} from JSON: ${w(e)}`;
                throw t instanceof Error && t.message.length > 0 && (n += `: ${t.message}`), new Error(n);
            }
            switch(r.V.kind){
                case "message":
                    n[a] = r.V.T.fromJson(o, s);
                    break;
                case "enum":
                    const t = E(r.V.T, o, s.ignoreUnknownFields, !0);
                    t !== y && (n[a] = t);
                    break;
                case "scalar":
                    try {
                        n[a] = B(r.V.T, o, d.LongType.BIGINT, !0);
                    } catch (t) {
                        let n = `cannot decode map value for field ${i.typeName}.${r.name} from JSON: ${w(e)}`;
                        throw t instanceof Error && t.message.length > 0 && (n += `: ${t.message}`), new Error(n);
                    }
            }
        }
    } else switch(r.oneof && (t = t[r.oneof.localName] = {
        case: o
    }, o = "value"), r.kind){
        case "message":
            const n = r.T;
            if (null === e && "google.protobuf.Value" != n.typeName) return;
            let a = t[o];
            (0, f.isMessage)(a) ? a.fromJson(e, s) : (t[o] = a = n.fromJson(e, s), n.fieldWrapper && !r.oneof && (t[o] = n.fieldWrapper.unwrapField(a)));
            break;
        case "enum":
            const c = E(r.T, e, s.ignoreUnknownFields, !1);
            switch(c){
                case _:
                    (0, u.clearField)(r, t);
                    break;
                case y:
                    break;
                default:
                    t[o] = c;
            }
            break;
        case "scalar":
            try {
                const n = B(r.T, e, r.L, !1);
                if (n === _) (0, u.clearField)(r, t);
                else t[o] = n;
            } catch (t) {
                let n = `cannot decode field ${i.typeName}.${r.name} from JSON: ${w(e)}`;
                throw t instanceof Error && t.message.length > 0 && (n += `: ${t.message}`), new Error(n);
            }
    }
}
function J(t, e) {
    if (t === d.ScalarType.BOOL) switch(e){
        case "true":
            e = !0;
            break;
        case "false":
            e = !1;
    }
    return B(t, e, d.LongType.BIGINT, !0).toString();
}
function B(t, e, r, o) {
    if (null === e) return o ? (0, l.scalarZeroValue)(t, r) : _;
    switch(t){
        case d.ScalarType.DOUBLE:
        case d.ScalarType.FLOAT:
            if ("NaN" === e) return Number.NaN;
            if ("Infinity" === e) return Number.POSITIVE_INFINITY;
            if ("-Infinity" === e) return Number.NEGATIVE_INFINITY;
            if ("" === e) break;
            if ("string" == typeof e && e.trim().length !== e.length) break;
            if ("string" != typeof e && "number" != typeof e) break;
            const o = Number(e);
            if (Number.isNaN(o)) break;
            if (!Number.isFinite(o)) break;
            return t == d.ScalarType.FLOAT && (0, n.assertFloat32)(o), o;
        case d.ScalarType.INT32:
        case d.ScalarType.FIXED32:
        case d.ScalarType.SFIXED32:
        case d.ScalarType.SINT32:
        case d.ScalarType.UINT32:
            let a;
            if ("number" == typeof e ? a = e : "string" == typeof e && e.length > 0 && e.trim().length === e.length && (a = Number(e)), void 0 === a) break;
            return t == d.ScalarType.UINT32 || t == d.ScalarType.FIXED32 ? (0, n.assertUInt32)(a) : (0, n.assertInt32)(a), a;
        case d.ScalarType.INT64:
        case d.ScalarType.SFIXED64:
        case d.ScalarType.SINT64:
            if ("number" != typeof e && "string" != typeof e) break;
            const u = s.protoInt64.parse(e);
            return r ? u.toString() : u;
        case d.ScalarType.FIXED64:
        case d.ScalarType.UINT64:
            if ("number" != typeof e && "string" != typeof e) break;
            const c = s.protoInt64.uParse(e);
            return r ? c.toString() : c;
        case d.ScalarType.BOOL:
            if ("boolean" != typeof e) break;
            return e;
        case d.ScalarType.STRING:
            if ("string" != typeof e) break;
            try {
                encodeURIComponent(e);
            } catch (t) {
                throw new Error("invalid UTF8");
            }
            return e;
        case d.ScalarType.BYTES:
            if ("" === e) return new Uint8Array(0);
            if ("string" != typeof e) break;
            return i.protoBase64.dec(e);
    }
    throw new Error;
}
function E(t, e, r, n) {
    if (null === e) return "google.protobuf.NullValue" == t.typeName ? 0 : n ? t.values[0].no : _;
    switch(typeof e){
        case "number":
            if (Number.isInteger(e)) return e;
            break;
        case "string":
            const n = t.findName(e);
            if (void 0 !== n) return n.no;
            if (r) return y;
    }
    throw new Error(`cannot decode enum ${t.typeName} from JSON: ${w(e)}`);
}
function I(t) {
    return !(!t.repeated && "map" != t.kind) || !t.oneof && "message" != t.kind && !t.opt && !t.req;
}
function C(t, e, r) {
    if ("map" == t.kind) {
        (0, n.assert)("object" == typeof e && null != e);
        const s = {}, i = Object.entries(e);
        switch(t.V.kind){
            case "scalar":
                for (const [e, r] of i)s[e.toString()] = k(t.V.T, r);
                break;
            case "message":
                for (const [t, e] of i)s[t.toString()] = e.toJson(r);
                break;
            case "enum":
                const e = t.V.T;
                for (const [t, n] of i)s[t.toString()] = b(e, n, r.enumAsInteger);
        }
        return r.emitDefaultValues || i.length > 0 ? s : void 0;
    }
    if (t.repeated) {
        (0, n.assert)(Array.isArray(e));
        const s = [];
        switch(t.kind){
            case "scalar":
                for(let r = 0; r < e.length; r++)s.push(k(t.T, e[r]));
                break;
            case "enum":
                for(let n = 0; n < e.length; n++)s.push(b(t.T, e[n], r.enumAsInteger));
                break;
            case "message":
                for(let t = 0; t < e.length; t++)s.push(e[t].toJson(r));
        }
        return r.emitDefaultValues || s.length > 0 ? s : void 0;
    }
    switch(t.kind){
        case "scalar":
            return k(t.T, e);
        case "enum":
            return b(t.T, e, r.enumAsInteger);
        case "message":
            return (0, c.wrapField)(t.T, e).toJson(r);
    }
}
function b(t, e, r) {
    var s;
    if ((0, n.assert)("number" == typeof e), "google.protobuf.NullValue" == t.typeName) return null;
    if (r) return e;
    const i = t.findNumber(e);
    return null !== (s = null == i ? void 0 : i.name) && void 0 !== s ? s : e;
}
function k(t, e) {
    switch(t){
        case d.ScalarType.INT32:
        case d.ScalarType.SFIXED32:
        case d.ScalarType.SINT32:
        case d.ScalarType.FIXED32:
        case d.ScalarType.UINT32:
            return (0, n.assert)("number" == typeof e), e;
        case d.ScalarType.FLOAT:
        case d.ScalarType.DOUBLE:
            return (0, n.assert)("number" == typeof e), Number.isNaN(e) ? "NaN" : e === Number.POSITIVE_INFINITY ? "Infinity" : e === Number.NEGATIVE_INFINITY ? "-Infinity" : e;
        case d.ScalarType.STRING:
            return (0, n.assert)("string" == typeof e), e;
        case d.ScalarType.BOOL:
            return (0, n.assert)("boolean" == typeof e), e;
        case d.ScalarType.UINT64:
        case d.ScalarType.FIXED64:
        case d.ScalarType.INT64:
        case d.ScalarType.SFIXED64:
        case d.ScalarType.SINT64:
            return (0, n.assert)("bigint" == typeof e || "string" == typeof e || "number" == typeof e), e.toString();
        case d.ScalarType.BYTES:
            return (0, n.assert)(e instanceof Uint8Array), i.protoBase64.enc(e);
    }
}
exports.makeJsonFormat = function() {
    return {
        makeReadOptions: g,
        makeWriteOptions: A,
        readMessage (t, e, r, n) {
            if (null == e || Array.isArray(e) || "object" != typeof e) throw new Error(`cannot decode message ${t.typeName} from JSON: ${w(e)}`);
            n = null != n ? n : new t;
            const s = new Map, i = r.typeRegistry;
            for (const [u, c] of Object.entries(e)){
                const e = t.fields.findJsonName(u);
                if (e) {
                    if (e.oneof) {
                        if (null === c && "scalar" == e.kind) continue;
                        const r = s.get(e.oneof);
                        if (void 0 !== r) throw new Error(`cannot decode message ${t.typeName} from JSON: multiple keys for oneof "${e.oneof.name}" present: "${r}", "${u}"`);
                        s.set(e.oneof, u);
                    }
                    S(n, c, e, r, t);
                } else {
                    let e = !1;
                    if ((null == i ? void 0 : i.findExtension) && u.startsWith("[") && u.endsWith("]")) {
                        const s = i.findExtension(u.substring(1, u.length - 1));
                        if (s && s.extendee.typeName == t.typeName) {
                            e = !0;
                            const [t, i] = (0, o.createExtensionContainer)(s);
                            S(t, c, s.field, r, s), (0, a.setExtension)(n, s, i(), r);
                        }
                    }
                    if (!e && !r.ignoreUnknownFields) throw new Error(`cannot decode message ${t.typeName} from JSON: key "${u}" is unknown`);
                }
            }
            return n;
        },
        writeMessage (t, e) {
            const r = t.getType(), n = {};
            let s;
            try {
                for (s of r.fields.byNumber()){
                    if (!(0, u.isFieldSet)(s, t)) {
                        if (s.req) throw "required field not set";
                        if (!e.emitDefaultValues) continue;
                        if (!I(s)) continue;
                    }
                    const r = C(s, s.oneof ? t[s.oneof.localName].value : t[s.localName], e);
                    void 0 !== r && (n[e.useProtoFieldName ? s.name : s.jsonName] = r);
                }
                const i = e.typeRegistry;
                if (null == i ? void 0 : i.findExtensionFor) for (const s of r.runtime.bin.listUnknownFields(t)){
                    const o = i.findExtensionFor(r.typeName, s.no);
                    if (o && (0, a.hasExtension)(t, o)) {
                        const r = (0, a.getExtension)(t, o, e), s = C(o.field, r, e);
                        void 0 !== s && (n[o.field.jsonName] = s);
                    }
                }
            } catch (t) {
                const e = s ? `cannot encode field ${r.typeName}.${s.name} to JSON` : `cannot encode message ${r.typeName} to JSON`, n = t instanceof Error ? t.message : String(t);
                throw new Error(e + (n.length > 0 ? `: ${n}` : ""));
            }
            return n;
        },
        readScalar: (t, e, r)=>B(t, e, null != r ? r : d.LongType.BIGINT, !0),
        writeScalar (t, e, r) {
            if (void 0 !== e) return r || (0, m.isScalarZeroValue)(t, e) ? k(t, e) : void 0;
        },
        debug: w
    };
};
