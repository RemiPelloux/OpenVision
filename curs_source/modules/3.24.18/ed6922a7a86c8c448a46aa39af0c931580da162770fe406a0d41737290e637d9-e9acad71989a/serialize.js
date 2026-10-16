import { x } from "./tslib.es6.js";
import { E5t, Gkn, Idl, JTi, Kgs, QTi, Vkn, Ygs, eEi, tEi, zgs } from "./types_5.js";
var yft, Rdl, Ddl, x5t, jkn, Mdl, Qgs;
export { Ddl, Mdl, Qgs, Rdl, jkn, x5t, yft };
var __wakaru_t3g_initialized = false;
export function t3g() {
if (__wakaru_t3g_initialized) return;
__wakaru_t3g_initialized = true;
x(), Idl(), yft = "", { toString: Rdl } = {}, { keys: Ddl } = Object, x5t = (e)=>{
    const t = typeof e;
    if (t !== "object" || !e) return [
        Gkn,
        t
    ];
    const n = Rdl.call(e).slice(8, -1);
    switch(n){
        case "Array":
            return [
                E5t,
                yft
            ];
        case "Object":
            return [
                Vkn,
                yft
            ];
        case "Date":
            return [
                QTi,
                yft
            ];
        case "RegExp":
            return [
                JTi,
                yft
            ];
        case "Map":
            return [
                eEi,
                yft
            ];
        case "Set":
            return [
                tEi,
                yft
            ];
        case "DataView":
            return [
                E5t,
                n
            ];
    }
    return n.includes("Array") ? [
        E5t,
        n
    ] : n.includes("Error") ? [
        Kgs,
        n
    ] : [
        Vkn,
        n
    ];
}, jkn = ([e, t])=>e === Gkn && (t === "function" || t === "symbol"), Mdl = (e, t, n, i)=>{
    const r = (o, a)=>{
        const c = i.push(o) - 1;
        return n.set(a, c), c;
    }, s = (o)=>{
        if (n.has(o)) return n.get(o);
        let [a, c] = x5t(o);
        switch(a){
            case Gkn:
                {
                    let u = o;
                    switch(c){
                        case "bigint":
                            a = Ygs, u = o.toString();
                            break;
                        case "function":
                        case "symbol":
                            if (e) throw new TypeError("unable to serialize " + c);
                            u = null;
                            break;
                        case "undefined":
                            return r([
                                zgs
                            ], o);
                    }
                    return r([
                        a,
                        u
                    ], o);
                }
            case E5t:
                {
                    if (c) {
                        let p = o;
                        return c === "DataView" ? p = new Uint8Array(o.buffer) : c === "ArrayBuffer" && (p = new Uint8Array(o)), r([
                            c,
                            [
                                ...p
                            ]
                        ], o);
                    }
                    const u = [], h = r([
                        a,
                        u
                    ], o);
                    for (const p of o)u.push(s(p));
                    return h;
                }
            case Vkn:
                {
                    if (c) switch(c){
                        case "BigInt":
                            return r([
                                c,
                                o.toString()
                            ], o);
                        case "Boolean":
                        case "Number":
                        case "String":
                            return r([
                                c,
                                o.valueOf()
                            ], o);
                    }
                    if (t && "toJSON" in o) return s(o.toJSON());
                    const u = [], h = r([
                        a,
                        u
                    ], o);
                    for (const p of Ddl(o))(e || !jkn(x5t(o[p]))) && u.push([
                        s(p),
                        s(o[p])
                    ]);
                    return h;
                }
            case QTi:
                return r([
                    a,
                    o.toISOString()
                ], o);
            case JTi:
                {
                    const { source: u, flags: h } = o;
                    return r([
                        a,
                        {
                            source: u,
                            flags: h
                        }
                    ], o);
                }
            case eEi:
                {
                    const u = [], h = r([
                        a,
                        u
                    ], o);
                    for (const [p, g] of o)(e || !(jkn(x5t(p)) || jkn(x5t(g)))) && u.push([
                        s(p),
                        s(g)
                    ]);
                    return h;
                }
            case tEi:
                {
                    const u = [], h = r([
                        a,
                        u
                    ], o);
                    for (const p of o)(e || !jkn(x5t(p))) && u.push(s(p));
                    return h;
                }
        }
        const { message: l } = o;
        return r([
            a,
            {
                name: c,
                message: l
            }
        ], o);
    };
    return s;
}, Qgs = (e, { json: t, lossy: n } = {})=>{
    const i = [];
    return Mdl(!(t || n), !!t, new Map, i)(e), i;
};

}
