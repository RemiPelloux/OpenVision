import { EDi } from "./FieldItemContext.js";
import { mj } from "./FieldRootContext.js";
import { Bre } from "./LabelableContext.js";
import { Ore, sY } from "./constants_11.js";
import { G1s } from "./f0s.js";
import { Fre, SR, kp, oY } from "./qIc.js";
import { x } from "./tslib.es6.js";
import { TD } from "./useBaseUiId.js";
import { af, gl } from "./useIsoLayoutEffect.js";
import { wp } from "./useRenderElement.js";
import * as $cf from "./react-runtime/react/esm-index-production.js";
var z1s;
export { z1s };
var __wakaru_Hcf_initialized = false;
export function Hcf() {
if (__wakaru_Hcf_initialized) return;
__wakaru_Hcf_initialized = true;
x(), af(), mj(), Bre(), sY(), TD(), wp(), EDi(), z1s = $cf.forwardRef(function(t, n) {
    const { render: i, id: r, className: s, style: o, ...a } = t, c = SR(r), l = oY(!1), u = G1s(), { setMessageIds: h } = Fre(), p = {
        ...l.state,
        disabled: l.disabled || u.disabled
    };
    return gl(()=>{
        if (c) return h((f)=>f.concat(c)), ()=>{
            h((f)=>f.filter((v)=>v !== c));
        };
    }, [
        c,
        h
    ]), kp("p", t, {
        ref: n,
        state: p,
        props: [
            {
                id: c
            },
            a
        ],
        stateAttributesMapping: Ore
    });
}), process.env.NODE_ENV !== "production" && (z1s.displayName = "FieldDescription");

}
