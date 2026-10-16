import { xFi } from "./NumberFieldRootContext.js";
import { oFs } from "./f0s.js";
import { kp } from "./qIc.js";
import { IFi, kxn } from "./stateAttributesMapping_10.js";
import { x } from "./tslib.es6.js";
import { wp } from "./useRenderElement.js";
import * as Bev from "./react-runtime/react/esm-index-production.js";
var xFs;
export { xFs };
var __wakaru_Uev_initialized = false;
export function Uev() {
if (__wakaru_Uev_initialized) return;
__wakaru_Uev_initialized = true;
x(), xFi(), IFi(), wp(), xFs = Bev.forwardRef(function(t, n) {
    const { render: i, className: r, style: s, ...o } = t, { state: a } = oFs();
    return kp("div", t, {
        ref: n,
        state: a,
        props: [
            {
                role: "group"
            },
            o
        ],
        stateAttributesMapping: kxn
    });
}), process.env.NODE_ENV !== "production" && (xFs.displayName = "NumberFieldGroup");

}
