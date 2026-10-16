import { ppi } from "./FieldItemContext.js";
import { N7 } from "./FieldRootContext.js";
import { $I, Lm, Vj, zQ } from "./LYd.js";
import { VQ } from "./LabelableContext.js";
import { BY, wne } from "./constants_11.js";
import { YOr } from "./ipa.js";
import { E } from "./tslib.es6.js";
import { _A } from "./useBaseUiId.js";
import { jv, su } from "./useIsoLayoutEffect.js";
import { Om } from "./useRenderElement.js";
import * as C1S from "./react-runtime/react/esm-index-production.js";
var Bma;
export { Bma };
var __wakaru_T1S_initialized = false;
export function T1S() {
if (__wakaru_T1S_initialized) return;
__wakaru_T1S_initialized = true;
E(), jv(), N7(), VQ(), BY(), _A(), Om(), ppi(), Bma = C1S.forwardRef(function(e, n) {
    const { render: i, id: r, className: s, style: o, ...a } = e, l = $I(r), c = Vj(!1), u = YOr(), { setMessageIds: d } = zQ(), h = {
        ...c.state,
        disabled: c.disabled || u.disabled
    };
    return su(()=>{
        if (l) return d((g)=>g.concat(l)), ()=>{
            d((g)=>g.filter((f)=>f !== l));
        };
    }, [
        l,
        d
    ]), Lm("p", e, {
        ref: n,
        state: h,
        props: [
            {
                id: l
            },
            a
        ],
        stateAttributesMapping: wne
    });
}), process.env.NODE_ENV !== "production" && (Bma.displayName = "FieldDescription");

}
