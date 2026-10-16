import { ZXe } from "./PopoverRootContext.js";
import { XXe } from "./f0s.js";
import { SR, kp } from "./qIc.js";
import { x } from "./tslib.es6.js";
import { TD } from "./useBaseUiId.js";
import { wp } from "./useRenderElement.js";
import * as WAf from "./react-runtime/react/esm-index-production.js";
var KAs;
export { KAs };
var __wakaru_GAf_initialized = false;
export function GAf() {
if (__wakaru_GAf_initialized) return;
__wakaru_GAf_initialized = true;
x(), ZXe(), TD(), wp(), KAs = WAf.forwardRef(function(t, n) {
    const { render: i, className: r, style: s, ...o } = t, { store: a } = XXe(), c = SR(o.id);
    return a.useSyncedValueWithCleanup("descriptionElementId", c), kp("p", t, {
        ref: n,
        props: [
            {
                id: c
            },
            o
        ]
    });
}), process.env.NODE_ENV !== "production" && (KAs.displayName = "PopoverDescription");

}
