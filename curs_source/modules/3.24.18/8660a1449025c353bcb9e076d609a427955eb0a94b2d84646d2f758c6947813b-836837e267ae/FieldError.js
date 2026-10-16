import { N7 } from "./FieldRootContext.js";
import { C_e } from "./FormContext.js";
import { $I, GQ, Lm, NRe, Vj, w_e, zQ } from "./LYd.js";
import { VQ } from "./LabelableContext.js";
import { BY, wne } from "./constants_11.js";
import { D7, l6 } from "./stateAttributesMapping.js";
import { E } from "./tslib.es6.js";
import { _A } from "./useBaseUiId.js";
import { jv, su } from "./useIsoLayoutEffect.js";
import { qQ } from "./useOpenChangeComplete.js";
import { Om } from "./useRenderElement.js";
import { LRe } from "./useTransitionStatus.js";
import * as ZOr from "./react-runtime/react/esm-index-production.js";
import { jsx as c4h } from "./react-runtime/react/esm-jsx-runtime-production.js";
var u4h, Fma;
export { Fma, u4h };
var __wakaru_w1S_initialized = false;
export function w1S() {
if (__wakaru_w1S_initialized) return;
__wakaru_w1S_initialized = true;
E(), jv(), N7(), VQ(), BY(), C_e(), Om(), _A(), qQ(), l6(), LRe(), u4h = {
    ...wne,
    ...D7
}, Fma = ZOr.forwardRef(function(e, n) {
    const { render: i, id: r, className: s, match: o, style: a, ...l } = e, c = $I(r), { validityData: u, state: d, name: h } = Vj(!1), { setMessageIds: p } = zQ(), { errors: g } = w_e(), f = h && Object.hasOwn(g, h) ? g[h] : null, _ = !!(Array.isArray(f) ? f.length : f), b = typeof o == "string";
    let y = !1;
    o === !0 ? y = !0 : d.disabled ? y = !1 : b ? y = !!u.state[o] : y = _ || u.state.valid === !1;
    const { mounted: S, transitionStatus: k, setMounted: C } = NRe(y);
    su(()=>{
        if (!(!y || !c)) return p((H)=>H.concat(c)), ()=>{
            p((H)=>H.filter((G)=>G !== c));
        };
    }, [
        y,
        c,
        p
    ]);
    const T = ZOr.useRef(null), [I, A] = ZOr.useState(null), [P, M] = ZOr.useState(null);
    let O = u.error;
    !b && _ ? O = f : u.errors.length > 1 && (O = u.errors);
    let N = O ?? "";
    Array.isArray(O) && (N = O.length > 1 ? c4h("ul", {
        children: O.map((H)=>c4h("li", {
                children: H
            }, H))
    }) : O[0] ?? "");
    const U = Array.isArray(O) ? JSON.stringify(O) : O;
    y && U !== P && (M(U), A(N)), GQ({
        open: y,
        ref: T,
        onComplete () {
            y || C(!1);
        }
    });
    const j = {
        ...d,
        transitionStatus: k
    }, $ = Lm("div", e, {
        ref: [
            n,
            T
        ],
        state: j,
        props: [
            {
                id: c,
                children: y ? N : I
            },
            l
        ],
        stateAttributesMapping: u4h,
        enabled: S
    });
    return S ? $ : null;
}), process.env.NODE_ENV !== "production" && (Fma.displayName = "FieldError");

}
