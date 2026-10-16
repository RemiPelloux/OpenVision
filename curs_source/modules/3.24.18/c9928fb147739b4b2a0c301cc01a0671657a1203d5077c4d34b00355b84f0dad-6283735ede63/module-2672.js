Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.makeUtilCommon = void 0;
const s = require("./module-609.js"), o = require("./module-1455.js"), r = require("./module-3408.js"), t = require("./module-2706.js");
function i(e) {
    if (void 0 === e) return e;
    if ((0, t.isMessage)(e)) return e.clone();
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
        setEnumType: s.setEnumType,
        initPartial (e, a) {
            if (void 0 === e) return;
            const n = a.getType();
            for (const s of n.fields.byMember()){
                const n = s.localName, o = a, i = e;
                if (null != i[n]) switch(s.kind){
                    case "oneof":
                        const e = i[n].case;
                        if (void 0 === e) continue;
                        const a = s.findField(e);
                        let l = i[n].value;
                        a && "message" == a.kind && !(0, t.isMessage)(l, a.T) ? l = new a.T(l) : a && "scalar" === a.kind && a.T === r.ScalarType.BYTES && (l = m(l)), o[n] = {
                            case: e,
                            value: l
                        };
                        break;
                    case "scalar":
                    case "enum":
                        let d = i[n];
                        s.T === r.ScalarType.BYTES && (d = s.repeated ? d.map(m) : m(d)), o[n] = d;
                        break;
                    case "map":
                        switch(s.V.kind){
                            case "scalar":
                            case "enum":
                                if (s.V.T === r.ScalarType.BYTES) for (const [e, a] of Object.entries(i[n]))o[n][e] = m(a);
                                else Object.assign(o[n], i[n]);
                                break;
                            case "message":
                                const e = s.V.T;
                                for (const a of Object.keys(i[n])){
                                    let s = i[n][a];
                                    e.fieldWrapper || (s = new e(s)), o[n][a] = s;
                                }
                        }
                        break;
                    case "message":
                        const c = s.T;
                        if (s.repeated) o[n] = i[n].map((e)=>(0, t.isMessage)(e, c) ? e : new c(e));
                        else {
                            const e = i[n];
                            c.fieldWrapper ? "google.protobuf.BytesValue" === c.typeName ? o[n] = m(e) : o[n] = e : o[n] = (0, t.isMessage)(e, c) ? e : new c(e);
                        }
                }
            }
        },
        equals: (e, a, n)=>a === n || !(!a || !n) && e.fields.byMember().every((e)=>{
                const s = a[e.localName], t = n[e.localName];
                if (e.repeated) {
                    if (s.length !== t.length) return !1;
                    switch(e.kind){
                        case "message":
                            return s.every((a, n)=>e.T.equals(a, t[n]));
                        case "scalar":
                            return s.every((a, n)=>(0, o.scalarEquals)(e.T, a, t[n]));
                        case "enum":
                            return s.every((e, a)=>(0, o.scalarEquals)(r.ScalarType.INT32, e, t[a]));
                    }
                    throw new Error(`repeated cannot contain ${e.kind}`);
                }
                switch(e.kind){
                    case "message":
                        return e.T.equals(s, t);
                    case "enum":
                        return (0, o.scalarEquals)(r.ScalarType.INT32, s, t);
                    case "scalar":
                        return (0, o.scalarEquals)(e.T, s, t);
                    case "oneof":
                        if (s.case !== t.case) return !1;
                        const a = e.findField(s.case);
                        if (void 0 === a) return !0;
                        switch(a.kind){
                            case "message":
                                return a.T.equals(s.value, t.value);
                            case "enum":
                                return (0, o.scalarEquals)(r.ScalarType.INT32, s.value, t.value);
                            case "scalar":
                                return (0, o.scalarEquals)(a.T, s.value, t.value);
                        }
                        throw new Error(`oneof cannot contain ${a.kind}`);
                    case "map":
                        const n = Object.keys(s).concat(Object.keys(t));
                        switch(e.V.kind){
                            case "message":
                                const a = e.V.T;
                                return n.every((e)=>a.equals(s[e], t[e]));
                            case "enum":
                                return n.every((e)=>(0, o.scalarEquals)(r.ScalarType.INT32, s[e], t[e]));
                            case "scalar":
                                const i = e.V.T;
                                return n.every((e)=>(0, o.scalarEquals)(i, s[e], t[e]));
                        }
                }
            }),
        clone (e) {
            const a = e.getType(), n = new a, s = n;
            for (const n of a.fields.byMember()){
                const a = e[n.localName];
                let o;
                if (n.repeated) o = a.map(i);
                else if ("map" == n.kind) {
                    o = s[n.localName];
                    for (const [e, n] of Object.entries(a))o[e] = i(n);
                } else if ("oneof" == n.kind) {
                    o = n.findField(a.case) ? {
                        case: a.case,
                        value: i(a.value)
                    } : {
                        case: void 0
                    };
                } else o = i(a);
                s[n.localName] = o;
            }
            for (const n of a.runtime.bin.listUnknownFields(e))a.runtime.bin.onUnknownField(s, n.no, n.wireType, n.data);
            return n;
        }
    };
};
