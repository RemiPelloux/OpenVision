"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.makeUtilCommon = void 0;
const t = require("./module-609.js"), s = require("./module-1455.js"), o = require("./module-3408.js"), r = require("./module-2706.js");
function i(e) {
    if (void 0 === e) return e;
    if ((0, r.isMessage)(e)) return e.clone();
    if (e instanceof Uint8Array) {
        const a = new Uint8Array(e.byteLength);
        return a.set(e), a;
    }
    return e;
}
function l(e) {
    return e instanceof Uint8Array ? e : new Uint8Array(e);
}
exports.makeUtilCommon = function() {
    return {
        setEnumType: t.setEnumType,
        initPartial (e, a) {
            if (void 0 === e) return;
            const n = a.getType();
            for (const t of n.fields.byMember()){
                const n = t.localName, s = a, i = e;
                if (null != i[n]) switch(t.kind){
                    case "oneof":
                        const e = i[n].case;
                        if (void 0 === e) continue;
                        const a = t.findField(e);
                        let d = i[n].value;
                        a && "message" == a.kind && !(0, r.isMessage)(d, a.T) ? d = new a.T(d) : a && "scalar" === a.kind && a.T === o.ScalarType.BYTES && (d = l(d)), s[n] = {
                            case: e,
                            value: d
                        };
                        break;
                    case "scalar":
                    case "enum":
                        let m = i[n];
                        t.T === o.ScalarType.BYTES && (m = t.repeated ? m.map(l) : l(m)), s[n] = m;
                        break;
                    case "map":
                        switch(t.V.kind){
                            case "scalar":
                            case "enum":
                                if (t.V.T === o.ScalarType.BYTES) for (const [e, a] of Object.entries(i[n]))s[n][e] = l(a);
                                else Object.assign(s[n], i[n]);
                                break;
                            case "message":
                                const e = t.V.T;
                                for (const a of Object.keys(i[n])){
                                    let t = i[n][a];
                                    e.fieldWrapper || (t = new e(t)), s[n][a] = t;
                                }
                        }
                        break;
                    case "message":
                        const c = t.T;
                        if (t.repeated) s[n] = i[n].map((e)=>(0, r.isMessage)(e, c) ? e : new c(e));
                        else {
                            const e = i[n];
                            c.fieldWrapper ? "google.protobuf.BytesValue" === c.typeName ? s[n] = l(e) : s[n] = e : s[n] = (0, r.isMessage)(e, c) ? e : new c(e);
                        }
                }
            }
        },
        equals: (e, a, n)=>a === n || !(!a || !n) && e.fields.byMember().every((e)=>{
                const t = a[e.localName], r = n[e.localName];
                if (e.repeated) {
                    if (t.length !== r.length) return !1;
                    switch(e.kind){
                        case "message":
                            return t.every((a, n)=>e.T.equals(a, r[n]));
                        case "scalar":
                            return t.every((a, n)=>(0, s.scalarEquals)(e.T, a, r[n]));
                        case "enum":
                            return t.every((e, a)=>(0, s.scalarEquals)(o.ScalarType.INT32, e, r[a]));
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
                        const a = e.findField(t.case);
                        if (void 0 === a) return !0;
                        switch(a.kind){
                            case "message":
                                return a.T.equals(t.value, r.value);
                            case "enum":
                                return (0, s.scalarEquals)(o.ScalarType.INT32, t.value, r.value);
                            case "scalar":
                                return (0, s.scalarEquals)(a.T, t.value, r.value);
                        }
                        throw new Error(`oneof cannot contain ${a.kind}`);
                    case "map":
                        const n = Object.keys(t).concat(Object.keys(r));
                        switch(e.V.kind){
                            case "message":
                                const a = e.V.T;
                                return n.every((e)=>a.equals(t[e], r[e]));
                            case "enum":
                                return n.every((e)=>(0, s.scalarEquals)(o.ScalarType.INT32, t[e], r[e]));
                            case "scalar":
                                const i = e.V.T;
                                return n.every((e)=>(0, s.scalarEquals)(i, t[e], r[e]));
                        }
                }
            }),
        clone (e) {
            const a = e.getType(), n = new a, t = n;
            for (const n of a.fields.byMember()){
                const a = e[n.localName];
                let s;
                if (n.repeated) s = a.map(i);
                else if ("map" == n.kind) {
                    s = t[n.localName];
                    for (const [e, n] of Object.entries(a))s[e] = i(n);
                } else if ("oneof" == n.kind) {
                    s = n.findField(a.case) ? {
                        case: a.case,
                        value: i(a.value)
                    } : {
                        case: void 0
                    };
                } else s = i(a);
                t[n.localName] = s;
            }
            for (const n of a.runtime.bin.listUnknownFields(e))a.runtime.bin.onUnknownField(t, n.no, n.wireType, n.data);
            return n;
        }
    };
};
