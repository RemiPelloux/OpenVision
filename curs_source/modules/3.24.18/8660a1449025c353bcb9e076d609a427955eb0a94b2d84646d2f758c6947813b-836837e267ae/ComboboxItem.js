import { Kcp } from "./ComboboxItemContext.js";
import { Y_e } from "./ComboboxRootContext.js";
import { BZS } from "./ComboboxRowContext.js";
import { Ic } from "./LYd.js";
import { Xcp, jZS, x0e } from "./ipa.js";
import { s7t } from "./itemEquality.js";
import { gm, yGe } from "./store_5.js";
import { E } from "./tslib.es6.js";
import { Cz } from "./useButton.js";
import { rWe } from "./useCompositeListItem.js";
import { jv } from "./useIsoLayoutEffect.js";
import { Om } from "./useRenderElement.js";
import { TW } from "./useStore.js";
import * as Vkn from "./react-runtime/react/esm-index-production.js";
import { jsx as s7r } from "./react-runtime/react/esm-jsx-runtime-production.js";
var o7r;
export { o7r };
var __wakaru_Zcp_initialized = false;
export function Zcp() {
if (__wakaru_Zcp_initialized) return;
__wakaru_Zcp_initialized = true;
E(), jv(), Y_e(), rWe(), Om(), Kcp(), yGe(), BZS(), s7t(), TW(), Cz(), o7r = Vkn.memo(Vkn.forwardRef(function(e, n) {
    const i = x0e(), r = Ic(i, gm.virtualized);
    return r && e.index == null ? s7r(jZS, {
        componentProps: e,
        forwardedRef: n
    }) : s7r(Xcp, {
        componentProps: e,
        forwardedRef: n,
        virtualized: r,
        indexFromFilter: void 0
    });
})), process.env.NODE_ENV !== "production" && (o7r.displayName = "ComboboxItem");

}
