import { N7 } from "./FieldRootContext.js";
import { NRe, Vj } from "./LYd.js";
import { Rma } from "./getCombinedFieldValidityData.js";
import { KOr } from "./ipa.js";
import { E } from "./tslib.es6.js";
import { LRe } from "./useTransitionStatus.js";
import { jsx as E1S } from "./react-runtime/react/esm-jsx-runtime-production.js";
import * as Uma from "./react-runtime/react/esm-index-production.js";
var jma;
export { jma };
var __wakaru_I1S_initialized = false;
export function I1S() {
if (__wakaru_I1S_initialized) return;
__wakaru_I1S_initialized = true;
E(), N7(), Rma(), LRe(), jma = function(e) {
    const { children: n } = e, { validityData: i, invalid: r } = Vj(!1), s = Uma.useMemo(()=>KOr(i, r), [
        i,
        r
    ]), o = s.state.valid === !1, { transitionStatus: a } = NRe(o), l = Uma.useMemo(()=>({
            ...s,
            validity: s.state,
            transitionStatus: a
        }), [
        s,
        a
    ]);
    return E1S(Uma.Fragment, {
        children: n(l)
    });
}, process.env.NODE_ENV !== "production" && (jma.displayName = "FieldValidity");

}
