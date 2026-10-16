"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.makeUtilCommon = void 0;
const n = require("./module-609.js"), r = require("./module-1455.js"), o = require("./module-3408.js"), s = require("./module-2706.js");
function a(e) {
    if (void 0 === e) return e;
    if ((0, s.isMessage)(e)) return e.clone();
    if (e instanceof Uint8Array) {
        const A = new Uint8Array(e.byteLength);
        return A.set(e), A;
    }
    return e;
}
function i(e) {
    return e instanceof Uint8Array ? e : new Uint8Array(e);
}
exports.makeUtilCommon = function() {
    return {
        setEnumType: n.setEnumType,
        initPartial (e, A) {
            if (void 0 === e) return;
            const t = A.getType();
            for (const n of t.fields.byMember()){
                const t = n.localName, r = A, a = e;
                if (null != a[t]) switch(n.kind){
                    case "oneof":
                        const e = a[t].case;
                        if (void 0 === e) continue;
                        const A = n.findField(e);
                        let c = a[t].value;
                        A && "message" == A.kind && !(0, s.isMessage)(c, A.T) ? c = new A.T(c) : A && "scalar" === A.kind && A.T === o.ScalarType.BYTES && (c = i(c)), r[t] = {
                            case: e,
                            value: c
                        };
                        break;
                    case "scalar":
                    case "enum":
                        let l = a[t];
                        n.T === o.ScalarType.BYTES && (l = n.repeated ? l.map(i) : i(l)), r[t] = l;
                        break;
                    case "map":
                        switch(n.V.kind){
                            case "scalar":
                            case "enum":
                                if (n.V.T === o.ScalarType.BYTES) for (const [e, A] of Object.entries(a[t]))r[t][e] = i(A);
                                else Object.assign(r[t], a[t]);
                                break;
                            case "message":
                                const e = n.V.T;
                                for (const A of Object.keys(a[t])){
                                    let n = a[t][A];
                                    e.fieldWrapper || (n = new e(n)), r[t][A] = n;
                                }
                        }
                        break;
                    case "message":
                        const g = n.T;
                        if (n.repeated) r[t] = a[t].map((e)=>(0, s.isMessage)(e, g) ? e : new g(e));
                        else {
                            const e = a[t];
                            g.fieldWrapper ? "google.protobuf.BytesValue" === g.typeName ? r[t] = i(e) : r[t] = e : r[t] = (0, s.isMessage)(e, g) ? e : new g(e);
                        }
                }
            }
        },
        equals: (e, A, t)=>A === t || !(!A || !t) && e.fields.byMember().every((e)=>{
                const n = A[e.localName], s = t[e.localName];
                if (e.repeated) {
                    if (n.length !== s.length) return !1;
                    switch(e.kind){
                        case "message":
                            return n.every((A, t)=>e.T.equals(A, s[t]));
                        case "scalar":
                            return n.every((A, t)=>(0, r.scalarEquals)(e.T, A, s[t]));
                        case "enum":
                            return n.every((e, A)=>(0, r.scalarEquals)(o.ScalarType.INT32, e, s[A]));
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
                        const A = e.findField(n.case);
                        if (void 0 === A) return !0;
                        switch(A.kind){
                            case "message":
                                return A.T.equals(n.value, s.value);
                            case "enum":
                                return (0, r.scalarEquals)(o.ScalarType.INT32, n.value, s.value);
                            case "scalar":
                                return (0, r.scalarEquals)(A.T, n.value, s.value);
                        }
                        throw new Error(`oneof cannot contain ${A.kind}`);
                    case "map":
                        const t = Object.keys(n).concat(Object.keys(s));
                        switch(e.V.kind){
                            case "message":
                                const A = e.V.T;
                                return t.every((e)=>A.equals(n[e], s[e]));
                            case "enum":
                                return t.every((e)=>(0, r.scalarEquals)(o.ScalarType.INT32, n[e], s[e]));
                            case "scalar":
                                const a = e.V.T;
                                return t.every((e)=>(0, r.scalarEquals)(a, n[e], s[e]));
                        }
                }
            }),
        clone (e) {
            const A = e.getType(), t = new A, n = t;
            for (const t of A.fields.byMember()){
                const A = e[t.localName];
                let r;
                if (t.repeated) r = A.map(a);
                else if ("map" == t.kind) {
                    r = n[t.localName];
                    for (const [e, t] of Object.entries(A))r[e] = a(t);
                } else if ("oneof" == t.kind) {
                    r = t.findField(A.case) ? {
                        case: A.case,
                        value: a(A.value)
                    } : {
                        case: void 0
                    };
                } else r = a(A);
                n[t.localName] = r;
            }
            for (const t of A.runtime.bin.listUnknownFields(e))A.runtime.bin.onUnknownField(n, t.no, t.wireType, t.data);
            return t;
        }
    };
};
