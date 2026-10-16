"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.makeJsonFormat = void 0;
const n = require("./module-3098.js"), r = require("./module-1498.js"), o = require("./module-9526.js"), s = require("./module-1802.js"), a = require("./module-1771.js"), i = require("./module-8803.js"), c = require("./module-2212.js"), l = require("./module-1455.js"), g = require("./module-1455.js"), E = require("./module-3408.js"), u = require("./module-2706.js"), d = {
    ignoreUnknownFields: !1
}, I = {
    emitDefaultValues: !1,
    enumAsInteger: !1,
    useProtoFieldName: !1,
    prettySpaces: 0
};
function h(e) {
    return e ? Object.assign(Object.assign({}, d), e) : d;
}
function Q(e) {
    return e ? Object.assign(Object.assign({}, I), e) : I;
}
const m = Symbol(), C = Symbol();
function B(e) {
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
function p(e, A, t, r, o) {
    let s = t.localName;
    if (t.repeated) {
        if ((0, n.assert)("map" != t.kind), null === A) return;
        if (!Array.isArray(A)) throw new Error(`cannot decode field ${o.typeName}.${t.name} from JSON: ${B(A)}`);
        const a = e[s];
        for (const e of A){
            if (null === e) throw new Error(`cannot decode field ${o.typeName}.${t.name} from JSON: ${B(e)}`);
            switch(t.kind){
                case "message":
                    a.push(t.T.fromJson(e, r));
                    break;
                case "enum":
                    const A = T(t.T, e, r.ignoreUnknownFields, !0);
                    A !== C && a.push(A);
                    break;
                case "scalar":
                    try {
                        a.push(y(t.T, e, t.L, !0));
                    } catch (A) {
                        let n = `cannot decode field ${o.typeName}.${t.name} from JSON: ${B(e)}`;
                        throw A instanceof Error && A.message.length > 0 && (n += `: ${A.message}`), new Error(n);
                    }
            }
        }
    } else if ("map" == t.kind) {
        if (null === A) return;
        if ("object" != typeof A || Array.isArray(A)) throw new Error(`cannot decode field ${o.typeName}.${t.name} from JSON: ${B(A)}`);
        const n = e[s];
        for (const [e, s] of Object.entries(A)){
            if (null === s) throw new Error(`cannot decode field ${o.typeName}.${t.name} from JSON: map value null`);
            let a;
            try {
                a = f(t.K, e);
            } catch (e) {
                let n = `cannot decode map key for field ${o.typeName}.${t.name} from JSON: ${B(A)}`;
                throw e instanceof Error && e.message.length > 0 && (n += `: ${e.message}`), new Error(n);
            }
            switch(t.V.kind){
                case "message":
                    n[a] = t.V.T.fromJson(s, r);
                    break;
                case "enum":
                    const e = T(t.V.T, s, r.ignoreUnknownFields, !0);
                    e !== C && (n[a] = e);
                    break;
                case "scalar":
                    try {
                        n[a] = y(t.V.T, s, E.LongType.BIGINT, !0);
                    } catch (e) {
                        let n = `cannot decode map value for field ${o.typeName}.${t.name} from JSON: ${B(A)}`;
                        throw e instanceof Error && e.message.length > 0 && (n += `: ${e.message}`), new Error(n);
                    }
            }
        }
    } else switch(t.oneof && (e = e[t.oneof.localName] = {
        case: s
    }, s = "value"), t.kind){
        case "message":
            const n = t.T;
            if (null === A && "google.protobuf.Value" != n.typeName) return;
            let a = e[s];
            (0, u.isMessage)(a) ? a.fromJson(A, r) : (e[s] = a = n.fromJson(A, r), n.fieldWrapper && !t.oneof && (e[s] = n.fieldWrapper.unwrapField(a)));
            break;
        case "enum":
            const c = T(t.T, A, r.ignoreUnknownFields, !1);
            switch(c){
                case m:
                    (0, i.clearField)(t, e);
                    break;
                case C:
                    break;
                default:
                    e[s] = c;
            }
            break;
        case "scalar":
            try {
                const n = y(t.T, A, t.L, !1);
                if (n === m) (0, i.clearField)(t, e);
                else e[s] = n;
            } catch (e) {
                let n = `cannot decode field ${o.typeName}.${t.name} from JSON: ${B(A)}`;
                throw e instanceof Error && e.message.length > 0 && (n += `: ${e.message}`), new Error(n);
            }
    }
}
function f(e, A) {
    if (e === E.ScalarType.BOOL) switch(A){
        case "true":
            A = !0;
            break;
        case "false":
            A = !1;
    }
    return y(e, A, E.LongType.BIGINT, !0).toString();
}
function y(e, A, t, s) {
    if (null === A) return s ? (0, l.scalarZeroValue)(e, t) : m;
    switch(e){
        case E.ScalarType.DOUBLE:
        case E.ScalarType.FLOAT:
            if ("NaN" === A) return Number.NaN;
            if ("Infinity" === A) return Number.POSITIVE_INFINITY;
            if ("-Infinity" === A) return Number.NEGATIVE_INFINITY;
            if ("" === A) break;
            if ("string" == typeof A && A.trim().length !== A.length) break;
            if ("string" != typeof A && "number" != typeof A) break;
            const s = Number(A);
            if (Number.isNaN(s)) break;
            if (!Number.isFinite(s)) break;
            return e == E.ScalarType.FLOAT && (0, n.assertFloat32)(s), s;
        case E.ScalarType.INT32:
        case E.ScalarType.FIXED32:
        case E.ScalarType.SFIXED32:
        case E.ScalarType.SINT32:
        case E.ScalarType.UINT32:
            let a;
            if ("number" == typeof A ? a = A : "string" == typeof A && A.length > 0 && A.trim().length === A.length && (a = Number(A)), void 0 === a) break;
            return e == E.ScalarType.UINT32 || e == E.ScalarType.FIXED32 ? (0, n.assertUInt32)(a) : (0, n.assertInt32)(a), a;
        case E.ScalarType.INT64:
        case E.ScalarType.SFIXED64:
        case E.ScalarType.SINT64:
            if ("number" != typeof A && "string" != typeof A) break;
            const i = r.protoInt64.parse(A);
            return t ? i.toString() : i;
        case E.ScalarType.FIXED64:
        case E.ScalarType.UINT64:
            if ("number" != typeof A && "string" != typeof A) break;
            const c = r.protoInt64.uParse(A);
            return t ? c.toString() : c;
        case E.ScalarType.BOOL:
            if ("boolean" != typeof A) break;
            return A;
        case E.ScalarType.STRING:
            if ("string" != typeof A) break;
            try {
                encodeURIComponent(A);
            } catch (e) {
                throw new Error("invalid UTF8");
            }
            return A;
        case E.ScalarType.BYTES:
            if ("" === A) return new Uint8Array(0);
            if ("string" != typeof A) break;
            return o.protoBase64.dec(A);
    }
    throw new Error;
}
function T(e, A, t, n) {
    if (null === A) return "google.protobuf.NullValue" == e.typeName ? 0 : n ? e.values[0].no : m;
    switch(typeof A){
        case "number":
            if (Number.isInteger(A)) return A;
            break;
        case "string":
            const n = e.findName(A);
            if (void 0 !== n) return n.no;
            if (t) return C;
    }
    throw new Error(`cannot decode enum ${e.typeName} from JSON: ${B(A)}`);
}
function k(e) {
    return !(!e.repeated && "map" != e.kind) || !e.oneof && "message" != e.kind && !e.opt && !e.req;
}
function w(e, A, t) {
    if ("map" == e.kind) {
        (0, n.assert)("object" == typeof A && null != A);
        const r = {}, o = Object.entries(A);
        switch(e.V.kind){
            case "scalar":
                for (const [A, t] of o)r[A.toString()] = D(e.V.T, t);
                break;
            case "message":
                for (const [e, A] of o)r[e.toString()] = A.toJson(t);
                break;
            case "enum":
                const A = e.V.T;
                for (const [e, n] of o)r[e.toString()] = N(A, n, t.enumAsInteger);
        }
        return t.emitDefaultValues || o.length > 0 ? r : void 0;
    }
    if (e.repeated) {
        (0, n.assert)(Array.isArray(A));
        const r = [];
        switch(e.kind){
            case "scalar":
                for(let t = 0; t < A.length; t++)r.push(D(e.T, A[t]));
                break;
            case "enum":
                for(let n = 0; n < A.length; n++)r.push(N(e.T, A[n], t.enumAsInteger));
                break;
            case "message":
                for(let e = 0; e < A.length; e++)r.push(A[e].toJson(t));
        }
        return t.emitDefaultValues || r.length > 0 ? r : void 0;
    }
    switch(e.kind){
        case "scalar":
            return D(e.T, A);
        case "enum":
            return N(e.T, A, t.enumAsInteger);
        case "message":
            return (0, c.wrapField)(e.T, A).toJson(t);
    }
}
function N(e, A, t) {
    var r;
    if ((0, n.assert)("number" == typeof A), "google.protobuf.NullValue" == e.typeName) return null;
    if (t) return A;
    const o = e.findNumber(A);
    return null !== (r = null == o ? void 0 : o.name) && void 0 !== r ? r : A;
}
function D(e, A) {
    switch(e){
        case E.ScalarType.INT32:
        case E.ScalarType.SFIXED32:
        case E.ScalarType.SINT32:
        case E.ScalarType.FIXED32:
        case E.ScalarType.UINT32:
            return (0, n.assert)("number" == typeof A), A;
        case E.ScalarType.FLOAT:
        case E.ScalarType.DOUBLE:
            return (0, n.assert)("number" == typeof A), Number.isNaN(A) ? "NaN" : A === Number.POSITIVE_INFINITY ? "Infinity" : A === Number.NEGATIVE_INFINITY ? "-Infinity" : A;
        case E.ScalarType.STRING:
            return (0, n.assert)("string" == typeof A), A;
        case E.ScalarType.BOOL:
            return (0, n.assert)("boolean" == typeof A), A;
        case E.ScalarType.UINT64:
        case E.ScalarType.FIXED64:
        case E.ScalarType.INT64:
        case E.ScalarType.SFIXED64:
        case E.ScalarType.SINT64:
            return (0, n.assert)("bigint" == typeof A || "string" == typeof A || "number" == typeof A), A.toString();
        case E.ScalarType.BYTES:
            return (0, n.assert)(A instanceof Uint8Array), o.protoBase64.enc(A);
    }
}
exports.makeJsonFormat = function() {
    return {
        makeReadOptions: h,
        makeWriteOptions: Q,
        readMessage (e, A, t, n) {
            if (null == A || Array.isArray(A) || "object" != typeof A) throw new Error(`cannot decode message ${e.typeName} from JSON: ${B(A)}`);
            n = null != n ? n : new e;
            const r = new Map, o = t.typeRegistry;
            for (const [i, c] of Object.entries(A)){
                const A = e.fields.findJsonName(i);
                if (A) {
                    if (A.oneof) {
                        if (null === c && "scalar" == A.kind) continue;
                        const t = r.get(A.oneof);
                        if (void 0 !== t) throw new Error(`cannot decode message ${e.typeName} from JSON: multiple keys for oneof "${A.oneof.name}" present: "${t}", "${i}"`);
                        r.set(A.oneof, i);
                    }
                    p(n, c, A, t, e);
                } else {
                    let A = !1;
                    if ((null == o ? void 0 : o.findExtension) && i.startsWith("[") && i.endsWith("]")) {
                        const r = o.findExtension(i.substring(1, i.length - 1));
                        if (r && r.extendee.typeName == e.typeName) {
                            A = !0;
                            const [e, o] = (0, s.createExtensionContainer)(r);
                            p(e, c, r.field, t, r), (0, a.setExtension)(n, r, o(), t);
                        }
                    }
                    if (!A && !t.ignoreUnknownFields) throw new Error(`cannot decode message ${e.typeName} from JSON: key "${i}" is unknown`);
                }
            }
            return n;
        },
        writeMessage (e, A) {
            const t = e.getType(), n = {};
            let r;
            try {
                for (r of t.fields.byNumber()){
                    if (!(0, i.isFieldSet)(r, e)) {
                        if (r.req) throw "required field not set";
                        if (!A.emitDefaultValues) continue;
                        if (!k(r)) continue;
                    }
                    const t = w(r, r.oneof ? e[r.oneof.localName].value : e[r.localName], A);
                    void 0 !== t && (n[A.useProtoFieldName ? r.name : r.jsonName] = t);
                }
                const o = A.typeRegistry;
                if (null == o ? void 0 : o.findExtensionFor) for (const r of t.runtime.bin.listUnknownFields(e)){
                    const s = o.findExtensionFor(t.typeName, r.no);
                    if (s && (0, a.hasExtension)(e, s)) {
                        const t = (0, a.getExtension)(e, s, A), r = w(s.field, t, A);
                        void 0 !== r && (n[s.field.jsonName] = r);
                    }
                }
            } catch (e) {
                const A = r ? `cannot encode field ${t.typeName}.${r.name} to JSON` : `cannot encode message ${t.typeName} to JSON`, n = e instanceof Error ? e.message : String(e);
                throw new Error(A + (n.length > 0 ? `: ${n}` : ""));
            }
            return n;
        },
        readScalar: (e, A, t)=>y(e, A, null != t ? t : E.LongType.BIGINT, !0),
        writeScalar (e, A, t) {
            if (void 0 !== A) return t || (0, g.isScalarZeroValue)(e, A) ? D(e, A) : void 0;
        },
        debug: B
    };
};
