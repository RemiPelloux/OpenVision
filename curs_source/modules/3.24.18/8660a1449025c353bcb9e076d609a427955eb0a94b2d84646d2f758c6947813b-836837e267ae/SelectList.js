import { Ic, Ilh, Lm, Qnt, pu } from "./LYd.js";
import { jJo } from "./SelectPositionerContext.js";
import { tWe } from "./SelectRootContext.js";
import { _S, iit } from "./store_4.js";
import { Flh, dci } from "./styles.js";
import { E } from "./tslib.es6.js";
import { Om } from "./useRenderElement.js";
import { Jy } from "./useStableCallback.js";
import { TW } from "./useStore.js";
import { $Jo, HJo } from "./utils_17.js";
import * as i$y from "./react-runtime/react/esm-index-production.js";
var aea;
export { aea };
var __wakaru_r$y_initialized = false;
export function r$y() {
if (__wakaru_r$y_initialized) return;
__wakaru_r$y_initialized = true;
E(), Jy(), tWe(), jJo(), Om(), Flh(), HJo(), iit(), TW(), aea = i$y.forwardRef(function(e, n) {
    const { render: i, className: r, style: s, ...o } = e, { store: a, scrollHandlerRef: l } = Qnt(), { alignItemWithTriggerActive: c } = Ilh(), u = Ic(a, _S.hasScrollArrows), d = Ic(a, _S.openMethod), h = Ic(a, _S.multiple), g = {
        id: `${Ic(a, _S.id)}-list`,
        role: "listbox",
        "aria-multiselectable": h || void 0,
        onScroll (_) {
            l.current?.(_.currentTarget);
        },
        ...c && {
            style: $Jo
        },
        className: u && d !== "touch" ? dci.className : void 0
    }, f = pu((_)=>{
        a.set("listElement", _);
    });
    return Lm("div", e, {
        ref: [
            n,
            f
        ],
        props: [
            g,
            o
        ]
    });
}), process.env.NODE_ENV !== "production" && (aea.displayName = "SelectList");

}
