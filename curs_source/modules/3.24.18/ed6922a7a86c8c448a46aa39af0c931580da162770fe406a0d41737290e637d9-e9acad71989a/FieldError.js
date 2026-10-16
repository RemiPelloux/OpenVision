import { mj } from "./FieldRootContext.js";
import { mCe } from "./FormContext.js";
import { Bre } from "./LabelableContext.js";
import { Ore, sY } from "./constants_11.js";
import { Fre, SR, dCe, hj, kp, oY, pCe } from "./qIc.js";
import { $O, T5 } from "./stateAttributesMapping.js";
import { x } from "./tslib.es6.js";
import { TD } from "./useBaseUiId.js";
import { af, gl } from "./useIsoLayoutEffect.js";
import { pj } from "./useOpenChangeComplete.js";
import { wp } from "./useRenderElement.js";
import { hCe } from "./useTransitionStatus.js";
import { jsx as L3l } from "./react-runtime/react/esm-jsx-runtime-production.js";
import * as xDi from "./react-runtime/react/esm-index-production.js";
var N3l, q1s;
export { N3l, q1s };
var __wakaru_Ucf_initialized = false;
export function Ucf() {
if (__wakaru_Ucf_initialized) return;
__wakaru_Ucf_initialized = true;
x(), af(), mj(), Bre(), sY(), mCe(), wp(), TD(), pj(), $O(), hCe(), N3l = {
    ...Ore,
    ...T5
}, q1s = xDi.forwardRef(function(t, n) {
    const { render: i, id: r, className: s, match: o, style: a, ...c } = t, l = SR(r), { validityData: u, state: h, name: p } = oY(!1), { setMessageIds: g } = Fre(), { errors: f } = pCe(), v = p && Object.hasOwn(f, p) ? f[p] : null, b = !!(Array.isArray(v) ? v.length : v), y = typeof o == "string";
    let T = !1;
    o === !0 ? T = !0 : h.disabled ? T = !1 : y ? T = !!u.state[o] : T = b || u.state.valid === !1;
    const { mounted: E, transitionStatus: A, setMounted: R } = dCe(T);
    gl(()=>{
        if (!(!T || !l)) return g((z)=>z.concat(l)), ()=>{
            g((z)=>z.filter((X)=>X !== l));
        };
    }, [
        T,
        l,
        g
    ]);
    const D = xDi.useRef(null), [P, N] = xDi.useState(null), [O, F] = xDi.useState(null);
    let H = u.error;
    !y && b ? H = v : u.errors.length > 1 && (H = u.errors);
    let $ = H ?? "";
    Array.isArray(H) && ($ = H.length > 1 ? L3l("ul", {
        children: H.map((z)=>L3l("li", {
                children: z
            }, z))
    }) : H[0] ?? "");
    const W = Array.isArray(H) ? JSON.stringify(H) : H;
    T && W !== O && (F(W), N($)), hj({
        open: T,
        ref: D,
        onComplete () {
            T || R(!1);
        }
    });
    const G = {
        ...h,
        transitionStatus: A
    }, q = kp("div", t, {
        ref: [
            n,
            D
        ],
        state: G,
        props: [
            {
                id: l,
                children: T ? $ : P
            },
            c
        ],
        stateAttributesMapping: N3l,
        enabled: E
    });
    return E ? q : null;
}), process.env.NODE_ENV !== "production" && (q1s.displayName = "FieldError");

}
