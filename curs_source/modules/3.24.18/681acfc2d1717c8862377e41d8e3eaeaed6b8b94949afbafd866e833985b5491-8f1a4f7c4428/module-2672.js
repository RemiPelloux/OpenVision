"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.makeUtilCommon = void 0;
const n = require("./module-609.js"), r = require("./module-1455.js"), o = require("./module-3408.js"), s = require("./module-2706.js");
function i(e) {
    if (void 0 === e) return e;
    if ((0, s.isMessage)(e)) return e.clone();
    if (e instanceof Uint8Array) {
        const t = new Uint8Array(e.byteLength);
        return t.set(e), t;
    }
    return e;
}
function a(e) {
    return e instanceof Uint8Array ? e : new Uint8Array(e);
}
exports.makeUtilCommon = function() {
    return {
        setEnumType: n.setEnumType,
        initPartial (e, t) {
            if (void 0 === e) return;
            const A = t.getType();
            for (const n of A.fields.byMember()){
                const A = n.localName, r = t, i = e;
                if (null != i[A]) switch(n.kind){
                    case "oneof":
                        const e = i[A].case;
                        if (void 0 === e) continue;
                        const t = n.findField(e);
                        let c = i[A].value;
                        t && "message" == t.kind && !(0, s.isMessage)(c, t.T) ? c = new t.T(c) : t && "scalar" === t.kind && t.T === o.ScalarType.BYTES && (c = a(c)), r[A] = {
                            case: e,
                            value: c
                        };
                        break;
                    case "scalar":
                    case "enum":
                        let l = i[A];
                        n.T === o.ScalarType.BYTES && (l = n.repeated ? l.map(a) : a(l)), r[A] = l;
                        break;
                    case "map":
                        switch(n.V.kind){
                            case "scalar":
                            case "enum":
                                if (n.V.T === o.ScalarType.BYTES) for (const [e, t] of Object.entries(i[A]))r[A][e] = a(t);
                                else Object.assign(r[A], i[A]);
                                break;
                            case "message":
                                const e = n.V.T;
                                for (const t of Object.keys(i[A])){
                                    let n = i[A][t];
                                    e.fieldWrapper || (n = new e(n)), r[A][t] = n;
                                }
                        }
                        break;
                    case "message":
                        const u = n.T;
                        if (n.repeated) r[A] = i[A].map((e)=>(0, s.isMessage)(e, u) ? e : new u(e));
                        else {
                            const e = i[A];
                            u.fieldWrapper ? "google.protobuf.BytesValue" === u.typeName ? r[A] = a(e) : r[A] = e : r[A] = (0, s.isMessage)(e, u) ? e : new u(e);
                        }
                }
            }
        },
        equals: (e, t, A)=>t === A || !(!t || !A) && e.fields.byMember().every((e)=>{
                const n = t[e.localName], s = A[e.localName];
                if (e.repeated) {
                    if (n.length !== s.length) return !1;
                    switch(e.kind){
                        case "message":
                            return n.every((t, A)=>e.T.equals(t, s[A]));
                        case "scalar":
                            return n.every((t, A)=>(0, r.scalarEquals)(e.T, t, s[A]));
                        case "enum":
                            return n.every((e, t)=>(0, r.scalarEquals)(o.ScalarType.INT32, e, s[t]));
                    }
                    throw new Error(`repeated cannot contain ${e.kind}`);
                }
                switch(e.kind){
                    case "message":
                        return e.T.equals(n, s);
                    case "enum":
                        return (0, r.scalarEquals)(o.ScalarType.INT32, n, s);
                    case "scalar":
                        return (0, r.scalarEquals)(e.T, n, s);
                    case "oneof":
                        if (n.case !== s.case) return !1;
                        const t = e.findField(n.case);
                        if (void 0 === t) return !0;
                        switch(t.kind){
                            case "message":
                                return t.T.equals(n.value, s.value);
                            case "enum":
                                return (0, r.scalarEquals)(o.ScalarType.INT32, n.value, s.value);
                            case "scalar":
                                return (0, r.scalarEquals)(t.T, n.value, s.value);
                        }
                        throw new Error(`oneof cannot contain ${t.kind}`);
                    case "map":
                        const A = Object.keys(n).concat(Object.keys(s));
                        switch(e.V.kind){
                            case "message":
                                const t = e.V.T;
                                return A.every((e)=>t.equals(n[e], s[e]));
                            case "enum":
                                return A.every((e)=>(0, r.scalarEquals)(o.ScalarType.INT32, n[e], s[e]));
                            case "scalar":
                                const i = e.V.T;
                                return A.every((e)=>(0, r.scalarEquals)(i, n[e], s[e]));
                        }
                }
            }),
        clone (e) {
            const t = e.getType(), A = new t, n = A;
            for (const A of t.fields.byMember()){
                const t = e[A.localName];
                let r;
                if (A.repeated) r = t.map(i);
                else if ("map" == A.kind) {
                    r = n[A.localName];
                    for (const [e, A] of Object.entries(t))r[e] = i(A);
                } else if ("oneof" == A.kind) {
                    r = A.findField(t.case) ? {
                        case: t.case,
                        value: i(t.value)
                    } : {
                        case: void 0
                    };
                } else r = i(t);
                n[A.localName] = r;
            }
            for (const A of t.runtime.bin.listUnknownFields(e))t.runtime.bin.onUnknownField(n, A.no, A.wireType, A.data);
            return A;
        }
    };
};
