import { Nue } from "./ComboboxRootContext.js";
import { _6e, wve, zQl } from "./f0s.js";
import { kp } from "./qIc.js";
import { x } from "./tslib.es6.js";
import { XQl } from "./useInitialLiveRegionTextMutation.js";
import { wp } from "./useRenderElement.js";
import * as xUf from "./react-runtime/react/esm-index-production.js";
var iLs;
export { iLs };
var __wakaru_IUf_initialized = false;
export function IUf() {
if (__wakaru_IUf_initialized) return;
__wakaru_IUf_initialized = true;
x(), wp(), Nue(), XQl(), iLs = xUf.forwardRef(function(t, n) {
    const { render: i, className: r, style: s, children: o, ...a } = t, { filteredItems: c } = _6e(), l = wve(), u = zQl(), h = c.length === 0 ? o : null;
    return kp("div", t, {
        ref: [
            n,
            l.state.emptyRef,
            u
        ],
        props: [
            {
                children: h,
                role: "status",
                "aria-live": "polite",
                "aria-atomic": !0
            },
            a
        ]
    });
}), process.env.NODE_ENV !== "production" && (iLs.displayName = "ComboboxEmpty");

}
