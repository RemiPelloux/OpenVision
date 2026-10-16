import { hJl } from "./ComboboxItemContext.js";
import { Nue } from "./ComboboxRootContext.js";
import { SUf } from "./ComboboxRowContext.js";
import { mJl, wUf, wve } from "./f0s.js";
import { Ygt } from "./itemEquality.js";
import { jc } from "./qIc.js";
import { b6e, op } from "./store_5.js";
import { x } from "./tslib.es6.js";
import { t$ } from "./useButton.js";
import { _Ye } from "./useCompositeListItem.js";
import { af } from "./useIsoLayoutEffect.js";
import { wp } from "./useRenderElement.js";
import { kU } from "./useStore.js";
import { jsx as H2i } from "./react-runtime/react/esm-jsx-runtime-production.js";
import * as Z4t from "./react-runtime/react/esm-index-production.js";
var tLs;
export { tLs };
var __wakaru_CUf_initialized = false;
export function CUf() {
if (__wakaru_CUf_initialized) return;
__wakaru_CUf_initialized = true;
x(), af(), Nue(), _Ye(), wp(), hJl(), b6e(), SUf(), Ygt(), kU(), t$(), tLs = Z4t.memo(Z4t.forwardRef(function(t, n) {
    const i = wve(), r = jc(i, op.virtualized);
    return r && t.index == null ? H2i(wUf, {
        componentProps: t,
        forwardedRef: n
    }) : H2i(mJl, {
        componentProps: t,
        forwardedRef: n,
        virtualized: r,
        indexFromFilter: void 0
    });
})), process.env.NODE_ENV !== "production" && (tLs.displayName = "ComboboxItem");

}
