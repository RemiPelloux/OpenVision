import { zQl } from "./f0s.js";
import { kp } from "./qIc.js";
import { x } from "./tslib.es6.js";
import { XQl } from "./useInitialLiveRegionTextMutation.js";
import { wp } from "./useRenderElement.js";
import * as oUf from "./react-runtime/react/esm-index-production.js";
var YPs;
export { YPs };
var __wakaru_aUf_initialized = false;
export function aUf() {
if (__wakaru_aUf_initialized) return;
__wakaru_aUf_initialized = true;
x(), wp(), XQl(), YPs = oUf.forwardRef(function(t, n) {
    const { render: i, className: r, style: s, children: o, ...a } = t, c = zQl();
    return kp("div", t, {
        ref: [
            n,
            c
        ],
        props: [
            {
                children: o,
                role: "status",
                "aria-live": "polite",
                "aria-atomic": !0
            },
            a
        ]
    });
}), process.env.NODE_ENV !== "production" && (YPs.displayName = "ComboboxStatus");

}
