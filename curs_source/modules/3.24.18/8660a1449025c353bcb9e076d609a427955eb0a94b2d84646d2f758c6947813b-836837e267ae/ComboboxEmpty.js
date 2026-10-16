import { Y_e } from "./ComboboxRootContext.js";
import { Lm } from "./LYd.js";
import { Acp, bGe, x0e } from "./ipa.js";
import { E } from "./tslib.es6.js";
import { Mcp } from "./useInitialLiveRegionTextMutation.js";
import { Om } from "./useRenderElement.js";
import * as HZS from "./react-runtime/react/esm-index-production.js";
var l7r;
export { l7r };
var __wakaru_Jcp_initialized = false;
export function Jcp() {
if (__wakaru_Jcp_initialized) return;
__wakaru_Jcp_initialized = true;
E(), Om(), Y_e(), Mcp(), l7r = HZS.forwardRef(function(e, n) {
    const { render: i, className: r, style: s, children: o, ...a } = e, { filteredItems: l } = bGe(), c = x0e(), u = Acp(), d = l.length === 0 ? o : null;
    return Lm("div", e, {
        ref: [
            n,
            c.state.emptyRef,
            u
        ],
        props: [
            {
                children: d,
                role: "status",
                "aria-live": "polite",
                "aria-atomic": !0
            },
            a
        ]
    });
}), process.env.NODE_ENV !== "production" && (l7r.displayName = "ComboboxEmpty");

}
