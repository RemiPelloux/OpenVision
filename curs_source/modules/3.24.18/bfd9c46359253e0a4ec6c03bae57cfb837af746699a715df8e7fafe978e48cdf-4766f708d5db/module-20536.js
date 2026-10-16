"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.makeJsonFormat = void 0;
const n = require("./module-43098.js"), s = require("./module-11498.js"), o = require("./module-19526.js"), i = require("./module-1802.js"), a = require("./module-11771.js"), c = require("./module-88803.js"), l = require("./module-42212.js"), u = require("./module-31455.js"), d = require("./module-31455.js"), p = require("./module-3408.js"), m = require("./module-62706.js"), h = {
    ignoreUnknownFields: !1
}, f = {
    emitDefaultValues: !1,
    enumAsInteger: !1,
    useProtoFieldName: !1,
    prettySpaces: 0
};
function g(e) {
    return e ? Object.assign(Object.assign({}, h), e) : h;
}
function y(e) {
    return e ? Object.assign(Object.assign({}, f), e) : f;
}
const w = Symbol(), v = Symbol();
function _(e) {
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
function b(e, t, r, s, o) {
    let i = r.localName;
    if (r.repeated) {
        if ((0, n.assert)("map" != r.kind), null === t) return;
        if (!Array.isArray(t)) throw new Error(`cannot decode field ${o.typeName}.${r.name} from JSON: ${_(t)}`);
        const a = e[i];
        for (const e of t){
            if (null === e) throw new Error(`cannot decode field ${o.typeName}.${r.name} from JSON: ${_(e)}`);
            switch(r.kind){
                case "message":
                    a.push(r.T.fromJson(e, s));
                    break;
                case "enum":
                    const t = x(r.T, e, s.ignoreUnknownFields, !0);
                    t !== v && a.push(t);
                    break;
                case "scalar":
                    try {
                        a.push(k(r.T, e, r.L, !0));
                    } catch (t) {
                        let n = `cannot decode field ${o.typeName}.${r.name} from JSON: ${_(e)}`;
                        throw t instanceof Error && t.message.length > 0 && (n += `: ${t.message}`), new Error(n);
                    }
            }
        }
    } else if ("map" == r.kind) {
        if (null === t) return;
        if ("object" != typeof t || Array.isArray(t)) throw new Error(`cannot decode field ${o.typeName}.${r.name} from JSON: ${_(t)}`);
        const n = e[i];
        for (const [e, i] of Object.entries(t)){
            if (null === i) throw new Error(`cannot decode field ${o.typeName}.${r.name} from JSON: map value null`);
            let a;
            try {
                a = S(r.K, e);
            } catch (e) {
                let n = `cannot decode map key for field ${o.typeName}.${r.name} from JSON: ${_(t)}`;
                throw e instanceof Error && e.message.length > 0 && (n += `: ${e.message}`), new Error(n);
            }
            switch(r.V.kind){
                case "message":
                    n[a] = r.V.T.fromJson(i, s);
                    break;
                case "enum":
                    const e = x(r.V.T, i, s.ignoreUnknownFields, !0);
                    e !== v && (n[a] = e);
                    break;
                case "scalar":
                    try {
                        n[a] = k(r.V.T, i, p.LongType.BIGINT, !0);
                    } catch (e) {
                        let n = `cannot decode map value for field ${o.typeName}.${r.name} from JSON: ${_(t)}`;
                        throw e instanceof Error && e.message.length > 0 && (n += `: ${e.message}`), new Error(n);
                    }
            }
        }
    } else switch(r.oneof && (e = e[r.oneof.localName] = {
        case: i
    }, i = "value"), r.kind){
        case "message":
            const n = r.T;
            if (null === t && "google.protobuf.Value" != n.typeName) return;
            let a = e[i];
            (0, m.isMessage)(a) ? a.fromJson(t, s) : (e[i] = a = n.fromJson(t, s), n.fieldWrapper && !r.oneof && (e[i] = n.fieldWrapper.unwrapField(a)));
            break;
        case "enum":
            const l = x(r.T, t, s.ignoreUnknownFields, !1);
            switch(l){
                case w:
                    (0, c.clearField)(r, e);
                    break;
                case v:
                    break;
                default:
                    e[i] = l;
            }
            break;
        case "scalar":
            try {
                const n = k(r.T, t, r.L, !1);
                if (n === w) (0, c.clearField)(r, e);
                else e[i] = n;
            } catch (e) {
                let n = `cannot decode field ${o.typeName}.${r.name} from JSON: ${_(t)}`;
                throw e instanceof Error && e.message.length > 0 && (n += `: ${e.message}`), new Error(n);
            }
    }
}
function S(e, t) {
    if (e === p.ScalarType.BOOL) switch(t){
        case "true":
            t = !0;
            break;
        case "false":
            t = !1;
    }
    return k(e, t, p.LongType.BIGINT, !0).toString();
}
function k(e, t, r, i) {
    if (null === t) return i ? (0, u.scalarZeroValue)(e, r) : w;
    switch(e){
        case p.ScalarType.DOUBLE:
        case p.ScalarType.FLOAT:
            if ("NaN" === t) return Number.NaN;
            if ("Infinity" === t) return Number.POSITIVE_INFINITY;
            if ("-Infinity" === t) return Number.NEGATIVE_INFINITY;
            if ("" === t) break;
            if ("string" == typeof t && t.trim().length !== t.length) break;
            if ("string" != typeof t && "number" != typeof t) break;
            const i = Number(t);
            if (Number.isNaN(i)) break;
            if (!Number.isFinite(i)) break;
            return e == p.ScalarType.FLOAT && (0, n.assertFloat32)(i), i;
        case p.ScalarType.INT32:
        case p.ScalarType.FIXED32:
        case p.ScalarType.SFIXED32:
        case p.ScalarType.SINT32:
        case p.ScalarType.UINT32:
            let a;
            if ("number" == typeof t ? a = t : "string" == typeof t && t.length > 0 && t.trim().length === t.length && (a = Number(t)), void 0 === a) break;
            return e == p.ScalarType.UINT32 || e == p.ScalarType.FIXED32 ? (0, n.assertUInt32)(a) : (0, n.assertInt32)(a), a;
        case p.ScalarType.INT64:
        case p.ScalarType.SFIXED64:
        case p.ScalarType.SINT64:
            if ("number" != typeof t && "string" != typeof t) break;
            const c = s.protoInt64.parse(t);
            return r ? c.toString() : c;
        case p.ScalarType.FIXED64:
        case p.ScalarType.UINT64:
            if ("number" != typeof t && "string" != typeof t) break;
            const l = s.protoInt64.uParse(t);
            return r ? l.toString() : l;
        case p.ScalarType.BOOL:
            if ("boolean" != typeof t) break;
            return t;
        case p.ScalarType.STRING:
            if ("string" != typeof t) break;
            try {
                encodeURIComponent(t);
            } catch (e) {
                throw new Error("invalid UTF8");
            }
            return t;
        case p.ScalarType.BYTES:
            if ("" === t) return new Uint8Array(0);
            if ("string" != typeof t) break;
            return o.protoBase64.dec(t);
    }
    throw new Error;
}
function x(e, t, r, n) {
    if (null === t) return "google.protobuf.NullValue" == e.typeName ? 0 : n ? e.values[0].no : w;
    switch(typeof t){
        case "number":
            if (Number.isInteger(t)) return t;
            break;
        case "string":
            const n = e.findName(t);
            if (void 0 !== n) return n.no;
            if (r) return v;
    }
    throw new Error(`cannot decode enum ${e.typeName} from JSON: ${_(t)}`);
}
function E(e) {
    return !(!e.repeated && "map" != e.kind) || !e.oneof && "message" != e.kind && !e.opt && !e.req;
}
function I(e, t, r) {
    if ("map" == e.kind) {
        (0, n.assert)("object" == typeof t && null != t);
        const s = {}, o = Object.entries(t);
        switch(e.V.kind){
            case "scalar":
                for (const [t, r] of o)s[t.toString()] = C(e.V.T, r);
                break;
            case "message":
                for (const [e, t] of o)s[e.toString()] = t.toJson(r);
                break;
            case "enum":
                const t = e.V.T;
                for (const [e, n] of o)s[e.toString()] = T(t, n, r.enumAsInteger);
        }
        return r.emitDefaultValues || o.length > 0 ? s : void 0;
    }
    if (e.repeated) {
        (0, n.assert)(Array.isArray(t));
        const s = [];
        switch(e.kind){
            case "scalar":
                for(let r = 0; r < t.length; r++)s.push(C(e.T, t[r]));
                break;
            case "enum":
                for(let n = 0; n < t.length; n++)s.push(T(e.T, t[n], r.enumAsInteger));
                break;
            case "message":
                for(let e = 0; e < t.length; e++)s.push(t[e].toJson(r));
        }
        return r.emitDefaultValues || s.length > 0 ? s : void 0;
    }
    switch(e.kind){
        case "scalar":
            return C(e.T, t);
        case "enum":
            return T(e.T, t, r.enumAsInteger);
        case "message":
            return (0, l.wrapField)(e.T, t).toJson(r);
    }
}
function T(e, t, r) {
    var s;
    if ((0, n.assert)("number" == typeof t), "google.protobuf.NullValue" == e.typeName) return null;
    if (r) return t;
    const o = e.findNumber(t);
    return null !== (s = null == o ? void 0 : o.name) && void 0 !== s ? s : t;
}
function C(e, t) {
    switch(e){
        case p.ScalarType.INT32:
        case p.ScalarType.SFIXED32:
        case p.ScalarType.SINT32:
        case p.ScalarType.FIXED32:
        case p.ScalarType.UINT32:
            return (0, n.assert)("number" == typeof t), t;
        case p.ScalarType.FLOAT:
        case p.ScalarType.DOUBLE:
            return (0, n.assert)("number" == typeof t), Number.isNaN(t) ? "NaN" : t === Number.POSITIVE_INFINITY ? "Infinity" : t === Number.NEGATIVE_INFINITY ? "-Infinity" : t;
        case p.ScalarType.STRING:
            return (0, n.assert)("string" == typeof t), t;
        case p.ScalarType.BOOL:
            return (0, n.assert)("boolean" == typeof t), t;
        case p.ScalarType.UINT64:
        case p.ScalarType.FIXED64:
        case p.ScalarType.INT64:
        case p.ScalarType.SFIXED64:
        case p.ScalarType.SINT64:
            return (0, n.assert)("bigint" == typeof t || "string" == typeof t || "number" == typeof t), t.toString();
        case p.ScalarType.BYTES:
            return (0, n.assert)(t instanceof Uint8Array), o.protoBase64.enc(t);
    }
}
exports.makeJsonFormat = function() {
    return {
        makeReadOptions: g,
        makeWriteOptions: y,
        readMessage (e, t, r, n) {
            if (null == t || Array.isArray(t) || "object" != typeof t) throw new Error(`cannot decode message ${e.typeName} from JSON: ${_(t)}`);
            n = null != n ? n : new e;
            const s = new Map, o = r.typeRegistry;
            for (const [c, l] of Object.entries(t)){
                const t = e.fields.findJsonName(c);
                if (t) {
                    if (t.oneof) {
                        if (null === l && "scalar" == t.kind) continue;
                        const r = s.get(t.oneof);
                        if (void 0 !== r) throw new Error(`cannot decode message ${e.typeName} from JSON: multiple keys for oneof "${t.oneof.name}" present: "${r}", "${c}"`);
                        s.set(t.oneof, c);
                    }
                    b(n, l, t, r, e);
                } else {
                    let t = !1;
                    if ((null == o ? void 0 : o.findExtension) && c.startsWith("[") && c.endsWith("]")) {
                        const s = o.findExtension(c.substring(1, c.length - 1));
                        if (s && s.extendee.typeName == e.typeName) {
                            t = !0;
                            const [e, o] = (0, i.createExtensionContainer)(s);
                            b(e, l, s.field, r, s), (0, a.setExtension)(n, s, o(), r);
                        }
                    }
                    if (!t && !r.ignoreUnknownFields) throw new Error(`cannot decode message ${e.typeName} from JSON: key "${c}" is unknown`);
                }
            }
            return n;
        },
        writeMessage (e, t) {
            const r = e.getType(), n = {};
            let s;
            try {
                for (s of r.fields.byNumber()){
                    if (!(0, c.isFieldSet)(s, e)) {
                        if (s.req) throw "required field not set";
                        if (!t.emitDefaultValues) continue;
                        if (!E(s)) continue;
                    }
                    const r = I(s, s.oneof ? e[s.oneof.localName].value : e[s.localName], t);
                    void 0 !== r && (n[t.useProtoFieldName ? s.name : s.jsonName] = r);
                }
                const o = t.typeRegistry;
                if (null == o ? void 0 : o.findExtensionFor) for (const s of r.runtime.bin.listUnknownFields(e)){
                    const i = o.findExtensionFor(r.typeName, s.no);
                    if (i && (0, a.hasExtension)(e, i)) {
                        const r = (0, a.getExtension)(e, i, t), s = I(i.field, r, t);
                        void 0 !== s && (n[i.field.jsonName] = s);
                    }
                }
            } catch (e) {
                const t = s ? `cannot encode field ${r.typeName}.${s.name} to JSON` : `cannot encode message ${r.typeName} to JSON`, n = e instanceof Error ? e.message : String(e);
                throw new Error(t + (n.length > 0 ? `: ${n}` : ""));
            }
            return n;
        },
        readScalar: (e, t, r)=>k(e, t, null != r ? r : p.LongType.BIGINT, !0),
        writeScalar (e, t, r) {
            if (void 0 !== t) return r || (0, d.isScalarZeroValue)(e, t) ? C(e, t) : void 0;
        },
        debug: _
    };
};
