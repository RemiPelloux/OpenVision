import { Lm } from "./LYd.js";
import { Acp } from "./ipa.js";
import { E } from "./tslib.es6.js";
import { Mcp } from "./useInitialLiveRegionTextMutation.js";
import { Om } from "./useRenderElement.js";
import * as EZS from "./react-runtime/react/esm-index-production.js";
var rTa;
export { rTa };
var __wakaru_IZS_initialized = false;
export function IZS() {
if (__wakaru_IZS_initialized) return;
__wakaru_IZS_initialized = true;
E(), Om(), Mcp(), rTa = EZS.forwardRef(function(e, n) {
    const { render: i, className: r, style: s, children: o, ...a } = e, l = Acp();
    return Lm("div", e, {
        ref: [
            n,
            l
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
}), process.env.NODE_ENV !== "production" && (rTa.displayName = "ComboboxStatus");

}
