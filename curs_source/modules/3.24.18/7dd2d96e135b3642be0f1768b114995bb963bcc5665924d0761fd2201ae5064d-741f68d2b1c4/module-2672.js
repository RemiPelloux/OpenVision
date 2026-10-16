"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.makeUtilCommon = void 0;
const a = require("./module-609.js"), s = require("./module-1455.js"), o = require("./module-3408.js"), r = require("./module-2706.js");
function i(e) {
    if (void 0 === e) return e;
    if ((0, r.isMessage)(e)) return e.clone();
    if (e instanceof Uint8Array) {
        const n = new Uint8Array(e.byteLength);
        return n.set(e), n;
    }
    return e;
}
function A(e) {
    return e instanceof Uint8Array ? e : new Uint8Array(e);
}
exports.makeUtilCommon = function() {
    return {
        setEnumType: a.setEnumType,
        initPartial (e, n) {
            if (void 0 === e) return;
            const t = n.getType();
            for (const a of t.fields.byMember()){
                const t = a.localName, s = n, i = e;
                if (null != i[t]) switch(a.kind){
                    case "oneof":
                        const e = i[t].case;
                        if (void 0 === e) continue;
                        const n = a.findField(e);
                        let c = i[t].value;
                        n && "message" == n.kind && !(0, r.isMessage)(c, n.T) ? c = new n.T(c) : n && "scalar" === n.kind && n.T === o.ScalarType.BYTES && (c = A(c)), s[t] = {
                            case: e,
                            value: c
                        };
                        break;
                    case "scalar":
                    case "enum":
                        let l = i[t];
                        a.T === o.ScalarType.BYTES && (l = a.repeated ? l.map(A) : A(l)), s[t] = l;
                        break;
                    case "map":
                        switch(a.V.kind){
                            case "scalar":
                            case "enum":
                                if (a.V.T === o.ScalarType.BYTES) for (const [e, n] of Object.entries(i[t]))s[t][e] = A(n);
                                else Object.assign(s[t], i[t]);
                                break;
                            case "message":
                                const e = a.V.T;
                                for (const n of Object.keys(i[t])){
                                    let a = i[t][n];
                                    e.fieldWrapper || (a = new e(a)), s[t][n] = a;
                                }
                        }
                        break;
                    case "message":
                        const d = a.T;
                        if (a.repeated) s[t] = i[t].map((e)=>(0, r.isMessage)(e, d) ? e : new d(e));
                        else {
                            const e = i[t];
                            d.fieldWrapper ? "google.protobuf.BytesValue" === d.typeName ? s[t] = A(e) : s[t] = e : s[t] = (0, r.isMessage)(e, d) ? e : new d(e);
                        }
                }
            }
        },
        equals: (e, n, t)=>n === t || !(!n || !t) && e.fields.byMember().every((e)=>{
                const a = n[e.localName], r = t[e.localName];
                if (e.repeated) {
                    if (a.length !== r.length) return !1;
                    switch(e.kind){
                        case "message":
                            return a.every((n, t)=>e.T.equals(n, r[t]));
                        case "scalar":
                            return a.every((n, t)=>(0, s.scalarEquals)(e.T, n, r[t]));
                        case "enum":
                            return a.every((e, n)=>(0, s.scalarEquals)(o.ScalarType.INT32, e, r[n]));
                    }
                    throw new Error(`repeated cannot contain ${e.kind}`);
                }
                switch(e.kind){
                    case "message":
                        return e.T.equals(a, r);
                    case "enum":
                        return (0, s.scalarEquals)(o.ScalarType.INT32, a, r);
                    case "scalar":
                        return (0, s.scalarEquals)(e.T, a, r);
                    case "oneof":
                        if (a.case !== r.case) return !1;
                        const n = e.findField(a.case);
                        if (void 0 === n) return !0;
                        switch(n.kind){
                            case "message":
                                return n.T.equals(a.value, r.value);
                            case "enum":
                                return (0, s.scalarEquals)(o.ScalarType.INT32, a.value, r.value);
                            case "scalar":
                                return (0, s.scalarEquals)(n.T, a.value, r.value);
                        }
                        throw new Error(`oneof cannot contain ${n.kind}`);
                    case "map":
                        const t = Object.keys(a).concat(Object.keys(r));
                        switch(e.V.kind){
                            case "message":
                                const n = e.V.T;
                                return t.every((e)=>n.equals(a[e], r[e]));
                            case "enum":
                                return t.every((e)=>(0, s.scalarEquals)(o.ScalarType.INT32, a[e], r[e]));
                            case "scalar":
                                const i = e.V.T;
                                return t.every((e)=>(0, s.scalarEquals)(i, a[e], r[e]));
                        }
                }
            }),
        clone (e) {
            const n = e.getType(), t = new n, a = t;
            for (const t of n.fields.byMember()){
                const n = e[t.localName];
                let s;
                if (t.repeated) s = n.map(i);
                else if ("map" == t.kind) {
                    s = a[t.localName];
                    for (const [e, t] of Object.entries(n))s[e] = i(t);
                } else if ("oneof" == t.kind) {
                    s = t.findField(n.case) ? {
                        case: n.case,
                        value: i(n.value)
                    } : {
                        case: void 0
                    };
                } else s = i(n);
                a[t.localName] = s;
            }
            for (const t of n.runtime.bin.listUnknownFields(e))n.runtime.bin.onUnknownField(a, t.no, t.wireType, t.data);
            return t;
        }
    };
};
