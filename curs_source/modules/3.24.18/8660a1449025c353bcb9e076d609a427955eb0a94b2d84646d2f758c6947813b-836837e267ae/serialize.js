import { E } from "./tslib.es6.js";
import { Xph, aia, cia, dMr, hMr, iui, jbn, lia, mMr, pMr, rui } from "./types_5.js";
var O7t, Qph, Jph, $bn, sui, emh, hia;
export { $bn, Jph, O7t, Qph, emh, hia, sui };
var __wakaru_Oqy_initialized = false;
export function Oqy() {
if (__wakaru_Oqy_initialized) return;
__wakaru_Oqy_initialized = true;
E(), Xph(), O7t = "", { toString: Qph } = {}, { keys: Jph } = Object, $bn = (t)=>{
    const e = typeof t;
    if (e !== "object" || !t) return [
        iui,
        e
    ];
    const n = Qph.call(t).slice(8, -1);
    switch(n){
        case "Array":
            return [
                jbn,
                O7t
            ];
        case "Object":
            return [
                rui,
                O7t
            ];
        case "Date":
            return [
                dMr,
                O7t
            ];
        case "RegExp":
            return [
                hMr,
                O7t
            ];
        case "Map":
            return [
                pMr,
                O7t
            ];
        case "Set":
            return [
                mMr,
                O7t
            ];
        case "DataView":
            return [
                jbn,
                n
            ];
    }
    return n.includes("Array") ? [
        jbn,
        n
    ] : n.includes("Error") ? [
        lia,
        n
    ] : [
        rui,
        n
    ];
}, sui = ([t, e])=>t === iui && (e === "function" || e === "symbol"), emh = (t, e, n, i)=>{
    const r = (o, a)=>{
        const l = i.push(o) - 1;
        return n.set(a, l), l;
    }, s = (o)=>{
        if (n.has(o)) return n.get(o);
        let [a, l] = $bn(o);
        switch(a){
            case iui:
                {
                    let u = o;
                    switch(l){
                        case "bigint":
                            a = cia, u = o.toString();
                            break;
                        case "function":
                        case "symbol":
                            if (t) throw new TypeError("unable to serialize " + l);
                            u = null;
                            break;
                        case "undefined":
                            return r([
                                aia
                            ], o);
                    }
                    return r([
                        a,
                        u
                    ], o);
                }
            case jbn:
                {
                    if (l) {
                        let h = o;
                        return l === "DataView" ? h = new Uint8Array(o.buffer) : l === "ArrayBuffer" && (h = new Uint8Array(o)), r([
                            l,
                            [
                                ...h
                            ]
                        ], o);
                    }
                    const u = [], d = r([
                        a,
                        u
                    ], o);
                    for (const h of o)u.push(s(h));
                    return d;
                }
            case rui:
                {
                    if (l) switch(l){
                        case "BigInt":
                            return r([
                                l,
                                o.toString()
                            ], o);
                        case "Boolean":
                        case "Number":
                        case "String":
                            return r([
                                l,
                                o.valueOf()
                            ], o);
                    }
                    if (e && "toJSON" in o) return s(o.toJSON());
                    const u = [], d = r([
                        a,
                        u
                    ], o);
                    for (const h of Jph(o))(t || !sui($bn(o[h]))) && u.push([
                        s(h),
                        s(o[h])
                    ]);
                    return d;
                }
            case dMr:
                return r([
                    a,
                    o.toISOString()
                ], o);
            case hMr:
                {
                    const { source: u, flags: d } = o;
                    return r([
                        a,
                        {
                            source: u,
                            flags: d
                        }
                    ], o);
                }
            case pMr:
                {
                    const u = [], d = r([
                        a,
                        u
                    ], o);
                    for (const [h, p] of o)(t || !(sui($bn(h)) || sui($bn(p)))) && u.push([
                        s(h),
                        s(p)
                    ]);
                    return d;
                }
            case mMr:
                {
                    const u = [], d = r([
                        a,
                        u
                    ], o);
                    for (const h of o)(t || !sui($bn(h))) && u.push(s(h));
                    return d;
                }
        }
        const { message: c } = o;
        return r([
            a,
            {
                name: l,
                message: c
            }
        ], o);
    };
    return s;
}, hia = (t, { json: e, lossy: n } = {})=>{
    const i = [];
    return emh(!(e || n), !!e, new Map, i)(t), i;
};

}
