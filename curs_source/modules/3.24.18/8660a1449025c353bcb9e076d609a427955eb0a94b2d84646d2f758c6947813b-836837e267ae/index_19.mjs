import { lYl, z_v } from "./LayoutGroupContext.mjs";
import { C1v, zv0 } from "./PresenceChild.mjs";
import { I1v, MAs, Xv0 } from "./ofv.js";
import { E } from "./tslib.es6.js";
import { DAs } from "./use-constant.mjs";
import { K_v, cYl } from "./use-isomorphic-effect.mjs";
import { E1v } from "./use-presence.mjs";
import { _Fi, e_0 } from "./utils_3.mjs";
import { useState as A1v } from "./react-runtime/react/esm-index-production.js";
import { useRef as VXl } from "./react-runtime/react/esm-index-production.js";
import { useContext as i_0 } from "./react-runtime/react/esm-index-production.js";
import { useMemo as n_0 } from "./react-runtime/react/esm-index-production.js";
import { Fragment as t_0 } from "./react-runtime/react/esm-jsx-runtime-production.js";
import { jsx as x1v } from "./react-runtime/react/esm-jsx-runtime-production.js";
var qQt;
export { qQt };
var __wakaru_r_0_initialized = false;
export function r_0() {
if (__wakaru_r_0_initialized) return;
__wakaru_r_0_initialized = true;
"use client";
E(), z_v(), DAs(), K_v(), zv0(), E1v(), e_0(), qQt = ({ children: t, custom: e, initial: n = !0, onExitComplete: i, presenceAffectsLayout: r = !0, mode: s = "sync", propagate: o = !1, anchorX: a = "left", anchorY: l = "top", root: c })=>{
    const [u, d] = Xv0(o), h = n_0(()=>I1v(t), [
        t
    ]), p = o && !u ? [] : h.map(_Fi), g = VXl(!0), f = VXl(h), _ = MAs(()=>new Map), b = VXl(new Set), [y, S] = A1v(h), [k, C] = A1v(h);
    cYl(()=>{
        g.current = !1, f.current = h;
        for(let A = 0; A < k.length; A++){
            const P = _Fi(k[A]);
            p.includes(P) ? (_.delete(P), b.current.delete(P)) : _.get(P) !== !0 && _.set(P, !1);
        }
    }, [
        k,
        p.length,
        p.join("-")
    ]);
    const T = [];
    if (h !== y) {
        let A = [
            ...h
        ];
        for(let P = 0; P < k.length; P++){
            const M = k[P], O = _Fi(M);
            p.includes(O) || (A.splice(P, 0, M), T.push(M));
        }
        return s === "wait" && T.length && (A = T), C(I1v(A)), S(h), null;
    }
    process.env.NODE_ENV !== "production" && s === "wait" && k.length > 1 && console.warn(`You're attempting to animate multiple children within AnimatePresence, but its mode is set to "wait". This will lead to odd visual behaviour.`);
    const { forceRender: I } = i_0(lYl);
    return x1v(t_0, {
        children: k.map((A)=>{
            const P = _Fi(A), M = o && !u ? !1 : h === k || p.includes(P), O = ()=>{
                if (b.current.has(P)) return;
                if (_.has(P)) b.current.add(P), _.set(P, !0);
                else return;
                let N = !0;
                _.forEach((U)=>{
                    U || (N = !1);
                }), N && (I?.(), C(f.current), o && d?.(), i && i());
            };
            return x1v(C1v, {
                isPresent: M,
                initial: !g.current || n ? void 0 : !1,
                custom: e,
                presenceAffectsLayout: r,
                mode: s,
                root: c,
                onExitComplete: M ? void 0 : O,
                anchorX: a,
                anchorY: l,
                children: A
            }, P);
        })
    });
};

}
