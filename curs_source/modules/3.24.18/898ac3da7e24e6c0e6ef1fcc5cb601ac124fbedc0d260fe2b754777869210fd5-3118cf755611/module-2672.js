"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.makeUtilCommon = void 0;
const t = require("./module-609.js"), s = require("./module-1455.js"), o = require("./module-3408.js"), r = require("./module-2706.js");
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
        setEnumType: t.setEnumType,
        initPartial (e, n) {
            if (void 0 === e) return;
            const a = n.getType();
            for (const t of a.fields.byMember()){
                const a = t.localName, s = n, i = e;
                if (null != i[a]) switch(t.kind){
                    case "oneof":
                        const e = i[a].case;
                        if (void 0 === e) continue;
                        const n = t.findField(e);
                        let l = i[a].value;
                        n && "message" == n.kind && !(0, r.isMessage)(l, n.T) ? l = new n.T(l) : n && "scalar" === n.kind && n.T === o.ScalarType.BYTES && (l = A(l)), s[a] = {
                            case: e,
                            value: l
                        };
                        break;
                    case "scalar":
                    case "enum":
                        let c = i[a];
                        t.T === o.ScalarType.BYTES && (c = t.repeated ? c.map(A) : A(c)), s[a] = c;
                        break;
                    case "map":
                        switch(t.V.kind){
                            case "scalar":
                            case "enum":
                                if (t.V.T === o.ScalarType.BYTES) for (const [e, n] of Object.entries(i[a]))s[a][e] = A(n);
                                else Object.assign(s[a], i[a]);
                                break;
                            case "message":
                                const e = t.V.T;
                                for (const n of Object.keys(i[a])){
                                    let t = i[a][n];
                                    e.fieldWrapper || (t = new e(t)), s[a][n] = t;
                                }
                        }
                        break;
                    case "message":
                        const m = t.T;
                        if (t.repeated) s[a] = i[a].map((e)=>(0, r.isMessage)(e, m) ? e : new m(e));
                        else {
                            const e = i[a];
                            m.fieldWrapper ? "google.protobuf.BytesValue" === m.typeName ? s[a] = A(e) : s[a] = e : s[a] = (0, r.isMessage)(e, m) ? e : new m(e);
                        }
                }
            }
        },
        equals: (e, n, a)=>n === a || !(!n || !a) && e.fields.byMember().every((e)=>{
                const t = n[e.localName], r = a[e.localName];
                if (e.repeated) {
                    if (t.length !== r.length) return !1;
                    switch(e.kind){
                        case "message":
                            return t.every((n, a)=>e.T.equals(n, r[a]));
                        case "scalar":
                            return t.every((n, a)=>(0, s.scalarEquals)(e.T, n, r[a]));
                        case "enum":
                            return t.every((e, n)=>(0, s.scalarEquals)(o.ScalarType.INT32, e, r[n]));
                    }
                    throw new Error(`repeated cannot contain ${e.kind}`);
                }
                switch(e.kind){
                    case "message":
                        return e.T.equals(t, r);
                    case "enum":
                        return (0, s.scalarEquals)(o.ScalarType.INT32, t, r);
                    case "scalar":
                        return (0, s.scalarEquals)(e.T, t, r);
                    case "oneof":
                        if (t.case !== r.case) return !1;
                        const n = e.findField(t.case);
                        if (void 0 === n) return !0;
                        switch(n.kind){
                            case "message":
                                return n.T.equals(t.value, r.value);
                            case "enum":
                                return (0, s.scalarEquals)(o.ScalarType.INT32, t.value, r.value);
                            case "scalar":
                                return (0, s.scalarEquals)(n.T, t.value, r.value);
                        }
                        throw new Error(`oneof cannot contain ${n.kind}`);
                    case "map":
                        const a = Object.keys(t).concat(Object.keys(r));
                        switch(e.V.kind){
                            case "message":
                                const n = e.V.T;
                                return a.every((e)=>n.equals(t[e], r[e]));
                            case "enum":
                                return a.every((e)=>(0, s.scalarEquals)(o.ScalarType.INT32, t[e], r[e]));
                            case "scalar":
                                const i = e.V.T;
                                return a.every((e)=>(0, s.scalarEquals)(i, t[e], r[e]));
                        }
                }
            }),
        clone (e) {
            const n = e.getType(), a = new n, t = a;
            for (const a of n.fields.byMember()){
                const n = e[a.localName];
                let s;
                if (a.repeated) s = n.map(i);
                else if ("map" == a.kind) {
                    s = t[a.localName];
                    for (const [e, a] of Object.entries(n))s[e] = i(a);
                } else if ("oneof" == a.kind) {
                    s = a.findField(n.case) ? {
                        case: n.case,
                        value: i(n.value)
                    } : {
                        case: void 0
                    };
                } else s = i(n);
                t[a.localName] = s;
            }
            for (const a of n.runtime.bin.listUnknownFields(e))n.runtime.bin.onUnknownField(t, a.no, a.wireType, a.data);
            return a;
        }
    };
};
