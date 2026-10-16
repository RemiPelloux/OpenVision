import { ZXe } from "./PopoverRootContext.js";
import { XXe } from "./f0s.js";
import { SR, kp } from "./qIc.js";
import { x } from "./tslib.es6.js";
import { TD } from "./useBaseUiId.js";
import { wp } from "./useRenderElement.js";
import * as $Af from "./react-runtime/react/esm-index-production.js";
var zAs;
export { zAs };
var __wakaru_HAf_initialized = false;
export function HAf() {
if (__wakaru_HAf_initialized) return;
__wakaru_HAf_initialized = true;
x(), ZXe(), wp(), TD(), zAs = $Af.forwardRef(function(t, n) {
    const { render: i, className: r, style: s, ...o } = t, { store: a } = XXe(), c = SR(o.id);
    return a.useSyncedValueWithCleanup("titleElementId", c), kp("h2", t, {
        ref: n,
        props: [
            {
                id: c
            },
            o
        ]
    });
}), process.env.NODE_ENV !== "production" && (zAs.displayName = "PopoverTitle");

}
