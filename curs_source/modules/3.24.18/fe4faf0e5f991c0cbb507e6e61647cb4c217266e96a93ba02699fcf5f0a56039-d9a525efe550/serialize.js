import { i } from "./plugin-brand-icon.js";
import { KIt, VIt, ZIt, dNe, dir, fNe, gfe, hfe, mNe, pNe, tJ } from "./types.js";
var vB, mir, fir, nJ, bfe, hir, JIt;
export { JIt, bfe, fir, hir, mir, nJ, vB };
var __wakaru_Kki_initialized = false;
export function Kki() {
if (__wakaru_Kki_initialized) return;
__wakaru_Kki_initialized = true;
dir(), vB = "", { toString: mir } = {}, { keys: fir } = Object, nJ = i((r)=>{
    const e = typeof r;
    if (e !== "object" || !r) return [
        hfe,
        e
    ];
    const a = mir.call(r).slice(8, -1);
    switch(a){
        case "Array":
            return [
                tJ,
                vB
            ];
        case "Object":
            return [
                gfe,
                vB
            ];
        case "Date":
            return [
                dNe,
                vB
            ];
        case "RegExp":
            return [
                pNe,
                vB
            ];
        case "Map":
            return [
                mNe,
                vB
            ];
        case "Set":
            return [
                fNe,
                vB
            ];
        case "DataView":
            return [
                tJ,
                a
            ];
    }
    return a.includes("Array") ? [
        tJ,
        a
    ] : a.includes("Error") ? [
        VIt,
        a
    ] : [
        gfe,
        a
    ];
}, "typeOf"), bfe = i(([r, e])=>r === hfe && (e === "function" || e === "symbol"), "shouldSkip"), hir = i((r, e, a, s)=>{
    const l = i((p, m)=>{
        const b = s.push(p) - 1;
        return a.set(m, b), b;
    }, "as"), u = i((p)=>{
        if (a.has(p)) return a.get(p);
        let [m, b] = nJ(p);
        switch(m){
            case hfe:
                {
                    let _ = p;
                    switch(b){
                        case "bigint":
                            m = KIt, _ = p.toString();
                            break;
                        case "function":
                        case "symbol":
                            if (r) throw new TypeError("unable to serialize " + b);
                            _ = null;
                            break;
                        case "undefined":
                            return l([
                                ZIt
                            ], p);
                    }
                    return l([
                        m,
                        _
                    ], p);
                }
            case tJ:
                {
                    if (b) {
                        let x = p;
                        return b === "DataView" ? x = new Uint8Array(p.buffer) : b === "ArrayBuffer" && (x = new Uint8Array(p)), l([
                            b,
                            [
                                ...x
                            ]
                        ], p);
                    }
                    const _ = [], v = l([
                        m,
                        _
                    ], p);
                    for (const x of p)_.push(u(x));
                    return v;
                }
            case gfe:
                {
                    if (b) switch(b){
                        case "BigInt":
                            return l([
                                b,
                                p.toString()
                            ], p);
                        case "Boolean":
                        case "Number":
                        case "String":
                            return l([
                                b,
                                p.valueOf()
                            ], p);
                    }
                    if (e && "toJSON" in p) return u(p.toJSON());
                    const _ = [], v = l([
                        m,
                        _
                    ], p);
                    for (const x of fir(p))(r || !bfe(nJ(p[x]))) && _.push([
                        u(x),
                        u(p[x])
                    ]);
                    return v;
                }
            case dNe:
                return l([
                    m,
                    p.toISOString()
                ], p);
            case pNe:
                {
                    const { source: _, flags: v } = p;
                    return l([
                        m,
                        {
                            source: _,
                            flags: v
                        }
                    ], p);
                }
            case mNe:
                {
                    const _ = [], v = l([
                        m,
                        _
                    ], p);
                    for (const [x, C] of p)(r || !(bfe(nJ(x)) || bfe(nJ(C)))) && _.push([
                        u(x),
                        u(C)
                    ]);
                    return v;
                }
            case fNe:
                {
                    const _ = [], v = l([
                        m,
                        _
                    ], p);
                    for (const x of p)(r || !bfe(nJ(x))) && _.push(u(x));
                    return v;
                }
        }
        const { message: g } = p;
        return l([
            m,
            {
                name: b,
                message: g
            }
        ], p);
    }, "pair");
    return u;
}, "serializer"), JIt = i((r, { json: e, lossy: a } = {})=>{
    const s = [];
    return hir(!(e || a), !!e, new Map, s)(r), s;
}, "serialize");

}
