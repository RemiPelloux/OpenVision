import { $I, Lm } from "./LYd.js";
import { Okt } from "./PopoverRootContext.js";
import { Lkt } from "./ipa.js";
import { E } from "./tslib.es6.js";
import { _A } from "./useBaseUiId.js";
import { Om } from "./useRenderElement.js";
import * as a4S from "./react-runtime/react/esm-index-production.js";
var WSa;
export { WSa };
var __wakaru_l4S_initialized = false;
export function l4S() {
if (__wakaru_l4S_initialized) return;
__wakaru_l4S_initialized = true;
E(), Okt(), _A(), Om(), WSa = a4S.forwardRef(function(e, n) {
    const { render: i, className: r, style: s, ...o } = e, { store: a } = Lkt(), l = $I(o.id);
    return a.useSyncedValueWithCleanup("descriptionElementId", l), Lm("p", e, {
        ref: n,
        props: [
            {
                id: l
            },
            o
        ]
    });
}), process.env.NODE_ENV !== "production" && (WSa.displayName = "PopoverDescription");

}
