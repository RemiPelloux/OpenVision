Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.makeJsonFormat = void 0;
const o = require("./module-98.js"), s = require("./module-498.js"), t = require("./module-526.js"), r = require("./module-802.js"), i = require("./module-771.js"), m = require("./module-803.js"), l = require("./module-212.js"), d = require("./module-455.js"), c = require("./module-455.js"), T = require("./module-408.js"), _ = require("./module-706.js"), p = {
    ignoreUnknownFields: !1
}, u = {
    emitDefaultValues: !1,
    enumAsInteger: !1,
    useProtoFieldName: !1,
    prettySpaces: 0
};
function k(e) {
    return e ? Object.assign(Object.assign({}, p), e) : p;
}
function g(e) {
    return e ? Object.assign(Object.assign({}, u), e) : u;
}
const E = Symbol(), f = Symbol();
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
function v(e, a, n, s, t) {
    let r = n.localName;
    if (n.repeated) {
        if ((0, o.assert)("map" != n.kind), null === a) return;
        if (!Array.isArray(a)) throw new Error(`cannot decode field ${t.typeName}.${n.name} from JSON: ${N(a)}`);
        const i = e[r];
        for (const e of a){
            if (null === e) throw new Error(`cannot decode field ${t.typeName}.${n.name} from JSON: ${N(e)}`);
            switch(n.kind){
                case "message":
                    i.push(n.T.fromJson(e, s));
                    break;
                case "enum":
                    const a = R(n.T, e, s.ignoreUnknownFields, !0);
                    a !== f && i.push(a);
                    break;
                case "scalar":
                    try {
                        i.push(S(n.T, e, n.L, !0));
                    } catch (a) {
                        let o = `cannot decode field ${t.typeName}.${n.name} from JSON: ${N(e)}`;
                        throw a instanceof Error && a.message.length > 0 && (o += `: ${a.message}`), new Error(o);
                    }
            }
        }
    } else if ("map" == n.kind) {
        if (null === a) return;
        if ("object" != typeof a || Array.isArray(a)) throw new Error(`cannot decode field ${t.typeName}.${n.name} from JSON: ${N(a)}`);
        const o = e[r];
        for (const [e, r] of Object.entries(a)){
            if (null === r) throw new Error(`cannot decode field ${t.typeName}.${n.name} from JSON: map value null`);
            let i;
            try {
                i = y(n.K, e);
            } catch (e) {
                let o = `cannot decode map key for field ${t.typeName}.${n.name} from JSON: ${N(a)}`;
                throw e instanceof Error && e.message.length > 0 && (o += `: ${e.message}`), new Error(o);
            }
            switch(n.V.kind){
                case "message":
                    o[i] = n.V.T.fromJson(r, s);
                    break;
                case "enum":
                    const e = R(n.V.T, r, s.ignoreUnknownFields, !0);
                    e !== f && (o[i] = e);
                    break;
                case "scalar":
                    try {
                        o[i] = S(n.V.T, r, T.LongType.BIGINT, !0);
                    } catch (e) {
                        let o = `cannot decode map value for field ${t.typeName}.${n.name} from JSON: ${N(a)}`;
                        throw e instanceof Error && e.message.length > 0 && (o += `: ${e.message}`), new Error(o);
                    }
            }
        }
    } else switch(n.oneof && (e = e[n.oneof.localName] = {
        case: r
    }, r = "value"), n.kind){
        case "message":
            const o = n.T;
            if (null === a && "google.protobuf.Value" != o.typeName) return;
            let i = e[r];
            (0, _.isMessage)(i) ? i.fromJson(a, s) : (e[r] = i = o.fromJson(a, s), o.fieldWrapper && !n.oneof && (e[r] = o.fieldWrapper.unwrapField(i)));
            break;
        case "enum":
            const l = R(n.T, a, s.ignoreUnknownFields, !1);
            switch(l){
                case E:
                    (0, m.clearField)(n, e);
                    break;
                case f:
                    break;
                default:
                    e[r] = l;
            }
            break;
        case "scalar":
            try {
                const o = S(n.T, a, n.L, !1);
                if (o === E) (0, m.clearField)(n, e);
                else e[r] = o;
            } catch (e) {
                let o = `cannot decode field ${t.typeName}.${n.name} from JSON: ${N(a)}`;
                throw e instanceof Error && e.message.length > 0 && (o += `: ${e.message}`), new Error(o);
            }
    }
}
function y(e, a) {
    if (e === T.ScalarType.BOOL) switch(a){
        case "true":
            a = !0;
            break;
        case "false":
            a = !1;
    }
    return S(e, a, T.LongType.BIGINT, !0).toString();
}
function S(e, a, n, r) {
    if (null === a) return r ? (0, d.scalarZeroValue)(e, n) : E;
    switch(e){
        case T.ScalarType.DOUBLE:
        case T.ScalarType.FLOAT:
            if ("NaN" === a) return Number.NaN;
            if ("Infinity" === a) return Number.POSITIVE_INFINITY;
            if ("-Infinity" === a) return Number.NEGATIVE_INFINITY;
            if ("" === a) break;
            if ("string" == typeof a && a.trim().length !== a.length) break;
            if ("string" != typeof a && "number" != typeof a) break;
            const r = Number(a);
            if (Number.isNaN(r)) break;
            if (!Number.isFinite(r)) break;
            return e == T.ScalarType.FLOAT && (0, o.assertFloat32)(r), r;
        case T.ScalarType.INT32:
        case T.ScalarType.FIXED32:
        case T.ScalarType.SFIXED32:
        case T.ScalarType.SINT32:
        case T.ScalarType.UINT32:
            let i;
            if ("number" == typeof a ? i = a : "string" == typeof a && a.length > 0 && a.trim().length === a.length && (i = Number(a)), void 0 === i) break;
            return e == T.ScalarType.UINT32 || e == T.ScalarType.FIXED32 ? (0, o.assertUInt32)(i) : (0, o.assertInt32)(i), i;
        case T.ScalarType.INT64:
        case T.ScalarType.SFIXED64:
        case T.ScalarType.SINT64:
            if ("number" != typeof a && "string" != typeof a) break;
            const m = s.protoInt64.parse(a);
            return n ? m.toString() : m;
        case T.ScalarType.FIXED64:
        case T.ScalarType.UINT64:
            if ("number" != typeof a && "string" != typeof a) break;
            const l = s.protoInt64.uParse(a);
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
            return t.protoBase64.dec(a);
    }
    throw new Error;
}
function R(e, a, n, o) {
    if (null === a) return "google.protobuf.NullValue" == e.typeName ? 0 : o ? e.values[0].no : E;
    switch(typeof a){
        case "number":
            if (Number.isInteger(a)) return a;
            break;
        case "string":
            const o = e.findName(a);
            if (void 0 !== o) return o.no;
            if (n) return f;
    }
    throw new Error(`cannot decode enum ${e.typeName} from JSON: ${N(a)}`);
}
function I(e) {
    return !(!e.repeated && "map" != e.kind) || !e.oneof && "message" != e.kind && !e.opt && !e.req;
}
function O(e, a, n) {
    if ("map" == e.kind) {
        (0, o.assert)("object" == typeof a && null != a);
        const s = {}, t = Object.entries(a);
        switch(e.V.kind){
            case "scalar":
                for (const [a, n] of t)s[a.toString()] = C(e.V.T, n);
                break;
            case "message":
                for (const [e, a] of t)s[e.toString()] = a.toJson(n);
                break;
            case "enum":
                const a = e.V.T;
                for (const [e, o] of t)s[e.toString()] = A(a, o, n.enumAsInteger);
        }
        return n.emitDefaultValues || t.length > 0 ? s : void 0;
    }
    if (e.repeated) {
        (0, o.assert)(Array.isArray(a));
        const s = [];
        switch(e.kind){
            case "scalar":
                for(let n = 0; n < a.length; n++)s.push(C(e.T, a[n]));
                break;
            case "enum":
                for(let o = 0; o < a.length; o++)s.push(A(e.T, a[o], n.enumAsInteger));
                break;
            case "message":
                for(let e = 0; e < a.length; e++)s.push(a[e].toJson(n));
        }
        return n.emitDefaultValues || s.length > 0 ? s : void 0;
    }
    switch(e.kind){
        case "scalar":
            return C(e.T, a);
        case "enum":
            return A(e.T, a, n.enumAsInteger);
        case "message":
            return (0, l.wrapField)(e.T, a).toJson(n);
    }
}
function A(e, a, n) {
    var s;
    if ((0, o.assert)("number" == typeof a), "google.protobuf.NullValue" == e.typeName) return null;
    if (n) return a;
    const t = e.findNumber(a);
    return null !== (s = null == t ? void 0 : t.name) && void 0 !== s ? s : a;
}
function C(e, a) {
    switch(e){
        case T.ScalarType.INT32:
        case T.ScalarType.SFIXED32:
        case T.ScalarType.SINT32:
        case T.ScalarType.FIXED32:
        case T.ScalarType.UINT32:
            return (0, o.assert)("number" == typeof a), a;
        case T.ScalarType.FLOAT:
        case T.ScalarType.DOUBLE:
            return (0, o.assert)("number" == typeof a), Number.isNaN(a) ? "NaN" : a === Number.POSITIVE_INFINITY ? "Infinity" : a === Number.NEGATIVE_INFINITY ? "-Infinity" : a;
        case T.ScalarType.STRING:
            return (0, o.assert)("string" == typeof a), a;
        case T.ScalarType.BOOL:
            return (0, o.assert)("boolean" == typeof a), a;
        case T.ScalarType.UINT64:
        case T.ScalarType.FIXED64:
        case T.ScalarType.INT64:
        case T.ScalarType.SFIXED64:
        case T.ScalarType.SINT64:
            return (0, o.assert)("bigint" == typeof a || "string" == typeof a || "number" == typeof a), a.toString();
        case T.ScalarType.BYTES:
            return (0, o.assert)(a instanceof Uint8Array), t.protoBase64.enc(a);
    }
}
exports.makeJsonFormat = function() {
    return {
        makeReadOptions: k,
        makeWriteOptions: g,
        readMessage (e, a, n, o) {
            if (null == a || Array.isArray(a) || "object" != typeof a) throw new Error(`cannot decode message ${e.typeName} from JSON: ${N(a)}`);
            o = null != o ? o : new e;
            const s = new Map, t = n.typeRegistry;
            for (const [m, l] of Object.entries(a)){
                const a = e.fields.findJsonName(m);
                if (a) {
                    if (a.oneof) {
                        if (null === l && "scalar" == a.kind) continue;
                        const n = s.get(a.oneof);
                        if (void 0 !== n) throw new Error(`cannot decode message ${e.typeName} from JSON: multiple keys for oneof "${a.oneof.name}" present: "${n}", "${m}"`);
                        s.set(a.oneof, m);
                    }
                    v(o, l, a, n, e);
                } else {
                    let a = !1;
                    if ((null == t ? void 0 : t.findExtension) && m.startsWith("[") && m.endsWith("]")) {
                        const s = t.findExtension(m.substring(1, m.length - 1));
                        if (s && s.extendee.typeName == e.typeName) {
                            a = !0;
                            const [e, t] = (0, r.createExtensionContainer)(s);
                            v(e, l, s.field, n, s), (0, i.setExtension)(o, s, t(), n);
                        }
                    }
                    if (!a && !n.ignoreUnknownFields) throw new Error(`cannot decode message ${e.typeName} from JSON: key "${m}" is unknown`);
                }
            }
            return o;
        },
        writeMessage (e, a) {
            const n = e.getType(), o = {};
            let s;
            try {
                for (s of n.fields.byNumber()){
                    if (!(0, m.isFieldSet)(s, e)) {
                        if (s.req) throw "required field not set";
                        if (!a.emitDefaultValues) continue;
                        if (!I(s)) continue;
                    }
                    const n = O(s, s.oneof ? e[s.oneof.localName].value : e[s.localName], a);
                    void 0 !== n && (o[a.useProtoFieldName ? s.name : s.jsonName] = n);
                }
                const t = a.typeRegistry;
                if (null == t ? void 0 : t.findExtensionFor) for (const s of n.runtime.bin.listUnknownFields(e)){
                    const r = t.findExtensionFor(n.typeName, s.no);
                    if (r && (0, i.hasExtension)(e, r)) {
                        const n = (0, i.getExtension)(e, r, a), s = O(r.field, n, a);
                        void 0 !== s && (o[r.field.jsonName] = s);
                    }
                }
            } catch (e) {
                const a = s ? `cannot encode field ${n.typeName}.${s.name} to JSON` : `cannot encode message ${n.typeName} to JSON`, o = e instanceof Error ? e.message : String(e);
                throw new Error(a + (o.length > 0 ? `: ${o}` : ""));
            }
            return o;
        },
        readScalar: (e, a, n)=>S(e, a, null != n ? n : T.LongType.BIGINT, !0),
        writeScalar (e, a, n) {
            if (void 0 !== a) return n || (0, c.isScalarZeroValue)(e, a) ? C(e, a) : void 0;
        },
        debug: N
    };
};
