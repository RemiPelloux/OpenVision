Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.makeJsonFormat = void 0;
const s = require("./module-3098.js"), o = require("./module-1498.js"), r = require("./module-9526.js"), t = require("./module-1802.js"), i = require("./module-1771.js"), m = require("./module-8803.js"), l = require("./module-2212.js"), d = require("./module-1455.js"), c = require("./module-1455.js"), T = require("./module-3408.js"), p = require("./module-2706.js"), _ = {
    ignoreUnknownFields: !1
}, k = {
    emitDefaultValues: !1,
    enumAsInteger: !1,
    useProtoFieldName: !1,
    prettySpaces: 0
};
function u(e) {
    return e ? Object.assign(Object.assign({}, _), e) : _;
}
function g(e) {
    return e ? Object.assign(Object.assign({}, k), e) : k;
}
const E = Symbol(), v = Symbol();
function y(e) {
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
function S(e, a, n, o, r) {
    let t = n.localName;
    if (n.repeated) {
        if ((0, s.assert)("map" != n.kind), null === a) return;
        if (!Array.isArray(a)) throw new Error(`cannot decode field ${r.typeName}.${n.name} from JSON: ${y(a)}`);
        const i = e[t];
        for (const e of a){
            if (null === e) throw new Error(`cannot decode field ${r.typeName}.${n.name} from JSON: ${y(e)}`);
            switch(n.kind){
                case "message":
                    i.push(n.T.fromJson(e, o));
                    break;
                case "enum":
                    const a = f(n.T, e, o.ignoreUnknownFields, !0);
                    a !== v && i.push(a);
                    break;
                case "scalar":
                    try {
                        i.push(I(n.T, e, n.L, !0));
                    } catch (a) {
                        let s = `cannot decode field ${r.typeName}.${n.name} from JSON: ${y(e)}`;
                        throw a instanceof Error && a.message.length > 0 && (s += `: ${a.message}`), new Error(s);
                    }
            }
        }
    } else if ("map" == n.kind) {
        if (null === a) return;
        if ("object" != typeof a || Array.isArray(a)) throw new Error(`cannot decode field ${r.typeName}.${n.name} from JSON: ${y(a)}`);
        const s = e[t];
        for (const [e, t] of Object.entries(a)){
            if (null === t) throw new Error(`cannot decode field ${r.typeName}.${n.name} from JSON: map value null`);
            let i;
            try {
                i = R(n.K, e);
            } catch (e) {
                let s = `cannot decode map key for field ${r.typeName}.${n.name} from JSON: ${y(a)}`;
                throw e instanceof Error && e.message.length > 0 && (s += `: ${e.message}`), new Error(s);
            }
            switch(n.V.kind){
                case "message":
                    s[i] = n.V.T.fromJson(t, o);
                    break;
                case "enum":
                    const e = f(n.V.T, t, o.ignoreUnknownFields, !0);
                    e !== v && (s[i] = e);
                    break;
                case "scalar":
                    try {
                        s[i] = I(n.V.T, t, T.LongType.BIGINT, !0);
                    } catch (e) {
                        let s = `cannot decode map value for field ${r.typeName}.${n.name} from JSON: ${y(a)}`;
                        throw e instanceof Error && e.message.length > 0 && (s += `: ${e.message}`), new Error(s);
                    }
            }
        }
    } else switch(n.oneof && (e = e[n.oneof.localName] = {
        case: t
    }, t = "value"), n.kind){
        case "message":
            const s = n.T;
            if (null === a && "google.protobuf.Value" != s.typeName) return;
            let i = e[t];
            (0, p.isMessage)(i) ? i.fromJson(a, o) : (e[t] = i = s.fromJson(a, o), s.fieldWrapper && !n.oneof && (e[t] = s.fieldWrapper.unwrapField(i)));
            break;
        case "enum":
            const l = f(n.T, a, o.ignoreUnknownFields, !1);
            switch(l){
                case E:
                    (0, m.clearField)(n, e);
                    break;
                case v:
                    break;
                default:
                    e[t] = l;
            }
            break;
        case "scalar":
            try {
                const s = I(n.T, a, n.L, !1);
                if (s === E) (0, m.clearField)(n, e);
                else e[t] = s;
            } catch (e) {
                let s = `cannot decode field ${r.typeName}.${n.name} from JSON: ${y(a)}`;
                throw e instanceof Error && e.message.length > 0 && (s += `: ${e.message}`), new Error(s);
            }
    }
}
function R(e, a) {
    if (e === T.ScalarType.BOOL) switch(a){
        case "true":
            a = !0;
            break;
        case "false":
            a = !1;
    }
    return I(e, a, T.LongType.BIGINT, !0).toString();
}
function I(e, a, n, t) {
    if (null === a) return t ? (0, d.scalarZeroValue)(e, n) : E;
    switch(e){
        case T.ScalarType.DOUBLE:
        case T.ScalarType.FLOAT:
            if ("NaN" === a) return Number.NaN;
            if ("Infinity" === a) return Number.POSITIVE_INFINITY;
            if ("-Infinity" === a) return Number.NEGATIVE_INFINITY;
            if ("" === a) break;
            if ("string" == typeof a && a.trim().length !== a.length) break;
            if ("string" != typeof a && "number" != typeof a) break;
            const t = Number(a);
            if (Number.isNaN(t)) break;
            if (!Number.isFinite(t)) break;
            return e == T.ScalarType.FLOAT && (0, s.assertFloat32)(t), t;
        case T.ScalarType.INT32:
        case T.ScalarType.FIXED32:
        case T.ScalarType.SFIXED32:
        case T.ScalarType.SINT32:
        case T.ScalarType.UINT32:
            let i;
            if ("number" == typeof a ? i = a : "string" == typeof a && a.length > 0 && a.trim().length === a.length && (i = Number(a)), void 0 === i) break;
            return e == T.ScalarType.UINT32 || e == T.ScalarType.FIXED32 ? (0, s.assertUInt32)(i) : (0, s.assertInt32)(i), i;
        case T.ScalarType.INT64:
        case T.ScalarType.SFIXED64:
        case T.ScalarType.SINT64:
            if ("number" != typeof a && "string" != typeof a) break;
            const m = o.protoInt64.parse(a);
            return n ? m.toString() : m;
        case T.ScalarType.FIXED64:
        case T.ScalarType.UINT64:
            if ("number" != typeof a && "string" != typeof a) break;
            const l = o.protoInt64.uParse(a);
            return n ? l.toString() : l;
        case T.ScalarType.BOOL:
            if ("boolean" != typeof a) break;
            return a;
        case T.ScalarType.STRING:
            if ("string" != typeof a) break;
            try {
                encodeURIComponent(a);
            } catch (e) {
                throw new Error("invalid UTF8");
            }
            return a;
        case T.ScalarType.BYTES:
            if ("" === a) return new Uint8Array(0);
            if ("string" != typeof a) break;
            return r.protoBase64.dec(a);
    }
    throw new Error;
}
function f(e, a, n, s) {
    if (null === a) return "google.protobuf.NullValue" == e.typeName ? 0 : s ? e.values[0].no : E;
    switch(typeof a){
        case "number":
            if (Number.isInteger(a)) return a;
            break;
        case "string":
            const s = e.findName(a);
            if (void 0 !== s) return s.no;
            if (n) return v;
    }
    throw new Error(`cannot decode enum ${e.typeName} from JSON: ${y(a)}`);
}
function N(e) {
    return !(!e.repeated && "map" != e.kind) || !e.oneof && "message" != e.kind && !e.opt && !e.req;
}
function O(e, a, n) {
    if ("map" == e.kind) {
        (0, s.assert)("object" == typeof a && null != a);
        const o = {}, r = Object.entries(a);
        switch(e.V.kind){
            case "scalar":
                for (const [a, n] of r)o[a.toString()] = A(e.V.T, n);
                break;
            case "message":
                for (const [e, a] of r)o[e.toString()] = a.toJson(n);
                break;
            case "enum":
                const a = e.V.T;
                for (const [e, s] of r)o[e.toString()] = h(a, s, n.enumAsInteger);
        }
        return n.emitDefaultValues || r.length > 0 ? o : void 0;
    }
    if (e.repeated) {
        (0, s.assert)(Array.isArray(a));
        const o = [];
        switch(e.kind){
            case "scalar":
                for(let n = 0; n < a.length; n++)o.push(A(e.T, a[n]));
                break;
            case "enum":
                for(let s = 0; s < a.length; s++)o.push(h(e.T, a[s], n.enumAsInteger));
                break;
            case "message":
                for(let e = 0; e < a.length; e++)o.push(a[e].toJson(n));
        }
        return n.emitDefaultValues || o.length > 0 ? o : void 0;
    }
    switch(e.kind){
        case "scalar":
            return A(e.T, a);
        case "enum":
            return h(e.T, a, n.enumAsInteger);
        case "message":
            return (0, l.wrapField)(e.T, a).toJson(n);
    }
}
function h(e, a, n) {
    var o;
    if ((0, s.assert)("number" == typeof a), "google.protobuf.NullValue" == e.typeName) return null;
    if (n) return a;
    const r = e.findNumber(a);
    return null !== (o = null == r ? void 0 : r.name) && void 0 !== o ? o : a;
}
function A(e, a) {
    switch(e){
        case T.ScalarType.INT32:
        case T.ScalarType.SFIXED32:
        case T.ScalarType.SINT32:
        case T.ScalarType.FIXED32:
        case T.ScalarType.UINT32:
            return (0, s.assert)("number" == typeof a), a;
        case T.ScalarType.FLOAT:
        case T.ScalarType.DOUBLE:
            return (0, s.assert)("number" == typeof a), Number.isNaN(a) ? "NaN" : a === Number.POSITIVE_INFINITY ? "Infinity" : a === Number.NEGATIVE_INFINITY ? "-Infinity" : a;
        case T.ScalarType.STRING:
            return (0, s.assert)("string" == typeof a), a;
        case T.ScalarType.BOOL:
            return (0, s.assert)("boolean" == typeof a), a;
        case T.ScalarType.UINT64:
        case T.ScalarType.FIXED64:
        case T.ScalarType.INT64:
        case T.ScalarType.SFIXED64:
        case T.ScalarType.SINT64:
            return (0, s.assert)("bigint" == typeof a || "string" == typeof a || "number" == typeof a), a.toString();
        case T.ScalarType.BYTES:
            return (0, s.assert)(a instanceof Uint8Array), r.protoBase64.enc(a);
    }
}
exports.makeJsonFormat = function() {
    return {
        makeReadOptions: u,
        makeWriteOptions: g,
        readMessage (e, a, n, s) {
            if (null == a || Array.isArray(a) || "object" != typeof a) throw new Error(`cannot decode message ${e.typeName} from JSON: ${y(a)}`);
            s = null != s ? s : new e;
            const o = new Map, r = n.typeRegistry;
            for (const [m, l] of Object.entries(a)){
                const a = e.fields.findJsonName(m);
                if (a) {
                    if (a.oneof) {
                        if (null === l && "scalar" == a.kind) continue;
                        const n = o.get(a.oneof);
                        if (void 0 !== n) throw new Error(`cannot decode message ${e.typeName} from JSON: multiple keys for oneof "${a.oneof.name}" present: "${n}", "${m}"`);
                        o.set(a.oneof, m);
                    }
                    S(s, l, a, n, e);
                } else {
                    let a = !1;
                    if ((null == r ? void 0 : r.findExtension) && m.startsWith("[") && m.endsWith("]")) {
                        const o = r.findExtension(m.substring(1, m.length - 1));
                        if (o && o.extendee.typeName == e.typeName) {
                            a = !0;
                            const [e, r] = (0, t.createExtensionContainer)(o);
                            S(e, l, o.field, n, o), (0, i.setExtension)(s, o, r(), n);
                        }
                    }
                    if (!a && !n.ignoreUnknownFields) throw new Error(`cannot decode message ${e.typeName} from JSON: key "${m}" is unknown`);
                }
            }
            return s;
        },
        writeMessage (e, a) {
            const n = e.getType(), s = {};
            let o;
            try {
                for (o of n.fields.byNumber()){
                    if (!(0, m.isFieldSet)(o, e)) {
                        if (o.req) throw "required field not set";
                        if (!a.emitDefaultValues) continue;
                        if (!N(o)) continue;
                    }
                    const n = O(o, o.oneof ? e[o.oneof.localName].value : e[o.localName], a);
                    void 0 !== n && (s[a.useProtoFieldName ? o.name : o.jsonName] = n);
                }
                const r = a.typeRegistry;
                if (null == r ? void 0 : r.findExtensionFor) for (const o of n.runtime.bin.listUnknownFields(e)){
                    const t = r.findExtensionFor(n.typeName, o.no);
                    if (t && (0, i.hasExtension)(e, t)) {
                        const n = (0, i.getExtension)(e, t, a), o = O(t.field, n, a);
                        void 0 !== o && (s[t.field.jsonName] = o);
                    }
                }
            } catch (e) {
                const a = o ? `cannot encode field ${n.typeName}.${o.name} to JSON` : `cannot encode message ${n.typeName} to JSON`, s = e instanceof Error ? e.message : String(e);
                throw new Error(a + (s.length > 0 ? `: ${s}` : ""));
            }
            return s;
        },
        readScalar: (e, a, n)=>I(e, a, null != n ? n : T.LongType.BIGINT, !0),
        writeScalar (e, a, n) {
            if (void 0 !== a) return n || (0, c.isScalarZeroValue)(e, a) ? A(e, a) : void 0;
        },
        debug: y
    };
};
