import { iMe } from "./DialogRootContext.js";
import { M6e } from "./f0s.js";
import { SR, kp } from "./qIc.js";
import { x } from "./tslib.es6.js";
import { TD } from "./useBaseUiId.js";
import { wp } from "./useRenderElement.js";
import * as $Jf from "./react-runtime/react/esm-index-production.js";
var jOs;
export { jOs };
var __wakaru_HJf_initialized = false;
export function HJf() {
if (__wakaru_HJf_initialized) return;
__wakaru_HJf_initialized = true;
x(), iMe(), wp(), TD(), jOs = $Jf.forwardRef(function(t, n) {
    const { render: i, className: r, style: s, id: o, ...a } = t, { store: c } = M6e(), l = SR(o);
    return c.useSyncedValueWithCleanup("titleElementId", l), kp("h2", t, {
        ref: n,
        props: [
            {
                id: l
            },
            a
        ]
    });
}), process.env.NODE_ENV !== "production" && (jOs.displayName = "DialogTitle");

}
