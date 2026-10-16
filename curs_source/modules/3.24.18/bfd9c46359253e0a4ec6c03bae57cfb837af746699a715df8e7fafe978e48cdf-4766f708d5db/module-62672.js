"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.makeUtilCommon = void 0;
const n = require("./module-609.js"), s = require("./module-31455.js"), o = require("./module-3408.js"), i = require("./module-62706.js");
function a(e) {
    if (void 0 === e) return e;
    if ((0, i.isMessage)(e)) return e.clone();
    if (e instanceof Uint8Array) {
        const t = new Uint8Array(e.byteLength);
        return t.set(e), t;
    }
    return e;
}
function c(e) {
    return e instanceof Uint8Array ? e : new Uint8Array(e);
}
exports.makeUtilCommon = function() {
    return {
        setEnumType: n.setEnumType,
        initPartial (e, t) {
            if (void 0 === e) return;
            const r = t.getType();
            for (const n of r.fields.byMember()){
                const r = n.localName, s = t, a = e;
                if (null != a[r]) switch(n.kind){
                    case "oneof":
                        const e = a[r].case;
                        if (void 0 === e) continue;
                        const t = n.findField(e);
                        let l = a[r].value;
                        t && "message" == t.kind && !(0, i.isMessage)(l, t.T) ? l = new t.T(l) : t && "scalar" === t.kind && t.T === o.ScalarType.BYTES && (l = c(l)), s[r] = {
                            case: e,
                            value: l
                        };
                        break;
                    case "scalar":
                    case "enum":
                        let u = a[r];
                        n.T === o.ScalarType.BYTES && (u = n.repeated ? u.map(c) : c(u)), s[r] = u;
                        break;
                    case "map":
                        switch(n.V.kind){
                            case "scalar":
                            case "enum":
                                if (n.V.T === o.ScalarType.BYTES) for (const [e, t] of Object.entries(a[r]))s[r][e] = c(t);
                                else Object.assign(s[r], a[r]);
                                break;
                            case "message":
                                const e = n.V.T;
                                for (const t of Object.keys(a[r])){
                                    let n = a[r][t];
                                    e.fieldWrapper || (n = new e(n)), s[r][t] = n;
                                }
                        }
                        break;
                    case "message":
                        const d = n.T;
                        if (n.repeated) s[r] = a[r].map((e)=>(0, i.isMessage)(e, d) ? e : new d(e));
                        else {
                            const e = a[r];
                            d.fieldWrapper ? "google.protobuf.BytesValue" === d.typeName ? s[r] = c(e) : s[r] = e : s[r] = (0, i.isMessage)(e, d) ? e : new d(e);
                        }
                }
            }
        },
        equals: (e, t, r)=>t === r || !(!t || !r) && e.fields.byMember().every((e)=>{
                const n = t[e.localName], i = r[e.localName];
                if (e.repeated) {
                    if (n.length !== i.length) return !1;
                    switch(e.kind){
                        case "message":
                            return n.every((t, r)=>e.T.equals(t, i[r]));
                        case "scalar":
                            return n.every((t, r)=>(0, s.scalarEquals)(e.T, t, i[r]));
                        case "enum":
                            return n.every((e, t)=>(0, s.scalarEquals)(o.ScalarType.INT32, e, i[t]));
                    }
                    throw new Error(`repeated cannot contain ${e.kind}`);
                }
                switch(e.kind){
                    case "message":
                        return e.T.equals(n, i);
                    case "enum":
                        return (0, s.scalarEquals)(o.ScalarType.INT32, n, i);
                    case "scalar":
                        return (0, s.scalarEquals)(e.T, n, i);
                    case "oneof":
                        if (n.case !== i.case) return !1;
                        const t = e.findField(n.case);
                        if (void 0 === t) return !0;
                        switch(t.kind){
                            case "message":
                                return t.T.equals(n.value, i.value);
                            case "enum":
                                return (0, s.scalarEquals)(o.ScalarType.INT32, n.value, i.value);
                            case "scalar":
                                return (0, s.scalarEquals)(t.T, n.value, i.value);
                        }
                        throw new Error(`oneof cannot contain ${t.kind}`);
                    case "map":
                        const r = Object.keys(n).concat(Object.keys(i));
                        switch(e.V.kind){
                            case "message":
                                const t = e.V.T;
                                return r.every((e)=>t.equals(n[e], i[e]));
                            case "enum":
                                return r.every((e)=>(0, s.scalarEquals)(o.ScalarType.INT32, n[e], i[e]));
                            case "scalar":
                                const a = e.V.T;
                                return r.every((e)=>(0, s.scalarEquals)(a, n[e], i[e]));
                        }
                }
            }),
        clone (e) {
            const t = e.getType(), r = new t, n = r;
            for (const r of t.fields.byMember()){
                const t = e[r.localName];
                let s;
                if (r.repeated) s = t.map(a);
                else if ("map" == r.kind) {
                    s = n[r.localName];
                    for (const [e, r] of Object.entries(t))s[e] = a(r);
                } else if ("oneof" == r.kind) {
                    s = r.findField(t.case) ? {
                        case: t.case,
                        value: a(t.value)
                    } : {
                        case: void 0
                    };
                } else s = a(t);
                n[r.localName] = s;
            }
            for (const r of t.runtime.bin.listUnknownFields(e))t.runtime.bin.onUnknownField(n, r.no, r.wireType, r.data);
            return r;
        }
    };
};
