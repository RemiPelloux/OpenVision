"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.makeUtilCommon = void 0;
const n = require("./module-609.js"), s = require("./module-1455.js"), i = require("./module-3408.js"), o = require("./module-2706.js");
function a(t) {
    if (void 0 === t) return t;
    if ((0, o.isMessage)(t)) return t.clone();
    if (t instanceof Uint8Array) {
        const e = new Uint8Array(t.byteLength);
        return e.set(t), e;
    }
    return t;
}
function u(t) {
    return t instanceof Uint8Array ? t : new Uint8Array(t);
}
exports.makeUtilCommon = function() {
    return {
        setEnumType: n.setEnumType,
        initPartial (t, e) {
            if (void 0 === t) return;
            const r = e.getType();
            for (const n of r.fields.byMember()){
                const r = n.localName, s = e, a = t;
                if (null != a[r]) switch(n.kind){
                    case "oneof":
                        const t = a[r].case;
                        if (void 0 === t) continue;
                        const e = n.findField(t);
                        let c = a[r].value;
                        e && "message" == e.kind && !(0, o.isMessage)(c, e.T) ? c = new e.T(c) : e && "scalar" === e.kind && e.T === i.ScalarType.BYTES && (c = u(c)), s[r] = {
                            case: t,
                            value: c
                        };
                        break;
                    case "scalar":
                    case "enum":
                        let l = a[r];
                        n.T === i.ScalarType.BYTES && (l = n.repeated ? l.map(u) : u(l)), s[r] = l;
                        break;
                    case "map":
                        switch(n.V.kind){
                            case "scalar":
                            case "enum":
                                if (n.V.T === i.ScalarType.BYTES) for (const [t, e] of Object.entries(a[r]))s[r][t] = u(e);
                                else Object.assign(s[r], a[r]);
                                break;
                            case "message":
                                const t = n.V.T;
                                for (const e of Object.keys(a[r])){
                                    let n = a[r][e];
                                    t.fieldWrapper || (n = new t(n)), s[r][e] = n;
                                }
                        }
                        break;
                    case "message":
                        const m = n.T;
                        if (n.repeated) s[r] = a[r].map((t)=>(0, o.isMessage)(t, m) ? t : new m(t));
                        else {
                            const t = a[r];
                            m.fieldWrapper ? "google.protobuf.BytesValue" === m.typeName ? s[r] = u(t) : s[r] = t : s[r] = (0, o.isMessage)(t, m) ? t : new m(t);
                        }
                }
            }
        },
        equals: (t, e, r)=>e === r || !(!e || !r) && t.fields.byMember().every((t)=>{
                const n = e[t.localName], o = r[t.localName];
                if (t.repeated) {
                    if (n.length !== o.length) return !1;
                    switch(t.kind){
                        case "message":
                            return n.every((e, r)=>t.T.equals(e, o[r]));
                        case "scalar":
                            return n.every((e, r)=>(0, s.scalarEquals)(t.T, e, o[r]));
                        case "enum":
                            return n.every((t, e)=>(0, s.scalarEquals)(i.ScalarType.INT32, t, o[e]));
                    }
                    throw new Error(`repeated cannot contain ${t.kind}`);
                }
                switch(t.kind){
                    case "message":
                        return t.T.equals(n, o);
                    case "enum":
                        return (0, s.scalarEquals)(i.ScalarType.INT32, n, o);
                    case "scalar":
                        return (0, s.scalarEquals)(t.T, n, o);
                    case "oneof":
                        if (n.case !== o.case) return !1;
                        const e = t.findField(n.case);
                        if (void 0 === e) return !0;
                        switch(e.kind){
                            case "message":
                                return e.T.equals(n.value, o.value);
                            case "enum":
                                return (0, s.scalarEquals)(i.ScalarType.INT32, n.value, o.value);
                            case "scalar":
                                return (0, s.scalarEquals)(e.T, n.value, o.value);
                        }
                        throw new Error(`oneof cannot contain ${e.kind}`);
                    case "map":
                        const r = Object.keys(n).concat(Object.keys(o));
                        switch(t.V.kind){
                            case "message":
                                const e = t.V.T;
                                return r.every((t)=>e.equals(n[t], o[t]));
                            case "enum":
                                return r.every((t)=>(0, s.scalarEquals)(i.ScalarType.INT32, n[t], o[t]));
                            case "scalar":
                                const a = t.V.T;
                                return r.every((t)=>(0, s.scalarEquals)(a, n[t], o[t]));
                        }
                }
            }),
        clone (t) {
            const e = t.getType(), r = new e, n = r;
            for (const r of e.fields.byMember()){
                const e = t[r.localName];
                let s;
                if (r.repeated) s = e.map(a);
                else if ("map" == r.kind) {
                    s = n[r.localName];
                    for (const [t, r] of Object.entries(e))s[t] = a(r);
                } else if ("oneof" == r.kind) {
                    s = r.findField(e.case) ? {
                        case: e.case,
                        value: a(e.value)
                    } : {
                        case: void 0
                    };
                } else s = a(e);
                n[r.localName] = s;
            }
            for (const r of e.runtime.bin.listUnknownFields(t))e.runtime.bin.onUnknownField(n, r.no, r.wireType, r.data);
            return r;
        }
    };
};
