import { bIe, wIe } from "./CompositeRootContext.mjs";
import { i } from "./plugin-brand-icon.js";
import { IS, fC } from "./useCompositeListItem.mjs";
import { Q_, mC } from "./useMergedRefs.mjs";
import * as Aui from "./react-runtime/react/esm-index-production.js";
function a$t(r = {}) {
    const { highlightItemOnHover: e, highlightedIndex: a, onHighlightedIndexChange: s } = bIe(), { ref: l, index: u } = fC(r), p = a === u, m = Aui.useRef(null), b = Q_(l, m);
    return {
        compositeProps: {
            tabIndex: p ? 0 : -1,
            onFocus () {
                s(u);
            },
            onMouseMove () {
                const _ = m.current;
                if (!e || !_) return;
                const v = _.hasAttribute("disabled") || _.ariaDisabled === "true";
                !p && !v && _.focus();
            }
        },
        compositeRef: b,
        index: u
    };
}
export { a$t };
var __wakaru_qer_initialized = false;
export function qer() {
if (__wakaru_qer_initialized) return;
__wakaru_qer_initialized = true;
"use client";
mC(), wIe(), IS(), i(a$t, "useCompositeItem");

}
