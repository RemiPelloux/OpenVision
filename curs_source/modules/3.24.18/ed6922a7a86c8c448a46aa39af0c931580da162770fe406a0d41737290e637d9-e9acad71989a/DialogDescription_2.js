import { iMe } from "./DialogRootContext.js";
import { M6e } from "./f0s.js";
import { SR, kp } from "./qIc.js";
import { x } from "./tslib.es6.js";
import { TD } from "./useBaseUiId.js";
import { wp } from "./useRenderElement.js";
import * as fJf from "./react-runtime/react/esm-index-production.js";
var FOs;
export { FOs };
var __wakaru_vJf_initialized = false;
export function vJf() {
if (__wakaru_vJf_initialized) return;
__wakaru_vJf_initialized = true;
x(), iMe(), wp(), TD(), FOs = fJf.forwardRef(function(t, n) {
    const { render: i, className: r, style: s, id: o, ...a } = t, { store: c } = M6e(), l = SR(o);
    return c.useSyncedValueWithCleanup("descriptionElementId", l), kp("p", t, {
        ref: n,
        props: [
            {
                id: l
            },
            a
        ]
    });
}), process.env.NODE_ENV !== "production" && (FOs.displayName = "DialogDescription");

}
