Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.makeJsonFormat = void 0;
const r = require("./module-98.js"), o = require("./module-498.js"), a = require("./module-526.js"), s = require("./module-802.js"), i = require("./module-771.js"), l = require("./module-803.js"), u = require("./module-212.js"), c = require("./module-455.js"), m = require("./module-455.js"), p = require("./module-408.js"), d = require("./module-706.js"), f = {
    ignoreUnknownFields: !1
}, T = {
    emitDefaultValues: !1,
    enumAsInteger: !1,
    useProtoFieldName: !1,
    prettySpaces: 0
};
function g(e) {
    return e ? Object.assign(Object.assign({}, f), e) : f;
}
function E(e) {
    return e ? Object.assign(Object.assign({}, T), e) : T;
}
const y = Symbol(), h = Symbol();
function N(e) {
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
function _(e, t, n, o, a) {
    let s = n.localName;
    if (n.repeated) {
        if ((0, r.assert)("map" != n.kind), null === t) return;
        if (!Array.isArray(t)) throw new Error(`cannot decode field ${a.typeName}.${n.name} from JSON: ${N(t)}`);
        const i = e[s];
        for (const e of t){
            if (null === e) throw new Error(`cannot decode field ${a.typeName}.${n.name} from JSON: ${N(e)}`);
            switch(n.kind){
                case "message":
                    i.push(n.T.fromJson(e, o));
                    break;
                case "enum":
                    const t = w(n.T, e, o.ignoreUnknownFields, !0);
                    t !== h && i.push(t);
                    break;
                case "scalar":
                    try {
                        i.push(S(n.T, e, n.L, !0));
                    } catch (t) {
                        let r = `cannot decode field ${a.typeName}.${n.name} from JSON: ${N(e)}`;
                        throw t instanceof Error && t.message.length > 0 && (r += `: ${t.message}`), new Error(r);
                    }
            }
        }
    } else if ("map" == n.kind) {
        if (null === t) return;
        if ("object" != typeof t || Array.isArray(t)) throw new Error(`cannot decode field ${a.typeName}.${n.name} from JSON: ${N(t)}`);
        const r = e[s];
        for (const [e, s] of Object.entries(t)){
            if (null === s) throw new Error(`cannot decode field ${a.typeName}.${n.name} from JSON: map value null`);
            let i;
            try {
                i = I(n.K, e);
            } catch (e) {
                let r = `cannot decode map key for field ${a.typeName}.${n.name} from JSON: ${N(t)}`;
                throw e instanceof Error && e.message.length > 0 && (r += `: ${e.message}`), new Error(r);
            }
            switch(n.V.kind){
                case "message":
                    r[i] = n.V.T.fromJson(s, o);
                    break;
                case "enum":
                    const e = w(n.V.T, s, o.ignoreUnknownFields, !0);
                    e !== h && (r[i] = e);
                    break;
                case "scalar":
                    try {
                        r[i] = S(n.V.T, s, p.LongType.BIGINT, !0);
                    } catch (e) {
                        let r = `cannot decode map value for field ${a.typeName}.${n.name} from JSON: ${N(t)}`;
                        throw e instanceof Error && e.message.length > 0 && (r += `: ${e.message}`), new Error(r);
                    }
            }
        }
    } else switch(n.oneof && (e = e[n.oneof.localName] = {
        case: s
    }, s = "value"), n.kind){
        case "message":
            const r = n.T;
            if (null === t && "google.protobuf.Value" != r.typeName) return;
            let i = e[s];
            (0, d.isMessage)(i) ? i.fromJson(t, o) : (e[s] = i = r.fromJson(t, o), r.fieldWrapper && !n.oneof && (e[s] = r.fieldWrapper.unwrapField(i)));
            break;
        case "enum":
            const u = w(n.T, t, o.ignoreUnknownFields, !1);
            switch(u){
                case y:
                    (0, l.clearField)(n, e);
                    break;
                case h:
                    break;
                default:
                    e[s] = u;
            }
            break;
        case "scalar":
            try {
                const r = S(n.T, t, n.L, !1);
                if (r === y) (0, l.clearField)(n, e);
                else e[s] = r;
            } catch (e) {
                let r = `cannot decode field ${a.typeName}.${n.name} from JSON: ${N(t)}`;
                throw e instanceof Error && e.message.length > 0 && (r += `: ${e.message}`), new Error(r);
            }
    }
}
function I(e, t) {
    if (e === p.ScalarType.BOOL) switch(t){
        case "true":
            t = !0;
            break;
        case "false":
            t = !1;
    }
    return S(e, t, p.LongType.BIGINT, !0).toString();
}
function S(e, t, n, s) {
    if (null === t) return s ? (0, c.scalarZeroValue)(e, n) : y;
    switch(e){
        case p.ScalarType.DOUBLE:
        case p.ScalarType.FLOAT:
            if ("NaN" === t) return Number.NaN;
            if ("Infinity" === t) return Number.POSITIVE_INFINITY;
            if ("-Infinity" === t) return Number.NEGATIVE_INFINITY;
            if ("" === t) break;
            if ("string" == typeof t && t.trim().length !== t.length) break;
            if ("string" != typeof t && "number" != typeof t) break;
            const s = Number(t);
            if (Number.isNaN(s)) break;
            if (!Number.isFinite(s)) break;
            return e == p.ScalarType.FLOAT && (0, r.assertFloat32)(s), s;
        case p.ScalarType.INT32:
        case p.ScalarType.FIXED32:
        case p.ScalarType.SFIXED32:
        case p.ScalarType.SINT32:
        case p.ScalarType.UINT32:
            let i;
            if ("number" == typeof t ? i = t : "string" == typeof t && t.length > 0 && t.trim().length === t.length && (i = Number(t)), void 0 === i) break;
            return e == p.ScalarType.UINT32 || e == p.ScalarType.FIXED32 ? (0, r.assertUInt32)(i) : (0, r.assertInt32)(i), i;
        case p.ScalarType.INT64:
        case p.ScalarType.SFIXED64:
        case p.ScalarType.SINT64:
            if ("number" != typeof t && "string" != typeof t) break;
            const l = o.protoInt64.parse(t);
            return n ? l.toString() : l;
        case p.ScalarType.FIXED64:
        case p.ScalarType.UINT64:
            if ("number" != typeof t && "string" != typeof t) break;
            const u = o.protoInt64.uParse(t);
            return n ? u.toString() : u;
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
            return a.protoBase64.dec(t);
    }
    throw new Error;
}
function w(e, t, n, r) {
    if (null === t) return "google.protobuf.NullValue" == e.typeName ? 0 : r ? e.values[0].no : y;
    switch(typeof t){
        case "number":
            if (Number.isInteger(t)) return t;
            break;
        case "string":
            const r = e.findName(t);
            if (void 0 !== r) return r.no;
            if (n) return h;
    }
    throw new Error(`cannot decode enum ${e.typeName} from JSON: ${N(t)}`);
}
function O(e) {
    return !(!e.repeated && "map" != e.kind) || !e.oneof && "message" != e.kind && !e.opt && !e.req;
}
function b(e, t, n) {
    if ("map" == e.kind) {
        (0, r.assert)("object" == typeof t && null != t);
        const o = {}, a = Object.entries(t);
        switch(e.V.kind){
            case "scalar":
                for (const [t, n] of a)o[t.toString()] = v(e.V.T, n);
                break;
            case "message":
                for (const [e, t] of a)o[e.toString()] = t.toJson(n);
                break;
            case "enum":
                const t = e.V.T;
                for (const [e, r] of a)o[e.toString()] = k(t, r, n.enumAsInteger);
        }
        return n.emitDefaultValues || a.length > 0 ? o : void 0;
    }
    if (e.repeated) {
        (0, r.assert)(Array.isArray(t));
        const o = [];
        switch(e.kind){
            case "scalar":
                for(let n = 0; n < t.length; n++)o.push(v(e.T, t[n]));
                break;
            case "enum":
                for(let r = 0; r < t.length; r++)o.push(k(e.T, t[r], n.enumAsInteger));
                break;
            case "message":
                for(let e = 0; e < t.length; e++)o.push(t[e].toJson(n));
        }
        return n.emitDefaultValues || o.length > 0 ? o : void 0;
    }
    switch(e.kind){
        case "scalar":
            return v(e.T, t);
        case "enum":
            return k(e.T, t, n.enumAsInteger);
        case "message":
            return (0, u.wrapField)(e.T, t).toJson(n);
    }
}
function k(e, t, n) {
    var o;
    if ((0, r.assert)("number" == typeof t), "google.protobuf.NullValue" == e.typeName) return null;
    if (n) return t;
    const a = e.findNumber(t);
    return null !== (o = null == a ? void 0 : a.name) && void 0 !== o ? o : t;
}
function v(e, t) {
    switch(e){
        case p.ScalarType.INT32:
        case p.ScalarType.SFIXED32:
        case p.ScalarType.SINT32:
        case p.ScalarType.FIXED32:
        case p.ScalarType.UINT32:
            return (0, r.assert)("number" == typeof t), t;
        case p.ScalarType.FLOAT:
        case p.ScalarType.DOUBLE:
            return (0, r.assert)("number" == typeof t), Number.isNaN(t) ? "NaN" : t === Number.POSITIVE_INFINITY ? "Infinity" : t === Number.NEGATIVE_INFINITY ? "-Infinity" : t;
        case p.ScalarType.STRING:
            return (0, r.assert)("string" == typeof t), t;
        case p.ScalarType.BOOL:
            return (0, r.assert)("boolean" == typeof t), t;
        case p.ScalarType.UINT64:
        case p.ScalarType.FIXED64:
        case p.ScalarType.INT64:
        case p.ScalarType.SFIXED64:
        case p.ScalarType.SINT64:
            return (0, r.assert)("bigint" == typeof t || "string" == typeof t || "number" == typeof t), t.toString();
        case p.ScalarType.BYTES:
            return (0, r.assert)(t instanceof Uint8Array), a.protoBase64.enc(t);
    }
}
exports.makeJsonFormat = function() {
    return {
        makeReadOptions: g,
        makeWriteOptions: E,
        readMessage (e, t, n, r) {
            if (null == t || Array.isArray(t) || "object" != typeof t) throw new Error(`cannot decode message ${e.typeName} from JSON: ${N(t)}`);
            r = null != r ? r : new e;
            const o = new Map, a = n.typeRegistry;
            for (const [l, u] of Object.entries(t)){
                const t = e.fields.findJsonName(l);
                if (t) {
                    if (t.oneof) {
                        if (null === u && "scalar" == t.kind) continue;
                        const n = o.get(t.oneof);
                        if (void 0 !== n) throw new Error(`cannot decode message ${e.typeName} from JSON: multiple keys for oneof "${t.oneof.name}" present: "${n}", "${l}"`);
                        o.set(t.oneof, l);
                    }
                    _(r, u, t, n, e);
                } else {
                    let t = !1;
                    if ((null == a ? void 0 : a.findExtension) && l.startsWith("[") && l.endsWith("]")) {
                        const o = a.findExtension(l.substring(1, l.length - 1));
                        if (o && o.extendee.typeName == e.typeName) {
                            t = !0;
                            const [e, a] = (0, s.createExtensionContainer)(o);
                            _(e, u, o.field, n, o), (0, i.setExtension)(r, o, a(), n);
                        }
                    }
                    if (!t && !n.ignoreUnknownFields) throw new Error(`cannot decode message ${e.typeName} from JSON: key "${l}" is unknown`);
                }
            }
            return r;
        },
        writeMessage (e, t) {
            const n = e.getType(), r = {};
            let o;
            try {
                for (o of n.fields.byNumber()){
                    if (!(0, l.isFieldSet)(o, e)) {
                        if (o.req) throw "required field not set";
                        if (!t.emitDefaultValues) continue;
                        if (!O(o)) continue;
                    }
                    const n = b(o, o.oneof ? e[o.oneof.localName].value : e[o.localName], t);
                    void 0 !== n && (r[t.useProtoFieldName ? o.name : o.jsonName] = n);
                }
                const a = t.typeRegistry;
                if (null == a ? void 0 : a.findExtensionFor) for (const o of n.runtime.bin.listUnknownFields(e)){
                    const s = a.findExtensionFor(n.typeName, o.no);
                    if (s && (0, i.hasExtension)(e, s)) {
                        const n = (0, i.getExtension)(e, s, t), o = b(s.field, n, t);
                        void 0 !== o && (r[s.field.jsonName] = o);
                    }
                }
            } catch (e) {
                const t = o ? `cannot encode field ${n.typeName}.${o.name} to JSON` : `cannot encode message ${n.typeName} to JSON`, r = e instanceof Error ? e.message : String(e);
                throw new Error(t + (r.length > 0 ? `: ${r}` : ""));
            }
            return r;
        },
        readScalar: (e, t, n)=>S(e, t, null != n ? n : p.LongType.BIGINT, !0),
        writeScalar (e, t, n) {
            if (void 0 !== t) return n || (0, m.isScalarZeroValue)(e, t) ? v(e, t) : void 0;
        },
        debug: N
    };
};
