Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.makeUtilCommon = void 0;
const r = require("./module-609.js"), o = require("./module-455.js"), a = require("./module-408.js"), s = require("./module-706.js");
function i(e) {
    if (void 0 === e) return e;
    if ((0, s.isMessage)(e)) return e.clone();
    if (e instanceof Uint8Array) {
        const t = new Uint8Array(e.byteLength);
        return t.set(e), t;
    }
    return e;
}
function l(e) {
    return e instanceof Uint8Array ? e : new Uint8Array(e);
}
exports.makeUtilCommon = function() {
    return {
        setEnumType: r.setEnumType,
        initPartial (e, t) {
            if (void 0 === e) return;
            const n = t.getType();
            for (const r of n.fields.byMember()){
                const n = r.localName, o = t, i = e;
                if (null != i[n]) switch(r.kind){
                    case "oneof":
                        const e = i[n].case;
                        if (void 0 === e) continue;
                        const t = r.findField(e);
                        let u = i[n].value;
                        t && "message" == t.kind && !(0, s.isMessage)(u, t.T) ? u = new t.T(u) : t && "scalar" === t.kind && t.T === a.ScalarType.BYTES && (u = l(u)), o[n] = {
                            case: e,
                            value: u
                        };
                        break;
                    case "scalar":
                    case "enum":
                        let c = i[n];
                        r.T === a.ScalarType.BYTES && (c = r.repeated ? c.map(l) : l(c)), o[n] = c;
                        break;
                    case "map":
                        switch(r.V.kind){
                            case "scalar":
                            case "enum":
                                if (r.V.T === a.ScalarType.BYTES) for (const [e, t] of Object.entries(i[n]))o[n][e] = l(t);
                                else Object.assign(o[n], i[n]);
                                break;
                            case "message":
                                const e = r.V.T;
                                for (const t of Object.keys(i[n])){
                                    let r = i[n][t];
                                    e.fieldWrapper || (r = new e(r)), o[n][t] = r;
                                }
                        }
                        break;
                    case "message":
                        const m = r.T;
                        if (r.repeated) o[n] = i[n].map((e)=>(0, s.isMessage)(e, m) ? e : new m(e));
                        else {
                            const e = i[n];
                            m.fieldWrapper ? "google.protobuf.BytesValue" === m.typeName ? o[n] = l(e) : o[n] = e : o[n] = (0, s.isMessage)(e, m) ? e : new m(e);
                        }
                }
            }
        },
        equals: (e, t, n)=>t === n || !(!t || !n) && e.fields.byMember().every((e)=>{
                const r = t[e.localName], s = n[e.localName];
                if (e.repeated) {
                    if (r.length !== s.length) return !1;
                    switch(e.kind){
                        case "message":
                            return r.every((t, n)=>e.T.equals(t, s[n]));
                        case "scalar":
                            return r.every((t, n)=>(0, o.scalarEquals)(e.T, t, s[n]));
                        case "enum":
                            return r.every((e, t)=>(0, o.scalarEquals)(a.ScalarType.INT32, e, s[t]));
                    }
                    throw new Error(`repeated cannot contain ${e.kind}`);
                }
                switch(e.kind){
                    case "message":
                        return e.T.equals(r, s);
                    case "enum":
                        return (0, o.scalarEquals)(a.ScalarType.INT32, r, s);
                    case "scalar":
                        return (0, o.scalarEquals)(e.T, r, s);
                    case "oneof":
                        if (r.case !== s.case) return !1;
                        const t = e.findField(r.case);
                        if (void 0 === t) return !0;
                        switch(t.kind){
                            case "message":
                                return t.T.equals(r.value, s.value);
                            case "enum":
                                return (0, o.scalarEquals)(a.ScalarType.INT32, r.value, s.value);
                            case "scalar":
                                return (0, o.scalarEquals)(t.T, r.value, s.value);
                        }
                        throw new Error(`oneof cannot contain ${t.kind}`);
                    case "map":
                        const n = Object.keys(r).concat(Object.keys(s));
                        switch(e.V.kind){
                            case "message":
                                const t = e.V.T;
                                return n.every((e)=>t.equals(r[e], s[e]));
                            case "enum":
                                return n.every((e)=>(0, o.scalarEquals)(a.ScalarType.INT32, r[e], s[e]));
                            case "scalar":
                                const i = e.V.T;
                                return n.every((e)=>(0, o.scalarEquals)(i, r[e], s[e]));
                        }
                }
            }),
        clone (e) {
            const t = e.getType(), n = new t, r = n;
            for (const n of t.fields.byMember()){
                const t = e[n.localName];
                let o;
                if (n.repeated) o = t.map(i);
                else if ("map" == n.kind) {
                    o = r[n.localName];
                    for (const [e, n] of Object.entries(t))o[e] = i(n);
                } else if ("oneof" == n.kind) {
                    o = n.findField(t.case) ? {
                        case: t.case,
                        value: i(t.value)
                    } : {
                        case: void 0
                    };
                } else o = i(t);
                r[n.localName] = o;
            }
            for (const n of t.runtime.bin.listUnknownFields(e))t.runtime.bin.onUnknownField(r, n.no, n.wireType, n.data);
            return n;
        }
    };
};
