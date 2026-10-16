import { $I, Lm } from "./LYd.js";
import { Okt } from "./PopoverRootContext.js";
import { Lkt } from "./ipa.js";
import { E } from "./tslib.es6.js";
import { _A } from "./useBaseUiId.js";
import { Om } from "./useRenderElement.js";
import * as s4S from "./react-runtime/react/esm-index-production.js";
var HSa;
export { HSa };
var __wakaru_o4S_initialized = false;
export function o4S() {
if (__wakaru_o4S_initialized) return;
__wakaru_o4S_initialized = true;
E(), Okt(), Om(), _A(), HSa = s4S.forwardRef(function(e, n) {
    const { render: i, className: r, style: s, ...o } = e, { store: a } = Lkt(), l = $I(o.id);
    return a.useSyncedValueWithCleanup("titleElementId", l), Lm("h2", e, {
        ref: n,
        props: [
            {
                id: l
            },
            o
        ]
    });
}), process.env.NODE_ENV !== "production" && (HSa.displayName = "PopoverTitle");

}
