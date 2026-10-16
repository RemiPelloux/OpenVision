import { Hv0 } from "./PopChild.mjs";
import { NAs, aOn } from "./PresenceContext.mjs";
import { $v0, MAs, qv0 } from "./ofv.js";
import { E } from "./tslib.es6.js";
import { DAs } from "./use-constant.mjs";
import { useId as Gv0 } from "./react-runtime/react/esm-index-production.js";
import * as Wv0 from "./react-runtime/react/esm-index-production.js";
import { jsx as k1v } from "./react-runtime/react/esm-jsx-runtime-production.js";
import { useMemo as w1v } from "./react-runtime/react/esm-index-production.js";
var C1v;
export { C1v };
var __wakaru_zv0_initialized = false;
export function zv0() {
if (__wakaru_zv0_initialized) return;
__wakaru_zv0_initialized = true;
"use client";
E(), NAs(), DAs(), Hv0(), C1v = ({ children: t, initial: e, isPresent: n, onExitComplete: i, custom: r, presenceAffectsLayout: s, mode: o, anchorX: a, anchorY: l, root: c })=>{
    const u = MAs(qv0), d = Gv0();
    let h = !0, p = w1v(()=>(h = !1, {
            id: d,
            initial: e,
            isPresent: n,
            custom: r,
            onExitComplete: (g)=>{
                u.set(g, !0);
                for (const f of u.values())if (!f) return;
                i && i();
            },
            register: (g)=>(u.set(g, !1), ()=>u.delete(g))
        }), [
        n,
        u,
        i
    ]);
    return s && h && (p = {
        ...p
    }), w1v(()=>{
        u.forEach((g, f)=>u.set(f, !1));
    }, [
        n
    ]), Wv0.useEffect(()=>{
        !n && !u.size && i && i();
    }, [
        n
    ]), t = k1v($v0, {
        pop: o === "popLayout",
        isPresent: n,
        anchorX: a,
        anchorY: l,
        root: c,
        children: t
    }), k1v(aOn.Provider, {
        value: p,
        children: t
    });
};

}
