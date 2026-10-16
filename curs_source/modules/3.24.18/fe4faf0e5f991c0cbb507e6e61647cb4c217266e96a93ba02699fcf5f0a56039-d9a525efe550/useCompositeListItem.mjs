import { Fer, Oer } from "./CompositeListContext.mjs";
import { i } from "./plugin-brand-icon.js";
import { Ir, bo } from "./useIsoLayoutEffect.mjs";
import * as KAe from "./react-runtime/react/esm-index-production.js";
function fC(r = {}) {
    const { label: e, metadata: a, textRef: s, indexGuessBehavior: l, index: u } = r, { register: p, unregister: m, subscribeMapChange: b, elementsRef: g, labelsRef: _, nextIndexRef: v } = Fer(), x = KAe.useRef(-1), [C, E] = KAe.useState(u ?? (l === _Ie.GuessFromOrder ? ()=>{
        if (x.current === -1) {
            const I = v.current;
            v.current += 1, x.current = I;
        }
        return x.current;
    } : -1)), A = KAe.useRef(null), $ = KAe.useCallback((I)=>{
        if (A.current = I, C !== -1 && I !== null && (g.current[C] = I, _)) {
            const N = e !== void 0;
            _.current[C] = N ? e : s?.current?.textContent ?? I.textContent;
        }
    }, [
        C,
        g,
        _,
        e,
        s
    ]);
    return Ir(()=>{
        if (u != null) return;
        const I = A.current;
        if (I) return p(I, a), ()=>{
            m(I);
        };
    }, [
        u,
        p,
        m,
        a
    ]), Ir(()=>{
        if (u == null) return b((I)=>{
            const N = A.current ? I.get(A.current)?.index : null;
            N != null && E(N);
        });
    }, [
        u,
        b,
        E
    ]), {
        ref: $,
        index: C
    };
}
var _Ie;
export { _Ie, fC };
var __wakaru_IS_initialized = false;
export function IS() {
if (__wakaru_IS_initialized) return;
__wakaru_IS_initialized = true;
"use client";
bo(), Oer(), _Ie = (function(r) {
    return r[r.None = 0] = "None", r[r.GuessFromOrder = 1] = "GuessFromOrder", r;
})({}), i(fC, "useCompositeListItem");

}
