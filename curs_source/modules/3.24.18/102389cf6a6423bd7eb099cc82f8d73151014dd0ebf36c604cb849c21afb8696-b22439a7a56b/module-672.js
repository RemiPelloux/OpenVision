Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.makeUtilCommon = void 0;
const o = require("./module-609.js"), s = require("./module-455.js"), t = require("./module-408.js"), r = require("./module-706.js");
function i(e) {
    if (void 0 === e) return e;
    if ((0, r.isMessage)(e)) return e.clone();
    if (e instanceof Uint8Array) {
        const a = new Uint8Array(e.byteLength);
        return a.set(e), a;
    }
    return e;
}
function m(e) {
    return e instanceof Uint8Array ? e : new Uint8Array(e);
}
exports.makeUtilCommon = function() {
    return {
        setEnumType: o.setEnumType,
        initPartial (e, a) {
            if (void 0 === e) return;
            const n = a.getType();
            for (const o of n.fields.byMember()){
                const n = o.localName, s = a, i = e;
                if (null != i[n]) switch(o.kind){
                    case "oneof":
                        const e = i[n].case;
                        if (void 0 === e) continue;
                        const a = o.findField(e);
                        let l = i[n].value;
                        a && "message" == a.kind && !(0, r.isMessage)(l, a.T) ? l = new a.T(l) : a && "scalar" === a.kind && a.T === t.ScalarType.BYTES && (l = m(l)), s[n] = {
                            case: e,
                            value: l
                        };
                        break;
                    case "scalar":
                    case "enum":
                        let d = i[n];
                        o.T === t.ScalarType.BYTES && (d = o.repeated ? d.map(m) : m(d)), s[n] = d;
                        break;
                    case "map":
                        switch(o.V.kind){
                            case "scalar":
                            case "enum":
                                if (o.V.T === t.ScalarType.BYTES) for (const [e, a] of Object.entries(i[n]))s[n][e] = m(a);
                                else Object.assign(s[n], i[n]);
                                break;
                            case "message":
                                const e = o.V.T;
                                for (const a of Object.keys(i[n])){
                                    let o = i[n][a];
                                    e.fieldWrapper || (o = new e(o)), s[n][a] = o;
                                }
                        }
                        break;
                    case "message":
                        const c = o.T;
                        if (o.repeated) s[n] = i[n].map((e)=>(0, r.isMessage)(e, c) ? e : new c(e));
                        else {
                            const e = i[n];
                            c.fieldWrapper ? "google.protobuf.BytesValue" === c.typeName ? s[n] = m(e) : s[n] = e : s[n] = (0, r.isMessage)(e, c) ? e : new c(e);
                        }
                }
            }
        },
        equals: (e, a, n)=>a === n || !(!a || !n) && e.fields.byMember().every((e)=>{
                const o = a[e.localName], r = n[e.localName];
                if (e.repeated) {
                    if (o.length !== r.length) return !1;
                    switch(e.kind){
                        case "message":
                            return o.every((a, n)=>e.T.equals(a, r[n]));
                        case "scalar":
                            return o.every((a, n)=>(0, s.scalarEquals)(e.T, a, r[n]));
                        case "enum":
                            return o.every((e, a)=>(0, s.scalarEquals)(t.ScalarType.INT32, e, r[a]));
                    }
                    throw new Error(`repeated cannot contain ${e.kind}`);
                }
                switch(e.kind){
                    case "message":
                        return e.T.equals(o, r);
                    case "enum":
                        return (0, s.scalarEquals)(t.ScalarType.INT32, o, r);
                    case "scalar":
                        return (0, s.scalarEquals)(e.T, o, r);
                    case "oneof":
                        if (o.case !== r.case) return !1;
                        const a = e.findField(o.case);
                        if (void 0 === a) return !0;
                        switch(a.kind){
                            case "message":
                                return a.T.equals(o.value, r.value);
                            case "enum":
                                return (0, s.scalarEquals)(t.ScalarType.INT32, o.value, r.value);
                            case "scalar":
                                return (0, s.scalarEquals)(a.T, o.value, r.value);
                        }
                        throw new Error(`oneof cannot contain ${a.kind}`);
                    case "map":
                        const n = Object.keys(o).concat(Object.keys(r));
                        switch(e.V.kind){
                            case "message":
                                const a = e.V.T;
                                return n.every((e)=>a.equals(o[e], r[e]));
                            case "enum":
                                return n.every((e)=>(0, s.scalarEquals)(t.ScalarType.INT32, o[e], r[e]));
                            case "scalar":
                                const i = e.V.T;
                                return n.every((e)=>(0, s.scalarEquals)(i, o[e], r[e]));
                        }
                }
            }),
        clone (e) {
            const a = e.getType(), n = new a, o = n;
            for (const n of a.fields.byMember()){
                const a = e[n.localName];
                let s;
                if (n.repeated) s = a.map(i);
                else if ("map" == n.kind) {
                    s = o[n.localName];
                    for (const [e, n] of Object.entries(a))s[e] = i(n);
                } else if ("oneof" == n.kind) {
                    s = n.findField(a.case) ? {
                        case: a.case,
                        value: i(a.value)
                    } : {
                        case: void 0
                    };
                } else s = i(a);
                o[n.localName] = s;
            }
            for (const n of a.runtime.bin.listUnknownFields(e))a.runtime.bin.onUnknownField(o, n.no, n.wireType, n.data);
            return n;
        }
    };
};
