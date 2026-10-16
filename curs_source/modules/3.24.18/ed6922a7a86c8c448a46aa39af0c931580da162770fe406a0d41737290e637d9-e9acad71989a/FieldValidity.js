import { mj } from "./FieldRootContext.js";
import { CDi } from "./f0s.js";
import { B1s } from "./getCombinedFieldValidityData.js";
import { dCe, oY } from "./qIc.js";
import { x } from "./tslib.es6.js";
import { hCe } from "./useTransitionStatus.js";
import * as K1s from "./react-runtime/react/esm-index-production.js";
import { jsx as Wcf } from "./react-runtime/react/esm-jsx-runtime-production.js";
var Y1s;
export { Y1s };
var __wakaru_Gcf_initialized = false;
export function Gcf() {
if (__wakaru_Gcf_initialized) return;
__wakaru_Gcf_initialized = true;
x(), mj(), B1s(), hCe(), Y1s = function(t) {
    const { children: n } = t, { validityData: i, invalid: r } = oY(!1), s = K1s.useMemo(()=>CDi(i, r), [
        i,
        r
    ]), o = s.state.valid === !1, { transitionStatus: a } = dCe(o), c = K1s.useMemo(()=>({
            ...s,
            validity: s.state,
            transitionStatus: a
        }), [
        s,
        a
    ]);
    return Wcf(K1s.Fragment, {
        children: n(c)
    });
}, process.env.NODE_ENV !== "production" && (Y1s.displayName = "FieldValidity");

}
